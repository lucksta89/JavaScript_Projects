
function user() {
    var user = document.getElementById("user").value;
     if (user === "yes"){
         var create = document.getElementById("card");
     }
    else if (user === "no"){
        create = "never mind!";
     }    
     document.getElementById("result").innerHTML = create.innerHTML;
}


function myFunction() {
    var a = document.getElementById("name").value;
      var b = document.getElementById("age").value;
       var c = document.getElementById("height").value;
      var d = document.getElementById("weight").value;
  
   if (b <= 17){
       g = "come back when your old enough!"
   }
   else if (b >= 18){
       g = "your old enough, WELCOME " + a;
   }
    document.getElementById("name1").innerHTML = "your name is: " + a+ "<br>" +"your age is: " + b+"<br>" 
    + "your height is: " + c +"<br>" + "your weight is: " + d + "<br>" + g;
  }









  function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
 var slideIndex = 1;
 showSlides(slideIndex);
 
 function plusSlides(n) {
   showSlides(slideIndex += n);
 }
 
 function currentSlide(n) {
   showSlides(slideIndex = n);
 }
 
 function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("demo");
   var captionText = document.getElementById("caption");
   if (n > slides.length) {slideIndex = 1}    
   if (n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
   captionText.innerHTML = dots[slideIndex-1].alt;

 }
 
 














