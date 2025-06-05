const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

// Define the folder containing Excel files
const inputFolder = path.join(__dirname, "input_files");
const outputFolder = path.join(__dirname, "json_files");

// Ensure output folder exists
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Function to convert Excel file to JSON
const convertExcelToJson = (filePath) => {
  const workbook = xlsx.readFile(filePath);
  let jsonData = {};

  workbook.SheetNames.forEach((sheet) => {
    const worksheet = workbook.Sheets[sheet];
    jsonData[sheet] = xlsx.utils.sheet_to_json(worksheet);
  });

  return jsonData;
};

console.time("Total conversion time");
// Process all Excel files in the input folder
fs.readdir(inputFolder, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  files.forEach((file,index) => {
    if (file.endsWith(".xlsx") || file.endsWith(".xls") || file.endsWith(".csv")) {
      const filePath = path.join(inputFolder, file);
      const jsonOutput = convertExcelToJson(filePath);

      const outputFilePath = path.join(
        outputFolder,
        `${path.basename(file, path.extname(file))}.json`
      );
      fs.writeFileSync(outputFilePath, JSON.stringify(jsonOutput, null, 2));

      console.log(`Converted: ${file} -> ${outputFilePath}`);
    }
    // End total time after the last file is processed
    if (index === files.length - 1) {
      console.timeEnd("Total conversion time");
    }
  });
});

