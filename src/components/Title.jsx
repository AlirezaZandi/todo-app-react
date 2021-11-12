import React from "react";
import themeToggle from "../images/icon-moon.svg";

class Title extends React.Component {
  handleClick = () => {
    //chnage theme
    console.log(1);
  };
  render() {
    return (
      <div className="header">
        <h1 className="header__title">TODO</h1>
        <img
          src={themeToggle}
          alt=""
          className="header__toggle-theme"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Title;
