
function user() {
    var user = document.getElementById("user").value;
    if (user === "yes"){
       var b = "Ok thats great keep on going!"
    }
    else if (user === "no"){
         b = "Maybe try something else."
    }
    document.getElementById("answer").innerHTML = b;
}



