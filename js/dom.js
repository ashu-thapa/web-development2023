function clickMe(){
	var a = prompt("Enter the number");
	
	if(a%2==0){
		alert("Input number is even.");
	}else{
		alert("Input number is odd");
	}
}

function confirmToDelete(){

	var yes = confirm("Are you sure you want to remove it!!!");
	if(yes==true){
		alert("Successfully Deleted!!!");
	}else{
		alert("You can continue!!");
	}
}

var main = document.getElementById("main");
var heading = document.getElementById("heading");
heading.style.color = "blue";

var mainHeading = document.getElementsByClassName("main-heading");
mainHeading[0].style.border = "2px solid blue";

// Adding new class to the html file ////

main.classList.add("sub-menu");
main.classList.add("sub-menu1");
//removing first added class i.e. sub-menu
main.classList.remove("sub-menu");


//Adding new element button to DOM
var button1 = document.createElement("button"); //define the element
main.appendChild(button1);
button1.innerHTML = "Read More";

//Adding new element anchor tag 
var goToGoogle = document.createElement("a");
//var link = document.createTextNode("Link to Google");
goToGoogle.innerHTML = "Link to google";
//goToGoogle.appendChild(link);

goToGoogle.title="Link to Google";
goToGoogle.href="https://google.com";

main.appendChild(goToGoogle);

goToGoogle.style.textDecoration = "none";
goToGoogle.style.backgroundColor = "blue";
goToGoogle.style.color = "white";
goToGoogle.style.padding = "10px";
goToGoogle.style.margin = "10px";


//finding previous sibling of anchor tag

var findPrevios = goToGoogle.previousElementSibling;
findPrevios.style.backgroundColor = "blue";
findPrevios.style.color = "white";
findPrevios.style.padding = "12px";
findPrevios.style.margin = "10px";
findPrevios.style.border = "none";
console.log(findPrevios);

//Display the width and height of the window


//Create a button and set the location of the document to another resource on click.
//Create a new Date object with your full birth date and determine your age.

function age(dateString){
     var birth = new Date(dateString);
     var today = new Date();
     var age = today.getFullYear() - birth.getFullYear();
    
   console.log("You are "+ age + " years old");
 }

 age('June 21, 1994');

















