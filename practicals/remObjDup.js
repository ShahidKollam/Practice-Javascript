function getUniqueObjects(arr) {
    const uniqueArray = [];
  
    const seenNames = new Set();
    
    arr.forEach(obj => {
        if (!seenNames.has(obj.name)) {
            uniqueArray.push(obj);
            seenNames.add(obj.name);
        }
    });
  
    return seenNames;
  }
  
  function getUniqueObject(arr) {
      let unique = [];
  
      arr.forEach((val) => {
          if (!unique.some((obj) => JSON.stringify(obj) === JSON.stringify(val))) {
              unique.push(val);
          }
      });
  
      return unique;
  }
  
  const inputArray = [{ name: "sai" }, { name: "Nang" }, { name: "sai" }, { name: "Nang" }, { name: "111111" }];
  
  const uniqueObjects = getUniqueObjects(inputArray);
  console.log(uniqueObjects);
  