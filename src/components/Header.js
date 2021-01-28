import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Chad Stephans</strong>, your neighborhood handyman.
        <br />
        Need a hand? Give me a call.
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
