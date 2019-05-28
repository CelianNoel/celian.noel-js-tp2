import React from "react";
import Board from "../components/Board";
import GameInfo from "../components/GameInfo";

const gameLayoutStyle = {
  width: 650,
  height: `calc(90%)`,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto"
};

class GameLayout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: Array(9).fill(null),
      currentPlayer: "X",
      winner: null 
    };
    
  }

  // getDerivedStateFromProps is called before every render,
  // use it to infer new state values from props or state changes.
  static getDerivedStateFromProps(props, state) {
    let i;
    let previousPlayer = "O"
    if (state.currentPlayer==="O")
      previousPlayer = "X"
    for (i = 0; i < 3 ; i++){
        if(state.cells[i] !== null && state.cells[i] === state.cells[i+3] && state.cells[i+3] === state.cells[i+6])
        {
          return{winner: previousPlayer};
        }
          
    }
    for (i = 0; i < 7; i+=3){
      if(state.cells[i] !== null && state.cells[i]=== state.cells[i+1] && state.cells[i+1] === state.cells[i+2])
      return{winner: previousPlayer};
    }

    for (i = 0; i < 9; i++){
      if (state.cells[i] == null)
        break;
    }
    if(state.cells[0] !== null && state.cells[0]=== state.cells[4] && state.cells[4] === state.cells[8])
      return{winner: previousPlayer};

    if(state.cells[2] !== null && state.cells[2]=== state.cells[4] && state.cells[4] === state.cells[6])
      return{winner: previousPlayer};

    if(i === 9)
    {
      return{winner: "match nul"}
    }
    return state;
  }

  handleClick = (index) => {
    let newcells = this.state.cells;
      if(this.state.winner !== null) 
      {
        this.setState({
          cells: Array(9).fill(null),
          currentPlayer: "X",
          winner: null,
        })
        return;
      }
      if (newcells[index] !== null)
        return;
      newcells[index] = this.state.currentPlayer;
      this.setState({
        cells: newcells,
        currentPlayer: (this.state.currentPlayer === 'X') ? 'O' : 'X',
      })
    }


  render() {
    return (
      <div
        style={gameLayoutStyle}
      >
        <GameInfo winner={this.state.winner} currentPlayer={this.state.currentPlayer}/>
        <Board cells={this.state.cells} onClickCell={this.handleClick}/>
      </div>
    );
  }
}

export default GameLayout;
