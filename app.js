// Make sure all the html content is loaded before using jQuery.
$(document).ready(function () {
	// Select the <input> button by the id
	//   $("#btnSubmit").click(function () {
	//     //console.log("working");
	//     // Select the input field attribute
	//     let inputField = $("[type=text]");
	//     // If the inputfield is not filled out then disable the button.
	//     // Create a varaible that stors the value of what was submitted
	//     let form = $(inputField).val();
	//     // Create an alert that takes the form variable
	//     alert(form);
	//   });
	// Set a div element to a variable

	let div = "<div></div>";
	// Add div variable to the body
	$("body").append(div);
	// Disable the button
	$("#btnSubmit").attr("disabled", "disabled");
	// Create variable to save the input text
	let inputFieldText = $("input[type=text]");
	// Create event listener to listen for when a key is pressed
	$(inputFieldText).on("keypress", function () {
		// If statement to check if the input field is not empty
		if (inputFieldText.val() !== "") {
			// Change disabled to false
			$("#btnSubmit").prop("disabled", false);
		} else {
			// Change disabled to true
			$("#btnSubmit").prop("disabled", true);
		}
	});

	$("#btnSubmit").on("click", function (event) {
		// Me before Luke helped me with event.preventDefault() https://media.giphy.com/media/lQCV6K36nJfJYNxXbC/giphy.gif

		event.preventDefault();

		//Me after Luke helped me with event.preventDefault()https://media.giphy.com/media/x3b1Cd7a7JnaM/giphy.gif

		// store input value to a variable
		let inputVal = inputFieldText.val();
		// let colors = [
		// 	"rgb(0, 0, 0)",
		// 	"#00FF00",
		// 	"#0000FF",
		// 	"#FFFF00",
		// 	"#FF00FF",
		// 	"#00FFFF",
		// 	"#000000",
		// ];
		// Alert the input value
		//alert(inputVal);
		// Append text in an h2 element
		// let h2 = $("<h2></h2>").append(inputVal);
		// $("div").append(h2);
		// $("h2").mouseover(function () {
		//   $("h2").css({ "background-color": "red", "border-radius": "10px" });
		// });

		// Create a variable to save a ul element
		let ul = $("<ul></ul>");
		// Create a variable to save a li element
		let li = $("<li></li>").append(inputVal);

		// add the li to the ul element
		ul.append(li);
		// give li element a pointer for a cursor
		li.css("cursor", "pointer");
		// Add ul to the body
		$("body").append(ul);

		// Create a event listener to the li element that listens for a click
		li.click(function () {
			// Create 3 variables that gives a random number between 0 - 255
			let red = Math.floor(Math.random() * 256);
			let green = Math.floor(Math.random() * 256);
			let blue = Math.floor(Math.random() * 256);
			// Give li an rgb color from the 3 color variables
			li.css("color", "rgb(" + red + ", " + green + ", " + blue + ")");
		});

		// Create an event listener for when the li element is double clicked, it removes the element from the DOM.
		li.dblclick(function () {
			li.remove();
		});
	});

	//   $("#btnSubmit").click(function (event) {
	//     event.preventDefault();
	//     let item = "<h1>Testing</h1>";
	//     $("body").append(item);
	//   });
});
