const fs = require("fs").promises;
const path = require("path");

async function listFiles(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    const filesInfo = await Promise.all(
      files.map(async (file) => {
        const fullPath = path.join(dirPath, file);
        const stats = await fs.stat(fullPath);
        return { name: file, isDirectory: stats.isDirectory() };
      })
    );
    return filesInfo;
  } catch (error) {
    throw new Error(
      `Impossible de lire le dossier ${dirPath}: ${error.message}`
    );
  }
}

module.exports = {
  listFiles,
};
