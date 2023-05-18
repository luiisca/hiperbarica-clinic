import * as fs from "fs";
import * as path from "path";

const directoryPath = "./";
const targetPath = "../";

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

elements.forEach((element, index) => {
  // Create a new directory for the element
  const elementPath = path.join(targetPath, element);
  fs.mkdirSync(elementPath);

  // Get the image file with name index + 1
  const imageFile = `${index + 1}.webp`;

  // Move the image file to the new directory and rename it to 'og.jpg'
  fs.renameSync(
    path.join(directoryPath, imageFile),
    path.join(elementPath, "og.webp")
  );
});
