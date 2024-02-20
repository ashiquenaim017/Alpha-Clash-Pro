function showElement(idName){
  const element= document.getElementById(idName);
  element.classList.remove('hidden')

}
function hideElement(idName){
  const element= document.getElementById(idName);
  element.classList.add('hidden')

}

function addbackgroundColor(idName){
          const key=document.getElementById(idName);
          key.classList.add('bg-orange-400');
}
function removebackgroundColor(idName){
          const key=document.getElementById(idName);
          key.classList.remove('bg-orange-400');
}


function continueGame (){
    const alphabets='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabet= alphabets.split('');
   const screenCharacter= alphabet[Math.round(Math.random()*25)];
    const char= document.getElementById('screen-character');
    char.innerText=screenCharacter;
    addbackgroundColor(char.innerText.toLowerCase());

   
}