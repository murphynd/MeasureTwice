import React from 'react'
import Helmet from 'react-helmet'
import ContactUs from '../components/ContactUs'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Measure Twice'
  const siteDescription = 'Chad Stephans - HandyMan'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>Measure Twice</h2>
            <h3>Handyman Services by Chad Stephens</h3>
          </header>
          <p>
            I am Chad, I live in Northeast Portland and I want to help you
            complete projects around your house or business. If you know what
            you need help with please fill out the form below and we can talk
            about pricing.
          </p>
          <h3>Services:</h3>
          <ul>
            <li>Hanging Shelves or Pictures</li>
            <li>Furniture Assembly</li>
            <li>TV mounting</li>
            <li>Garden Build outs</li>
            <li>Woodworking</li>
            <li>Odd Jobs</li>
            <li>Yard maintenance/clean up</li>
            <li>Gutter Cleaning</li>
            <li>Paint touchup</li>
          </ul>
          <ul className="actions">
            <li>
              <a href="tel:816-589-1800" className="button">
                Have something else in mind? Give me a call.
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="#" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
            Tell me about your project and your budget and let's make a plan.
          </p>
          <div className="row">
            <div className="8u 12u$(small)">
              <ContactUs />
            </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home">
                    <span className="label">Address</span>
                  </h3>
                  North East
                  <br />
                  Portland, OR 97211
                  <br />
                  United States
                </li>
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  <a href="tel:816-589-1800">(816)-589-1800</a>
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:Chad@MeasureTwicePDX.com">
                    Chad@MeasureTwicePDX.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
