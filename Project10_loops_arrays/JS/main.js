//my game function 
function game() {
     var games = document.getElementById("game").value;
     if(games == "yes"){
        var game1  = "ok we have a selection of games"
    }
    else if (games == "no"){
        game1 = " ok next time then! "
    } 
    document.getElementById("gaming").innerHTML = game1
}


// food function with a list assigned to a variable
function foode() {
    var food12 = " oranges ";
    var food13 = "apples ";
    var food14 = "pears ";
    var foods123 = food12 + food13 + food14; 

    var A = document.getElementById("foodie").value;
    if(A == "yes"){
        var answer ="here is our list "+ (foods123);
    }
    else if(A == "no"){
        var answer = "ok next time maybe! ";
    }
    document.getElementById("foodies").innerHTML = answer;
}





//////// My sons game ////////////
//////// My sons game ////////////
//////// My sons game ////////////

function userrr() {
    var person1 = "Player Ryley" + "<br><img src='ryley.gif'>";
    var person2 = "Player Dan" + "<br><img src='user1.png'>";
    var person3 = " Player Matt " + "<br><img src='user2.jfif'>";
    var person4 = " Player john " + "<br><img src='user3.jfif'>";
    var person5 = " Player Margaret" + "<br><img src='user4.png'>";

 person1 = person1.fontcolor("red")
 person2 = person2.fontcolor("red")
 person3 = person3.fontcolor("red")
 person4 = person4.fontcolor("red")
 person5 = person5.fontcolor("red")


    var a = document.getElementById("people").value;
    if(a == "P1"){
        b = " you choose " + person1;
    }
    a = document.getElementById("people").value;
    if(a == "P2"){
        b = " you choose " + person2;
     }
     a = document.getElementById("people").value;
    if(a == "P3"){
        b = " you choose " + person3;
    }
     a = document.getElementById("people").value;
    if(a == "P4"){
        b = " you choose " + person4;
    }
     a = document.getElementById("people").value;
    if(a == "P5"){
        b = " you choose " + person5;
    }
document.getElementById("players").innerHTML = b;
}

function userr() {
    var a = document.getElementById("game1").value;
    if (a == "4"){
        b = '<iframe width="300" height="200" src="https://www.youtube.com/embed/zvkmLnS4sAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
         +"<br>well done that's CORRECT! :)"; 
     }
    if(a = ""){
        b = "try again";
}
    document.getElementById("game_1").innerHTML = b;

    var c = document.getElementById("game2").value;
    if (c == "6"){
        d = '<iframe width="300" height="200" src="https://www.youtube.com/embed/O38Rr2Tgack?list=PL0742AA9A177449BD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' 
        + "<br>well done that's CORRECT! :)";
     }
    if(c = ""){
        d = "try again";
}
    document.getElementById("game_2").innerHTML = d;

    var e = document.getElementById("game3").value;
    if (e == "8"){
        f ='<iframe width="300" height="200" src="https://www.youtube.com/embed/M2H34kAyuCM?list=PL0742AA9A177449BD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
         + "<br>well done that's CORRECT! :)"; 
     }
    if(e = ""){
        f = "try again";
}
    document.getElementById("game_3").innerHTML = f;

    var g = document.getElementById("game4").value;
    if (g == "10"){
        h ='<iframe width="300" height="200" src="https://www.youtube.com/embed/AHaLDeeV454?list=PL0742AA9A177449BD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
         + "<br>well done that's CORRECT! :)"; 
     }
    if(g = ""){
        h = "try again";
}
    document.getElementById("game_4").innerHTML = h;

    var i = document.getElementById("game5").value;
    if (i == "25"){
        var j ='<iframe width="300" height="200" src="https://www.youtube.com/embed/rzqh-DBmtVw?list=PL0742AA9A177449BD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
         + "<br> well done that's CORRECT! :)";  
    }
    if (i = ""){
        j = "try again";
    }
    document.getElementById("game_5").innerHTML = j;

    var word = document.getElementById("game6").value;
    if (word == "I love games"){
        var right ='<iframe width="300" height="200" src="https://www.youtube.com/embed/OE2NPmqZ9nM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
         + "<br> well done that's CORRECT! :)";  
    }
    if (word = ""){
        right = "try again";
    }
    document.getElementById("game_6").innerHTML = right;

}








