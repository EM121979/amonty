function checkPassword(){
    const pass = document.getElementById("password").value;
    const error = document.getElementById("error");

    if(pass === "2272004"){
        window.location.href = "message.html";
    }else{
        error.innerText = "❌ الباسورد غلط";
    }
}