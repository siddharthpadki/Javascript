//Variables and expressions - ex6 - collect 2 number values and display whether they are equal or different

//Declare a variable for listening to button1
var event1 = document.getElementById("button1");
//Set up event listener on button1 click
event1.addEventListener('click', equality, false);

function equality(){
    //check event listener is working
    //alert ("event listener is working");
    
    //Get the value from the text box and save to local variable
    var userInput1 = document.getElementById("input1").value;
    var userInput2 = document.getElementById("input2").value;
    var num1 = parseInt(userInput1);
    var num2 = parseInt(userInput2);
    var differentMessage = "The two numbers are different"
    var equalMessage = "The two numbers are the same"
    
    if (num1>num2)
        {
            document.getElementById("result").innerHTML = differentMessage;
        }
    else if (num2>num1)
        {
            document.getElementById("result").innerHTML = differentMessage;
        }
    else
        {
            document.getElementById("result").innerHTML = equalMessage;
        }
}