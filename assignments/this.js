/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding for a window object
 * 2. Implicit Binding for objects
 * 3. Explicit Binding for functions
 * 4. the 'new' binding
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const implicit = {
  name: "Fire",
  age: 35,
  greet: function() {
    return `hi my name is ${this.name} and I am ${this.age} old`;
  }
};

console.log(implicit.greet());

// Principle 3

// code example for New Binding

var Student = function(name, subject, grade) {
  this.name = name;
  this.subject = subject;
  this.grade = grade;
  this.greet = function() {
    return `hi my name is ${this.name} and I am in ${this.subject} class`;
  };
};

var student1 = new Student("Firealem", "Full Stack Web", "F");
console.log(student1.greet());

// Principle 4

// code example for Explicit Binding

var Teacher = {
  name: "Josh",
  subject: "FSW"
};

Teachergreet = function() {
  return `hi my name is ${this.name} and I teach ${this.subject} class`;
};
console.log(Teachergreet.call(Teacher));
