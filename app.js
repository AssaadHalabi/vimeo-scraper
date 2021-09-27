var fs = require('fs');
var vidl = require('vimeo-downloader');
const readline = require('readline');
const lineReader = require('line-reader');


var i = 0 

lineReader.eachLine('list.txt', (line, last) => {
    console.log(line);
    i++
    console.log(i);
    vidl(line, { quality: '360p' })
    .pipe(fs.createWriteStream(`video${i}.mp4`));
}); 