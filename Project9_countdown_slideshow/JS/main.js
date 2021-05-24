
// The statement “setTimeout(tick, 1000);” means that the program is pausing for 1,000 milliseconds (i.e., 1 second).
function countdown(){
    var seconds = document.getElementById("seconds").value;
 
     function tick(){
        var seconds = seconds - 1;
         timer.innerHTML = seconds;
         setTimeout(tick, 1000);
         if(seconds == -1){
             alert("time is up")
         }
     }
     tick()
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
   var dots = document.getElementsByClassName("dot");
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
 }
 
 



///////////Assignment Submission # 9
///////////Assignment Submission # 9
///////////Assignment Submission # 9
///////////Assignment Submission # 9
///////////Assignment Submission # 9
///////////Assignment Submission # 9
///////////Assignment Submission # 9
///////////Assignment Submission # 9



function count(){ // function name

    var seconds = document.getElementById("sec").value; // takes the value entered from input and applies it to this variable
 
     function tick(){       // nested function
         seconds = seconds -5; // -5 secs assigned to variable seconds
         timer1.innerHTML = seconds; //id name timer1 has now been assigned seconds
         setTimeout(tick, 500); // count time is .5 secs
         if(seconds == 0){  // if seconds is equal to 0 display string
             alert("start counting!")
         }
     }
     tick() // when function (count)is called it will call function (tick)
 }
 


 



//slideshow//slideshow//slideshow

var slideIndex = 1; // assigning slideindex as 1
slides(slideIndex); 

function control(a) {       //naming function (control) with a para as (a)
  slides(slideIndex += a); //giving the function (slides) the same value as (a)
}

function current(a) { //naming function (current) with a para as (a)
  slides(slideIndex = a);  //assigning slideindex as a variable (a) 
}

function slides(a) { //naming function (current) with a para as (a)
  var i; // declaring i as a variable
  var slides = document.getElementsByClassName("pic"); //assigned this class to a variable
  var square = document.getElementsByClassName("square");//assigned this class to a variable
  if (a > slides.length) {slideIndex = 1}    // if slide more than 1 display 1 ???????
  if (a < 1) {slideIndex = slides.length}    // less than 1 display 1 ???????
  for (i = 0; i < slides.length; i++) {// if at 0 then increase by 1??????? 
      slides[i].style.display = "none";  // if at slide 0 display nothing
  }
  for (i = 0; i < square.length; i++) { // when at 0 allow increment by 1
      square[i].className = square[i].className.replace(" active", "");// when arrows clicked replace with next slide
  }
  slides[slideIndex-1].style.display = "block";  //shows the squares and arrows
  square[slideIndex-1].className += " active";
}


// i don't fully understand which is why i have put ????? in the comments













