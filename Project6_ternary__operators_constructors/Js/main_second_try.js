document.write("<p>","It's thursday");
document.write(" and there is allot to learn <hr> <br>")

document.write (" hello my name is dan and i can " + "concatenate strings <br>") 

document.write ("five" ," + ", "five ", "is ", (5 + 5),("<br>"))

document.write(13478965 / 56456)

document.write("<br>");

document.write (25460 - 2772)

document.write("<br>",13425 * 475865,"<br>", 3467547+546778567, "<br>")

document.write(" the total price of the car repair will be £",(300+259))

document.write(" <br> <br>Now lets add 123456 to 7890 and the answer is " + (123456+7890))

document.write("<br>",Math.random())

document.write("<br>");









document.body.style.backgroundColor = "black";

document.body.style.fontFamily = "fantasy";

document.body.style.color = "darkgreen";

document.body.style.marginTop = "5%";

document.body.style.marginLeft = "5%"

document.body.style.marginRight = "5%"

document.body.style.wordSpacing = " 10px"

document.body.style.textShadow = "2px 2px 2px black"

document.body.style.textAlign ="center"

document.body.style.backgroundColor = ("black")

document.body.style.color = ("darkgreen")

document.body.style.border = ("25px darkgreen solid")

document.body.style.outline = ("25px lightgreen dotted")

document.body.style.fontSize = ("85%")

document.body.style.textAlign = ("center")






for (let step = 0;
    step < 11;
    step ++)
    document.write("number" + step + ("<br>"))







function my_first_function() {
    var string = "this is green";
    var result = string.fontcolor("green");
    document.getElementById("color-text").innerHTML = result;
}

function second_function() {
    var name = " my name is dan ";
    var result = name.fontcolor("blue");
    document.getElementById("user").innerHTML = result;
}

function third_function () {
    var user = "the price of the repair will be: <br>£";
    var user_cost = (345+364);
    var total = (user) + (user_cost);
    document.getElementById("repair").innerHTML = total; 
}

function fourth_function() {
    var types = " this is our fruit section <br> ";
    var o = " orange's";
    var a = " apples";
    var p = " pears ";
    var p = p.fontcolor("blue");
    var o = o.fontcolor("red");
    var a = a.fontcolor("green");
    var result = types+ o + a + p;
    document.getElementById("food").innerHTML = result;
}

function fifth_function() {
    vehicles = " we have many cars to choose from <br>";
    car1 = " bmw ";
    car2 = "audi ";
    car3 = " mercedes "; 
    car1 = car1.fontcolor("green") 
    car2 = car2.fontcolor("blue");
    car3 = car3.fontcolor("red");
    cars = vehicles + car1 + car2 + car3;
   
    document.getElementById("vehicles").innerHTML = cars;
}

function mobiles() {
    phone = "This is our range of phones:<br> ";
    phone1 = "samsung ";
    phone2 = "huawei ";
    result = phone + phone1 + phone2;
    document.getElementById("mobile").innerHTML = result;
}

function game() {
    text = "This is our list of games <br>";
    game1 = "racing game, ";
    game2 = "shooting game, ";
    game3 = "card game ";
    result = text + game1 + game2 + game3;
    document.getElementById("games").innerHTML = result;
}

function music() {
    text = "This years artists <br>";
    artist1 = "eminem, ";
    artist2 = "kanye west, ";
    artist3 = "skepta, ";
    artist4 = "JME, "
    artist5 = "dizzee rascal "
    artists = text + artist1 + artist2 + artist3 + artist4 + artist5;
    document.getElementById("music").innerHTML = artists;
}

function computer() {
    com = "Take a look at our computers <br>"
    com1 = "ACER, not a bad computer <br> ";
    com2 = "DELL, a good computer <br> ";
    com3 = "VENO, a cheap but reliable computer <br> ";
    coms =  com1 + com2 + com3;
    coms= coms.fontcolor("blue");
    com = com.fontsize("20px");
    document.getElementById("coms").innerHTML =com + coms;
}


function books() {
    book = "<center>" + "check out the selection of books we have on offer <br>"
    book1 = "HTML book <br> ";
    book2 = "CSS book <br> ";
    book3 = "JAVASCRIPT book <br>";
    book4 = "CODING book <br> ";
    boook = "<center>" + book1 + book2 + book3 + book4  ;
    book = book.fontcolor("green");
    book = book.fontsize("50%");
    boook = boook.fontcolor("red"); 
    document.getElementById("books").innerHTML = book+ boook;
}


