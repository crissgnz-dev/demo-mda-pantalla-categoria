import React, { Component } from 'react'
import logo from "../assets/PortalAvellaneda.png";
import "./Header.css"

export default class Header extends Component {
  render() {
    return (
      <header>
        <div class="logo"><img src={logo} alt="logo" /></div>
        <div>
        </div>
      </header>
    )
  }
}
