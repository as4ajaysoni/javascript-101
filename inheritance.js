class Employee {
    constructor(empID, empName){
        if(empID == null) {
            empID = 404;
        }if(empName == null) {
            empName = "unknown";
        }
        this.empID = empID;
        this.empName = empName;
    }

    printName(){
        console.log(this.empName);
    }

    printId(){
        console.log(this.empID);
    }
}

class Manager extends Employee {

    constructor(empID, empName, department) {
        super(empID, empName);
        this.department = department;
    }

    getDepartment() {
        console.log(this.department)
    }
}

e1 = new Employee('James',1234);

console.log(e1);

e1.printId();
e1.printName();

m1 = new Manager(123, 'man 1', 'IT')

console.log(m1);