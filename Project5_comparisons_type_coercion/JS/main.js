
document.write(typeof "word");
document.write(typeof 3);





// display (isNaN) not a number (true as its a string)
function my_function(){
    document.getElementById("test").innerHTML = "one is a number, " + isNaN("this is a string");
}



// display (isNaN) not a number (false as it is a number)
function my_function2(){
    document.getElementById("test2").innerHTML = "one is not a number, " + isNaN("1");
}



document.write(71.7976931348623157E3087677);  // infinity number
document.write(-81.7976931348623157E30999);   // minus infinity number

document.write(10 > 2);
document.write(2 > 12);
document.write("10"+ 5);  

// coercion joining a string to a number //
console.log(5 < 1);    // displays false in console
console.log( 2 + 2);  // displays 4 in console
console.log (10+5) == 15;  // displays 15 in console
console.log (10==10)  // displays true in console
console.log (10==20)  // displays false in console


//Triple Equal Signs declaring that both variables here have the same value // 
name1 = "dan"
name2 = "dan"
document.write(name1 === name2);        // true

name3 = "mum"
name4 = "dad"
document.write(name3 === name4);        //false

number1 = 1
number2 = 1
document.write(number1 === number2);    //true

number3 = 2
number4 = 3
document.write(number3 === number4);    //false

console.log(5 > 2 && 10 > 4);
console.log(5 > 10 && 10 > 4);
console.log( 5 > 10 || 10 > 4);         //     (AND written: &&)     (OR written:||)     (NOT written: !)
console.log(5 > 10 || 10 > 20); 

console.log(100 > 50 && 200 > 100);
console.log(100 < 50 && 90 < 40);
console.log(50 > 100 || 100 > 150)
console.log(20 < 10 || 10 > 20)


function not_function(){
    document.getElementById("not").innerHTML = ! ( 5 > 10);  // ! makes the true false and visa versa
}

function not_function1(){
    document.getElementById("not1").innerHTML = ! ( 20 > 10);  // ! makes the true false and visa versa
}



//Assignment # 34 //  i told the browser to display the wrong answer using !
function not2(){
    document.getElementById("boo").innerHTML = " 99 is more than 100, "  + ! (99 > 100);
}
function not3(){
    document.getElementById("b0o").innerHTML = " 100 is more than 99, "  + ! (100 > 99);
}








//    Assignment Submission #5    
//Write code using the following operators: ==, ===, >, <, &&, ||, ! 

a = 5
b = 10
c = 15
d = 20

document.write(10+5)==15 
document.write(b===b)
document.write(c > a)
document.write(a < c)
document.write(a < c && c < d)
document.write(d > a || c > d)

function not0(){
document.getElementById("not0").innerHTML = ! (a > d)
}
















