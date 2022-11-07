const fs = require('fs');
const path = require('path');
const direction =  path.resolve(__dirname,'text.txt')
const stream = fs.createReadStream(direction, 'utf-8');
let data  = '';
stream.on('data', chunk => console.log(chunk));
stream.on('error', error => console.log('Error', error.message))


//Найти файл, прочесть , вывести в консоль

