// complete this js code
function Person(name, age) {
	class Person{
	constructor(name, age){
		this.name = name;
		this.age = age;
	}
	greet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
}}

function Employee(name, age, jobTitle) {
	class Employee extends Person{
	constructor(name, age, jobTitle){
		super(name, age);
		this.jobTitle = jobTitle;
	}
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`)
	}
}
}






const emp1 = new Employee("Alice", 25, "Manager");

emp1.greet();
emp1.jobGreet();

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;