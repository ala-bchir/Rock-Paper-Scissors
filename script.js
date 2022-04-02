
const playerScore = document.querySelector('.Player');
const computerScore = document.querySelector('.Computer');
const c_choice = document.querySelector('.c_choice');
const winner = document.querySelector('.winner');








function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }



const tab =["rock","paper","scissors"];

let computerPlay = ()=>{
    return tab[getRandomInt(3)];
}

function c_add_score(){
    playerScore.style.color = "black";
    cScore+=1;
    computerScore.innerHTML= "Computer: "+cScore;
    computerScore.style.color = "red";
    

}

function p_add_score(){
    computerScore.style.color = "black";
    pScore+=1;
    playerScore.innerHTML= "Player: "+pScore;
    playerScore.style.color = "red";
    
    

}





        



let  playRound= (player,computer=computerPlay())=>{
    c_choice.innerHTML="Computer choice : "+computer;
    console.log(`Player choice : ${player}`);

    //Paper
    if (player=="paper" ){
        if (computer == "scissors"){
            c_add_score();
        }else if (computer == "rock"){
            p_add_score();
        }else return 3
    }
    //Rock
    if (player=="rock" ){
        if (computer == "scissors"){
            p_add_score();
        }else if (computer == "paper"){
            c_add_score();
        }else return 3
    }

    //Scissors
    if (player=="scissors" ){
        if (computer == "rock"){
            c_add_score();
        }else if (computer == "paper"){
            p_add_score();
        }else return 3
    }
    

}
let pScore = 0 ; 
let cScore = 0 ;
let exit = false ; 

function reset(){
    pScore = 0 ;
    cScore = 0 ;
    playerScore.innerHTML= "Player: "+pScore;
    computerScore.innerHTML= "Computer: "+cScore;
    setTimeout(()=>{
        winner.innerHTML="";
    },3000);
    c_choice.innerHTML= "Computer chocie :";
    playerScore.style.color = "black";
    computerScore.style.color = "black";
}

function Winner(){//Display winner and set score to zero.
    if (pScore == 5){
        winner.innerHTML ="Player WIN ! ";
        reset();
        
    }
    if (cScore == 5){
        winner.innerHTML="Computer win :(";
        reset();
        
    }
    
}

    

    


    


    


const buttons = document.querySelectorAll('img');

buttons.forEach(button => {

    button.addEventListener('click',e =>{
        playRound(e.target.id,computerPlay());
        Winner();
        
       
    });
    
});



