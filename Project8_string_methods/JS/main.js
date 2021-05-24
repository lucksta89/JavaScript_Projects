// course version with concat()
function concat() {
    part1 = "dan has "
    part2 = "made this "
    part3 = "into a complete "
    part4 = "sentence "
    whole = part1.concat(part2,part3,part4);
    document.getElementById("concat").innerHTML = whole;
}

//my version without the use of the concat()
function concatt() {
    part1 = "dan has "
    part2 = "made this "
    part3 = "into a complete "
    part4 = "sentence without concat() "
    whole = part1 + part2 + part3 + part4;
    document.getElementById("concatt").innerHTML = whole;
}

// you can choose a section of the string to show 
function slice_method() {
    sentence = "i can choose any part of this string to display";
    section = sentence.slice(17,36);
    document.getElementById("slice").innerHTML = section;
}


// Successfully write and execute the toUpperCase() method.
function uppercase() {
    a = "Hello World!";
    b = a.toUpperCase();
    document.getElementById("upper").innerHTML = b;
  }



// Successfully write and execute the search() method
//this locates the position of a word in a string
function search() {
    a = "my name is dan"; 
    b = a.search("dan");
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
    x = 13456.35765476;
    document.getElementById("precision").innerHTML = 
    x.toPrecision(5);
}


// Successfully write and execute the toFixed() method.
//choose how many number to display after the decimal point 
function tofixed() {
    num = 5.56789;
    a= num.toFixed(30);
    document.getElementById("tofixed").innerHTML = a;
  }



// Successfully write and execute the valueOf() method.
function valueof() {
   a = "hi!";
   b = a.valueOf();
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
    a = "this is ";
    b = "so much fun ";
    c = a.concat(b)
    document.getElementById("concaternate").innerHTML = c;
}// we are adding to 2 variables together


function slice_1() {
    a = "hello im dan"
    b = a.slice(5,12)
    document.getElementById("slice_1").innerHTML = b
}// i am choosing what part of the string to display 

function tostring_1() {
    a = (123);
    document.getElementById("tostring_1").innerHTML = a.toString()
}// i am telling the function to display the number as a string

function precition_1() {
    a = (345623456.6547);
    b = a.toPrecision(15)
    document.getElementById("precition_1").innerHTML = b;
}// i am choosing how many number after the decimal to display


/////////////////////////////////////////////////////////////////////////


















































































































































