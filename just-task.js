const { task, option, logger, argv, series, parallel } = require('just-task');

//option('name', { default: 'world' });

const {cd, echo, pwd, rm, exec} = require('shelljs');

task('deploy', () => {
  exec('yarn docs:build');

  const dir = 'docs/.vuepress/dist';

  cd(dir);
  echo(`In ${dir}...`);

  exec('git init');
  exec('git add -A');
  exec('git commit -m "deploy"');

  exec('git push -f git@github.com:aaa.git master:gh-pages');

  cd('-');
});

task('colors', async () => {
  const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex
  }).join('');

  const ColorThief = require('colorthief');
  const chalk = require('chalk');

  const path = require('path');

  const img = path.resolve(process.cwd(), './src/assets/images/building.jpg');

  const dominantColor = rgbToHex(...await ColorThief.getColor(img));
  const palette = (await ColorThief.getPalette(img, 7)).map(color => rgbToHex(...color));

  console.log(`${chalk.hex(dominantColor)("AAA")} --- ${dominantColor}`);

  for (let paletteColor of palette) {
    console.log(`${chalk.hex(paletteColor)("AAA")} --- ${paletteColor}`);
  }
});

