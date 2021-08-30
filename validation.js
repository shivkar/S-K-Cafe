
function printError(elemId, hintMsg) { document.getElementById(elemId).innerHTML = hintMsg;}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var phone = document.contactForm.phone.value;
    var inquiry = document.contactForm.inquiry.value;
    var choice = document.contactForm.choice.value;
    var questionnaire = [];
    var checkboxes = document.getElementsByName("questionnaire");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate day array with selected values
            questionnaire.push(checkboxes[i].value) }}
    
	// Defining error variables with a default value
    var nameErr = emailErr = phoneErr = inquiryErr = choiceErr = true;
    
    // Validate ALL // Regular expression for basic email validation
    if(name == "") {printError("nameErr", "Please enter your name");}
	else {var regex = /^[a-zA-Z\s]+$/;if(regex.test(name) === false) {printError("nameErr", "Please enter a valid name"); }
	else { printError("nameErr", ""); nameErr = false;}}
    
   
    if(email == "") { printError("emailErr", "Please enter your email address");} 
	else {var regex = /^\S+@\S+\.\S+$/;
    if(regex.test(email) === false) {printError("emailErr", "Please enter a valid email address");
	} else{printError("emailErr", ""); emailErr = false;}}
 
    if(phone == "") {
        printError("phoneErr", "Please enter your mobile number");
    } else {var regex = /^[1-9]\d{9}$/;
   if(regex.test(phone) === false) { printError("phoneErr", "Please enter a valid 10 digit mobile number");
        } else{ printError("phoneErr", ""); phoneErr = false;}}
    
    if(inquiry == "Select") { printError("inquiryErr", "Please select option") }
	else { printError("inquiryErr", ""); inquiryErr = false;}

   
    if(choice == "") { printError("choiceErr", "Please select your choice");}
	else {printError("choiceErr", "");choiceErr = false;}
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || phoneErr || inquiryErr || choiceErr) == true) {return false;}
	else { var dataPreview = ["The data has been provided"] // Creating a string from input data for preview
	alert(dataPreview);}};
 // Display input data in a dialog box before submitting the form
        