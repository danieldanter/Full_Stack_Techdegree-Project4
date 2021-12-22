/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


class Game  {
    constructor(){
        this.missed = 0;
        this.phrases = [new Phrase('The best of both worlds'),new Phrase( 'Speak of the devil'), new Phrase('See eye to eye'), new Phrase('To kill two birds with one stone'), new Phrase('Once in a blue moon') ];
        this.activePhrase = null;
        this.scoreBorad = document.querySelectorAll('img');
    }



    startGame(){
        this.reset()
        const overlay = document.querySelector('#overlay');  
        overlay.style.display = "none";
        const randomP = this.getRandomPhrase();
        this.activePhrase= randomP;
        this.activePhrase.addPhraseToDisplay();
    }


    reset(){

        for(let i = 0; i< this.scoreBorad.length; i++){
            this.scoreBorad[i].src='images/liveHeart.png';
        }
        //this.missed = 0;
    
        const keybordPush = qwerty.querySelectorAll('button');
    
        for(let i = 0; i<keybordPush.length; i++ ){
            
            keybordPush[i].className = '';
            keybordPush[i].disabled = false;
            
        }
    
    }


    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * (4 - 0 + 1) + 0)];
    }


    handleInteraction(e){

        var letter = 0;
        var button;

        if(e.target.tagName === 'BUTTON'){
            button = e.target;
            button.className = 'chosen';
            button.disabled = true;

            const listLi = document.querySelectorAll('li.letter');
            

            for(let i = 0; i < listLi.length; i++){
               
                if(this.activePhrase.checkLetter(listLi[i],e.target)){
                    letter ++;
                    this.activePhrase.showMatchedLetter(listLi[i])
                }
                
            }
   
        }
        console.log(letter)

        if(letter===0){
            this.removeLife()
            button.className = 'wrong';
        }

        this.checkWin ();

    }



    removeLife(){
        this.scoreBorad[this.missed].src='images/lostHeart.png';
        this.missed ++;
        if(this.missed >= 5){
            this.gameOver("lose","You have lost!");
        }
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
        }

    }


    gameOver(name, text){
        overlay.className = name;
        overlay.firstElementChild.textContent = text;
        overlay.style.display = "block";

    }


}






