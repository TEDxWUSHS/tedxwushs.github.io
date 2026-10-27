import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const workspaceDir = process.cwd();
const SKILL_DIR = path.join(
  process.env.USERPROFILE,
  ".codex",
  "plugins",
  "cache",
  "openai-primary-runtime",
  "presentations",
  "26.1024.11018",
  "skills",
  "presentations",
);
const RUNTIME_PYTHON = path.join(
  process.env.USERPROFILE,
  ".cache",
  "codex-runtimes",
  "codex-primary-runtime",
  "dependencies",
  "python",
  "python.exe",
);
const sourcePath = path.resolve(
  workspaceDir,
  "output/presentation/2026.10.27-学院祭-統合編集可能版-v2.pptx",
);
const FINAL_PPTX = path.resolve(
  workspaceDir,
  "output/presentation/2026.10.27-学院祭-統合編集可能版-v3.pptx",
);

const presentation = await PresentationFile.importPptx(
  await FileBlob.load(sourcePath),
);
const slide = presentation.resolve("sl/y90nupkv");

// Replace the single raster speaker strip with separate editable speaker objects.
presentation.delete("im/32lkna14");

const RED = "#E62B34";
const INK = "#242124";
const FONT = "Noto Sans JP";

async function readBytes(relativePath) {
  const bytes = await fs.readFile(path.resolve(workspaceDir, relativePath));
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function addText({ name, text, left, top, width, height, fontSize, bold = false, alignment = "left" }) {
  const box = slide.shapes.add({
    name,
    geometry: "textbox",
    position: { left, top, width, height },
    fill: "none",
    line: { style: "solid", fill: "none", width: 0 },
  });
  box.text = text;
  box.text.style = {
    typeface: FONT,
    fontSize,
    color: INK,
    bold,
    alignment,
    verticalAlignment: "middle",
    autoFit: "shrinkText",
    wrap: "square",
    insets: 0,
  };
  return box;
}

const speakers = [
  {
    key: "kogure-masahisa",
    image: "src/assets/speakers/kogure-masahisa.jpg",
    name: "小暮 真久 氏",
    role: "社会起業家",
    left: 60,
    top: 566,
    crop: { left: 0, top: 0.18, right: 0, bottom: 0.40 },
  },
  {
    key: "reon-hiruma",
    image: "src/assets/speakers/reon-hiruma.jpg",
    name: "比留間 礼音 氏",
    role: "ベンチャーキャピタリスト",
    left: 232,
    top: 566,
    crop: { left: 0, top: 0.08, right: 0, bottom: 0.30 },
  },
  {
    key: "takezawa-mamoru",
    image: "src/assets/speakers/takezawa-mamoru.jpg",
    name: "武沢 護 氏",
    role: "早稲田大学高等学院 前学院長",
    left: 404,
    top: 566,
    crop: { left: 0, top: 0.06, right: 0, bottom: 0.28 },
  },
  {
    key: "enomoto-takayuki",
    image: "src/assets/speakers/enomoto-takayuki.jpg",
    name: "榎本 隆之 氏",
    role: "早稲田大学高等学院 国語科教員",
    left: 576,
    top: 566,
    crop: { left: 0, top: 0.10, right: 0, bottom: 0.43 },
  },
  {
    key: "kuroki-yuto",
    image: "src/assets/speakers/kuroki-yuto.jpg",
    name: "黒木 勇人 氏",
    role: "早稲田大学 情報理工学科2年",
    left: 146,
    top: 721,
    crop: { left: 0, top: 0.13, right: 0, bottom: 0.41 },
  },
  {
    key: "horise-yoshito",
    image: "src/assets/speakers/horise-yoshito.jpg",
    name: "堀瀬 善仁 氏",
    role: "早稲田大学高等学院 2年",
    left: 320,
    top: 721,
    crop: { left: 0, top: 0.15, right: 0, bottom: 0.39 },
  },
  {
    key: "hasegawa-keisuke",
    image: "src/assets/speakers/hasegawa-keisuke.jpg",
    name: "長谷川 慶佑 氏",
    role: "早稲田大学高等学院 1年",
    left: 494,
    top: 721,
    crop: { left: 0, top: 0.10, right: 0, bottom: 0.49 },
  },
];

for (const speaker of speakers) {
  slide.images.add({
    name: `Speaker photo - ${speaker.key}`,
    blob: await readBytes(speaker.image),
    contentType: "image/jpeg",
    alt: `${speaker.name.replace(" 氏", "")}の写真`,
    fit: "cover",
    crop: speaker.crop,
    geometry: "parallelogram",
    position: {
      left: speaker.left,
      top: speaker.top,
      width: 154,
      height: 95,
    },
  });

  const labelTop = speaker.top + 99;
  slide.shapes.add({
    name: `Speaker accent - ${speaker.key}`,
    geometry: "rect",
    position: { left: speaker.left, top: labelTop + 2, width: 4, height: 17 },
    fill: RED,
    line: { style: "solid", fill: "none", width: 0 },
  });
  addText({
    name: `Speaker name - ${speaker.key}`,
    text: speaker.name,
    left: speaker.left + 8,
    top: labelTop,
    width: 146,
    height: 21,
    fontSize: 14,
    bold: true,
  });
  addText({
    name: `Speaker role - ${speaker.key}`,
    text: speaker.role,
    left: speaker.left + 8,
    top: labelTop + 21,
    width: 146,
    height: 28,
    fontSize: 9.5,
    bold: true,
  });
}

const requirements = {
  explicitTotalSlideCount: 2,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
};
const fontPolicy = {
  basis: "reference",
  families: ["Arial Black", "Noto Sans JP", "Noto Serif JP"],
  referencePath: sourcePath,
  referenceSha256: "5a9f524b12fc577a6efe3890ec694c6a45007cd28cd3644b1b7e5310930be029",
};
const expectedSlideSizeEmu = "7562850,10696575";

const { finalizePresentation } = await import(
  pathToFileURL(path.join(SKILL_DIR, "container_tools/artifact_tool_utils.mjs")).href
);
const stagingDir = path.join(
  workspaceDir,
  "tmp/presentations/gakuinsai-v3/.codex-finalizer",
);
await fs.mkdir(stagingDir, { recursive: true });
await fs.mkdir(path.dirname(FINAL_PPTX), { recursive: true });
const candidatePath = path.join(stagingDir, "candidate.pptx");
await (await PresentationFile.exportPptx(presentation)).save(candidatePath);

const result = await finalizePresentation({
  ...requirements,
  workspaceDir,
  candidatePath,
  finalPath: FINAL_PPTX,
  pythonExecutable: RUNTIME_PYTHON,
  integrityValidatorPath: path.join(
    SKILL_DIR,
    "container_tools/inspect_presentation_package_integrity.py",
  ),
  layoutValidatorPath: path.join(
    SKILL_DIR,
    "container_tools/inspect_presentation_layout_geometry.py",
  ),
  layoutArgs: [
    "--expected-slide-size-emu",
    expectedSlideSizeEmu,
    "--validate-bullet-geometry",
    "--validate-heading-fit",
  ],
  requiredNativeTableOwnerSlides: [],
  fontPolicy,
  verifyArtifactToolImport: true,
  receiptPath: path.join(
    stagingDir,
    `${path.basename(FINAL_PPTX)}.validation.json`,
  ),
});

console.log(JSON.stringify(result, null, 2));
