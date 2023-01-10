// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
   
   });
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/

// TODO 1: set up an window load handler
// TODO 2: set up a submit handler for the form
// TODO 3: cancel submission using event.preventDefault
// TODO 4: validate all inputs have data in them