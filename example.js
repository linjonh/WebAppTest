/*step 1*/
// console.log('HELLO WORLD');
/*step 2*/
// console.log(Number(process.argv[2]))

/*step 3 fs.readFileSync(filename, [options])*/
// var fs = require('fs');
// var buffer = fs.readFileSync('E:\\TestWeb\\Example.js');
// var str = buffer.toString();
// // console.log(str);
// var array = str.split();
// console.log(array[0]);

/*step 4 fs.readFile(filename, [options], callback)*/
// var fs = require('fs');
// fs.readFile('E:\\TestWeb\\Example.js', function(err, data) {
//     if (err) throw err;
//     console.log("may handled data" + data);
// });

/*step 5 filterd ls  fs.readdir(）*/
function filterdFile(path, extension) {
    var fs = require('fs');
    fs.readdir(path, function(err, list) {
        if (err) throw err;
        console.log(list);
        console.log("\n filterd cmd file: \n");
        for (var i = list.length - 1; i >= 0; i--) {
            if (list[i].indexOf(".") != -1) {
                if (list[i].indexOf(extension) != -1) {
                    console.log(list[i]);
                }
            }
        };

    });
}
filterdFile("C:\\Users\\john\\AppData\\Roaming\\npm", "cmd");
//
