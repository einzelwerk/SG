const fs = require('fs');
const path = require('path');

const searchString = "@use '../utils/mixins' as *;";
const directoryPath = './';

const scanDirectory = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return console.log(`Unable to scan directory: ${err}`);
    }
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (stats.isDirectory()) {
          scanDirectory(filePath);
        } else if (path.extname(file) === '.scss') {
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              return console.log('An error occurred while reading the file:', err);
            }
            if (!data.includes(searchString)) {
              const modifiedData = `${searchString}\n\n${data}`;
              fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
                if (err) {
                  return console.log('An error occurred while writing the file:', err);
                }
                console.log(`Successfully added ${searchString} to ${file}`);
              });
            }
          });
        }
      });
    });
  });
};
scanDirectory(directoryPath);
