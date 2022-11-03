var first_name = "John";
var last_name = "Doe";
var first_name_initial = first_name.substr(0,1);
var last_name_initial = last_name.substr(0,1);
console.log(first_name_initial + ""+last_name_initial);

var para = "Encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy. Holistic entities without DOM representation (such as controllers or models) can be blocks as well."
console.log(para.substr(5,20));

var age = 12;
if(age>=18){
	console.log("Eligible to vote")
}else{
	console.log("Not eligible")
}

var marks = 75;
if(marks>=40){
	console.log("You have passed!");
}else{
	console.log("You have failed!!")
}

var num = 0;
switch (true){
	case num>0:
		console.log("Positive Number");
		break;
	case num<0:
		console.log("Negative Number");
		break;
	case num==0:
		console.log("Zero");
		break;
}

//Divisible by 7 or not
var num = 23;
if(num%7==0){
	console.log("Divisible")
}else{
	console.log("Not Divisible")
}

//Divisible by 7 and 5 or not

var num = 35;
if((num%7==0) &&(num%5==0)){

		console.log("Divisible by both 5 and 7")
}else{
	console.log("Not Divisible")
}


var num1 = 12, num2 =13, num3=9;
if((num1<num2)&&(num1<num3)){
	console.log("Num1 is smallest");

}else if((num2<num1)&&(num2<num3)){
	console.log("Num2 is smallest");
}else{
		console.log("Num3 is smallest");
}


// Create an array of 5 programming languages and extract third element
var newArray = ["C++", "Java","Python", "C","JavaScriipt"];
console.log(newArray[2]);
 
// Add a new element each at the first and last position
newArray.unshift("Scala"); //unshift adds element to first position
newArray.push("Ruby"); // push add element to last
console.log(newArray);

// Extract elements from 2nd to 4th position
console.log("Elements from 2nd to 4th position is: "+ newArray[1]+" ,"+newArray[3]);

//In the new aaray of 2nd to 4th position, search for an element
findArray = newArray.includes("scala",2);
console.log(findArray);

//sort the first array in reverse order
console.log(newArray.reverse());


//Create an array of 7 randon numbers.
//Sort the array from lowest to highest numbers

var num = [20, 55, 10, -40, 68, 200, -100];
var  sorting = num.sort(function(a,b){return a-b});
console.log(sorting);

//Sort the array from highest to lowest numbers

var  sorting = num.sort(function(a,b){return b-a});
console.log(sorting);

//Find the maximum number in the array
var maxi = Math.max.apply(null, num);
console.log("Maximum number is: "+ maxi);

//Find the minimum number in the array
var min = Math.min.apply(null, num);
console.log("Minimum number is: "+min);

//Create an object named Car and define properties like color, weight, brand, price, etc and:
//extract the color and brand of the object

var car = {
	color:"red",
	weight:"300kg",
	brand :"Toyota",
	price:"$25K"
};

console.log("Color is: "+(car.color)+" and the brand is: "+(car.brand));

//Add a new property mileage and give an appropriate value
car.mileage="9kmpl";
console.log(car);

//updating the price iof a car
car.price="$20k";
console.log("Updated price of the car is: "+car.price);
//deleting weight property
delete car.weight;
console.log(car);

//Create a while loop and display the numbers from 50 to 100 in a new line.
console.log("-----------------------display the numbers from 50 to 100 in a new line.-------------------------------")
var num =50;
while(num<=100){
	console.log(num+"\n");
	num++;
}
console.log("-----------------------display all odd numbers from 1 to 20-------------------------------")
//Create a do while loop and display all odd numbers from 1 to 20

var num1= 1;
do{
	if(num1%2!=0){
		console.log(num1);
	}
	num1++;

}while(num1<=20);




///Create a for loop to display the square of numbers from 5 to 15
console.log("-----------------------display the square of numbers from 5 to 15------------------------------")
for(i=5; i<=15; i++){
	console.log(i*i);
}

//loop through the array of programming languages and display all the elements
//console.log("----------------------loop through the array of programming languages and display all the elements------------------------------")

var i =0;
for(i=0;newArray[i];i++){
	console.log(newArray)
}


//Create a function, calculateVolume that accepts length, breadth and height of a box as parameters and display the volume
console.log("---------------------- display the volume------------------------------")
var length = 10, breadth = 20, height = 30;

function calculateVolume(l , b, h){
	var volume = l*b*h;
	console.log("the volume is: "+volume+"cm3");

}
calculateVolume(length,breadth,height);


//Create a form with fields First name, last name, email, password and gender
//Create a function, displayValues, to display the values of the form field when the form is submitted

var firstName = "John";
var lastName = "Doe";
var email = "johndoe@gmail.com";
var password = "asdfgh";
var gender = "Male"

function displayValues(firstname, lastname,email,password,gender){
	console.log(firstname,lastname,email,password,gender);
}
displayValues(firstName,lastName,email,password,gender);


