function family() {
    fam = " Here are the list of family members <br>";
    fam1 = " Mum who is 54 <br>";
    fam2 = " Dad who is 55 <br>";
    fam3 = " Matt who is 30 <br>"; 
    fam4 = " Dan who is 30 <br>";
    familyy = fam1 + fam2 + fam3 +fam4;
    document.getElementById("fam").innerHTML =  fam + familyy
}
  


function electronics() {
    fone = "<center>" + "Here is a list of the t.v and phones!"
    line = "<br> <hr> <br>"
    phone1 = "<hr>samsung phones <br>"; 
    phone2 = "htc phones <br>";
    phone3 = "sony phones <br>";
    
    tele1 = "sony <br>";
    tele2 = "bravia <br>";
    tele3 = "panasonic <br>";

phone ="<center>" + phone1 + phone2 + phone3;
tele ="<center>" + tele1 + tele2 + tele3;

fone = fone.fontcolor("darkred");
fone = fone.fontsize("50%");

phone = phone.fontcolor("blue");
phone = phone.fontsize("25%");

tele = tele.fontcolor("green");
tele = tele.fontsize("15%");


document.getElementById("elec").innerHTML = line+  fone + phone + tele;
}



function drinks(){
    can = "Here is the drinks menu <hr><br>"
    can1 = "Coke <br>";
    can2 = "Lemonade <br>";
    can3 = "Cherryade <br>";
    can4 = "Beer <br>";

cans = can1 + can2 + can3 + can4;
cans = cans.fontcolor("blue"); 
cans = cans.fontsize("25"); 

document.getElementById("drinks").innerHTML = can + cans;
}




function home(){
    homes = " <br><br><br><br><center>Welcome to the house list here we offer a range of different houses <hr><br>";
    home1 = " Bungalow - we have a range of bungalows <br>";
    home2 = " Houses - we have 3-4 bed houses <br>";
    home3 = " Flats - we have 1 bed flat available <br>";

homess = home1 + home2 + home3;

homess = homess.fontsize ("15%");
homess = homess.fontcolor("navy");

homes = homes.fontsize("5%")
homes = homes.fontcolor("lightblue")

document.getElementById("home").innerHTML = homes + homess;
}



function toyss () {
    tooy = " <center>Another great list of toys! <hr><br>";
    toy1 = " Yoda <br>";
    toy2 = " Buzz light year <br>";
    toy3 = " Monopoly <br>";
    toy4 = " Roblox <br>";
    toys = toy1 + toy2 + toy3 + toy4;

    toys = toys.fontsize("35%");
    toys = toys.fontcolor("lightgreen");

document.getElementById("toys").innerHTML = tooy + toys; 
}



function my_test() {
    color1 = " Red ";
    color2 = " Blue ";
    color3 = " Green ";

    color1 = color1.fontcolor("red");
    color2 = color2.fontcolor("blue");
    color3 = color3.fontcolor("green");
    colors = color1 + color2 + color3;
    colors = colors.fontsize("100%") 

    document.getElementById("colors").innerHTML = colors;
}


function super_heroes() {
    hero = " A super hero team! <br> "
    hero1 = " spiderman "
    hero2 = " batman "
    hero3 = " ironman " 
    hero4 = " hulk "
    heros = hero1 + hero2 + hero3 + hero4;
document.getElementById("hero").innerHTML = hero + heros;
}

function number() {
    a = "4546 * 4567 = " + (4546 * 4567)+"<br>";
    b = "67653 + 54654 = " + (67653 + 54654)+"<br>";
    c = "6345233 + 5446342554 = " + (6345233 + 5446342554);

    d = a + b + c;

    document.getElementById("number").innerHTML = d;
}


function fruit_trees() {
    tre = "here is a list of tree types <br>";
    tree1 = "plum tree <br>";
    tree2 = "apple tree <br>";
    tree3 = "pear tree <br>";

    trees = tree1 + tree2 + tree3;
trees = trees.fontsize("50%");

document.getElementById("tree").innerHTML = tre + trees;
}





























document.body.style.backgroundColor = "navy";
document.body.style.color = "grey";




