var student = {name : "David Rayy",   
sclass : "VI", rollno : 12};  
  
var allKeys = function(myobj)  
{  
   var keys = [];  
   for(var key in myobj)  
   {  
      keys.push(key);  
   }  
   return keys;  
};  
alert(allKeys(student));  