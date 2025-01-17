import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="Chad holding a cake" />
      </a>
      <h1>
        <strong>
          I am Chad Stephens,
          <br />
          Your neighborhood handyman.
        </strong>
        <br />
        Need a hand? <a href="tel:816-589-1800">Give me a call</a>
        <br />
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
