//Variables and expressions - ex8 - collect 3 numbers and display the difference between 2 calculations

//Declare a variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click', values, false);

function values(){
    //check event listener is working
    //alert ("event listener is working");
    
    //Get the value from the text box and save to local variable
    var userInput1 = document.getElementById("input1").value;
    var num1 = parseInt(userInput1);
    var greaterMessage = "One greater than the number entered";
    var lowerMessage = "One lower than the number entered";
    
    document.getElementById("result").innerHTML = num1 + 1;
        
    document.getElementById("result2").innerHTML = num1 - 1;
}