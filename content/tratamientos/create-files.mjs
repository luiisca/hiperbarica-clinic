import * as fs from "fs";

const elements = [
  "paralisis-cerebral",
  "autismo",
  "lesiones-musculares",
  "fatiga",
  "cicatrizacion",
  "infecciones-necrotizantes",
  "OACR",
];

elements.forEach((element) => {
  fs.writeFileSync(`${element}.mdx`, "");
});
