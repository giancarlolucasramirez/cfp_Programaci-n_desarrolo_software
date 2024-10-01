const path = require('node:path')
console.log(path.sep);
let newpath = path.join('C:\Users\giancarlolucas\Desktop\cfp_Programaci-n_desarrolo_software\modulo1\htmlycss\  ','image/1.jpg')
console.log(newpath);

let filename = path.basename(newpath)
console.log(filename);

let dirname = path.dirname(newpath)
console.log(dirname);

let extname = path.extname(newpath)
console.log(extname);