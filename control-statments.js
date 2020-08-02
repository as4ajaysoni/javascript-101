let name = "AS";

name = "ZS";

if(name == "AS") {
    console.log("Executed");
} else if(name == "ZS") {
    console.log("Executed with ZS");
} else {
    console.log("NOT Executed");
}


switch(name) {
    case "AS":
        console.log("SC: Excuted with AS");
        break;
    case "ZS":
        console.log("SC: Excuted with Command");
        break;
    case "XS":
        console.log("SC: Excuted with Command");
        break;
    default:
        console.log("Not Executed");
}












let values = ["AS", "ZS", "XS", "SS", 42];


// Old Way
for(let i=0; i < values.length; i++) {
    console.log("Hello: ", values[i]);
}

// 2nd Way: for-in loop
for(let i in values) {
    console.log("in: ", values[i]);
}

// 3rd Way: for-of loop
for(let val of values) {
    console.log("of: ", val);
}

let i=0;
while(i < values.length) {
    console.log("While: ", values[i]);
    i++;
}

