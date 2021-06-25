
function user() {
    var user = document.getElementById("user").value;
     if (user === "yes"){
         var create = document.getElementById("card");
     }
    else if (user === "no"){
        create = "never mind!";
     }    
     document.getElementById("resultt").innerHTML = create.innerHTML;
}


function myFunction() {
    var a = document.getElementById("name").value;
      var b = document.getElementById("age").value;
       var c = document.getElementById("height").value;
      var d = document.getElementById("weight").value;
  
   if (b < 19){
       g = "come back when your old enough!"
   }
   else if (b > 19){
       g = "your old enough, WELCOME " + a;
   }
    document.getElementById("name1").innerHTML = "your name is: " + a+ "<br>" +"your age is: " + b+"<br>" 
    + "your height is: " + c +"<br>" + "your weight is: " + d + "<br>" + g
  }





















