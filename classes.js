#!/usr/bin/env node

class Human {

    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log("Name: ", this.name);
    }

    setName(name) {
        this.name = name;
    }

}

function main() {
    printMe();

    var h1 = new Human("AS");
    var h2 = new Human("SA");

    h1.getName();
    h1.name = "AS1"

    h2.getName();
    h2.setName("SA1");

    h1.getName();
    h2.getName();
}

var printMe = function() {
    console.log("ME");
    console.log("test");
}

main();