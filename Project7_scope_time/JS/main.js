


function get_date() {
    if (new Date().getHours() < 18) {//if the time is < 18pm display message other wise display nothing
        document.getElementById("greeting").innerHTML  = "how are you today";
    }
}



function state() {
if (a = (20 > 10) ? "hello" : " goodbye");
document.getElementById("state").innerHTML = a;
}





function age_function() {
    var age = document.getElementById("age").value;
    if (age >= 18){
        var vote = "your old enough to vote";
    }
    else{
        vote = "your not old enough to vote"
    }
    document.getElementById("how_old_are_you?").innerHTML = vote;
}




function alcohol() {
    var drink = document.getElementById("your_age").value;
    if(drink >= 18){
        var drinking = "your old enough to buy alcohol";
    }
    else{
        drinking = "your not old enough to buy alcohol"
    }
    document.getElementById("result").innerHTML = drinking;
}



function time_function() {
   var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = " its morning time ";
    }
    else if (time > 12 == time < 18){
        reply = " its afternoon ";
    }
    else{
        reply = "its evening time ";
    }
    document.getElementById("time_of_the_day").innerHTML = reply;
}




//////////////////////////////Assignment Submission # 7
//////////////////////////////Assignment Submission # 7
//////////////////////////////Assignment Submission # 7
//////////////////////////////Assignment Submission # 7
//////////////////////////////Assignment Submission # 7
//////////////////////////////Assignment Submission # 7



// Assign a global variable
var a = " hello my name is" + " Dan "  //assigned a string to a variable and concatenate it
a = a.fontcolor("blue")             // added color
a = a.fontsize("20em")              // added font size
document.write(a)



// and a local variable
function local() {
  var a = "hello my name is " + "Dan ";  //assigned a string to a variable and concatenate it
    a = a.fontcolor("red")          // added color
    document.getElementById("local").innerHTML = a;
}




// Write a function that includes an if statement
function numbers() {            
var b = document.getElementById("number").value;    // assigned the value of the input to var b
if (b <= 100){                            // if b is 100 or less show the string
 var reply = "pick a higher number";
}
else if(b > 100){                        // if b is 101 or more show the string
    reply = " pick a smaller number";
}
document.getElementById("number_result").innerHTML = reply
}




// Intentionally write a function with an error in it and use the console.log() method to debug it within the console in the Chrome Dev Tools
function error() {
    var user = "Here is a list of users! <br>";     
    var user_1 = " dan <br>";
    var user_2 = " matt <br>";
    var user_3 = " john ";
   
    console.log("error"); 
    // error to fix i would use consol log and check the error in this case im missing the "
    var all = user + user_1 + user_2 + user_3;
    all = all.fontcolor("green");
    document.getElementById("users").innerHTML = all;
}




// Write the Time_function() outlined in previous slides
function the_date() {
    if (new Date().getHours() < 08) {//if the time is < 8am display message 
        document.getElementById("greetings").innerHTML  = "how are you today";
    }
    else if(new Date().getHours() > 08){ //if the time is > 8am display message
        document.getElementById("greetingss").innerHTML = " have a great day";
    }
}

////////////////////////////////////////////////////


























