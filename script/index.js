const playNowButton=document.getElementById('play-now-btn');
playNowButton.addEventListener('click',()=>{
    hideElement('home');
    showElement('play-ground');
    continueGame ();
    gamePlay=true;
});
const successAudio= new Audio('../audio/sucess.mp3');
const wrongAudio=new Audio('../audio/wrong.mp3');

let gamePlay=false;
document.addEventListener('keyup',(e)=>{
    if(gamePlay===false)
    
    {

        return;
    }
    const screenCharacter=document.getElementById('screen-character');
    const screenChar=screenCharacter.innerText.toLowerCase();
    removebackgroundColor(screenChar);
    continueGame();
    if(e.key==='Escape')
    {
        hideElement('play-ground');
          showElement('score');
          const gameScore=document.getElementById('game-score');
          const gameScoreInScoreSection=document.getElementById('game-score-in-score-section');
          gameScoreInScoreSection.innerText=gameScore.innerText;
    }
    
    else if(e.key===screenChar)
    {
        const gameScore=document.getElementById('game-score');
        let score=parseInt(gameScore.innerText);
        score++;
        gameScore.innerText=score;
        successAudio.play();
      
    }
    else{
        const lifeScore=document.getElementById('life-score');
        let score=parseInt(lifeScore.innerText);
        score--;
        if(score===0)
        {
          hideElement('play-ground');
          showElement('score');
          const gameScore=document.getElementById('game-score');
          const gameScoreInScoreSection=document.getElementById('game-score-in-score-section');
          gameScoreInScoreSection.innerText=gameScore.innerText;
          gamePlay=false;
        }
        lifeScore.innerText=score;
        wrongAudio.play();
        let life=(score/5)*100;
        const artBoard=document.getElementById('artboard-container');
        artBoard.style.background=`linear-gradient(white ${life}%,red)`;
        
    }
});
const playAgainButton=document.getElementById('play-again-btn');
playAgainButton.addEventListener('click',()=>{
    gamePlay=true;
    const artBoard=document.getElementById('artboard-container');
        artBoard.style.background='#FFFFFF';
    hideElement('score');
    showElement('play-ground');
    const lifeScore=document.getElementById('life-score');
    lifeScore.innerText=5;
    const gameScore=document.getElementById('game-score');
    gameScore.innerText=0;
    const screenCharacter=document.getElementById('screen-character');
    const screenChar=screenCharacter.innerText;
    removebackgroundColor(screenChar);
    continueGame ();
    
});

document.body.addEventListener('mousemove',(e)=>{
   if(e.clientY==0)
   {
    const modal=document.getElementById('modal');
    modal.classList.remove('hidden');

   }
})

document.getElementById('cross-btn').addEventListener('click',()=>{
    const modal=document.getElementById('modal');
    modal.classList.add('hidden');
})

