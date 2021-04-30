import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/vuejs.png";
class MainMenu extends Component {
  render() {
    return (
      <header className="nav__content">
        <figure className="home-logo">
          <img src={logo} alt="" />
        </figure>
        <nav className="nav">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/cursos" activeClassName="active">
                Course
              </NavLink>
            </li>
            <li>
              <NavLink to="/formulario" activeClassName="active">
                Form
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default MainMenu;
