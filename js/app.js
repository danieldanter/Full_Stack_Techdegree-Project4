/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


class App  {
    constructor(){
        this.btn_reset = document.querySelector('#btn__reset');  
        this.qwerty = document.querySelector('#qwerty');
        this.Game = null;
        // add eventListener to startButton
        this.btn_reset.addEventListener('click',(e)=>{   
            this.Game = new Game();
            this.Game.startGame();
        });

        // add eventLIstener to each KeayboardLetter

        qwerty.addEventListener('click',(e)=>{  
            this.Game.handleInteraction(e)

        });



    }




}



var newApp = new App();

