//Challenge #29
//Open one of your HTML files, and create an effect that makes 
//it so the elements fade in as the page loads
 $(document).ready(function(){   
  $( "h1" ).fadeOut( 1500 )   
  $( "h1" ).fadeIn( 1500 );
  $( "h1" ).fadeOut( 1500 )   
  $( "h1" ).fadeIn( 1500 );
  });






//Challenge #30
//Utilize JavaScript Form Validation to create an alert if someone attempts to submit the form with an empty field(s).
  function validateForm() {
    let form = document.forms["Form"]["first_name"].value;
    if (form == "") {
      alert("All fields must be filled out");
      return false;
    }
  }



//Challenge #31 
  function closeForm() {
    document.getElementById("Form").style.display = "none";
  }

  function openForm() {
    document.getElementById("Form").style.display = "block";
  }
  



//Challenge #35
  $(".slide > div:gt(0)").hide();

  setInterval(function() {
    $('.slide > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('.slide');
  }, 3000);








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
 
















