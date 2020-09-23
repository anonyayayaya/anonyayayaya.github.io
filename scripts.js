var precincts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
var precinct_found = true;
var precinct_avail;

function checkRegistrationCode() {
    var registrationcode = document.getElementById("registrationCodeInput").value;
    if (registrationcode == '19kjjna*&D389jsl09AFJ4%^olr2w43o9ia')
        document.write("Oops, that's not a valid registration code. Please try again and make sure you can differentiate your capital i's and lowercase l's.");
    else if (registrationcode == '19kjjna*&D389jsI09AFJ4%^oIr2w43o9ia')
        document.write("Oops, that's not a valid registration code. Please try again and make sure you can differentiate your capital i's and lowercase l's.");
    else if (registrationcode == '19kjjna*&D389jsI09AFJ4%^olr2w43o9ia')
        document.write("Oops, that's not a valid registration code. Please try again and make sure you can differentiate your capital i's and lowercase l's.");
    else if (registrationcode != '19kjjna*&D389jsl09AFJ4%^oIr2w43o9ia')
        document.write("Oops, that's not a valid registration code. Please try again");
    else
        window.location.href = './choosefavactivity.html';
}
function buzzfeedredirect(direction) {
    if (direction == 'next')
        window.location.href = './selectprecinct.html';
    else if (direction == 'back')
        window.location.href = './bannerads.html';
}

function precinctClick(num) {
    const index = precincts.indexOf(num);
    var len = precincts.length;
    console.log(len);

    if ((index > -1) && (len == 1)) {
        precincts.splice(index, 1);
        precinct_avail = num;
    }
    else if ((index > -1))
        precincts.splice(index, 1);
    if ((len <= 1) && (precinct_avail == num)) {
        if (confirm('This precinct is not full. Do you want to look for another location?')) {
            console.log('do nothing');
        }
        else
            window.location.href = './finalform.html';
    }
    else   
        alert("Sorry, this precinct is full. Please choose another location.");
}

function submitFinalQuiz1() {
    let formValid = true;
    if (!(document.getElementById("q1t").checked) && (document.getElementById("q1f").checked)) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete. Remember that you can vote before election day.");
        formValid = false;
    }
    else if (!document.getElementById("q2t1").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete.");
        formValid = false;
    }
    if (!document.getElementById("q2t2").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete.");
        formValid = false;
    }
    if (!document.getElementById("q2t3").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete. Remember that only IDs from US institutions are valid.");
        formValid = false;
    }
    if (document.getElementById("q2f1").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete.");
        formValid = false;
    }
    if (document.getElementById("q2f2").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete.");
        formValid = false;
    }
    if (document.getElementById("q2f3").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete. Remember that utility bills are allowed.");
        formValid = false;
    }
    if (document.getElementById("q2f4").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete.");
        formValid = false;
    }
    if (document.getElementById("q2f5").checked) {
        alert("Sorry, that's not right. Please select the right answers according to the information provided in the previous page. You must show that you're well informed to vote before registration is complete.");
        formValid = false;
    }
    if (formValid == true) {
        window.location.href = './finalquiz2.html';
    }
}

function submitFinalQuiz2() {
    let formValid = true;
    if (!(document.getElementById("q1t").checked) && (document.getElementById("q1f").checked)) {
        formValid = false;
        alert("Sorry, that's not right. If you don't bring your ID, you will be asked to sign a statement that you are the registered voter you claim to be.");
    }
    if (formValid == true) {
        window.location.href = './finalquiz3.html';
    }
}

function submitFinalQuiz3() {
    let formValid = true;
    if (document.getElementById("sign").value != "sign") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (document.getElementById("statement").value != "statement") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (document.getElementById("registered").value != "registered") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (document.getElementById("noon").value != "noon") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (document.getElementById("Friday").value != "Friday") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (document.getElementById("local").value != "local") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (document.getElementById("electoral").value != "electoral") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (document.getElementById("board").value != "board") {
        formValid = false;
        alert("Please fill out the fields accurately and exactly.");
    }
    if (formValid == true) {
        window.location.href = './finalquiz4.html';
    }
}

function submitFinalQuiz4() {
    let formValid = true;
    if (!(document.getElementById("q1t").checked) && (document.getElementById("q1f").checked)) {
        formValid = false;
        alert("Sorry, that's not right. Remember that The early voting period runs from Friday, September 18, 2020 to Saturday, October 31, 2020, but dates and hours may vary based on where you live.");
    }
    console.log(document.getElementById("sept18").value == '2020-09-18');
    console.log(document.getElementById("oct31").value == '2020-10-31');
    if (formValid == true) {
        window.location.href = './done.html';
    }
}

function submitFinalForm() {
    let formValid = true;
    if (document.forms["finalForm"]["firstname"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["lastname"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["email"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["phone"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["street"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["city"].value.length == 0) {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["gender"].value != "male" && document.forms["finalForm"]["gender"].value != "Male" && document.forms["finalForm"]["gender"].value != "female" && document.forms["finalForm"]["gender"].value != "Female") {
        document.getElementById("finalFormErrors").innerHTML = "Please fill out the missing input.";
        formValid = false;
    } if (document.forms["finalForm"]["mentally_incompetent"].value != "no" && document.forms["finalForm"]["mentally_incompetent"].value != "No") {
        document.getElementById("finalFormErrors").innerHTML = 'Please correctly answer only "yes" or "no" (no single or double quotes) to the mental competency question.';
        formValid = false;
    } if (document.forms["finalForm"]["state"].value != "VA") {
        document.getElementById("finalFormErrors").innerHTML = "Sorry, " + document.forms["finalForm"]["state"].value + " citizens are not eligible to vote in the Virginia primaries.";
        formValid = false;
    } if (document.forms["finalForm"]["country"].value != 'US') {
        document.getElementById("finalFormErrors").innerHTML = "Sorry, " + document.forms["finalForm"]["country"].value  + " citizens are not eligible to vote in the US.";
        formValid = false;
    } if (!document.forms["finalForm"]["email"].value.includes("@")) {
        document.getElementById("finalFormErrors").innerHTML = "Please enter a valid email.";
        formValid = false;
    } if (!document.forms["finalForm"]["email"].value.includes(".com") && !document.forms["finalForm"]["email"].value.includes(".edu") && !document.forms["finalForm"]["email"].value.includes(".io") && !document.forms["finalForm"]["email"].value.includes(".net") && !document.forms["finalForm"]["email"].value.includes(".org")) {
        document.getElementById("finalFormErrors").innerHTML = "Please enter a valid email.";
        formValid = false;
    } if (isNaN(document.forms["finalForm"]["phone"].value) == true) {
        document.getElementById("finalFormErrors").innerHTML = "Please enter only digits for your phone number.";
        formValid = false;
    } if (!document.forms["finalForm"]["phone"].value.length == 10) {
        document.getElementById("finalFormErrors").innerHTML = "Please enter your US phone number.";
        formValid = false;
    }

    if (formValid) {
        window.location.href = './details.html';
    }

}