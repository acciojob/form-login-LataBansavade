function getFormvalue() {
    //Write your code here
	var firstName = document.forms["form1"]["fname"].value;
  var lastName = document.forms["form1"]["lname"].value;
	
  if (firstName !== "" && lastName !== "") {
    // Display the first and last name using alert
    alert(firstName + " " + lastName);
  } 
  // Prevent the form from submitting and refreshing the page
  return false;

}
