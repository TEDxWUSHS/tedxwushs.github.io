import fs from "node:fs/promises";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const input = "output/presentation/2026.10.27-学院祭-統合編集可能版-v3.pptx";
const presentation = await PresentationFile.importPptx(await FileBlob.load(input));

const result = await presentation.inspect({
  select: "$.slides[0]",
  include: [
    "id",
    "index",
    "title",
    "elements.id",
    "elements.kind",
    "elements.name",
    "elements.text",
    "elements.alt",
    "elements.position",
    "elements.style",
  ],
});

await fs.writeFile(
  "tmp/presentations/gakuinsai-v3/slide-1-v3-inspect.json",
  JSON.stringify(result.records, null, 2),
  "utf8",
);

const slide = presentation.slides.getItem(0);
const layout = await slide.export({ format: "layout", detail: "full" });
await fs.writeFile(
  "tmp/presentations/gakuinsai-v3/slide-1-v3-layout.json",
  await layout.text(),
  "utf8",
);

console.log(`slides=${presentation.slides.items.length} records=${result.recordCount}`);
