let choiceObtained = "";
let wins = 0;
let loses = 0;
let ties = 0;
let plays = 0;

function computerPlay(){

    const options = ["Paper", "Scissors", "Rock"];
    const option = Math.floor(Math.random() * 3);
    let play = options[option];

    return play;

}

function capitalize(str){
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase()+lower.slice(1);
}

function getId(){
    const choiceId = ""+this.id;

    if (choiceId === undefined) {
        console.log("Nothing.");
    }else {
        choiceObtained = choiceId;
    }
}

const buttons = document.querySelectorAll(".choice");
buttons.forEach(choice => choice.addEventListener("click", getId));
buttons.forEach(choice => choice.addEventListener("click", game));

function game(){
    
    
    
    
    if (plays<5){

        let playerChoice = choiceObtained;
        playerChoice = capitalize(playerChoice);
        let computerChoice = computerPlay();
        console.log(playRound(playerChoice, computerChoice));
        plays++;
        console.log(plays);

        function playRound(playerSelection, computerSelection) {
        
            let win = false;
            let tie = false;
            let message = "";
        
            if (playerSelection=="Paper"){
                if (computerSelection=="Scissors"){
                    win = false;
                }else if (computerSelection=="Rock"){
                    win = true;
                }
            }else if (playerSelection=="Rock"){
                if (computerSelection=="Scissors"){
                    win = true;
                }else if (computerSelection=="Paper"){
                    win = false;
                }
            }else if (playerSelection=="Scissors"){
                if (computerSelection=="Paper"){
                    win = true;
                }else if (computerSelection=="Rock"){
                    win = false;
                }
            }
            
            if (playerSelection==computerSelection){
                tie = true;
            }
        
            if (win==true){
                wins ++;
                message = "You win! "+playerSelection+" beats "+computerSelection+".";
                document.getElementById("currentResult").innerHTML=message;
            }else if(win==false && tie==false){
                loses++;
                message = "You lose! "+computerSelection+" beats "+playerSelection+".";
                document.getElementById("currentResult").innerHTML=message;
            }else if (tie==true){
                ties++;
                message = "Tie!";
                document.getElementById("currentResult").innerHTML=message;
            }
    
            return message;
        }
    }
    
    if(plays==5) {
        
        let finalResult = "";

        plays++;
        console.log("Game finished!");
        console.log("Wins: "+wins);
        document.getElementById("wins").innerHTML="Wins: "+wins;
        console.log("Loses: "+loses);
        document.getElementById("loses").innerHTML="Loses: "+loses;
        console.log("Ties: "+ties);
        document.getElementById("ties").innerHTML="Ties: "+ties;

        if (wins>loses){
            console.log("You win!");
            finalResult = "You win!";
        }else if(loses>wins){
            console.log("You lose!");
            finalResult = "You lose!";
        }else if (wins==loses){
            console.log("It's a tie!");
            finalResult = "It's a tie!";
        }

        document.getElementById("finalResult").innerHTML=finalResult;

    }else if(plays>5){
        alert("The game is over.");
    }

}

