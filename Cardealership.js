//<script type="text/javascript">
 //   var mytextbox = document.getElementById('mytext');
//    var mydropdown = document.getElementById('dropdown');

//    mydropdown.onchange = function(){
 //         mytextbox.value = mytextbox.value  + this.value; //to appended
         //mytextbox.innerHTML = this.value;
 //   }
//</script>

// https://manual.limesurvey.org/Workarounds:_Manipulating_a_survey_at_runtime_using_Javascript 


function validateForm() {
	var Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, text;
	
	/* Question 3 Practice */
	document.getElementById("")
	
	/* Question 1 */
	Q1 = document.getElementById("greet").value;
	if (document.getElementById("greet").checked = false) {
		text = " Please select where you were greeted.";
	}
	document.getElementById("Q1").innerHTML = text;
	
	/* Question 2 */
	var q2 = document.forms["mySurvey"]["salesPersonName"].value;
	if (q2 == null || q2 == "") {
		text = "Sales person name must be filled out";
	}
	document.getElementById("Q2").innerHTML = text;
	
	/* Question 3 */
	if (document.getElementById("knowledgable").checked = false) {
		text = "Please select how knowledgable was your sales person.";
	}
	document.getElementById("Q3").innerHtml = text;
		
	/* Question 4 */
	if (document.getElementById("selection").checked = false) {
		text = "Please let us know if we had the vehicles you were looking for.";
	}
	document.getElementById("Q4").innerHTML = text;
	
    /* Question 5 */
    if (document.getElementById("testdrive").selectedIndex == 0) {
		text = "Please select if you were offered a test drive or not.";
	}
	document.getElementById("Q5").innerHTML = test;
	
	/* Question 6A */
	if (document.getElementById("salesperson").checked = false) {
		text = "Please select how satisfied you were with your sales person.";
	}
	document.getElementById("Q6A").innerHTML = text;
	
	/* Question 6B */
	if (document.getElementById("financeperson").checked = false) {
		text = "Please select how satisfied your were with your finance person.";
	}
	document.getElementById("Q6B").innerHTML = text;
	
	/* Question 6C */
	if (document.getElementById("experience").checked = false) {
		text = "Please select how satisfied you were with your overall experience.";
	}
	document.getElementById("Q6C").innerHTML = text;
	
	/* Question 6D */
	if (document.getElementById("vehicle").checked = false) {
		text = "Please select how satisfied were you with your vehicle?";
	}
	document.getElementById("Q6D").innerHTML = text;
	
	/* Question Q7 */
	if (document.getElementById("advertising").checked = false) {
		text = "Please choose why you selected our dealership.";
	}
	document.getElementById("Q7").innerHTML = text;
	
	/* Question Q8 */
	if (document.getElementById("waitarea").checked = false) {
		text = "Please choose an answer about our waiting room.";
	}
	document.getElementById("Q8").innerHTML = text;
	
	  /* Question 9 */
    if (document.getElementById("recommend").selectedIndex == 0) {
		text = "Please select an answer for if you would recommend us.";
	}
	document.getElementById("Q9").innerHTML = text;
	
	/* Question 10 */
	var Q10 = document.forms["mySurvey"]["customerName"].value;
	if (Q10 == null || Q10 == "") {
		text = "Your name must be filled out.";
	}
	document.getElementById("Q10").innerHTML = text;
	
	/* Question 11 */
	var Q11 = document.forms["mySurvey"]["dobetter"].value;
	if (Q11 == null || Q11 == "") {
		text = "Please type a way we can do better.";
	}
	document.getElementById("Q11").innerHTML = text;
}
}