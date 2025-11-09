const fs = require("fs").promises;
const path = require("path");
const { sizeFormatter } = require("./utils");

async function listFiles(dirPath) {
  try {
    const files = await fs.readdir(dirPath);
    const filesInfo = await Promise.all(
      files.map(async (file) => {
        const fullPath = path.join(dirPath, file);
        const stats = await fs.stat(fullPath);
        return {
          name: file,
          isDirectory: stats.isDirectory(),
          size: stats.isDirectory() ? null : sizeFormatter(stats.size),
        };
      })
    );

    filesInfo.sort((a, b) => {
      if (a.isDirectory && b.isDirectory) {
        return a.name.localeCompare(b.name);
      } else if (a.isDirectory && !b.isDirectory) {
        return -1;
      } else if (!a.isDirectory && b.isDirectory) {
        return 1;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

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
