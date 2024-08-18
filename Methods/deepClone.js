// Deep cloning creates a new object and copies all nested objects.
// This ensures that changes to the clone do not affect the original object
// and vice versa.

const original = {
    name: 'Alice',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    }
  };
  
  // Deep clone using JSON methods
  const deepClone = JSON.parse(JSON.stringify(original));
  
  // Modify the nested object in the clone
  deepClone.address.city = 'Los Angeles';
  
  // The original remains unchanged
  console.log(original.address.city); // Outputs: New York
  console.log(deepClone.address.city); // Outputs: Los Angeles
  