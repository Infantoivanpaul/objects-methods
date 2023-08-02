// Define a prototype object
const personPrototype = {
    greeting: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };
  
  // Create a new object with personPrototype as its prototype
  const john = Object.create(personPrototype);
  
  // Add properties to the new object
  john.name = "John";
  john.age = 30;
  
  // Call the method from the prototype
  john.greeting(); // Output: Hello, my name is John and I'm 30 years old.
  