"use strict";

function nashville() {
    this.city = "Nashville";
}

function dallas() {
    this.city = "Dallas";
}

function newYork() {
    this.city = "New York";
}

function paloAlto() {
    this.city = "Palo Alto";
}

// Top level function
function Employee() {
    this.firstName = null;
    this.lastName = null;
    this.city = null;
}

// used to set the first and last name
Employee.prototype.name = function (first, last) {
  this.firstName = first;
  this.lastName = last;
};

// Employee is on their prototype chain
function Clinician() {
    this.field = "Physical Therapist";
    this.specialist = "phrenologist";
}
Clinician.prototype = new Employee();

// Employee is on their prototype chain
function Operations() {
    this.field = "IT";
    this.specialist = "Development";
}
Operations.prototype = new Employee();

// Department is on their prototype chain
function FieldOffice() {
    this.department = "FieldOffice";
}
FieldOffice.prototype = new Operations();


// Department is on their prototype chain
function Headquarters() {
    this.department = "Headquarters";
}
Headquarters.prototype = new Clinician();

var justinSmith = new FieldOffice();
justinSmith.city = new nashville();
justinSmith.name("Justin", "Smith");

var katieSmith = new Headquarters();
katieSmith.city = new dallas();
katieSmith.name("Katie", "Smith");

var kallieSmith = new FieldOffice();
kallieSmith.city = new paloAlto();
kallieSmith.name("Kallie", "Smith");

var zoeySmith = new Headquarters();
zoeySmith.city = new newYork();
zoeySmith.name("Zoey", "Smith");

var jLString = "<div>" + justinSmith.firstName + " " + justinSmith.lastName + " works in " + justinSmith.field + ", in the " + justinSmith.city.city + " " + justinSmith.department + "and specializes in " + justinSmith.specialist + "." + "</div>";
var kLString = "<div>" + katieSmith.firstName + " " + katieSmith.lastName + " works in " + katieSmith.field + ", in the " + katieSmith.city.city + " " + katieSmith.department + "and specializes in " + katieSmith.specialist + "." + "</div>";
var kaLString = "<div>" + kallieSmith.firstName + " " + kallieSmith.lastName + " works in " + kallieSmith.field + ", in the " + kallieSmith.city.city + " " + kallieSmith.department + "and specializes in " + kallieSmith.specialist + "." + "</div>";
var zLString = "<div>" + zoeySmith.firstName + " " + zoeySmith.lastName + " works in " + zoeySmith.field + ", in the " + zoeySmith.city.city + " " + zoeySmith.department + "and specializes in " + zoeySmith.specialist + "." + "</div>";

var $output = $('#output');
$output.append(jLString);
$output.append(kLString);
$output.append(kaLString);
$output.append(zLString);
