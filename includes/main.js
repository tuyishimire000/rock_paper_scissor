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


const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(single_play(playerSelection, computerSelection));