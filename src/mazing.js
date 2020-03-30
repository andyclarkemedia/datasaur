// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header


import { showFinishedPanel } from './utils.js';


export const triggerMaze = function(game) {


function Position(x, y) {
      this.x = x;
      this.y = y;
    }

    Position.prototype.toString = function() {
      return this.x + ":" + this.y;
    };

    function Mazing() {
      // bind to HTML elements

      this.mazeContainer = document.getElementById("maze");
      this.mazeOutputDiv = document.getElementById("maze_output");
      this.mazeMessage   = document.getElementById("maze_message");
      this.mazeScore     = document.getElementById("maze_score");
      this.heroScore     = this.mazeContainer.getAttribute("data-steps") - 2;

      this.maze = [];
      this.heroPos = {};
      this.heroHasSolar = false;
      // this.heroHasKey = false;
      this.childMode = false;

      for(let i=0; i < this.mazeContainer.children.length; i++) {
        for(let j=0; j < this.mazeContainer.children[i].children.length; j++) {
          var el =  this.mazeContainer.children[i].children[j];
          this.maze[new Position(i, j)] = el;
          if(el.classList.contains("entrance")) {
            // place hero at entrance
            this.heroPos = new Position(i, j);
            this.maze[this.heroPos].classList.add("hero");
          }
        }
      }

      this.mazeOutputDiv.style.width = this.mazeContainer.scrollWidth + "px";

      // activate control keys
      this.keyPressHandler = this.mazeKeyPressHandler.bind(this);
      document.addEventListener("keydown", this.keyPressHandler, false);
    }

    Mazing.prototype.setMessage = function() {
      //this.mazeMessage.innerHTML = text;
      this.mazeScore.innerHTML = this.heroScore;
    };

    Mazing.prototype.heroTake_crowdfunding_new = function(nextStep, regex, elementId) {
      if(nextStep.match(regex)){
        document.getElementById(elementId).style.display = "block";
        this.maze[this.heroPos].classList.remove(elementId);
        this.heroScore += 10;
        game.moneyUp((game.money + 200), "up")
        return false;
      } else {
        document.getElementById(elementId).style.display = "none";
        return true;
      }
    };

    Mazing.prototype.heroTake_crowdfunding_generous_new = function(nextStep, regex, elementId) {
      if(nextStep.match(regex)){
        document.getElementById(elementId).style.display = "block";
        this.maze[this.heroPos].classList.remove(elementId);
        this.heroScore += 20;
        game.moneyUp((game.money + 2000), "up")
        return false;
      } else {
        document.getElementById(elementId).style.display = "none";
        return true;
      }
    };

    Mazing.prototype.heroTakeSolar = function() {
      this.maze[this.heroPos].classList.remove("solar");
      this.heroHasSolar = true;
      this.heroScore += 5;
      game.heroCollectedSolar();
      //this.setMessage("You got government's funding for your solar panels instalation in agriculture-related project");
    };

    Mazing.prototype.gameOver = function() {
      // de-activate control keys
      document.removeEventListener("keydown", this.keyPressHandler, false);
      //this.setMessage(text);
      showFinishedPanel();
      // this.mazeContainer.classList.add("finished");
    };

    Mazing.prototype.wins = function() {
      // de-activate control keys
      document.removeEventListener("keydown", this.keyPressHandler, false);
      //this.setMessage(text);
      showFinishedPanel();
      //this.mazeContainer.classList.add("won");

    };

    Mazing.prototype.heroWins = function() {
      // this.mazeScore.classList.remove("has-key");
      this.maze[this.heroPos].classList.remove("door");
      this.heroScore += 50;
      game.moneyUp((game.money + 2000), "up");
      showFinishedPanel();
      this.wins("you finished !!!");
    };

    Mazing.prototype.hero_investor = function(nextStep, regex, elementId) {
      if(nextStep.match(regex)) {
        document.getElementById(elementId).style.display = "block";
        this.heroScore = Math.max(this.heroScore - 5, 0);
        if(!this.childMode && this.heroScore <= 0) {
          this.gameOver("sorry, you didn't make it");
        }
        return false;
      } else {
        document.getElementById(elementId).style.display = "none";
        return true;
      }
    }

    Mazing.prototype.tryMoveHero = function(pos) {
      var nextStep = this.maze[pos].className;

      var list_investor = ["sentinel","investor_meet_later", "investor_profit_sustainability","investor_donnot_understand","bank"];
      for (let i=0; i< list_investor.length; i++) {
        if(!this.hero_investor(nextStep, new RegExp(list_investor[i]), list_investor[i])){
          return;
        }
      }
      if(nextStep.match(/wall/)) {
        return;
      }
      if(nextStep.match(/exit/)) {
        if(this.heroHasSolar) {
          console.log("has Solar");
          var x = "has solar"
          this.heroWins();
          return;
      }
      if(nextStep.match(/exit/)) {
          this.heroWins();
          return;
      }
    }
      // move hero one step
      this.maze[this.heroPos].classList.remove("hero");
      this.maze[pos].classList.add("hero");
      this.heroPos = pos;

      // after moving
      var crowdfunding_generous_list = ["nubbin_female_generous1", "nubbin_female_generous", "nubbin_male_generous1", "nubbin_male_generous"]
      for(let i=0; i<crowdfunding_generous_list.length; i++){
        if(!this.heroTake_crowdfunding_generous_new(nextStep, new RegExp(crowdfunding_generous_list[i]), crowdfunding_generous_list[i])) {
          return;
        }
      }

      var crowdfunding_list = ["female_contribute1", "female_contribute2", "female_contribute3", "female_contribute4", "female_contribute", "male_contribute1", "male_contribute2", "male_contribute3", "male_contribute"]
      for(let i=0; i<crowdfunding_list.length; i++){
        if(!this.heroTake_crowdfunding_new(nextStep,new RegExp(crowdfunding_list[i]),crowdfunding_list[i])) {
          return;
        }
      }

      if(nextStep.match(/solar/)) {
        document.getElementById("solar").style.display = "block"
        this.heroTakeSolar();
        return;
      } else {
        document.getElementById("solar").style.display = "none"
      }

      if(this.heroScore >= 1) {
        if(!this.childMode) {
          this.heroScore--;
        }
        if(!this.childMode && this.heroScore <= 0) {
          this.gameOver("sorry, you didn't make it");
        } else {
          this.setMessage("...");
        }
      }
    };

    Mazing.prototype.mazeKeyPressHandler = function(e) {
      var tryPos = new Position(this.heroPos.x, this.heroPos.y);
      switch(e.keyCode)
      {
        case 37: // left
          this.mazeContainer.classList.remove("face-right");
          tryPos.y--;
          break;

        case 38: // up
          tryPos.x--;
          break;

        case 39: // right
          this.mazeContainer.classList.add("face-right");
          tryPos.y++;
          break;

        case 40: // down
          tryPos.x++;
          break;

        default:
          return;

      }
      this.tryMoveHero(tryPos);
      e.preventDefault();
    };

    Mazing.prototype.setChildMode = function() {
      this.childMode = true;
      this.heroScore = 0;
      //this.setMessage("collect all the treasure");
    };
var maze = new Mazing();

console.log("Hello")

}
