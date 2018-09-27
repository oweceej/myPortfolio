//digitalClock.js
$(document).ready(function(){
	function displayTime() {
		var currentTime = new Date();  //gets the current time
		var hours = currentTime.getHours();
		var minutes = currentTime.getMinutes();
		var seconds = currentTime.getSeconds();
		var meridiem = "AM";

		// Convert from 24 hour format to 12 hour format
		if(hours > 12) {
			hours = hours - 12;
			meridiem = "PM";
		}

		// 0 AM and 0 PM should be read as 12
		if(hours === 0){
			hours = 12;
		}

		// if hours digit is less than 10
		if(hours < 10) {
			// Add the "0" digit to the front
			// so 9 becomes 09
			hours = "0" + hours;
		}

		// if minutes digit is less than 10
		if(minutes < 10) {
			// Add the "0" digit to the front
			// so 9 becomes 09
			minutes = "0" + minutes;
		}

		// if seconds digit is less than 10
		if(seconds < 10) {
			// Add the "0" digit to the front
			// so 9 becomes 09
			seconds = "0" + seconds;
		}

		// The clock variable gets a handle to the div named 'clock'
		var clockDiv = document.getElementById("clock");

		// Set the text inside the clock variable
		// to the hours, minutes, and seconds of the current time
		clockDiv.innerText = hours + ":" + minutes + ":" + seconds  + " " + meridiem;
	}
	// This makes the clock 'tick' by repeatedly
	// running the displayTime function every second
	setInterval(displayTime,1000);
});