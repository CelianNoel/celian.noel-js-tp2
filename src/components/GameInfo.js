import React from "react";


class GameInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {         
    if (this.props.winner == null)                                               
      return (<h3>It's your turn {this.props.currentPlayer}</h3>);
    if (this.props.winner === "match nul")
      return(<div><h3>Match Nul!!!</h3><h4>Click to rematch</h4></div>)
    return (<div><h3>Player {this.props.winner} Win!!!</h3><h4>Click to rematch</h4></div>);
  }
}

// FIXME: change message and color based on `gameState`'s value
// const GameInfo = ({ gameState = "stale", currentPlayer = "unkown" }) => (
//   <h3>It's your turn {currentPlayer}</h3>
// );

export default GameInfo;
