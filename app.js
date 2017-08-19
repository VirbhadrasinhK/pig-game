/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores , roundScore , activePlayer  ;
	
	scores = [0 ,0];
	roundScore = 0 ;
	activePlayer = 0;



/* 
	  document.querySelector('#current-'   + activePlayer).textContent = dice;  
 /*
     document.querySelector('#current-1').textContent = dice;
   // # select id  bind dice value with current value with query selector  */
   
   /*   */
   
   
   
			document.querySelector('.dice').style.display = 'none' ;    // CSS select with selector  in start we dont need dice into middle so we hide dice with CSS  style display properties ==  none
   
					   document.getElementById('score-0').textContent = 0 ;
					   document.getElementById('score-1').textContent = 0 ;
					   document.getElementById('current-0').textContent = 0 ;
					   document.getElementById('current-1').textContent = 0 ;
					   
   
						document.querySelector('.btn-roll').addEventListener('click', function(){
				   
								// 1. Random num
									var dice = Math.floor(Math.random() * 6 ) + 1;
											console.log(dice);
				 
	
									// 2. display the result
	  
									var diceDOM = document.querySelector('.dice');
										diceDOM.style.display = 'block' ;  // none to block because now we need value
										diceDOM.src = 'dice-' + dice /* this dice provide value */ + '.png';
	  
										//3. update the round Score If rolled num is not 1
	  
													if (dice !== 1){  // if dice > 1
													  //add score
														roundScore = roundScore + dice;
														document.querySelector('#current-'   + activePlayer).textContent = roundScore ;  
													  }
													  
												 else { 
												 
												 // next player if dice = 1 than
													 nextPlayer();
												}
												  
								});
				
				document.querySelector('.btn-hold').addEventListener('click', function(){
					// add curront score to global score
					scores[activePlayer] = scores[activePlayer] + roundScore ;
					
					// update UI
					document.querySelector('#score-'   + activePlayer).textContent =  scores[activePlayer] ; 
					
					
					// check if player is win
					 if  (scores[activePlayer] >= 100){
						document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
						document.querySelector('.dice').style.display = 'none' ;
					 }
					else {
						
						//next player
						nextPlayer();
					}
					
					
					
				});
				
				
				
				function nextPlayer(){
					activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
															/* if(activePlayer == 0){
																   activePlayer = 1;
																  }
																else{
																  activePlayer = 0;
															  }   */ 
															  roundScore = 0;
															  
															  document.getElementById('current-0').textContent = '0';
															  document.getElementById('current-1').textContent = '0';
															  
															/*  document.querySelector('.player-0-panel').classList.remove('active');
															  document.querySelector('.player-1-panel').classList.add('active');
															  */
													 document.querySelector('.player-0-panel').classList.toggle('active');
															  document.querySelector('.player-1-panel').classList.toggle('active');
												
												document.querySelector('.dice').style.display = 'none' ; // make dice display none after turn
					
					
				}
				
				document.querySelector('.btn-new').addEventListener('click' , function (){
					score =[0,0];
					activePlayer = 0;
					roundScore = 0;
					
					document.querySelector('.dice').style.display = 'none' ; 
					
					document.getElementById('score-0').textContent = 0 ;
					   document.getElementById('score-1').textContent = 0 ;
					   document.getElementById('current-0').textContent = 0 ;
					   document.getElementById('current-1').textContent = 0 ;
					   
					   document.getElementById('name-0').textContent = 'Player 1';
						document.getElementById('name-1').textContent = 'Player 2';
					
				});
				
				