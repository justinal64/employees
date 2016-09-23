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

var justinLeggett = new FieldOffice();
justinLeggett.city = new nashville();
justinLeggett.name("Justin", "Smith");

var katieLeggett = new Headquarters();
katieLeggett.city = new dallas();
katieLeggett.name("Katie", "Smith");

var kallieLeggett = new FieldOffice();
kallieLeggett.city = new paloAlto();
kallieLeggett.name("Kallie", "Smith");

var zoeyLeggett = new Headquarters();
zoeyLeggett.city = new newYork();
zoeyLeggett.name("Zoey", "Smith");

var jLString = "<div>" + justinLeggett.firstName + " " + justinLeggett.lastName + " works in " + justinLeggett.field + ", in the " + justinLeggett.city.city + " " + justinLeggett.department + "and specializes in " + justinLeggett.specialist + "." + "</div>";
var kLString = "<div>" + katieLeggett.firstName + " " + katieLeggett.lastName + " works in " + katieLeggett.field + ", in the " + katieLeggett.city.city + " " + katieLeggett.department + "and specializes in " + katieLeggett.specialist + "." + "</div>";
var kaLString = "<div>" + kallieLeggett.firstName + " " + kallieLeggett.lastName + " works in " + kallieLeggett.field + ", in the " + kallieLeggett.city.city + " " + kallieLeggett.department + "and specializes in " + kallieLeggett.specialist + "." + "</div>";
var zLString = "<div>" + zoeyLeggett.firstName + " " + zoeyLeggett.lastName + " works in " + zoeyLeggett.field + ", in the " + zoeyLeggett.city.city + " " + zoeyLeggett.department + "and specializes in " + zoeyLeggett.specialist + "." + "</div>";

var $output = $('#output');
$output.append(jLString);
$output.append(kLString);
$output.append(kaLString);
$output.append(zLString);
