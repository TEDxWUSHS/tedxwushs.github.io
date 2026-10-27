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
  "output/presentation/2026.10.27-学院祭-統合編集可能版-v1.pptx",
);
const FINAL_PPTX = path.resolve(
  workspaceDir,
  "output/presentation/2026.10.27-学院祭-統合編集可能版-v2.pptx",
);

const presentation = await PresentationFile.importPptx(
  await FileBlob.load(sourcePath),
);
const slide = presentation.resolve("sl/y90nupkv");

const RED = "#E62B34";
const INK = "#242124";
const MUTED = "#625B5E";
const LIGHT = "#D9D4D1";
const FONT = "Noto Sans JP";

function addText({ name, text, left, top, width, height, fontSize, color = INK, bold = false, alignment = "left" }) {
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
    color,
    bold,
    alignment,
    verticalAlignment: "middle",
    autoFit: "shrinkText",
    insets: 0,
  };
  return box;
}

async function readBytes(relativePath) {
  const bytes = await fs.readFile(path.resolve(workspaceDir, relativePath));
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

// Establish one clear lower-page section shared by the booth note and QR access.
slide.shapes.add({
  name: "Lower section divider",
  geometry: "rect",
  position: { left: 34, top: 893, width: 725, height: 2 },
  fill: LIGHT,
  line: { style: "solid", fill: "none", width: 0 },
});

const boothPanel = presentation.resolve("sh/zadcv2p8");
boothPanel.position = { left: 34, top: 944, width: 294, height: 126 };

const boothHeading = presentation.resolve("sh/e94v2hon");
boothHeading.position = { left: 47, top: 906, width: 220, height: 28 };
boothHeading.text.style = {
  typeface: FONT,
  fontSize: 18,
  color: RED,
  bold: true,
  alignment: "left",
  verticalAlignment: "middle",
  autoFit: "shrinkText",
  insets: 0,
};

slide.shapes.add({
  name: "Booth heading accent",
  geometry: "rect",
  position: { left: 34, top: 910, width: 5, height: 20 },
  fill: RED,
  line: { style: "solid", fill: "none", width: 0 },
});

const boothBody = presentation.resolve("sh/h072l4jy");
boothBody.position = { left: 54, top: 968, width: 254, height: 66 };
boothBody.text.style = {
  typeface: FONT,
  fontSize: 13.2,
  color: INK,
  bold: true,
  alignment: "center",
  verticalAlignment: "middle",
  autoFit: "shrinkText",
  insets: 0,
};

const logo = presentation.resolve("im/zidgfixg");
logo.position = { left: 34, top: 1085, width: 184, height: 29 };
logo.fit = "contain";

slide.shapes.add({
  name: "QR heading accent",
  geometry: "rect",
  position: { left: 367, top: 910, width: 5, height: 20 },
  fill: RED,
  line: { style: "solid", fill: "none", width: 0 },
});
addText({
  name: "QR section heading",
  text: "QRからアクセス",
  left: 380,
  top: 906,
  width: 260,
  height: 28,
  fontSize: 18,
  color: RED,
  bold: true,
});
addText({
  name: "QR section description",
  text: "フォーム・SNS・公式サイトはこちら",
  left: 380,
  top: 932,
  width: 330,
  height: 18,
  fontSize: 10.5,
  color: MUTED,
});

const qrItems = [
  {
    name: "Google form QR",
    path: "pic/QRs/qrcode_docs.google.com.png",
    alt: "Googleフォームへ移動するQRコード",
    label: "Googleフォーム",
    left: 372,
  },
  {
    name: "Instagram QR",
    path: "pic/QRs/qrcode_www.instagram.com.png",
    alt: "TEDxWUSHS Youth公式Instagramへ移動するQRコード",
    label: "Instagram",
    left: 500,
  },
  {
    name: "Official website QR",
    path: "pic/QRs/qrcode_www.tedxwushs.com.png",
    alt: "TEDxWUSHS Youth公式サイトへ移動するQRコード",
    label: "公式サイト",
    left: 628,
  },
];

for (const item of qrItems) {
  slide.images.add({
    name: item.name,
    blob: await readBytes(item.path),
    contentType: "image/png",
    alt: item.alt,
    fit: "contain",
    position: { left: item.left, top: 956, width: 100, height: 100 },
  });
  addText({
    name: `${item.name} label`,
    text: item.label,
    left: item.left - 4,
    top: 1060,
    width: 108,
    height: 20,
    fontSize: 12,
    color: INK,
    bold: true,
    alignment: "center",
  });
}

addText({
  name: "Slide one footer detail",
  text: "10.31  |  WASEDA UNIVERSITY SENIOR HIGH SCHOOL",
  left: 382,
  top: 1091,
  width: 365,
  height: 18,
  fontSize: 9.5,
  color: MUTED,
  alignment: "right",
});

const requirements = {
  explicitTotalSlideCount: 2,
  requiredNativeTableOwnerSlides: [],
  requiredNativeChartOwnerSlides: [],
};
const fontPolicy = {
  basis: "reference",
  families: ["Arial Black", "Noto Sans JP", "Noto Serif JP"],
  referencePath: sourcePath,
  referenceSha256: "9d5401cfa0a05ea80ab4d2e487c534c50a61e8905272c1c7af34ebb8ba92aa80",
};
const expectedSlideSizeEmu = "7562850,10696575";

const { finalizePresentation } = await import(
  pathToFileURL(path.join(SKILL_DIR, "container_tools/artifact_tool_utils.mjs")).href
);
const stagingDir = path.join(
  workspaceDir,
  "tmp/presentations/gakuinsai-v2/.codex-finalizer",
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
