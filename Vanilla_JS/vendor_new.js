class regex {
  constructor() {
    this.fname = /^[A-Za-z]{1,}/g;
    this.phone_number = /^\d{10}$/g;
    this.email_address = /[a-z].+@.+/g;
    this.random_number = Math.floor(Math.random() * 100000);
  }
}

let regex_validation = new regex();
let random_text = document.getElementById('random_text');
random_text.setAttribute("value", regex_validation.random_number);
let login_button = document.getElementById("login");
login_button.addEventListener("click" , function(e){
      e.preventDefault();
      formvalidate();
   
});

function formvalidate(){
// let input_field = document.querySelectorAll(".input_field");
// input_field.forEach(myfunction);
// function myfunction(itemsearch){
//   itemsearch.addEventListener("keyup" , function(){
  let fullname = document.getElementById("fname");
  let phonenumber = document.getElementById("number");
  let EmailVerification = document.getElementById("Email");
  

  let valueOfFullName = fullname.value.trim();
  let valueOfphonenumber = phonenumber.value.trim();
  let valueOfEmail = EmailVerification.value.trim();
  
  if(valueOfFullName == ""){
    setErrorClass(fullname , 'It Cannot be Access Blank');
  }
  else if(!valueOfFullName.match(regex_validation.fname)){
    setErrorClass(fullname , 'It Should contains only alphabet')
  }
  else{
    setSuccessClass(fullname , '')
  }
  if(valueOfphonenumber === ""){
    setErrorClass(phonenumber , 'It Cannot be Access Blank');
  }
  else if(!valueOfphonenumber.match(regex_validation.phone_number)){
    setErrorClass(phonenumber , 'Should Contain only Numbers and should be of 10 digits')
  }
  else{
    setSuccessClass(phonenumber , '')
  }
  if(valueOfEmail === ""){
    setErrorClass(EmailVerification , 'It Cannot be Access Blank');
  }
  else if(!valueOfEmail.match(regex_validation.email_address)){
    setErrorClass(EmailVerification , 'Should Contains @')
  }
  else{
    setSuccessClass(EmailVerification , '')
  }

  
  let matching_text = document.getElementById("matching_text");
  let matching_letters = matching_text.value.trim();
  if(matching_letters === "" || !matching_letters.match(random_text.value) || matching_letters.length > 5){
      setErrorClass(matching_text , 'It Should be Same as of the upper Value for Verification');
  }
  else{
      setSuccessClass(matching_text , '');
  }
  }

 function setErrorClass(input , message){
  let form_control = input.parentElement;
  let label = form_control.querySelector(".label_field");
  label.innerText = message;
     form_control.classList.add("error");
     form_control.classList.remove("sucess");
}
 
  function setSuccessClass(input , message)
{
  let form_control = input.parentElement;
  let label = form_control.querySelector(".label_field");
  form_control.classList.add("sucess");
  form_control.classList.remove("error");
  label.innerText = message;
}