//function for a list
function headphones(){
    headphone = "see our list of headphones <br> ";
    headphones1 = "sony <br>";
    headphones2 = "beats <br>";
    headphones3 = "samsung <br>";

    head = headphone + headphones1 + headphones2 + headphones3;
    head = head.fontsize("50%");
    head = head.fontcolor("blue")
    document.getElementById("headphones").innerHTML = head;
}

function user1() {
    user_1 = " the user name is dan, "
    user_2 = " the user name is matt, "
    user_3 = " the user name is john "

    users = user_1 + user_2 + user_3;
    document.getElementById("users").innerHTML = users;
}

function user2() {
    user_1 = " hello im dan " + "luck, "
    user_2 = " hello im matt, "
    user_3 = " hello im john "

    users = user_1 + user_2 + user_3;
    document.getElementById("users_2").innerHTML = users;
}

function user3() {
    user = " this is user three <br>";
    user_1 = " this user is dan <br>";
    user_2 = " this is user matt <br>"; 
    users = user_1 + user_2;
    document.getElementById("user_30").innerHTML = user + users;
}



function bla() {
    user111 = "dfbg"
    user211 = "dfbg"
    user311 = "dfbg"
    user411 = "dfbg"
 userlol = user111 + user211 + user311 +user411;
 document.getElementById("bla").innerHTML = userlol;
}













// function of a dictionary 
function dictionary(){
    animal = {
        species: " dog ",
        color: "gold",
        breed: "labrador",
        age: 5,
        sound: "bark"
            }
        document.getElementById("dictionary").innerHTML = animal.species;
    }


    function dictionary_1() {
        user = {
            name:" daniel ",
            age: 31,
            dob:16/07/1989,
            birthplace:" orsett "
                }
        document.getElementById("user_1").innerHTML = user.name + user.age
    }

    function dictionary_2(){
        user_2 = {
            name:" daniel ",
            age: 31,
            height: " 5ft ",
            dob: 16/07/1989
        }
        document.getElementById("user_2").innerHTML = user_2.name + user_2.height;
    }

function dictionary_3() {
    user_3 = {
        name: " Daniel ",
        age: 31,
        height: " 6ft ",
        loc: " Orsett "
    }
    document.getElementById("user_3").innerHTML = user_3.name + user_3.height + user_3.loc;
}

function dictionary_4(){
  user_4 = {
        name: " daniel ",
        age: 31,
        height: " 5ft ",
        dob: 16/09/1989
    }
    document.getElementById("user_4").innerHTML = user_4.age + user_4.height;
}

function dictionary_5() {
    user_5 = {
        name:" Daniel ",
        age: 31,
        height: " 5ft ",
        dob:16/07/1989
    }    
    document.getElementById("user_5").innerHTML = 
    user_5.name + user_5.age;
}














// ternary operator 

document.write 
(bigger = (5 > 1) ? "<br>left is bigger": "right is bigger");


document.write
(smaller = (1 > 5) ? "left is bigger": "<br>right is bigger");


document.write 
(a = (100 > 1) ? "<br>100 is more than 1 ": "100 is not more than 1")


document.write 
(b = (5 < 10) ? "<br> five is less than ten" : "five is not less than 10")

document.write(d = (10 < 100) ? "<br> ten is less than 100" : "ten is not less than 100")












function testing() {
age = document.getElementById("age").value;
c = (age > 17) ? "you may buy alcohol" : " your cant buy alcohol";
document.getElementById("testing").innerHTML = c;
}



function voting() {
    user = document.getElementById("user123").value;
    age = (user < 18) ? "you cant vote" : "you can vote";
   age = age.fontcolor("red");
    document.getElementById("user1").innerHTML = age;
}

function ride (){
    age = document.getElementById("ride_along").value;
    rider = (age < 18) ? " you cant ride" : " you can ride";
    document.getElementById("rider").innerHTML = rider;
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




function state() {
    if( a = (20 > 10) ? "hello" : " goodbye");
    document.getElementById("state").innerHTML = a;
    }
    





    function age_function() {
        age = document.getElementById("age").value;
        if(age >= 18){
            vote = "your old enough to vote";
        }
        else{
            vote = "your not old enough to vote"
        }
        document.getElementById("how_old_are_you?").innerHTML = vote;
    }
    
    
    
function alcohol() {
    drink = document.getElementById("your_age").value;
    if(drink >= 18){
        drinking = "your old enough to buy alcohol";
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
 
























































































