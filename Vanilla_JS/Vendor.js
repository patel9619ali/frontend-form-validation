console.log("This is a Login Form"); 

    // let login = document.getElementById("login");
    
    // login.addEventListener("click" , function(){
    //     let email = document.getElementById("email");
    //     let password_input = document.getElementById("password_input");
    //     let placeholderForEmial =  document.getElementsByName('email')[0].placeholder;
    //     let placeholderForPassword =  document.getElementsByName('password')[0].placeholder;
    //     function onsubmit(){
    //         if(email.value === ""){
    //             email.style.border = "1px solid red";
    //             let mailto = document.getElementById("mailto");
    //             mailto.innerText = placeholderForEmial;
    //             mailto.style.display = "block";
    //         }
    //         else{
    //             email.style.border = "1px solid black";
    //             mailto.style.display = "none";
    //         }
    //         if(password_input.value === ""){
                
    //             password_input.style.border = "1px solid red";
    //             let password_label = document.getElementById("password_label");
    //             password_label.innerText = placeholderForPassword;
    //             password_label.style.display = "block";
    //         }
    //         else{
    //             password_input.style.border = "1px solid black";
    //             password_label.style.display = "none";
    //         }
    //         let form_wrapper = document.getElementById("form_wrapper");
    //         let form_wrapper_sign_up = document.getElementById("form_wrapper_sign_up");
    //         if(email.value === "" || password_input.value === ""){
    //             console.log("true")
    //             form_wrapper.style.display = "block";
    //             form_wrapper_sign_up.style.display = "none";
    //         }
    //         else{
    //             form_wrapper.style.display = "none";
    //             form_wrapper_sign_up.style.display = "block";
    //         }
    
    //     }
    //     onsubmit()
        
            
       
    
    // });
    
    
    // let login = document.getElementById("login");
    
    // login.addEventListener("click" , function(){
    //     let regForName = /^[A-Z][A-Za-z]*\s[a-zA-Z]{3,}\s[a-zA-Z]{3,}/g;
    //     let fname = document.getElementById("fname");
    //     let fname_value = fname.value;
    //     console.log(fname_value);
    //     if(fname_value.match(regForName)){
    //         console.log("true");
    //     }
    //     else{
    //         console.log("False");
    //     }
    // })
    
    
    
    
   
    
    // for (let key of input) {
    //     key.addEventListener("keyup" , function(){
    //     console.log(key);
    //     console.log(input.value);  
    
    //     });
    // }
    
   
    // class error {
    //     constructor() {
    //       this.validation = "Error Generated";
    //       this.not_validation = "Error Not Generated";
    //       this.error_fname = "Please Start With Capital letter";
    //       this.error_lname = "Please Start With Capital letter";
    //       this.error_phone_number = "Please Write Phone Number only 10 digits are allowed";
    //       this.error_email_address = "Please Write Valid Email Address";
    //     }
    //   }
   
      //  let login_submit = document.getElementById("login");
      //  login_submit.addEventListener("click" , function()
      //   {
      //       let inputs = document.querySelectorAll(".input_field");
      //       let form_control = document.querySelectorAll(".form_control");
      //       form_control.forEach(myfunction);
      //       function myfunction(itemsearch){
      //          let firstname = document.getElementById("fname");
      //          let abc =  firstname.value
      //          let regex_validation = new regex();
      //          if(abc.match(regex_validation.fname)){
      //           //    itemsearch.
      //          }
      //          else{
      //              console.log("false");
      //          }
               
                // console.log(inputs);
                // inputs.forEach(allInputs);
                // function allInputs(items) 
                // {
                //     itemsValue = items.value;
                //     console.log(itemsValue)
                //     let erorr_validation = new error();
                //     let label_field = document.querySelectorAll(".label_field");
                //     label_field.forEach(myfunction)
                //    function myfunction(items_label)
                //     {
                //         if(itemsValue === "")
                //         {
                //                 items_label.style.display = "block";
                //             }
                //             else
                //             {
                //                 items_label.style.display = "none";
                //             }
                //         }
                //     }
        //     } 

        // })  
    // function allInputs(items){
    //     items.addEventListener("keyup" , function(e){
    //         let regex_validation = new regex();
    //         let select_input = e.target;
    //         let getting_input_value = e.target.value;
    //         function allValues(){
    //             function firstname(){
    //                 if(getting_input_value.match(regex_validation.fname)){
    //                     select_input.classList.add('valid');
    //                     select_input.classList.remove('in_valid');
    //                 }
    //                 else{
    //                     select_input.classList.remove('valid');
    //                     select_input.classList.add('in_valid');
    //                 }
    //             }
    //             function lastname(){
    //                 if(getting_input_value.match(regex_validation.lname)){
    //                     select_input.classList.remove('in_valid');
    //                     select_input.classList.add('valid');
    //                 }
    //                 else{
    //                     select_input.classList.remove('valid');
    //                     select_input.classList.add('in_valid');
    //                 }
    //             }
    //             function phoneNumber(){
    //                 if(getting_input_value.match(regex_validation.phone_number)){
    //                     select_input.classList.add('valid');
    //                     select_input.classList.remove('in_valid');
    //                     console.log("true");
    //                 }
    //                 else{
    //                     select_input.classList.remove('valid');
    //                     select_input.classList.add('in_valid');
    //                     console.log("False");
    //                 }
    //             }
    //             function emailAddress(){
    //                 if(getting_input_value.match(regex_validation.email_address)){
    //                 // console.log("True");
    //                 }
    //                 else{
    //                 // console.log("False");
    //                 }
    //             }
    //             firstname();
    //             lastname();
    //             phoneNumber();
    //             emailAddress();
    //         }
    //         allValues();
    
    //     }
    // )};
    class regex {
      constructor() {
        this.fname = /^[A-Za-z]{1,}/g;
        this.phone_number = /^\d{10}$/g;
        this.email_address = /[a-z].+@.+/g;
      }
    }


    let login_button = document.getElementById("login");

    login_button.addEventListener("click" , function(e){
       formvalidate();
       e.preventDefault();
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
      console.log (valueOfFullName);
      let regex_validation = new regex();
      if(valueOfFullName === ""){
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
  //   })
  // }
}

     function setErrorClass(input , message)
    {
      let form_control = input.parentElement;
      console.log(form_control);
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


// class regex {
//   constructor() {
//     this.fname = /^[A-Z][a-z]*/g;
//     this.lname = /^[A-Z][a-z]*/g;
//     this.phone_number = /^\d{10}/g;
//     this.email_address = /[a-z].+@.+/g;
//   }
// }



// let form_control = document.querySelectorAll(".form_control");
// form_control.forEach(myfunction);
// function myfunction(itemsearch){
// itemsearch.addEventListener("keyup" , function(){
//    formvalidate();
   
// });

// function formvalidate(){
// let login_button = document.getElementById("login");
// login_button.addEventListener("click" , function(e){
//   let fullname = document.getElementById("fname");
//   let phonenumber = document.getElementById("number");
//   let EmailVerification = document.getElementById("Email");
//   let valueOfFullName = fullname.value.trim();
//   let valueOfphonenumber = phonenumber.value.trim();
//   let valueOfEmail = EmailVerification.value.trim();
//   console.log (valueOfFullName);
//   e.preventDefault();
// })

// }

// }