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

function game(){
    
    let wins = 0;
    let loses = 0;
    let ties = 0;
    let plays = 0;
    
    
    while (plays<5){

        let playerChoice = prompt("Write your play!");
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
            }else if(win==false && tie==false){
                loses++;
                message = "You lose! "+computerSelection+" beats "+playerSelection+".";
            }else if (tie==true){
                ties++;
                message = "Tie!";
            }
    
            return message;
        }
    } 
    
    if(plays==5) {
        console.log("Game finished!");
        console.log("Wins: "+wins);
        console.log("Loses: "+loses);
        console.log("Ties: "+ties);

        if (wins>loses){
            console.log("You win!");
        }else if(loses>wins){
            console.log("You lose!");
        }else if (wins==loses){
            console.log("It's a tie!");
        }
    }
    
    

}
