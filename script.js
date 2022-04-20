function computerSelection() {
    let selection = Math.floor(Math.random() * 3);
    if (selection === 1) {
      console.log('Computer chose Rock');
      return  'rock';  
    } else if(selection === 2) {
      console.log('Computer chose Paper');  
      return  'paper';
    }else {
        console.log('Computer chose Scissor');
        return  'scissor'  }
    }

    function playerSelection() {
        option = prompt('Choose Rock Paper or Scissor');
        if (option.toLowerCase() === 'rock') {
            console.log(`You choose Rock`);
            return  'rock';
        } else if (option.toLowerCase() === 'scissor') {
            console.log(`You choose Scissor`);
            return 'scissor';
        } else if (option.toLowerCase() === 'paper'){
            console.log(`You choose Paper`);
            return 'paper';
        }else {
           alert(`Invalid Option, Please choose Either "Rock, Paper or Scissor"`);
          return playerSelection();
        }
    }


    function playRound(){
        playerOption = playerSelection();
        computerOption = computerSelection();
       if (playerOption  === computerOption) {
        return 'Game Tied'; 

       } else if((playerOption === 'rock' && computerOption === 'paper') || (playerOption === `scissor` && computerOption === `rock`) || (playerOption === 'paper' && computerOption === `scissor`)) 
       {
        computerScore += 1;          
        return 'Computer Wins'   
       } else {
        playerScore += 1 ; 
        return 'Player Wins'}; 
                
       }

       function game(){
        for (let i = 1; i < 6; i++) {
            outcome = playRound();
            console.log(`Round ${i}!, ${outcome}  !!,
            Score :- Player = ${playerScore} & Computer = ${computerScore}`); 
        }
        if (computerScore > playerScore) {
         alert('Computer wins!')
         console.log('Computer Wins');
        } else if(playerScore > computerScore) {
            alert('Player wins!')
            console.log('Player Wins!');  
        }else{ alert('Its a tie!')
        console.log('Tie');  }
        }

 
// main function 

  playerOption =  '';
  computerOption = '';
  playerScore = 0;
  computerScore = 0;
  outcome = '';
 

  option ='';

  game();
  

