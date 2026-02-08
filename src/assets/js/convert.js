import sharp from "sharp";
import fs from "fs";
import path from "path";

const baseDir = "./src/assets/images/novas-imagens"; // ajuste se necessário
const baseDir2 = "./src/assets/images/utilizadas"; // ajuste se necessário

if (!fs.existsSync(baseDir)) {
  throw new Error(`A pasta não foi encontrada: ${baseDir}`);
}

const folders = fs.readdirSync(baseDir);

for (const folder of folders) {
  const folderPath = path.join(baseDir, folder);

  if (!fs.lstatSync(folderPath).isDirectory()) continue;

  console.log("📁 Convertendo imagens na pasta:", folder);

  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const lower = file.toLowerCase();

    if (lower.endsWith(".jpg") || lower.endsWith(".jpeg") || lower.endsWith(".png")) {
      const input = path.join(folderPath, file);

      const filenameWithoutExt = path.parse(file).name;
      const output = path.join(folderPath, filenameWithoutExt + ".webp");

      try {
        await sharp(input)
          .webp({ quality: 80 })
          .toFile(output);

        console.log("  ✔ Convertido:", file, "→", filenameWithoutExt + ".webp");
      } catch (err) {
        console.error("  ❌ Erro ao converter", file, "=>", err.message);
      }
    }
  }
}

console.log("\n✨ Conversão finalizada!");
