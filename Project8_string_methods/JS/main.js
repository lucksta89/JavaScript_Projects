// course version with concat()
function concat() {
    var part1 = "dan has "
    var part2 = "made this "
    var part3 = "into a complete "
    var part4 = "sentence "
    var whole = part1.concat(part2,part3,part4);
    document.getElementById("concat").innerHTML = whole;
}

//my version without the use of the concat()
function concatt() {
    var part1 = "dan has "
    var part2 = "made this "
    var part3 = "into a complete "
    var part4 = "sentence without concat() "
    var whole = part1 + part2 + part3 + part4;
    document.getElementById("concatt").innerHTML = whole;
}

// you can choose a section of the string to show 
function slice_method() {
    var sentence = "i can choose any part of this string to display";
    var section = sentence.slice(17,36);
    document.getElementById("slice").innerHTML = section;
}


// Successfully write and execute the toUpperCase() method.
function uppercase() {
    var  a = "Hello World!";
    var  b = a.toUpperCase();
    document.getElementById("upper").innerHTML = b;
  }



// Successfully write and execute the search() method
//this locates the position of a word in a string
function search() {
    var   a = "my name is dan"; 
    var  b = a.search("dan");
    document.getElementById("search").innerHTML = b;
  }


// Number Methods shows a number as a string...
// reason for doing this is that if write
//document.write instead it will open the result 
// in another blank page

//only apply while in a function
function method1() {
    var x = 555;
    document.getElementById("numberstring").innerHTML = x.toString();
}

// toPrecision() Method 
//display only 5 of the numbers in the string
function pre_method() {
    var  x = 13456.35765476;
    document.getElementById("precision").innerHTML = 
    x.toPrecision(5);
}


// Successfully write and execute the toFixed() method.
//choose how many number to display after the decimal point 
function tofixed() {
    var  num = 5.56789;
    var  a = num.toFixed(30);
    document.getElementById("tofixed").innerHTML = a;
  }



// Successfully write and execute the valueOf() method.
function valueof() {
    var   a = "hi!";
    var  b = a.valueOf();
  document.getElementById("valueof").innerHTML = a;
}




//Assignment Submission # 8
//Assignment Submission # 8
//Assignment Submission # 8
//Assignment Submission # 8
//Assignment Submission # 8
//Assignment Submission # 8
//Assignment Submission # 8
// Write functions methods: concat(), slice(), toString(), toPrecision()

function concaternate() {
    var  a = "this is ";
    var  b = "so much fun ";
    var  c = a.concat(b)
    document.getElementById("concaternate").innerHTML = c;
}// we are adding to 2 variables together


function slice_1() {
    var   a = "hello im dan"
    var   b = a.slice(5,12)
    document.getElementById("slice_1").innerHTML = b
}// i am choosing what part of the string to display 

function tostring_1() {
    var   a = (123);
    document.getElementById("tostring_1").innerHTML = a.toString()
}// i am telling the function to display the number as a string

function precition_1() {
    var    a = (345623456.6547);
    var    b = a.toPrecision(15)
    document.getElementById("precition_1").innerHTML = b;
}// i am choosing how many number after the decimal to display


/////////////////////////////////////////////////////////////////////////


















































































































































