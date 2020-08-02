
let as = {
    'name': 'AS',
    id: 42,
    values: ["aa", "bb", "cc"],
}

console.log('as', as);
console.log('name', as);

let ss = JSON.stringify(as);
console.log('stringify', ss);
console.log('name', ss[5]);

let fs = require('fs');
fs.writeFileSync('ss.txt', ss);

let ss1 = fs.readFileSync('ss.txt');
console.log('ss1', ss1.toString());

let ssObj = JSON.parse(ss1.toString());
console.log('ssobj name', ssObj.name);

///////////////////

let keys = Object.keys(as);
console.log('keys', keys);

for(let key of Object.keys(as)) {
    console.log('Key: ', key, 'Value: ', as[key]);
}


//
/**
 * hey
 * dsaf
 * afasfsaf
 * aaa
 */