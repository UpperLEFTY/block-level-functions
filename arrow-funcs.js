let getName = ()  =>  "Jessica Jones";
  return "Jessica Jones";
  
  // same as 
  
  
  let getName = function() {
      return "Jessica Jones";
 };
 
 
 //Creating Immediately Invoked Function Expression (IIFE)
 
 let person = function(name)  {
 
      return {
          getName: function() {
               return name;
          }
      };
 }("Jessica Jones");
console.log(person.getName());        // "Jessica Jones"

// Same as

      let person = ((name)  => {
  
        return {
        getName:  function(); {
      }
    };
  })("Jessica Jones");

