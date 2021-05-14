
document.write("hello my name is dan its thursday")

document.write(" lisa told bart, \"knock it off bart! or ill tell dad!\"")

document.write(" \- today i phoned my UC coach " + " and he said he will phone me back on the 27th ")

var family = " lucks ", son = " matt ", mum = " margaret ", dad = " john "
document.write(family ,son,dad,mum) 

var family = family.fontcolor("red")
document.write(family)

document.write (3+3)


// for loop //

for (let stepp = 0; 
    stepp < 9;
    stepp++) 
    document.write(" this is my loop ")


// function //

function my_first_function() {  //defining a function & naming it
    var str = "this text is green"; //defining a variable & giving it a value 
    var result = str.fontcolor("green");// changing the font color
    document.getElementById("green_text").innerHTML = result;//posting the result to the html element  
}


function vehicle () {
    var car = " YOU CAR IS A BMW ";
    var bike = " YOU BIKE IS A HONDA ";

    result1 = car.fontcolor("blue");
    result2 = bike.fontcolor("red")
    
    document.getElementById("car").innerHTML = result1;
    document.getElementById("bike").innerHTML = result2;
}

function myfunction() {
    var sentence = "i am learning";
    sentence += " a lot from this book!";
    document.getElementById("concaternate").innerHTML = sentence;
}

function food(){
    var apple = "this is an apple ";
    apple += "and it is green";
    document.getElementById("food_type").innerHTML = apple;
}



 
//Challenge # 3 ////////

function jobs() {
    gas = "dans looking for work on the gas ";
    gas = gas.fontcolor("green");
    gas += "and its taking for ever"
    document.getElementById("work").innerHTML = gas;
}




function addiction_function() {
    var addiction = 2 + 2;
    document.getElementById("math").innerHTML = "2 + 2 = " +  addiction;
}

function subtraction_function() {
    var subtraction = 5 - 2;
    document.getElementById("math2").innerHTML = "5 - 2 = " + subtraction;
}

function multiplaction() {
    var simple_math = 6 * 8;
    document.getElementById("math3").innerHTML = "6 x 8 = " + simple_math; 
}

function division() {
    var simple_math2 = 48 / 6;
    document.getElementById("math4").innerHTML = "48 / 6 = " + simple_math2;
}

function more_math() {
    var simple_math3 = (1 + 2) * 10 / 2 -5;
    document.getElementById("math5").innerHTML = " 1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_math3;
}

function maths() {
    var money = 50 - 200;
    document.getElementById("maths").innerHTML = "50 minus 200 is " + money;
}

function modulus_operator() {
    var simple_math4 = 25 % 6;
    document.getElementById("math6").innerHTML = " when you divide 25 by 6 you have remainder of " + simple_math4;
}

var x = 5; //increment
x++;
document.write(x);

var x = 5; //decrement
x--;
document.write(x);

window.alert(Math.random()); // capital M ///
window.alert(Math.random() * 100);


function my_dictionary() {
    var animal = {
        species:" dog ",
        color:" black ",
        breed:" labrador ",
        age:5,
        sound:" bark "
    };
    document.getElementById("dictionary")
    .innerHTML = animal.sound + animal.color;
    }



    function dictionary() {
        var user1 = {
            name: " dan ",
            age: 31,
            color: " white ",
            height: " 5ft 8\" ",
        };
        delete user1.age;
        document.getElementById("users").innerHTML = user1.name + user1.age;
    }

    document.write(typeof"this is a string");
    document.write(typeof 3);



function my_function2() {
    document.getElementById("test").innerHTML = 0 / 0;
}

function my_function3() {    // shows that 007 is not a number //
    document.getElementById("test2").innerHTML = isNaN (007)
}

function my_function4() {    // shows that 007 is not a number //
    document.getElementById("test3").innerHTML = isNaN ("seven")
}


document.write(2E310); // infinity
document.write(-2E310); // - infinity

document.write(10 > 2);
document.write(10 > 20);

document.write("10" + 5); // joining string and number together as causing no errors

console.log (5 + 1);
console.log (5 > 1);
console.log (5 < 1);


document.write(10 == 10); // check to see if the left is same as the right
document.write(3 == 11);  // this is false as its not the same


a = 10;
b = "ten"       /// this is false as the data types are diff / string and number
document.write(a === b) // === check the values and the data types are the same

c = 20
d = 20   //this would be true as the values and data types are the same
document.write(c === d)


document.write( 5 > 2 && 10 > 4);
 // shows that 5 is more AND 10 is more     // true


document.write(5 > 10 && 10 > 4); 
// shows that 5 is more AND 10 is more   // false as 5 is not more than 10  

document.write(5 > 10 || 10 > 4);
// returns true because 1 OR the other is true 

document.write(5 > 10 || 10 > 20);
// returns false because neither are true






function not_function() {
    document.getElementById("not").innerHTML = !(5 > 10);
}
//swaps true for false and visa versa

function not_function2() {
    document.getElementById("not2").innerHTML = !(50 > 10);
}




function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? " you are to short " : "you are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride"
}



function vote() {
    var age;
    age = document.getElementById("user_age").value;
    user = (age < 18) ? "you cant vote " : " you can vote";
    document.getElementById("voting").innerHTML = user;
}


function vehicle(make,model,year,color) {
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_year = year;
    this.vehicle_color = color;
}
var jack = new vehicle("dodge","viper",2021,"red");
var emily = new vehicle("jeep","trial hawk",2019,"white and black");
var erik = new vehicle("ford","pinto",1971,"mustard");
function myfunction3(){
    document.getElementById("keywords_and_constructors").innerHTML = 
    "erik drives a " + erik.vehicle_color + "-colored " + erik.vehicle_model +
    " manufactured in " + erik.vehicle_year;
    
}











































