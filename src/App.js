import React, { Component, useState} from 'react';
// Removed logo since we don't need it anymore
import './App.css';




class App extends Component { // Renders the app. The code here was written pretty much entirely by our team.
  constructor(props) {
    super();
    this.state = {
      guess: 1,
      price: 16.99
    }
  };
  isCorrect(){
  
    let id = "price" + this.state.guess
    let arrow = document.getElementById("gfg");
  }

  render() {
    
    return (
      <div>
            <div className="container">
                <h1>Guess the Price of this Steam Game!</h1>
                <img src="game_image.jpg" alt="Game poster"/>
                <h2>Game Name</h2>
                <div className="options">
                    <div className="option">
                      <input type="text" name="price" id="price1" pattern="\d+(\.\d{2})?" title="Please enter a number with 2 decimal places"/>
                        <label htmlFor="price1"></label>
                    </div>
                    <div className="option">
                      <input type="text" name="price" id="price2" pattern="\d+(\.\d{2})?" title="Please enter a number with 2 decimal places"/>
                        <label htmlFor="number"></label>
                    </div>
                    <div className="option">
                      <input type="text" name="price" id="price3" pattern="\d+(\.\d{2})?" title="Please enter a number with 2 decimal places"/>
                        <label htmlFor="number"></label>
                    </div>
                    <div className="option">
                      <input type="text" name="price" id="price4" pattern="\d+(\.\d{2})?" title="Please enter a number with 2 decimal places"/>
                        <label htmlFor="number"></label>
                    </div>
                    <div className="option">
                      <input type="text" name="price" id="price5" pattern="\d+(\.\d{2})?" title="Please enter a number with 2 decimal places"/>
                        <label htmlFor="number"></label>
                    </div>
                    <div className="option">
                      <input type="text" name="price" id="price6" pattern="\d+(\.\d{2})?" title="Please enter a number with 2 decimal places"/>
                        <label htmlFor="number"></label>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </div>
      </div>
      
    );
  }
}
export default App;