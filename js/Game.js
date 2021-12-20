/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game  {
    constructor(){
        this.missed = 0;
        this.phrases = ['The best of both worlds', 'Speak of the devil', 'See eye to eye', 'To kill two birds with one stone', 'Once in a blue moon' ];
        this.activePhrase = null;
        this.scoreBorad = document.querySelectorAll('img');
    }



    startGame(){
        this.reset()
        const overlay = document.querySelector('#overlay');  
        overlay.style.display = "none";
        const randomP = this.getRandomPhrase();
        this.activePhrase= new Phrase(randomP);
        this.activePhrase.addPhraseToDisplay();
    }


    reset(){

        for(let i = 0; i< this.scoreBorad.length; i++){
            this.scoreBorad[i].src='images/liveHeart.png';
        }
        //this.missed = 0;
    
        const keybordPush = qwerty.querySelectorAll('.chosen');
    
        for(let i = 0; i<keybordPush.length; i++ ){
            
            keybordPush[i].className = '';
            keybordPush[i].disabled = false;
            
        }
    
    }


    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * (4 - 0 + 1) + 0)];
    }


    handleInteraction(e){

        let letterFound;

        if(e.target.tagName === 'BUTTON'){
            const button = e.target;
            button.className = 'chosen';
            button.disabled = true;

            letterFound = this.activePhrase.checkLetter(button); 
        }

        if(letterFound === null){
            this.removeLife()
        }

        this.checkWin ();

    }



    removeLife(){
        this.scoreBorad[this.missed].src='images/lostHeart.png';
        this.missed ++;

    }

     checkWin (){
        const listLi = document.querySelectorAll('li.letter');
        

        let show = 0;
        let letter = listLi.length;

        for(let i = 0; i < listLi.length; i++){

            if(listLi[i].className.includes('show')){
                show ++;
            }
        }

        
        if(show === letter){
            this.gameOver("win","You have won!");
        }else if(this.missed >= 5){
            this.gameOver("lose","You have lost!");
        }

    }


    gameOver(name, text){
        overlay.className = name;
        overlay.firstElementChild.textContent = text;
        overlay.style.display = "block";

    }


}






