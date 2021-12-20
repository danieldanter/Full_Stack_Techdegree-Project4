/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */



class Phrase  {
    constructor(phrase){
        this.phrase = phrase.toLowerCase();        
        this.phraseUl = document.querySelector('#phrase ul');
        this.phraseUl.innerHTML = ''; // set to start
    }

   
    addPhraseToDisplay(){

        for(let i = 0; i< this.phrase.length; i++){
            
            const element = document.createElement('li');
            element.textContent = this.phrase[i];
            if(this.phrase[i] !== ' '){
                element.className = 'letter';
            }else{
                element.className = 'space';
            }
                       
            this.phraseUl.appendChild(element);
        }

    }


    checkLetter(btn) {

        const listLi = document.querySelectorAll('li.letter');
        
        return this.showMatchedLetter(listLi,btn);
    }
    

    showMatchedLetter(listLi,btn){
        let letter = null;
        for(let i = 0; i < listLi.length; i++){
            if(listLi[i].textContent.toLowerCase() === btn.textContent){
                listLi[i].className = 'letter show';
                letter = btn.textContent;
                
            }
        }

        return letter;

    }
}











