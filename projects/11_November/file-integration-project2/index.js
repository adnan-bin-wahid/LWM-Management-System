require('dotenv').config();
const { importCSV } = require('./controllers/csvParser');

(async () => {
  try {
    console.log('Starting the CSV import and file processing...');
    await importCSV('data.csv');
    console.log('Process completed successfully!');
  } catch (error) {
    console.error('Error:', error);
  }
})();