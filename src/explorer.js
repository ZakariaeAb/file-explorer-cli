const fs = require("fs").promises;

async function listFiles(path) {
  try {
    const files = await fs.readdir(path);
    return files;
  } catch (error) {
    throw new Error(`Impossible de lire le dossier ${path}: ${error.message}`);
  }
}

module.exports = {
  listFiles,
};
