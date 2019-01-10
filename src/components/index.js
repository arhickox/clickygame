import React, { Component } from "react";
import "./style.css";

class Form extends Component {

  var score = 0;

  state = {
    button1: "unclicked",
    button2: "unclicked",
    button3: "unclicked",
    button4: "unclicked",
    button5: "unclicked",
    button6: "unclicked",
    button7: "unclicked",
    button8: "unclicked",
    button9: "unclicked",
    button10: "unclicked",
    button11: "unclicked",
    button12: "unclicked",
  };


  buttonClicked = event => {
    event.preventDefault();
    if (this.state === "unclicked") {
      this.setState({
        this.state: "clicked"
      });
    score += 1;
    shuffle();
    } else if (this.state === "clicked") {
      alert("You Lose!");
      reset();
    };

  };

    function shuffle(){
        $(".shuffledv").each(function(){
            var divs = $(this).find('div');
            for(var i = 0; i < divs.length; i++) $(divs[i]).remove();            
            var i = divs.length;
            if ( i == 0 ) return false;
            while ( --i ) {
               var j = Math.floor( Math.random() * ( i + 1 ) );
               var tempi = divs[i];
               var tempj = divs[j];
               divs[i] = tempj;
               divs[j] = tempi;
             }
            for(var i = 0; i < divs.length; i++) $(divs[i]).appendTo(this);
        });                    
    };


  render() {
    return (
<div class="shuffledv">
<div id="1"><input type="image" aria-label="Anakin" class="imageButton" name="button1" onClick={this.buttonClicked} src="images/anakin,jpg" /></div>
<div id="2"><input type="image" aria-label="Chewbacca" class="imageButton" name="button2" onClick={this.buttonClicked} src="images/chewie.png" /></div>
<div id="3"><input type="image" aria-label="Finn" class="imageButton" name="button3" onClick={this.buttonClicked} src="images/finn.jpg" /></div>
<div id="4"><input type="image" aria-label="Han" class="imageButton" name="button4" onClick={this.buttonClicked} src="images/han.jpg" /></div>
<div id="5"><input type="image" aria-label="Kenobi" class="imageButton" name="button5" onClick={this.buttonClicked} src="images/kenobi.jpg" /></div>
<div id="6"><input type="image" aria-label="Kylo" class="imageButton" name="button6" onClick={this.buttonClicked} src="images/kylo.jpg" /></div>
<div id="7"><input type="image" aria-label="Leia" class="imageButton" name="button7" onClick={this.buttonClicked} src="images/leia.jpg" /></div>
<div id="8"><input type="image" aria-label="Luke" class="imageButton" name="button8" onClick={this.buttonClicked} src="images/luke.jpg" /></div>
<div id="9"><input type="image" aria-label="Maul" class="imageButton" name="button9" onClick={this.buttonClicked} src="images/maul.jpg" /></div>
<div id="10"><input type="image" aria-label="Poe" class="imageButton" name="button10" onClick={this.buttonClicked} src="images/poe.jpg" /></div>
<div id="11"><input type="image" aria-label="Rey" class="imageButton" name="button11" onClick={this.buttonClicked} src="images/rey.jpg" /></div>
<div id="12"><input type="image" aria-label="Vader" class="imageButton" name="button12" onClick={this.buttonClicked} src="images/vader.jpg" /></div>
</div>
    );
  };
}
export default Form;
