var emailInput = document.getElementById("signinEmail");
var passwardInput = document.getElementById("signinPassword");
var incorrectMessage=document.getElementById("incorrect");
var Message=document.getElementById("message");
var name;

var infoList = [];
if(  localStorage.getItem("infoData") != null  ){
    infoList = JSON.parse(localStorage.getItem("infoData"))
}



function emailMatch(){
    for(i=0 ; i<infoList.length ; i++){
        if(infoList[i].email == emailInput.value){
          name=infoList[i].name;
          sessionStorage.setItem("names", JSON.stringify(name));
            return true
        }
    }

}



function passwordMatch(){
    for(i=0 ; i<infoList.length ; i++){
        if(infoList[i].passward == passwardInput.value){
          
            return true
        }
    }

}
// window.location.assign("home.html")
// console.log('12')

function login(){
    if(emailMatch()){
     if(passwordMatch()){
        window.location.assign("home.html")
        

       
      
    
     }
     else {
        document.getElementById('incorrect').innerHTML = `<span class="text-danger" >incorrect passward </span>`
       
     }
    }
    else {
        document.getElementById('incorrect').innerHTML = `<span class="text-danger" >incorrect Email </span>`
    }

}



































