
const playerScore = document.querySelector('.Player');
const computerScore = document.querySelector('.Computer');



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



const tab =["rock","paper","scissors"];

let computerPlay = ()=>{
    return tab[getRandomInt(3)];
}





        



let  playRound= (player,computer=computerPlay())=>{
    console.log(`Computer choice : ${computer}`);
    console.log(`Player choice : ${player}`);

    //Paper
    if (player=="paper" ){
        if (computer == "scissors"){
            cScore+=1;
            computerScore.innerHTML= "Computer: "+cScore;
        }else if (computer == "rock"){
            pScore+=1;
            playerScore.innerHTML= "Player: "+pScore;
        }else return 3
    }
    //Rock
    if (player=="rock" ){
        if (computer == "scissors"){
            pScore+=1;
            playerScore.innerHTML= "Player: "+pScore;
        }else if (computer == "paper"){
            cScore+=1;
            computerScore.innerHTML= "Computer: "+cScore;
        }else return 3
    }

    //Scissors
    if (player=="scissors" ){
        if (computer == "rock"){
            cScore+=1;
            computerScore.innerHTML= "Computer: "+cScore;
        }else if (computer == "paper"){
            pScore+=1;
            playerScore.innerHTML= "Player: "+pScore;
        }else return 3
    }
    

}
let pScore = 0 ; 
let cScore = 0 ;
let exit = false ; 

function Winner(){
    if (pScore == 5){
        console.log("player wiiin");
        pScore = 0 ;
        cScore = 0 ;
        playerScore.innerHTML= "Player: "+pScore;
        computerScore.innerHTML= "Computer: "+cScore;
    }
    if (cScore == 5){
        console.log("uter wiiin");
        pScore = 0 ;
        cScore = 0 ;
        playerScore.innerHTML= "Player: "+pScore;
        computerScore.innerHTML= "Computer: "+cScore;
    }
}

    
// const setScore = () =>{
//     if (pScore >5 || cScore>5){
//         pScore = 0 ;
//         cScore = 0 ;
//         playerScore.innerHTML= "Player: "+pScore;
//         computerScore.innerHTML= "Computer: "+cScore;
//     }
// }
    


    


    


const buttons = document.querySelectorAll('.choice');

buttons.forEach(button => {

    button.addEventListener('click',e =>{
        playRound(e.target.id,computerPlay());
        Winner();
        
    });
    
});



