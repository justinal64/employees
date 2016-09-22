"use strict";
/*

Employees
Create a two-level prototype chain for creating employees in your business.
Start off with an Employee function. Then create two other functions named
Clinician, and Operations that have Employee on their prototype chain.
Departments

Create a two-level prototype chain for creating departments in your business.
Start off with a Department function. Then create two other functions named
FieldOffice, and Headquarters that have Department on their prototype chain.


Requirements
1. Every employee should have a first and last name. Done
2. Every department should have a name. Done
3. Every employee should be assigned to either the FieldOffice or Headquarters
department. This is a has-a relationship. Done
4. Clinician employees should have a property for their area of medical
expertise (e.g. physical therapist, phrenologist, anesthesiologist, etc.) Done
5. Operations employees should have a property for their area of
responsibility (e.g. IT, revenue, compliance, etc.) Done
6. Every field office should have a unique city.
7. Create a minimum of 4 employees - 2 clinicians, and 2 operations - that
have been assigned to a specific department.
8. Output the following information to the console for each employee.
    Full name
    Department name
    Expertise/responsibility
*/

var fieldOfficeCity = ["Nashville", "Dallas", "New York", "Palo Alto"];
var employeeNames = ["Justin", "Katie", "Kallie", "Zoey"];


// Top level function
function Employee() {
    this.firstName = null;
    this.lastName = null;
}

// Employee is on their prototype chain
function Clinician() {
    this.field = "Physical Therapist";
}
Clinician.prototype = new Employee();

// Employee is on their prototype chain
function Operations() {
    this.field = "IT";
}
Operations.prototype = new Employee();

// Top level function
function Department() {
    this.departmentName = "Accounting";
}

// Department is on their prototype chain
function FieldOffice() {
    this.department = "FieldOffice";
}
FieldOffice.prototype = new Department();

// function nashville() {
//     this.city = "Nashville";
// }

// function dallas() {
//     this.city = "Dallas";
// }

// function newYork() {
//     this.city = "New York";
// }

// function paloAlto() {
//     this.city = "Pal Alto";
// }

// Department is on their prototype chain
function Headquarters() {
    this.department = "Headquarters";
}
Headquarters.prototype = new Department();

var employee1 = new Operations();
employee1.prototype = new FieldOffice();
employee1.firstName = "Justin";
employee1.lastName = "Leggett";
// employee1.city = new nashville();
console.log("employee1", employee1);
console.log(employee1.firstName + " " + employee1.lastName + " works in " + employee1.departmentName + " at the " + employee1.city);
// console.log("employee1", employee1);
// console.log("Employee", new Employee());
// console.log("Clinician", new Clinician());
// console.log("Operations", new Operations());


// Robot.prototype.attack = function (target) {
//   this.totalDamage = this.baseDamage + this.weapon.damage;
//   target.life -= this.totalDamage;
// }

