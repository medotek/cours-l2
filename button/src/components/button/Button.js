import React from "react";
import './Button.css';

class Button extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {toggled: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state =>({
      toggled: !state.toggled
    }));
  }

  render() {
    return (
      <button
         data-testid="button"
         onClick={this.handleClick}
         className={this.state.toggled ? ".toggled" : ".untoggled"}
      >
      {this.props.children ? this.props.children : "Add text!"}
      </button>);
  }

}


export default Button;
