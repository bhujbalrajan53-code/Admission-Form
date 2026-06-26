const scriptURL = "https://script.google.com/macros/s/AKfycbyKJQUuTxWPA4FYmdEof7QH1MAreFHpor_ILAOyqg4QIK6alxxTgH-hKRML_3qZfSZn/exec";

const form = document.getElementById("admissionForm");

const message = document.getElementById("message");

form.addEventListener("submit", async function(e){

e.preventDefault();

const data = {

name:form.name.value,

email:form.email.value,

phone:form.phone.value,

dob:form.dob.value,

gender:form.gender.value,

course:form.course.value,

address:form.address.value

};

try{

const response = await fetch(scriptURL,{

method:"POST",

body:JSON.stringify(data)

});

const result = await response.json();

message.innerHTML="Admission Form Submitted Successfully.";

form.reset();

}catch(error){

message.style.color="red";

message.innerHTML="Submission Failed.";

}

});
