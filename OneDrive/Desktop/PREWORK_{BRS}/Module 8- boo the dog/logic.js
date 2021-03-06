//When the factButtom is clicked.....
$("#factButton").on("click", function() {
	var number = Math.floor((Math.random() * booFactArray.length));
	// We display the favt from the catFactArray that is in the random position we just generated.
	$("#factText").text(booFactArray[number])
})

//This array holds all the boo facts
var booFactArray = ["Boo is a pomeranian", "Boo's best friend is another pomeranian named Buddy", "Boo the Pomeranian, was born on March 16, making him a Pisces", "Boo's favourite food is grass", "Boo has released two books",]
//When the textPink button is pressed...
$("#textPink").on("click", function() {
	$("#funText").css("color", "pink")
})

$("#textOrange").on("click", function() {
$("#funText").css("color", "orange")
})
$("#textGreen").on("click", function() {
	$("#funText").css("color", "green")
})

//When the boxGrow button is clicked...
$("#boxGrow").on("click", function() {
	$("#box").animate({height:"+=35px", 
		width:"+=35px"}, "fast");
})

$("#boxShrink").on("click", function() {
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})