var button = document.querySelector("#find");
button.addEventListener("click", function() {
  	var answer = prompt("Who is the smartest person on earth?");

	var count  = 0;
	while(answer.toLowerCase().indexOf("soham") === -1) {
		var answer = prompt("Seriously, Who is the smartest person on earth?");
		count++;
		if(count==3)
		{
			alert("Its me DUH!");
			break;
			
		}
	}

	if(count<3)
	alert("YAY, SEEMS LIKE SOMEONE IS SMART!!!");

});


