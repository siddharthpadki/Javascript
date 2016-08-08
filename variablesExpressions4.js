//Variables and expressions - ex4 - collect 2 number values and add them

//Declare a variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click', addUp, false);

function addUp(){
    //check event listener is working
    //alert ("event listener is working");
    
    //Get the value from the text box and save to local variable
    var userInput1 = document.getElementById("input1").value;
    var userInput2 = document.getElementById("input2").value;
    var total = parseInt(userInput1) + parseInt(userInput2);
    //Display the text box value on the screen
    document.getElementById("result").innerHTML = total;
}