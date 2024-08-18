// Shallow cloning creates a new object,
// but only copies references to the nested objects
// changes to nested objects in the clone will affect the original object.


const original = {
    name: 'Alice',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    }
  };
  
  // Shallow clone using Object.assign()
  const shallowClone = Object.assign({}, original);
  
  // Or using spread operator
  // const shallowClone = { ...original };
  
  // Modify the nested object in the clone
  shallowClone.address.city = 'Los Angeles';
  
  // Both the original and clone reflect the change
  console.log(original.address.city); // Outputs: Los Angeles
  console.log(shallowClone.address.city); // Outputs: Los Angeles
  