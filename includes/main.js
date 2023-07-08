function getComputerChoice(){
    box=['rock','paper','scissor'];
    return box[Math.floor(Math.random()*box.length)];
}
function single_play(playerSelection,computerSelection){
    if(playerSelection.toLowerCase()===computerSelection){
        return(`Hey! You both Picked ${playerSelection}`);
    }
    else if(playerSelection.toLowerCase()==='rock' && computerSelection==='paper'){
        return(`Hey! Computer Defeated you!`);
    }
    else if(playerSelection.toLowerCase()==='rock' && computerSelection=='scissor'){
        return('Congz! You defeated AI');
    }
    else if(playerSelection.toLowerCase()==='paper' && computerSelection=='rock'){
          return('Congz! You defeated AI');
    }
     else if(playerSelection.toLowerCase()==='paper' && computerSelection=='scissor'){
          return(`Hey! Computer Defeated you!`);
    }
    else if(playerSelection.toLowerCase()==='scissor' && computerSelection=='paper'){
         return('Congz! You defeated AI');
    }
    else if(playerSelection.toLowerCase()==='scissor' && computerSelection=='rock'){
          return(`Hey! Computer Defeated you!`);
    }
} 

function game(){
    const playerSelection = prompt('Enter what your choice is among rock,paper or scissor');
const computerSelection = getComputerChoice();
let  player_scores=0;
let comp_score=0;
for(i=0;i<5;i++){
    if(single_play(playerSelection, computerSelection)=='Hey! Computer Defeated you!'){
        comp_score++;
    }
    else if(single_play(playerSelection, computerSelection)=='Congz! You defeated AI'){
        player_scores++;  
    }
}
if(player_scores>comp_score){
    console.log(`You Defeated the AI With ${player_scores} and AI with ${comp_score}`);
}
else if(player_scores<comp_score){
    console.log(`AI Defeated you with ${comp_score} and You with ${player_scores}`);
}
}

