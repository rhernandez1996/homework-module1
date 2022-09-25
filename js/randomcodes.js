/* -------Random Codes---------*/
 var code = ""; //initialize to null value
 var getCode = ""; //store entered code
 var btnvalue; //for button Boolean
 //create variable to hold the type of characters we want to show as codes
 var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
//Function to generate combination of characters

function generateCode() {
    //Create variables to store generated codes and the type of characters we want to show as codes
    
    //Generate character multiple times using a loop
    for (i = 1; i<= 8; i++) {
      var char = Math.random()* str.length; //random select a character from the variable and then store in a new variable
      code += str.charAt(char); //accumulate the generated character into a string of 8 characters
  }
  return code; //return the final accumulated string when the loop ends
}

//Get HTML element to display
document.getElementById("codes").innerHTML = generateCode();

//Disable Button
function disableButton(btnvalue) {
  document.getElementById("submit").disabled = btnvalue; //able/disable button
  if (btnvalue == true) { //test if button is disableed or enabled
    //set button and label color translucent
    document.getElementById("submit").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
    document.getElementById("submit").style.color = "rgba(25, 255, 255, 0.5)";
    }
}
//Activate function
disableButton();