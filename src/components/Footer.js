import React from 'react'

const Footer = () => (
  <div id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://www.instagram.com/measuretwicepdx/"
            className="icon fa-instagram"
          >
            <span className="label">instagram</span>
          </a>
        </li>
        <li>
          <a
            href="mailto: Chad@MeasureTwicePDX.com"
            className="icon fa-envelope-o"
          >
            <span className="label">Email</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        © {new Date().getFullYear()} - Measure Twice PDX // Made by -
        <a href="https://natpdx.com/"> NatPDX</a>
      </ul>
    </div>
  </div>
)

export default Footer
