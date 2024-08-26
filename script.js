class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	printPerson(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
}

class Employee extends Person{
	constructor(name, age, jobTitle){
		super(name, age);
		this.jobTitle = jobTitle;
	}
	printEmp(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
	}
}

const emp1 = new Employee("Alice", 25, "Manager");

emp1.printPerson()
emp1.printEmp()
