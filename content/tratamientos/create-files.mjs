import * as fs from "fs";

const elements = [
  "trauma-extremidades-inferiores",
  "quemaduras",
  "sordera-subita",
  "migrana",
  "alzheimer",
  "lesiones-de-medula-espinal",
  "parkinson",
  "procesos-infecciosos",
];

elements.forEach((element) => {
  fs.writeFileSync(`${element}.mdx`, "");
});
