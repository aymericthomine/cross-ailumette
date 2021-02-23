const chalk = require("chalk");

module.exports = ailumette = () => {
    let firstPos;
    let secondPos;
    let thridPos;

const prompt = require('prompt-sync')();
 
console.log('\n------- CROSS AILUMETTE -------\n');
console.log("Each player can take one or more matches on the same line.\n");
console.log("The player who loses is the one who takes the last match.\n");
console.log("-------------------------------\n");

var start = prompt('Do you want start a game ? (yes or no) ');

if(start=="no"){
    console.log("Good bye my friend ! 🥺")
    process.exit(1);
}

var jeu = [1,3,5,7]

function game(){
    var ligne0 = "\n*********" 
    var ligne1 = "*   |   *"
    var ligne2 = "*  |||  *"
    var ligne3 = "* ||||| *"
    var ligne4 = "*|||||||*"
    var ligne5 = "*********"

    if(jeu[0]!=1){ligne1=ligne1.replace("|"," ")} 
    if(jeu[1]!=3){
        for (let i = 0; i < (3-jeu[1]); i++) {
            ligne2=ligne2.replace("|"," ")
        }
    }
    if(jeu[2]!=5){
        for (let i = 0; i < (5-jeu[2]); i++) {
            ligne3=ligne3.replace("|"," ")
        }
    }
    if(jeu[3]!=7){
        for (let i = 0; i < (7-jeu[3]); i++) {
            ligne4=ligne4.replace("|"," ")
        }
    }

    var pyramid = ligne0 + "\n" + ligne1 + "\n" + ligne2 + "\n" + ligne3 + "\n" + ligne4 + "\n" + ligne5 

    return pyramid
}

function play(balance){

    if(balance=="yes"){

        console.log("Your turn:");

        var line = prompt('Line: ');
        var possibilites = [1,2,3,4]
        while(!possibilites.includes(parseInt(line))||(jeu[line-1]<1)){
            var line = prompt('/!\\ 1 or 2 or 3 or 4 with 1+ match /!\\ \nLine: ');
        }

        var matches = prompt('Matches: ');
        while((matches<1)){
            var matches = prompt('Error: invalid input (positive number expected) \nMatches: ');
        } 

        while ((matches>jeu[line-1])) {
            var matches = prompt('Error: not enough matches on this line \nMatches: ');
        }

        jeu[line-1] = jeu[line-1] - matches

        console.log("Player removed "+matches+" match(es) from line "+line)
    
    }else{
        console.log("AI’s turn...")

        var line = Math.floor(Math.random() * 4)+1;
        while(jeu[line-1]<1){
            var line = Math.floor(Math.random() * 4)+1;
        }

        var matches = Math.floor(Math.random() * jeu[line-1])+1;

        jeu[line-1] = jeu[line-1] - matches

        console.log("AI removed "+matches+" match(es) from line "+line)
    }
}
console.log(game())
while((jeu[0]!=0)||(jeu[1]!=0)||(jeu[2]!=0)||(jeu[3]!=0)){
    play(start)
    console.log(game())
    if(start=="yes"){start="no"}else{start="yes"}
}

if(start=="yes"){
    console.log("Good job boy !")
}else{
    console.log("You lost, too bad..")
}

};