//loops with a break statement *(removes the break line for normal) 
function call_loop() {
    var str = "";
    var number = 1;

    while(number < 51 ){
        if (number === 10) {break;}
    str += "<br>" + number;
    number++;
}
document.getElementById("loop").innerHTML = str ;
}

//loop with continue statement
var string = ""
    for(var newnumber = 0;
        newnumber < 20;
        newnumber++){
        if (newnumber === 10) {continue;}
    string += "<br>" + newnumber;
}
document.getElementById("break_loop").innerHTML = string ;






// loop ex
var food = ["orange", "apple", "pears", "bananas"];
var result = "";
var f;
function food_loop() {
    for (f = 0;
         f < food.length; 
         f++){
        result += food[f] + "<br>";
     }
     document.getElementById("food_loop").innerHTML = result;
}


//arrays in functions
function users(){
    var user = [];
    user[0] = " dan ";
    user[1] = " matt ";
    user[2] = " john ";
    user[3] = " paul ";
    document.getElementById("user").innerHTML =
     user[0] + "and" + user[3];
}


//const keyword  Assignment # 53
function constant() {
    const people = { 
    name:"dan",
    color:"white",
    age:"31",
    height:"6ft"
    }
    people.name = "john";
    people.width = "50<sup>inch's</sup> wide";
    document.getElementById("constant").innerHTML = 
    people.name + " is " + people.width;
}



//return statement // no need for a event handler
var z = my_return(10, 6);
function my_return(a, b) {
    return a * b;
    }
    document.getElementById("return").innerHTML = z




    // objects
    let car = {
        make: " bmw ",
        color: " white ",
        year: 2021,
        model: " 1 series ",
        description: function() {   
        return "the car is a " + this.year + this.color + this.make + this.model
        }
    }
    document.getElementById("car").innerHTML = car.description();


    let user = {
        name: " dan ",
        age: 31 , 
        color: " white ",
        details: function() {
        return " the users name is " + this.name + " and his age is " + this.age;
        }
    };
document.getElementById("user_name").innerHTML = user.details();







function tv() {
    var tele = document.getElementById("tele").value;
    if (tele == "yes"){
    var his_tele = "ok we have many on offer"
    }
       else if(tele == ""){
            his_tele = "ok!"
           }    else if (tele == "no"){
         his_tele = "ok next maybe next time!"
        }
document.getElementById("teles").innerHTML = his_tele;
}





////////////////////   Assignment Submission # 10
////////////////////   Assignment Submission # 10
////////////////////   Assignment Submission # 10
////////////////////   Assignment Submission # 10

// Write a function that uses a while loop
function new_loop() {  //naming function
    var a = "" // (a) will now be used to place a new number 
    var b = 0;  // (b) will be zero
    while(b < 11){  // saying that while (b) is < than 11 
        a += b++;   // add one and place it in (a)
    }
    document.getElementById("new_loop").innerHTML = a
}

// Write a function that uses a for loop
function new_loop_1() {  //naming a function
    a = "";           // (a) will now be used to place a new number 
    for(var step = 0;   // (step) is now zero 
        step < 100;)  //  if (step is < 100)
        a += step++  // step add a number and place it in (a)
        document.getElementById("step").innerHTML = a;
    }

// Write a function that use an array
function array() {        //naming a function
    var drink = []      // drink is now an variable with multiple values
    drink[0] = " Cola ";    //each value has an index number given to it 
    drink[1] = " Pepsi "; //starting at 0  
    drink[2] = " Lemonade ";  
    drink[3] = " Orange juice ";
    drink[4] = " Apple-juice ";
    document.getElementById("drinks").innerHTML = drink[0] + drink[4];
}

// Create an object using the “let” keyword
let vehicle = {  //giving a variable properties and giving them values
    name: " car ",  
    age: 2005 , 
    color: " grey ",
    detail: function() {
    return " My vehicle is a " + this.name + " and its age is " +
    this.age;  // telling this function to display string plus the properties
    }
};
document.getElementById("vehicle").innerHTML = vehicle.detail();













function r_game() {
    var a = document.getElementById("r-game").value;
    if (a == "9"){
        var b = "well done that's CORRECT! :)" 
    }
    else if (a == ""){
        b = "try again!"
    }
    document.getElementById("r-game1").innerHTML = b;
}















