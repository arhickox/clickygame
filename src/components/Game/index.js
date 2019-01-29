//imports
import React, { Component } from "react";
import Nav from "../Nav";
import Header from "../Header";
import Container from "../Container";
import ClickItem from "../ClickItem";
import data from "../../data.json";

//scores start at 0
class Game extends Component {
  state = {
    data,
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }

  //if correct click
  //checks if current score is higher than top score, and replaces it if so
  handleCorrectClick = newData => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = Math.max(newScore, topScore);

    this.setState({
      data: this.shuffleData(newData),
      score: newScore,
      topScore: newTopScore
    });
  };

  //if incorrect click
  handleIncorrectClick = data => {
    //resets current score to 0
    this.setState({
      data: this.resetData(data),
      score: 0
    });
  };

  //starts game over if incorrect click occurs
  resetData = data => {
    //sets all characters back to being unclicked
    const resetData = data.map(item => ({ ...item, clicked: false }));
    //throws to the shuffler
    return this.shuffleData(resetData);
  };

  //loop that shuffles characters on each click
  shuffleData = data => {
    let i = data.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
      i--;
    }
    return data;
  };

  //on-click event
  handleItemClick = id => {
    let guessedCorrectly = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      //checks of the item's state pre-click is clicked or unclicked
      if (newItem.id === id) {
        //if unclicked, increases player score
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }
      }
      return newItem;
    });
    guessedCorrectly
      ? this.handleCorrectClick(newData)
      : this.handleIncorrectClick(newData);
  };

  //react render
  //exports states to the related components
  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <Container>
          {this.state.data.map(item => (
            <ClickItem
              key={item.id}
              id={item.id}
              shake={!this.state.score && this.state.topScore}
              handleClick={this.handleItemClick}
              image={item.image}
            />
          ))}
        </Container>
      </div>
    );
  }
}

//export
export default Game;
