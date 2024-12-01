let id = setInterval(() => {
   console.log("hello"); 
}, 2000);

setTimeout(() => {
   clearInterval(id); 
}, 12000);