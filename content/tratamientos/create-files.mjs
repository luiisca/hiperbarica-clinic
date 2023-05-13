import * as fs from "fs";

const elements = [
  "vasculitis",
  "lesiones-por-radioterapia",
  "antienvejecimiento",
  "fertilidad",
  "neurologia-infantil",
  "ileo-paralitico",
  "anemia",
  "artritis",
  // "heridas",
  "heridas-post-quirurgicas",
  "esclerodermia",
  "fibromalgia",
];

elements.forEach((element) => {
  fs.writeFileSync(`${element}.mdx`, "");
});
