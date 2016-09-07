//create function
function helloWorld(message) {
  if (message.toLowerCase() === "hello"){
    alert("Hello World!");
  } else {
    alert("That's not what I was looking for.  Goodbye world!");
  }
}
  //control and return statements

//Prompt user for input and store variable
var helloPrompt = prompt("Hello?");
//Call function
helloWorld(helloPrompt);
//Alert user results
