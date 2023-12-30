var nameInput = document.getElementById("signupName");
var emailInput = document.getElementById("signinEmail");
var passwardInput = document.getElementById("signinPassword");
var nameMessage = document.getElementById("nameMessage");
var emailMessage = document.getElementById("emailMessage");
var passwardMessage = document.getElementById("passwardMessage");
var exist2= document.getElementById("exist2");
var signinBtn= document.getElementById("signinBtn");
var signinBtn2= document.getElementById("signinBtn2");
var infoList = [];
if(  localStorage.getItem("infoData") != null  ){
    infoList = JSON.parse(localStorage.getItem("infoData"))
}

function signUp() {
 if(validationName()==true&&validationEmail()==true &&validationPassward()==true){
  if(emailMatch()==true){
    document.getElementById('exist').innerHTML = `<span class="text-danger" >Email already exists</span>`
    nameInput.classList.remove("is-valid");
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
    passwardInput.classList.remove("is-valid");
    

  }
  else{
    var info = {
        name: nameInput.value,
        email: emailInput.value,
        passward: passwardInput.value,
      };
      infoList.push(info);
      localStorage.setItem("infoData", JSON.stringify(infoList));
      console.log(info);
      
      exist2.classList.add("d-none")
      signinBtn.classList.remove("d-none")
      signinBtn2.classList.add("d-none")
      document.getElementById('exist').innerHTML = `<span class="text-warning" >Success Sign up </span>`
  }

 }

else {
    document.getElementById('exist').innerHTML = `<span class="text-danger" >All Inputs are Required</span>`
    nameMessage.classList.add("d-none")
    nameInput.classList.remove("is-invalid");

}

}

function clearForm() {
  nameInput.value = "";
  emailInput.value = "";
  passwardInput.value = "";
}

function validationName() {
  var regexName = /^[a-z]{3,12}$/;

  if (regexName.test(nameInput.value)) {
    nameInput.classList.remove("is-invalid");
    nameInput.classList.add("is-valid");
    nameMessage.classList.add("d-none")
    return true;
  } else {
    nameInput.classList.remove("is-valid");
    nameInput.classList.add("is-invalid");
    nameMessage.classList.remove("d-none")
    return false;
  }
}

function validationEmail() {
  var regexEmail = /^[\w]{4,25}@[a-z]{2,7}.com$/;

  if (regexEmail.test(emailInput.value)) {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
    emailMessage.classList.add("d-none")
    return true;
  } else {
    emailInput.classList.add("is-invalid");
    emailInput.classList.remove("is-valid");
    emailMessage.classList.remove("d-none")
    return false;
  }
}

function validationPassward() {
  var regexPassword = /^[\w]{6,15}$/;

  if (regexPassword.test(passwardInput.value)) {
    passwardInput.classList.add("is-valid");
    passwardInput.classList.remove("is-invalid");
    passwardMessage.classList.add("d-none")
    return true;
  } else {
    passwardInput.classList.add("is-invalid");
    passwardInput.classList.remove("is-valid");
    passwardMessage.classList.remove("d-none")
    return false;
  }
}



function signUp2(){
    window.location.assign("index.html")
}





function emailMatch(){
    for(i=0 ; i<infoList.length ; i++){
        if(infoList[i].email == emailInput.value){
            return true
        }
    }

}



function passwordMatch(){
    for(i=0 ; i<infoList.length ; i++){
        if(infoList[i].password == passwardInput.value){
            return true
        }
    }

}

