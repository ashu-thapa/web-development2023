var buttonToCalculate = document.getElementById("btnCalculate");
function calculateCircumference(){
	var r = prompt("Enter the radius");
	var circumference = Math.PI*(r*r);
	alert("Circumference of circle is "+circumference);
}

//Generate a random number upto 100 and round up to the nearest highest number.
var btnRandom = document.getElementById("btnRandom");
function calculateRandomNumber(){
	var number = Math.random()*100;
	var roundUpToHighest = Math.ceil(number);
	alert("Random number is:"+number);
	alert("Random number rounded up to their nearest highest number is: "+roundUpToHighest);
	
}

//Accept number in a prompt box, calculate the square root and display the result in an alert box.

var buttonToCalculateSqrt = document.getElementById("btnCalculateSqrt");
function calculateSqrt(){
	var num = prompt("Enter the number");
	var sqaureRoot = Math.sqrt(num);
	alert("Square root of the number is "+sqaureRoot);
}

//Create an array of numbers and determine the minimum and maximum number.
document.write("<br>");
var numberArr = [20, 41, -56, 67, -120, 450];
document.write("The list of array is: "+numberArr);
document.write("<br>");
var maximum = Math.max.apply(null, numberArr);
document.write("The maximum number in an array is:"+maximum);

document.write("<br>");
var minimum = Math.min.apply(null,numberArr);
document.write("The maximum number in an array is:"+minimum);


//Create a while loop to loop through numbers from 1 to 5 and display the cube of the numbers using Math.pow() method.
document.write("<br>");
var num = 1;
while(num<=5){
	var cube = Math.pow(num,3);
	document.write("The cube of "+num+"is:"+cube);
	document.write("<br>");
	num++;
}

//Create two strings with numeric values, use Number() method to convert first string 
///and + operator to convert second string to Number and calculate the product of those 
//two numbers.

var firstString = "4";
var secondString = "8";

var convertFirstString = Number(firstString);
var convertSecondString = +secondString;

var product = convertFirstString*convertSecondString;
document.write("The product of converted string to numbers is: "+product);


//Create a button and add an event listener to the button to display an alert.
var deleteBtn = document.getElementById("display-alert");
deleteBtn.addEventListener("click", function(){
	alert("Are you sure you want to delete??");
});

//Create an object for a Mobile with properties brand, color, model and price. Convert it to a JSON.
var mobile = {
  brand: 'iPhone',
  color: 'Alpine Green',
  model:'14 pro',
  price:'1450'
};
var convertINtoJson = JSON.stringify(mobile,null,5);
console.log(convertINtoJson);
document.write("<br>");
document.write(convertINtoJson);
console.log(JSON.stringify(mobile,null,5));

//Create a JSON for a Mobile with properties brand, color, model and price. Convert it to an Object.

   var json = '{"brand" : "iPhone","color": "Alpine Green","model":"14 pro","price":"1450"}'
   var obj = JSON.parse(json);
 
   console.log(obj);

   //Create a function named divide that accepts two numbers as parameters. 
   //If the second number is zero, throw a new Error with appropriate message. 
   //Call the function in a try...catch block.
// <h2>Try Catch for division</h2>
// 	<input id="number1" type="number">
// 	<input id="number2" type="number">
// 	<button type="buttonDivision" onclick="myFunction()">Calculate</button>
// 	<p id="error-message"></p>
document.write("<br>");
// var num1 = parseInt(document.getElementById("number1").value);
// var num2 = parseInt(document.getElementById("number2").value);
//var errorMessage = document.getElementById("error-message");
   function divide(){
   	var num1 = Number(document.getElementById("number1").value);
   	var num2 = Number(document.getElementById("number2").value);
   	try{	
	   	 if(num2!=0){
	   		var calculate = num1/num2;

	   		document.write("The result is: "+calculate);
	   		console.log(calculate);
	   	}else{
	   		throw "Divisor can't be Zero";
	   	}
	}catch(err) {
    		document.write(err);
  		}
   			
   }
   document.getElementById("divideBtn").onClick = divide();

	   
























