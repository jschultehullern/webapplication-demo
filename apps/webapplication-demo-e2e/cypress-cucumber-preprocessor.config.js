const path = require('path');

const stepDefinitionsPath = path.resolve(process.cwd(), './src/e2e');
const outputFolder = path.resolve(
  process.cwd(),
  '../../cyreport/cucumber-json'
);

module.exports = {
  nonGlobalStepDefinitions: true,
  stepDefinitions: stepDefinitionsPath,
  cucumberJson: {
    generate: true,
    outputFolder: outputFolder,
    filePrefix: '',
    fileSuffix: '.cucumber',
  },
};
