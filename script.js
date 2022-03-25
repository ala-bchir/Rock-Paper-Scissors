
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
            return "computer win ! "
        }else if (computer == "rock"){
            return "Player win !"
        }else return "it's a tie !"
    }
    //Rock
    if (player=="rock" ){
        if (computer == "scissors"){
            return "Player win ! "
        }else if (computer == "rock"){
            return "it's a tie !"
        }else return "Player win !"
    }

    //Scissors
    if (player=="scissors" ){
        if (computer == "rock"){
            return "computer win ! "
        }else if (computer == "paper"){
            return "Player win !"
        }else return "it's a tie !"
    }
    

}

console.log(palyRound());
