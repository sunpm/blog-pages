// @ts-ignore
const fs = require('fs'); // 文件模块
// @ts-ignore
const path = require('path'); // 路径模块
const chalk = require('chalk')
const matter = require('gray-matter'); // FrontMatter解析器 https://github.com/jonschlinkert/gray-matter
// @ts-ignore
const readFileList = require('./modules/readFileList.ts');
const urlsRoot = path.join(__dirname, '..', 'urls.txt'); // 百度链接推送文件
const DOMAIN = process.argv.splice(2)[0]; // 获取命令行传入的参数

if (DOMAIN) {
  main();
} else {
  console.log(chalk.red('请在运行此文件时指定一个你要进行百度推送的域名参数，例：node utils/baiduPush.js https://blog.fassr.com'))
}


function main() {
  fs.writeFileSync(urlsRoot, DOMAIN)
  // @ts-ignore
  const files = readFileList(); // 读取所有md文件数据

  files.forEach(file => {
    // const { data } = fs.readFileSync(file.filePath, 'utf8');
    // console.log(chalk.green(`正在推送 ${file.filePath}`));
    if (file.filePath) {
      const link = `\r\n${DOMAIN}${file.filePath}`;
      fs.appendFileSync(urlsRoot, link);
    }
  })
}

