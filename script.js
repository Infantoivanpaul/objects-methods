//1.Object.assign();

// Create two objects
const obj1 = { name: "ivan", age: 22 };
const obj2 = { city: "vellore", profession: "student" };

// Merge the objects into a new object
const mergedObject = Object.assign({}, obj1, obj2);

// Output the merged object
console.log(mergedObject);
// Output: { name: "ivan", age: 22, city: "vellore", profession: "student" }

//---------------------------------------------------------------------------------------------------//

//2.Object.create();
// Define a prototype object
const personPrototype = {
    greeting: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };
  
  // Create a new object with personPrototype as its prototype
  const john = Object.create(personPrototype);
  
  // Add properties to the new object
  john.name = "ivan";
  john.age = 22;
  
  // Call the method from the prototype
  john.greeting(); // Output: Hello, my name is ivan and I'm 22 years old.

//---------------------------------------------------------------------------------------------------//

  //3.Object.entries();
  const person = {
  name: 'ivan',
  age: 22,
  profession: 'student'
};

const entriesArray = Object.entries(person);
console.log(entriesArray);
// Output: [ [ 'name', 'ivan' ], [ 'age', 22 ], [ 'profession', 'student' ] ]

  //---------------------------------------------------------------------------------------------------//


// 4.Object.freeze();
const person = {
  name: 'ivan',
  age: 22
};

// Freeze the 'person' object
Object.freeze(person);

// Attempt to modify the 'person' object (will be ignored in non-strict mode)
person.age = 24;
person.city = 'vellore';

console.log(person); // Output: { name: 'John', age: 30 }

//---------------------------------------------------------------------------------------------------//

//5.Object.keys();
const person = {
  name: 'ivan',
  age: 22,
  profession: 'student'
};

const keysArray = Object.keys(person);
console.log(keysArray);
// Output: [ 'name', 'age', 'profession' ]


//---------------------------------------------------------------------------------------------------//

// 6.Object.values();
const person = {
  name: 'ivan',
  age: 22,
  profession: 'student'
};

const valuesArray = Object.values(person);
console.log(valuesArray);
// Output: [ 'ivan', 22, 'student' ]

//---------------------------------------------------------------------------------------------------//

//7.Object.seal();
const person = {
  name: 'ivan',
  age: 22
};

// Seal the 'person' object
Object.seal(person);

// Attempt to modify and delete properties of the 'person' object
person.age = 22; // This is allowed, and the 'age' property will be changed to 31.
person.city = 'vellore'; // This will not add a new property since the object is sealed.

delete person.name; // This will not delete the 'name' property since the object is sealed.

console.log(person); // Output: { name: 'ivan', age:22 }
