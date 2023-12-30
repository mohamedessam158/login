var nam;
if(  sessionStorage.getItem("names")!= null  ){
    nam = JSON.parse(sessionStorage.getItem("names"))
}

document.getElementById('message').innerHTML = `Welcome ${nam}` ;



function logout(){
    window.location.assign("index.html")
    sessionStorage.removeItemItem("names");
}



