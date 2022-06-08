function computerSelection() {
    let selection = Math.floor(Math.random() * 3);
    if (selection === 1) {
      console.log('Computer chose Rock');
      return  'rock';  
    } else if(selection === 2) {
      console.log('Computer chose Paper');  
      return  'paper';
    }else{
        console.log('Computer chose Scissor');
        return  'scissor'  }
    }

    
    function playRound(){
            playerOption = this.id;
            console.log(`player choose ${playerOption}`);
            computerOption = computerSelection();
            if (playerOption  === computerOption) {
              results.innerText = 'Game Tied'; 
              return;
           } else if((playerOption === 'rock' && computerOption === 'paper') || (playerOption === `scissor` && computerOption === `rock`) || (playerOption === 'paper' && computerOption === `scissor`)) 
           {
            computerScore += 1;
            results.innerText = `'Computer Wins the Round' ${computerOption} beats ${playerOption}`; 
            computerScoreDisplay.innerText = computerScore;

            if (computerScore==5) {
              alert(`Computer Wins The Game by ${computerScore} - ${playerScore} `)
              computerScore=0;
              playerScore=0;
              computerScoreDisplay.innerText = computerScore;
              playerScoreDisplay.innerText = playerScore;
              results.innerText = 'Computer Wins'; 
              
            }
            return;     
           } else {
            playerScore += 1 ; 
            results.innerText = `'Player Wins the Round' ${playerOption} beats ${computerOption}`; 
            playerScoreDisplay.innerText = playerScore;

            if (playerScore==5) {
              alert(`Player Wins The Game by ${playerScore} - ${computerScore} `)
              computerScore=0;
              playerScore=0;
              computerScoreDisplay.innerText = computerScore;
              playerScoreDisplay.innerText = playerScore;
             
            }
          return;
                 }

        }



 
// main function 

  playerOption =  '';
  computerOption = '';
  playerScore = 0;
  computerScore = 0;
  outcome = '';
 


  option ='';


  const results = document.querySelector('#results');

  const rock = document.querySelector('#rock');
  const paper = document.querySelector('#paper');
  const scissor = document.querySelector('#scissor');
  const playerScoreDisplay = document.querySelector('#playerScore');
  const computerScoreDisplay = document.querySelector('#computerScore');


  rock.addEventListener('click', playRound);
  paper.addEventListener('click', playRound);
  scissor.addEventListener('click', playRound);

  

  // player choose scissor script.js:17:21
  // Computer chose Paper script.js:7:15
  // Computer chose Rock  
   
//   player choose rock script.js:17:21
// Computer chose Scissor script.js:10:17
// Computer chose Paper







 
  


         // function playerSelection() {
         //     option = prompt('Choose Rock Paper or Scissor');
         //     if (option.toLowerCase() === 'rock') {
         //         console.log(`You choose Rock`);
         //         return  'rock';
         //     } else if (option.toLowerCase() === 'scissor') {
         //         console.log(`You choose Scissor`);
         //         return 'scissor';
         //     } else if (option.toLowerCase() === 'paper'){
         //         console.log(`You choose Paper`);
         //         return 'paper';
         //     }else {
         //        aler(`Invalid Option, Please choose Either "Rock, Paper or Scissor"`);
         //       return playerSelection();
         //     }
         // }
     
     
         
     
           //  function game(){
            
           //   if (computerScore > playerScore) {
           //    aler('Computer wins!')
           //    console.log('Computer Wins');
           //   } else if(playerScore > computerScore) {
           //       aler('Player wins!')
           //       console.log('Player Wins!');  
           //   }else{ aler('Its a tie!')
           //   console.log('Tie');  }
           //   }