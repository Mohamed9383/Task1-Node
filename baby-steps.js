var sum = 0;
for (index = 2; index < process.argv.length; index++) {
    sum += Number(process.argv[index]);
}
console.log(sum);
var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var strArr = str.split('\n');
console.log(strArr.length);