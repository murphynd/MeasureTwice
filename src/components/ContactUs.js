import React from 'react'
import emailjs from 'emailjs-com'
// import './ContactUs.css'

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jpw33e8',
        'template_iytis1z',
        e.target,
        'user_6qXhqucqgZQUcOLMyyfKt'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <div className="row uniform 50%">
        <div className="6u 12u$(xsmall)">
          <input type="text" name="from_name" id="name" placeholder="Name" />
        </div>
        <div className="6u 12u$(xsmall)">
          <input
            type="email"
            name="from_email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="12u">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows="4"
          ></textarea>
        </div>
      </div>
      <ul className="actions" style={{ marginTop: 30 }}>
        <li>
          <input type="submit" value="Send Message" />
        </li>
      </ul>
    </form>
  )
}

// <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       <label>Email</label>
//       <input type="email" name="from_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
