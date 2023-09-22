let tablinks = document.getElementsByClassName("tab-link");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link")
  }
  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");

}

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right="-200px";
}






// submission
$("#submit-form").submit((e) => {
    e.preventDefault();
    if (validateForm()) {
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbxR8cB4kGx9QTtSbR6aVWU9Tr0t35NNGhoYfThEQ-o9MW5kiUyNZzn7mM7lrGV80gInBw/exec",
            data: $("#submit-form").serialize(),
            method: "post",
            success: function(response) {
                alert("Form submitted successfully");
                window.location.reload();
            },
            error: function(err) {
                alert("Something Error");
            }
        });
    }
});

//  contact validation


function validateForm() {
    var name = document.forms['myForm']['Name'].value;
    var email = document.forms['myForm']['email'].value;
    var message = document.forms['myForm']['Message'].value;

    if (!isNameValid(name)) {
        alert('Please enter a valid name with only characters');
        return false;
    }

    if (email === '') {
        alert('Please enter your email');
        return false;
    } else if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    if (message === '') {
        alert('Please enter your message');
        return false;
    }

    return true;
}

function isValidEmail(email) {
    // Basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isNameValid(name) {
    // Check if the name contains only characters (letters)
    var nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
}
        // contact validation end
