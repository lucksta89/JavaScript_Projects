/* i set the var A to an alert and made a function called boo call the var */
a = alert("hello");
booo = () => alert(a);

/* i made a function called boo and called val and when clicked it displays the list of food */
function boo() {
var food = (val) => "these are my favorite foods: " + val;
document.getElementById('displayfood').innerHTML = food ("burgers, pizza and chips");
}




var ages = [2,10,18,20,13,15,30];
/*using the arrow function to pass the parameter of age */
checkAge = (age) => age >= 18; 

function myFunction() {
    /*use the .some() to iterate through the array of ages and display the result */
    document.getElementById("displayage").innerHTML = ages.some(checkAge);
}







/* the is variable keeps track of who's turn it is */
let activePlayer = 'X';
//this array stores an array moves, we can use this to determine win conditions.
let selectedSquares = [];

//this function is for placing an X or an O  in a square
function placeXOrO(squareNumber){
    //this condition ensures a square hasnt been selected already.
    //the .some() method is used to check each element of selectedsquare array to 
    //see if it contains the square number clicked on
    if(!selectedSquares.some(element => element.includes(squareNumber))){
        //this variable retrieves the html element id that was clicked 
        let select = document.getElementById(squareNumber);
        //this condition checks who's turn it is 
        if(activePlayer === 'X'){
            //if active player is equal to x the x.png is place in the html
            select.style.backgroundImage = 'url("images/x.png")';
            //if active player is equal to o the o.png is place in the html
        }else{
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squarenumber and activeplayer are concatenated together and added to array    
        selectedSquares.push(squareNumber + activePlayer);
        //this calls a function to check for any win conditions. 
        checkWinConditions();
        //this condition is for changing the active player
        if (activePlayer === 'X'){
            //if active player is x change it to o.
            activePlayer = 'O';
            //if active player is anything other than x
        }else{
            //change the active player to x
            activePlayer = 'X';
        }
        //this function plays placement sound
        audio('media/west_wolf_New_Year_Fireworks_Pack.mp3');
        //this condition checks to see if its coms turn 
        if (activePlayer === 'O'){
            //this function disables clicking for the com choice
            disableClick();
            //this function waits 1 sec before placing the image
            //and enabling click.
            setTimeout(function() { computersTurn() ; } ,1000);
        }
        //retuning true is needed for our computersturn() function to work
        return true;
    }

    //this function results in a random square being selected 
    function computersTurn() {
        //this boolean is needed for our while loop 
        let success = false;

        //this variable stores a random number 0-8
        let pickASquare;
        //this condition allows our while loop to keep
        //trying if a square is selected already 
        while(!success){
            // a random number between 0 and 8 is selected 
            pickASquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluates return true, the square hasn't selected  
            if (placeXOrO(pickASquare)){
                //this line calls the function
                placeXOrO(pickASquare);
                //this changes our boolean and ens the loop
                success = true;
            }
        }
    }
}

//this function parses the selectedSquares array to search for win conditions 
//drawWinLine function is called to draw a line if conditions are met 
function checkWinConditions() {
    //x0,1,2 condition
         if (arrayIncludes('0X','1X','2X')) {drawWinLine(50,100,558,100);}
         //x 3 4 5 condition
    else if (arrayIncludes('3X','4X','5X')) {drawWinLine(50,304,558,304);}
    //x 6 7 8 condition
    else if (arrayIncludes('6X','7X','8X')) {drawWinLine(50,508,558,508);}
    //x 0 3 6 condition
    else if (arrayIncludes('0X','3X','6X')) {drawWinLine(100,50,100,558);}
    //x 1 4 7 condition
    else if (arrayIncludes('1X','4X','7X')) {drawWinLine(304,50,304,558);}
    //x 2 5 8 condition
    else if (arrayIncludes('2X','5X','8X')) {drawWinLine(508,50,508,558);}
    //x 6 4 2 condition
    else if (arrayIncludes('6X','4X','2X')) {drawWinLine(100,508,510,90);}
    //x 0 4 8 condition
    else if (arrayIncludes('0X','4X','8X')) {drawWinLine(100,100,520,520);}
    //O 0 1 2 condition
    else if (arrayIncludes('0O','1O','2O')) {drawWinLine(50,100,558,100);}
    //O 3 4 5 condition
    else if (arrayIncludes('3O','4O','5O')) {drawWinLine(50,304,558,304);}
    //O 6 7 8 condition
    else if (arrayIncludes('6O','7O','8O')) {drawWinLine(50,508,558,508);}
    //O 0 3 6 condition
    else if (arrayIncludes('0O','3O','6O')) {drawWinLine(100,50,100,558);}
    //O 1 4 7 condition
    else if (arrayIncludes('1O','4O','7O')) {drawWinLine(304,50,304,558);}
    //O 2 5 8 condition
    else if (arrayIncludes('2O','5O','8O')) {drawWinLine(508,50,508,558);}
    //O 6 4 2 condition
    else if (arrayIncludes('6O','4O','2O')) {drawWinLine(100,508,510,90);}
    //O 0 4 8 condition
    else if (arrayIncludes('0O','4O','8O')) {drawWinLine(100,100,520,520);}
    //this conditions checks for tie, if none of the above conditions register 
    //and 9 squares are selected the code executes 
    else if (selectedSquares.length >= 9){
        //this function plays the tie sound
        audio('media/344_audio_various_fireworks_distant_crowds_024.mp3');
        //the function sets a .3 timer before the resetGame is called
        setTimeout(function () { resetGame(); }, 1000);
    }

    //this function checks if an array includes 3 strings 
    //its used to check each win condition  
    function arrayIncludes(squareA, squareB, squareC) {
        //the next 3 vars will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 vars we pass are all included in our array true is
        //returned and our else condition executes the drawWinLine function. 
        if( a === true && b === true && c === true){ return true; }
    }
}

//this function makes our body element temporarily unclickable 
function disableClick() {
    // this makes our body unclickable
    body.style.pointerEvents = 'none';
//this makes our body clickable again after 1 second 
    setTimeout(function() {body.style.pointerEvents = 'auto';},1000);
}

// this function takes a string para of the path you set earlier for
//placement sound 
function audio(audioURL) {
    //we can create a new audio object and we pass the path as a para 
    let audio = new Audio(audioURL);
    //play method plays our audio sound
    audio.play();
}

//this function utilizes html canvas to draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2){
    //this line access our html canvas element 
    const canvas = document.getElementById('win-lines');
    //this line gives us access to methods and properties to use on canvas 
    const c = canvas.getContext('2d');
    // this line indicates where the start lines x axis is 
    let x1 = coordX1,
    //this line indicates start of the y axis
        y1 = coordY1,
        //this indicates the end of the x axis
        x2 = coordX2,
        //this indicates the end of the y axis
        y2 = coordY2,
        //this var stares temporary x axis data we update in our ani loop 
        x = x1,
         //this var stares temporary y axis data we update in our ani loop 
        y = y1;

        //this function interacts with the canvas 
function animateLineDrawing() {
    //this var creates the loop for when the game ends it restarts 
    const animationLoop = requestAnimationFrame(animateLineDrawing);
    //this method clears content from last loop iteration 
    c.clearRect(0,0,608,608);
    //this method starts a new path
    c.beginPath();
    //this method moves us to a starting point for our line
    c.moveTo(x1,y1);
    //this methods sets width of the line
    c.lineTo(x,y);
    //this method sets the color of the line
    c.lineWidth = 10;
    //this method draws everything we laid out above
    c.strokeStyle = 'rgba(70,255,33,.8)';
    //this condition checks if we've reached the endpoint
    c.stroke();
    //this condition adds 10 to the prev end x point
    if (x1 <= x2 && y1 <= y2){
        //this condition adds 10 to the prev end y point
        if (x < x2) { x += 10; }
        //this condition cancels our ani loop if reach the end points 
        if (y < y2) { y += 10;}
        if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop); }  
    }
    //this condition is similar to the one above.
    //it was necessary for the 6 4 2 win condition
    if (x1 <= x2 && y1 >= y2){
        if (x < x2) { x += 10; }
        if (y > y2) { y -+ 10; }
        if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
    }
}

//this function clears our canvas after win line is drawn 
function clear(){
    //this line starts our animation loop
    const animationLoop = requestAnimationFrame(clear);
    //this line clears our canvas
    c.clearRect(0,0,608,608);
    //this line stops our animation loop
    cancelAnimationFrame(animationLoop);
}
//this line disallows clicking while the win sound is playing
disableClick();
//this line plays the win sounds
audio('media/ftus_fireworks_huge_display_reverb_303.mp3');
//this line calls the animation loop
animateLineDrawing();
//this line waits 1 sec
//then, clears canvas, reset game, allows clicking again 
setTimeout(function(){ clear();resetGame();} ,1000);
}


//this function resets the game in a tie or a win 
function resetGame(){
    //this for loop iterates through each html square element
    for (let i = 0; i < 9; i++){
        //this var gets html element of i
        let.square = document.getElementById(string(i));
        //this removes our elements backgroundImage
        square.style.backgroundImage = '';
    }
    //this resets our array so it is empty and we can start over
    selectedSquares = [];
}













































