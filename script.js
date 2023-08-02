//1.Object.assign();

// Create two objects
const obj1 = { name: "Ivan", age: 22 };
const obj2 = { city: "vellore", profession: "student" };

// Merge the objects into a new object
const mergedObject = Object.assign({}, obj1, obj2);

// Output the merged object
console.log(mergedObject);
// Output: { name: "John", age: 30, city: "New York", profession: "Engineer" }




//2.Object.create();

Define a prototype object
const person = {
    greeting: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };
  
  // Create a new object with personPrototype as its prototype
  const a = Object.create(person);
  
  // Add properties to the new object
  a.name = "ivan";
  a.age = 22;
  
  // Call the method from the prototype
  a.greeting(); // Output: Hello, my name is John and I'm 30 years old.
  



 //3.Object.entries();
  
 const person = {
    name: 'ivan',
    age: 22,
    profession: 'student'
  };
  
  const entriesArray = Object.entries(person);
  console.log(entriesArray);
  // Output: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'profession', 'Engineer' ] ]


//4.Object.freeze();
  
const person = {
    name: 'John',
    age: 30
  };
  
  // Freeze the 'person' object
  Object.freeze(person);
  
  // Attempt to modify the 'person' object (will be ignored in non-strict mode)
  person.age = 31;
  person.city = 'New York';
  
  console.log(person); // Output: { name: 'John', age: 30 }



  //5.Object.keys();
const person = {
    name: 'John',
    age: 30,
    profession: 'Engineer'
  };
  
  const keysArray = Object.keys(person);
  console.log(keysArray);
  // Output: [ 'name', 'age', 'profession' ]


//6.Object.values();
const person = {
    name: 'ivan',
    age: 22,
    profession: 'student'
  };
  
  const valuesArray = Object.values(person);
  console.log(valuesArray);
  // Output: [ 'John', 30, 'Engineer' ]



//7.Object.seal();
  const person = {
    name: 'ivan',
    age: 22
  };
  
  // Seal the 'person' object
  Object.seal(person);
  
  // Attempt to modify the 'person' object (values can still be modified)
  person.age = 24;
  person.city = 'vellore'; // This will not add a new property because the object is sealed
  
  console.log(person); // Output: { name: 'John', age: 31 }

