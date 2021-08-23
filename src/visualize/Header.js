import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
// import { Button } from "bootstrap";
import './header.css'
const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 className="title_header">{title}</h1>
      <Button
        color={showAdd ? "brown" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
// const headingStyle = {
//     color: 'red' , backgroundColor : 'black'
// }

export default Header;
