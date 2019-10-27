const chalk = require('chalk');
const fs = require('fs');
const pretty = require('pretty');
const minify = require('html-minifier').minify;
const options = require('./minify').options;
const createEmail = require('./server/createEmail');
const emails = require('./lib/emails').default;

const storeEmail = (name, email) => {
  if (!fs.existsSync('html')){
    fs.mkdirSync('html');
  }

  return new Promise((resolve, reject) => {
    fs.writeFile(`html/${name}.html`, email, (err) => {
      if (err) return reject(err);
      const stats = fs.statSync(`html/${name}.html`);
      const kb = (stats.size * 0.001).toFixed(1);
      console.log(chalk.green('✓'), name + `: (${kb}kb)`);
      return resolve();
    });
  });
}

const generateEmails = () => {
  console.log('\nGenerating all emails!\n');

  Object.keys(emails).forEach((name, index) => {
    createEmail(name, {}).then((email) => {
      //
      return storeEmail(name, email);
    })
  });
}

generateEmails();
