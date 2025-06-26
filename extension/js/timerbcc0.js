
const timerId = [];

function timer(elementId, seconds,show='short') {
	// show = full or short

	function fireTimer(){

		// clear any not exist interval
		if($('#' + elementId).length == 0) {
			clearInterval(timerId[elementId]);
			// for debugging
			//  console.log(elementId + ': removed');
		}
		// for debugging
		// console.log(elementId);


		let days = Math.floor(seconds / 24 / 60 / 60);
		let hoursLeft = Math.floor((seconds) - (days * 86400));
		let hours = Math.floor(hoursLeft / 3600);
		let minutesLeft = Math.floor((hoursLeft) - (hours * 3600));
		let minutes = Math.floor(minutesLeft / 60);
		let remainingSeconds = seconds % 60;
		if (remainingSeconds < 10) {
			remainingSeconds = "0" + remainingSeconds;
		}
		if(show=='short')
			$("[id=" + elementId + "]").html( days + ":" + hours + ":" + minutes + ":" + remainingSeconds );

		if(show=='full') {
			let showDays='';
			if(days!=0) showDays="<div class='timer-item'>" + days + " <br/>" + timerLang['day'] + " </div>";


			$("[id=" + elementId + "]").html(
				showDays
				+
				"<div class='timer-item'>" + hours + "<br/> " + timerLang['hour'] + " </div>"
				+
				"<div class='timer-item'>" + minutes + "<br/> " + timerLang['minute'] + " </div>"
				+
				"<div class='timer-item timer-item-second'>" + remainingSeconds + "<br/> " + timerLang['second'] + " </div>"

			) ;
		}

		if (seconds == 0) {

			document.querySelectorAll("#" + elementId).innerHTML = "--";
		} else {
			seconds--;

		}
	}
	// run first time
	fireTimer();

	// just run one setInterval per product id
	clearInterval(timerId[elementId]);
	timerId[elementId] = setInterval(function() { fireTimer();}, 1000);



}