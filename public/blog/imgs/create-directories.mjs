import * as fs from "fs";
import * as path from "path";

const directoryPath = "./";
const targetPath = "../";

const elements = [
  // "vasculitis",
  // "lesiones-por-radioterapia",
  // "antienvejecimiento",
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

elements.forEach((element, index) => {
  // Create a new directory for the element
  const elementPath = path.join(targetPath, element);
  fs.mkdirSync(elementPath);

  // Get the image file with name index + 1
  const imageFile = `${index + 4}.webp`;

  // Move the image file to the new directory and rename it to 'og.jpg'
  fs.renameSync(
    path.join(directoryPath, imageFile),
    path.join(elementPath, "og.webp")
  );
});
