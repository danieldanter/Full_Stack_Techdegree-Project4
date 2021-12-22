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


    checkLetter(listLi,btn) {

        return listLi.textContent.toLowerCase() === btn.textContent
        
    
    }
    

    showMatchedLetter(listLi){
    
    listLi.className = 'letter show';
    }
}











