// course examples //
function ride_function (){
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "you are to short" : " you are tall enough";
    document.getElementById("ride").innerHTML = can_ride +" to ride";
}

function vote (){
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "you are to young" : " you are old enough";
    document.getElementById("vote").innerHTML = can_vote +" to vote";
}
// course examples //



///////// think of the (?) as a this true
///////// think of the (:) as a this false



// my examples //
function vote1(){
    age = document.getElementById("input").value;
    age = (age < 18) ? "you cannot vote" : " you can vote";
    document.getElementById("vote1").innerHTML = age;
}

function alcohol(){
    age = document.getElementById("inputbar").value;
    age = (age < 18) ? " you cant buy alcohol" : " you can buy alcohol"
    document.getElementById("alcohol").innerHTML = age;
} 

function user(){
    name1 = document.getElementById("user_name").value;
    name1 = (name1 < 30 ) ? "you cant start the class yet!" : " you can start the class now";
    document.getElementById("user").innerHTML = name1;
}


function vote3(){
    age = document.getElementById("age_bar").value;
    age = (age < 18 ) ? " you cant vote" : "you can vote";
    document.getElementById("vote3").innerHTML = age;
}




function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("dodge", "viper" ,"2020", "red ");
var Emily = new Vehicle("jeep", "trial hawk", 2019, "white and black ");
var Erik = new Vehicle("ford", "pinto", 1971, "mustard ");

function myFunction(){
    document.getElementById("keywords_and_constructors").innerHTML =
"erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
 " manufactured in " + Erik.Vehicle_Year;  }




 function Vehicle(Make, Model, Year, Color){
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("dodge", "viper" ,"2020", "red ");
var Emily = new Vehicle("jeep", "trial hawk", 2019, "white and black ");
var Erik = new Vehicle("ford", "pinto", 1971, "mustard ");

function my_Function(){
    document.getElementById("new_and_this").innerHTML = " emily drives a " +
    Emily.Vehicle_Color + Emily.Vehicle_Make + Emily.Vehicle_Model + Emily.Vehicle_Year;

}




function Users(name,age,color,country) {
    this.User_name = name;
    this.User_age = age;
    this.User_color = color;
    this.User_country = country;
}

var dan = new Users("dan",31,"white","uk" );
var matt = new Users("matt",30,"brown","spain");
var carl = new Users("carl",29,"black","germany");

function new_users() {

document.getElementById("new_users").innerHTML = "this user name is " + dan.User_name
 + " and is from the " + dan.User_country;
} 





function number() {
    document.getElementById("nested_function").innerHTML = count();
    
    function count (){
        var number = 1;

        function plus_one() {
            number +=1;
        }
        plus_one();
        return number;
    } 
}










///////////////Assignment Submission # 6////////////////////
///////////////Assignment Submission # 6////////////////////
///////////////Assignment Submission # 6////////////////////
///////////////Assignment Submission # 6////////////////////
///////////////Assignment Submission # 6////////////////////
///////////////Assignment Submission # 6////////////////////
///////////////Assignment Submission # 6////////////////////
///////////////Assignment Submission # 6////////////////////
///////////////Assignment Submission # 6////////////////////
///////////////Assignment Submission # 6////////////////////


function movie (){                                      //declaring a function and a name 
    var user_age, allowed;                              //declaring to variables 
    age = document.getElementById("user_age").value;    //assigning whats entered in to the input bar to the variable AGE
    allowed = (age < 18) ? "you are to young to see this movie" : " you are old enough to see this movie"; //if < 18  return option1 if > 18 return option2
    document.getElementById("user_age2").innerHTML = allowed; //send to the html element with a ID of user_age2
}




function jobs(name, type, country ) {     //declaring a function and a name and its parameters 
    this.User_name = name;                //assigning a property to a parameter 
    this.User_type= type;
    this.User_country = country;
}
var employee1 = new jobs("john","gas engineer","uk" );  // assigning a variable to the constructor 
var employee2 = new jobs("bob","water replacement","ireland");  
var employee3 = new jobs("fred","sparky","scotland");           

function new_jobs() {        //declaring a function and a name
document.getElementById("new_jobs").innerHTML = "this user name is " + employee1.User_name // telling a html element to display a string with a variable thats part of a constructor
 + " and is from the " + employee1.User_country + " and his job is " + employee1.User_type;
} 



function number1() {          //declaring a function and a name
    document.getElementById("nested_function1").innerHTML = count(); //  this is to display the result of the sub function withing this function named COUNT
    
    function count (){                 // name of sub function
        var number = 1;                //var NUMBER has been changed to 1

        function plus_one() {           //another function name
            number +=1;                 // taking the var number which is really 1 and telling it to add 1   
        }
        plus_one();                     //telling the program to return the result of the function PLUS_ONE 
        return number;
    } 
}





/////////////////////////////////////////////////////////////////////////////////////////////

var x = 10;
function add_numbers_1(){
    document.write(20 + x +"<br>");
} 
function add_numbers_2() {
    document.write(x + 100);
}

add_numbers_1();
add_numbers_2();



function add_numbers_3() {
    var y = 10;
    console.log(15 + y);
}


function add_numbers_4() {
    var y = 10;
    console.log(y + 100);
}
add_numbers_3();
add_numbers_4();



function add_up() {
    var add = 10;       // my try // set ADD to 10 and then multiplied it by 50 // local variable
    document.write("<br>"+ add * 50);
}
add_up();



div = 50;
function divide() {           //global variable
    document.write("<br>" + 500 / div);
}
divide();






//////////////////    if statements ///////////////////////////////




if (1 < 2 ){
    document.write(" the left number is smaller than the number on the right ")
}

function get_date() {
    if (new Date().getHours() < 18) {       //if the time is < 18pm dispaly message other wise display nothing
        document.getElementById("greeting").innerHTML = "how are you today";
    }
}


function clock() {
    if (new Date().getHours() > 10 ) {
        document.getElementById("time").innerHTML = " its past 10" ;
    }
}















