function scopeVarDemo() {
    var name = "AS";

    if(true) {
        name = "AS1"
    }
    

    console.log(name);
}

function scopeLetDemo() {
    let name = "AS";

    if(true) {
        let name = "AS1"
    }

    console.log(name);
}

scopeVarDemo();

console.log("global name after", name);
