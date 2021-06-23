
function getReceipt() {
    //this initializes oyr string so it can get passed from
    //function to function, growing line by line into a full receipt
    var text1 = "<h3>You ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length;i++){
    if (sizeArray[i].checked){
        var selectedSize = sizeArray[i].value;
        text1 = text1 + selectedSize+"<br>";
    }
}
    if(selectedSize === "Personal Pizza"){
        sizeTotal = 6;
    }
    
    else if(selectedSize === "Small Pizza"){
        sizeTotal = 8;
    }
    
    else if(selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    }
    
    else if(selectedSize === "Large Pizza"){
        sizeTotal = 14;
    }
    
    else if(selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    }

    else if(selectedSize === "Super Large Pizza"){
        sizeTotal = 18;
    }

    runningTotal = sizeTotal;
    console.log(selectedSize+"  = £"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: £"+ runningTotal+".00");
    //these variables will get passed on to each function
       getTopping(runningTotal,text1);
};   



function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++){
        if (toppingArray[j].checked){
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1 ){
        toppingTotal = (toppingCount -1);
    }
    else{
        toppingTotal = 0;
    }
 runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping -1 free topping = "+"£"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"£"+runningTotal+".00");   
    
    document.getElementById("showText").innerHTML= text1;
    document.getElementById("totalPrice").innerHTML= "<h3>Total: <strong>£" + runningTotal +".00"+"</strong></h3>";

};


function getVeg(goingTotal,text1) {
    var VegTotal = 0;
    var selectedVeg = [];
    var VegArray = document.getElementsByClassName("Veg");
    for (var V = 0; V < VegArray.length; V++){
        if (VegArray[V].checked){
            selectedVeg.push(VegArray[V].value);
            console.log("selected Veg item: ("+ VegArray[V].value+")");
            text1 = text1 + VegArray[V].value+"<br>";
        }
    }
    var VegCount = selectedVeg.length;
    if (VegCount > 1 ){
        VegTotal = (VegCount -1);
    }
    else{
        VegTotal = 0;
    }
    goingTotal = (goingTotal + VegTotal);
    console.log("total selected veg items: "+ VegCount);
    console.log(VegCount+" veg -1 free topping = "+"£" + VegTotal+".00");
    console.log("Veg text1: "+ text1);
    console.log("Purchase Total: "+"£"+ goingTotal+".00");

    document.getElementById("showText").innerHTML= text1;
    document.getElementById("totalPrice").innerHTML= "<h3>Total: <strong>£" + goingTotal +".00"+"</strong></h3>";
};












function test() {
    drink = document.getElementById("games").value;
     if (drink <= 18 ){
         a = " you cant purchase alcohol!"
     }
     else if (drink > 18){
         a = "you can buy alcohol with your meal!"
         a += "<ol><li>beer</li><li>spirits</li></ol>"
     }
     document.getElementById("answer").innerHTML = a
}

























