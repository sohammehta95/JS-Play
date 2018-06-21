var button = document.querySelector("#find");
button.addEventListener("click", function() {
  var year = prompt("What is your birth year (YYYY)");
	var month = prompt("What is your birth month (0-12)");
	var day = prompt("What is your birth day? (0 - 31)");
	var d = new Date(year,month,day);
	alert( " You are " + getAge(d) + " years old");

});


function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

