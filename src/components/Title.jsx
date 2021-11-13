import React from "react";
import themeMoon from "../images/icon-moon.svg";
import themeSun from "../images/icon-sun.svg";

class Title extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__title">TODO</h1>
        <img
          src={this.props.dark ? themeSun : themeMoon}
          alt=""
          className="header__toggle-theme"
          onClick={this.props.onThemeChange}
        />
      </div>
    );
  }
}

export default Title;
