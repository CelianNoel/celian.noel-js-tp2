import React from "react";

const cellStyle = {
  display: "block",
  backgroundColor: "white",
  width: "200px",
  height: "200px",
  border: "1px solid #333",
  outline: "none",
  textAlign: "center",
  lineHeight: "200px",
  cursor: "pointer"
};

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOver: false,
    }
  }
  hoverOn = () => {                 // Ca permet de passer le this de la classe sur le this de la fonction 
    this.setState({ isOver: true })
  }
  hoverOff = () => {
    this.setState({ isOver: false })
  }

  render() {                                                        
    return (<div onClick={() => { this.props.handleClick()}} style={{ ...cellStyle, backgroundColor: this.state.isOver ? "gray" : "white" }} onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>{this.props.value}</div>);
  }
}

//const Cell = () => <div style={cellStyle}>?</div>;

//obj1 =

export default Cell;
