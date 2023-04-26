#!/usr/bin/env node
const fs = require('fs');
const { filesize: fileSize } = require('filesize')
const path = require('path');
const [_filePath] = process.argv;
const filePath = path.join(process.cwd(), _filePath);

fs.stat(filePath, (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    const size = fileSize(stats.size, {base: 2, standard: "jedec"});
    console.log('\033[1mSize:' + `「${size}」`);
  }
});
