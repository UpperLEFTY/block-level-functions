let getName = ()  =>  "Essence";
  return "Essence";
  
  // same as 
  
  
  let getName = function() {
      return "Essence";
 };
 
 
 //Creating Immediately Invoked Function Expression (IIFE)
 
 let person = function(name)  {
 
      return {
          getName: function() {
               return name;
          }
      };
 }("Essence");
console.log(person.getName());        // "Essence"

// Same as

let person = ((name)

