
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


const tab =["rock","paper","scissors"];

let computerPlay = ()=>{
    return tab[getRandomInt(3)];
}



let playerSelection = ()=>{
    return  prompt("choose paper , rock or scissors");
}


let  palyRound= (player=playerSelection(),computer=computerPlay())=>{
    console.log(`Computer choice : ${computer}`);
    console.log(`Player choice : ${player}`);

    //Paper
    if (player=="paper" ){
        if (computer == "scissors"){
            return "Computer win !"
        }else if (computer == "rock"){
            return "Player win !"
        }else return "it's a tie !"
    }
    //Rock
    if (player=="rock" ){
        if (computer == "scissors"){
            return "Player win !"
        }else if (computer == "rock"){
            return "it's a tie !"
        }else return "Computer win !"
    }

    //Scissors
    if (player=="scissors" ){
        if (computer == "rock"){
            return "Computer win !"
        }else if (computer == "paper"){
            return "Player win !"
        }else return "it's a tie !"
    }
    

}
let pScore = 0 ; 
let cScore = 0 ;

function game(){
    
    for(let i = 0 ; i < 5 ; i++){
        console.log("round : "+(i+1)) ;
        let result = palyRound();
        if (result ==  "Player win !"){
            pScore+=1;
        }else if (result ==  "Computer win !"){
            cScore+=1;
        }
        console.log("Actual score :" );
        console.log("computer:"+cScore);
        console.log("Player:"+pScore);
    }


    if (pScore > cScore){
        console.log("Player win the game ! ");
    }else if (pScore < cScore){
        console.log("Computer win the game.")
    }else console.log("it's a tie game");
}

game();