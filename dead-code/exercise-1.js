// Find the instances of unreachable and redundant code - remove them!
// The sayHello function should continue to work for any reasonable input it's given.
const personName = "Aman";
const greeting = "hello";

function sayHello(greeting, name) {
  return `${greeting}, ${name}!`;
}

console.log(sayHello(greeting, personName)); // 'hello, Aman!'
