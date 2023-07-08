import React, { Component } from "react";
import classes from "./header-bar.module.css";
class HeaderBar extends Component {
  render() {
    return (
      <div className={classes["header-bar"]}>
        <div className="container">
          <a href="/" className={classes.link}>
            Home
          </a>{" "}
          / Bar
        </div>
      </div>
    );
  }
}

export default HeaderBar;
