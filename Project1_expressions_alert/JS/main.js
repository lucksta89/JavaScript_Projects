/* alerts */

        alert ("hello this is an alert")

        b = "this is my second alert"
        alert(b)

/* alerts */


/* strings and variables */
        document.write("this is my first string"); // write text in browser
        var a = "this is my second string" // made (a) become "this is a string"
        var c = "this is my forth string"

        var d = "\"i have declared a concentrated string to a variable" + " for the first time!\""

        var family = "luck", son1 = "dan", son2 = "matt" , mum = "margaret", dad = "john"
                // declared multiple variables at one time

        document.write(a);
        document.write("\"this is my 3\'rd string\"");
        document.write("this is a variable ");
        
        document.write(a,c);

        document.write(d);

        document.write (dad,mum, family);

/* strings and variables */


/* changing the color of variables then told browser to write it*/

        var e = " this text is blue "
        
        var a = a.fontcolor("red") 
        var b = b.fontcolor("green")
        var c = c.fontcolor("yellow")
        var d = d.fontcolor("orange")
        var e = e.fontcolor("lightblue")
        document.write(a,b,c,d,e);

/* changing the color of variables */


// Day two /////////////////////////////////////////////////////////////////////////////

document.write(" hello ")

family = "matt,dan,mum,dad"
family = family.fontcolor("blue")
document.write(family);


document.write("\"hi ther\'e\"");

document.write("this is a concatenating string" + " using 2 string to join each other");



var concatenate = " i have assigned a variable to " + " concatenate string"
document.write(concatenate);

var b = "blue", g = "green", r = "red"

document.write(b,g,r);



//an expression results in a value, while a statement performs a task.
// this is an expression // capable of solving math problems // performs a task // 

document.write(333333+67867867)


// creating functions declaring strings in a button//


function my_first_function(){  // declared the program name 
        var str = ("this text is green"); // created a string
        var result = str.fontcolor("green"); // declared that when the button is clicked its to create the string in green!
        document.getElementById("green_text").innerHTML = result; // telling the html page to collect info from the is (id) 
}

function second_program(){
        var str = ("and succeeded")
        var result = str.fontcolor ("red");
        document.getElementById("second_program").innerHTML = result;
}

function thirdtry(){
        var str = ("click me");
        var result = str.fontcolor ("blue");
        document.getElementById("thirdtry").innerHTML = result;
}

function fourth_try(){
        var str =("try me")
        result = str.fontcolor("red")
        document.getElementById("fourth_try").innerHTML = result;
}


function fifth_try(){
        var str =("hi ya");
        result = str.fontcolor("green")
        document.getElementById("fifth_try").innerHTML = result;
}

function seventh_try(){
        var str = (" every day we try a little bit more ")
        result = str.fontcolor("blue")
        document.getElementById("seventh_try").innerHTML = result;
}


function eighth_try(){
                var eighth_try = document.createElement("IMG");
        eighth_try.setAttribute("src", "Capture.PNG");
                eighth_try.setAttribute("width", "500");
                eighth_try.setAttribute("height", "500");
                eighth_try.setAttribute("alt", "The Pulpit Rock");
                document.body.appendChild(eighth_try);
              }

function display_date(){
        document.getElementById("date").innerHTML = Date();

} 




////////////////// declared a assigned variable's in a button    (tried this on my own initiative) // 
function sixth_try(){
        var str = (a) + (b) + (c) + (d) + (e);  //told the to program to use these variables together   
        result = str.fontcolor("green") //make them variables green (if they wasn't assigned a color earlier that is)
        document.getElementById("sixth_try").innerHTML = result; //make this is program avaliable using the (id) name (sixth try)
}
////////////////// declared a assigned variable in a button // 




//Assignment Submission # 1//
window.alert ("submission #1")
ab = "welcome "
cd = "to my submission"

document.write (ab,cd)

document.write(67456+26732357)
//Assignment Submission # 1//






























