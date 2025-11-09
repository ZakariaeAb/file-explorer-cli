function displayFiles(filesInfo, dirPath) {
  console.log(`\n📂 Contenu de : ${dirPath}\n`);
  filesInfo.forEach((el) => {
    el.isDirectory
      ? console.log(`  📁 ${el.name.padEnd(30)}`)
      : console.log(`  📄 ${el.name.padEnd(30)} ${el.size}`);
  });
}

module.exports = {
  displayFiles,
};
