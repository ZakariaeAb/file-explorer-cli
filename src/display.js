function displayFiles(filesInfo, dirPath) {
  console.log(`\n📂 Contenu de : ${dirPath}\n`);
  filesInfo.forEach((el) => {
    el.isDirectory
      ? console.log(`  📁 ${el.name}`)
      : console.log(`  📄 ${el.name}`);
  });
}

module.exports = {
  displayFiles,
};
