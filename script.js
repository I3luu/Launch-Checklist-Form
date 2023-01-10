// Write your JavaScript code here!
window.addEventListener("load", function () {
   let form = document.querySelector("form");
   form.addEventListener("submit", function (event) {
      event.preventDefault();

      let pilotInput = document.querySelector("input[name=pilotName]");
      let copilotInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");

      if (pilotInput.value === "" || copilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "") {
         alert("all fields required!");
      } else if (!pilotInput.value.match(/^[A-Za-z ]+$/) || !copilotInput.value.match(/^[A-Za-z ]+$/) || isNaN(Number(fuelLevelInput.value)) || isNaN(Number(cargoMassInput.value))) {
         alert("Enter valid data type.");

         
      };
      let itemStatus = document.getElementById("itemStatus");
      itemStatus.style.visibility ="visible";

      let pilotStatus = document.getElementById("pilotStatus");
      pilotStatus.innerHTML = `Pilot: ${pilotInput.value} is ready for launch`

      let copilotStatus = document.getElementById("copilotStatus")
      copilotStatus.innerHTML = `Co-Pilot: ${copilotInput.value} is ready for launch`

      let fuelStatus = document.getElementById("fuelStatus");
      let fuelLevel = Number(fuelLevelInput.value);
      let launchStatus = document.getElementById("launchStatus");
      if(fuelLevel<10000){
         fuelStatus.innerHTML = "Fuel level too low to launch";
         launchStatus.innerHTML = "Shuttle not ready to launch";
         launchStatus.style.color = "red";
      } else {
         fuelStatus.innerHTML = "Fuel level check passed";
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "black";
      };

      let cargoMass= Number(cargoMassInput.value);
      let cargoStatus = document.getElementById("cargoStatus");
      if(cargoMass>10000){
         cargoStatus.innerHTML = "The amount of cargo on this shuttle is too damn high";
         launchStatus.innerHTML = "Shuttle not ready to launch";
         launchStatus.style.color = "red";
      } else {
         cargoStatus.innerHTML = "Cargo mass check passed";
         launchStatus.innerHTML = "Awaiting Information Before Launch";
         launchStatus.style.color = "black";
      }
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