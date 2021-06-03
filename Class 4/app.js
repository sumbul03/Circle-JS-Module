game  = "Scrabble" ;

function chooseGame(){
    console.log(game, "Game");
}

chooseGame();


// ARRAY 

let games = ["Scrabble" , "Ludo" , "ONO"];

for (let i=games.length-1; i>=0;i--){
    console.log(games[i],"Members");
}

// Hoisting

/* JS concept which puts all the variables at the top of the file (scopes to the top)
hence all variables get initialized/declared even before the assignment */
//run using node app.js in cmd
console.log(car); //gives output at "undefined" means it initializes the variable during execution. hence assigns memory to it but didnt assign a value


let car = "Alto";    //let gives the error, unlike "var" which just gives undefined
//let gives error "can not access 'car' before initialization". let k case me hoisting works 
//but can't access the variable. hence it can not be overwritten.
//var cause hoisting and access the value of variable hence for larger files, data can be over written in a variable.

