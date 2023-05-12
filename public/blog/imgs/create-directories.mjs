import * as fs from "fs";
import * as path from "path";

const directoryPath = "./";
const targetPath = "../";

const elements = [
  "paralisis-cerebral",
  "autismo",
  "lesiones-musculares",
  "fatiga",
  "cicatrizacion",
  "infecciones-necrotizantes",
  "OACR",
];

elements.forEach((element, index) => {
  // Create a new directory for the element
  const elementPath = path.join(targetPath, element);
  // fs.mkdirSync(elementPath);

  // Get the image file with name index + 1
  const imageFile = `${index + 1}.jpg`;

  // Move the image file to the new directory and rename it to 'og.jpg'
  fs.renameSync(
    path.join(directoryPath, imageFile),
    path.join(elementPath, "og.jpg")
  );
});
