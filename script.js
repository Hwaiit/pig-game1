/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/


var score, roundScore, activePlayer, dice;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    dice = Math.floor(Math.random() * 6 ) + 1;
    var diceDom =  document.querySelector('.dice');
    diceDom.style.display = 'block'
    diceDom.src = 'dice-' + dice + '.png';
    
    if (dice !== 1){
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {
        roundScore = 0;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        nextPlayer();

    }

});


document.querySelector('.btn-hold').addEventListener('click', function(){
    score[activePlayer] += roundScore;
    document.querySelector('#score-'+ activePlayer).textContent = score[activePlayer];
    roundScore = 0;
    if(score[activePlayer] >= 20){
        document.querySelector('#name-'+activePlayer).innerHTML = 'WINNER!!';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        document.querySelector('.dice').style.display = 'none';
    }else {
        nextPlayer();
    }
    
})


document.querySelector('.btn-new').addEventListener('click', init);





function nextPlayer(){
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('#current-0').textContent = "0";
         document.querySelector('#current-1').textContent = "0";
}



function init(){
score = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.querySelector('#score-0').innerHTML = '0';
document.querySelector('#score-1').innerHTML = '0';
document.querySelector('#current-0').textContent = "0";
document.querySelector('#current-1').textContent = "0";
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}



