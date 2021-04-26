
// this is a dictionary //

function vehicle(){   // function name
    var car = {        // var name (object)
        type:"bmw",    // properties of the object 
        color:"black",
        series:"5",
        age:2010,
        litre:"2.0"
    };
    delete car.age;      // deleted a property 
    document.getElementById("car").innerHTML = "your car type is a " + car.age;  // telling the browser to display a property thats doesnt exist any more
}


function vehicle2(){ 
    var van = {
        type:"ford",
        color:"white",
        series:"1",
        age:2020,
        litre:"3.0"
    };
    document.getElementById("van").innerHTML =  " your van type is a " + van.type;
}

function food(){
    var spicy = {
        type:"curry",
        color:"red",
        strength:"hot"
    };
    document.getElementById("food").innerHTML = " your type of food is a " + spicy.type;
}


function student(){
    var dan = {
    color: "white",
    age: 31,
    Height: "5ft",
    };
    document.getElementById("student").innerHTML = "dan is " + dan.age;
}

