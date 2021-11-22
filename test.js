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

// var fullPath = './a.txt'
// var fs = require('fs');
// fs.writeFile(fullPath, "CONTENT", "utf8", (error, data) => {
//   console.log("Write complete");
//   console.log(error);
//   console.log(data);
// });



// const fs = require('fs-extra');

// fs.move('./a', '/b', err => {
//   if (err) return console.error(err);
//   console.log('success!');
// });

// console.log("run hreee")
// fs.mkdirSync(dirpath)

// const fs = require('fs');
// const path = "./check";
// fs.readdir(path, (err, files) => {
//   if (err)
//     console.log(err);
//   else {
//     console.log("\nCurrent directory filenames:");
//     files.forEach(file => {
//       console.log(file);
//     })
//   }
// })

// var sin = fetch('https://ubahthebuilder.tech/posts/1')
//   .then(data => {
//     return data.json();
//   })
//   .then(post => {
//     console.log(post.title);
//   });
// console.log("zzzzzzz", sin)
const fetch = require("node-fetch");


// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData('https://example.com/answer', { answer: 42 })
  .then(data => {
    console.log(data); // JSON data parsed by `data.json()` call
  });


fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));




async function fetchText() {
  let response = await fetch('https://gorest.co.in/public/v1/users');

  console.log(response.status); // 200
  console.log(response.statusText); // OK

  if (response.status === 200) {
    let data = await response.text();
    // handle data
    console.log()
    return data
  }
}

fetchText();
