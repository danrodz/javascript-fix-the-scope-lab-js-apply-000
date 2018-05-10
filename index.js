// global var
var animal = 'dog';

// returns global value of animal
function myAnimal() {
  return animal;
}

// redeclares animal inside this new func scope and returns new value
function yourAnimal() {
  var animal = 'cat'
  return animal;
}

// takes an argument (n) and uses const two to return (n+2)
function add2(n) {
  // Feel free to move things around!
  const two = 2;
  return n + two;
}

// function expression that returns a function
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

// IFEE
var theFunk = (funkyFunction())();


