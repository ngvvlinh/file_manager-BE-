// const fs = require('fs');

// // fs.unlink('./check/test.txt', (err) => {
// //   if (err) throw err;
// //   console.log('myText.txt was deleted');
// // });

// // fs.mkdirSync('//te', (err) => {
// //   if (err) throw err;
// //   console.log(' was Created ');
// // });

//const result = fs.mkdirSync('//tes');
// const dirpath = './a/b/tets.txt'
// fs.writeFileSync(dirpath)

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('demofile1.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(8080);



// fs.mkdirSync(dirpath)


