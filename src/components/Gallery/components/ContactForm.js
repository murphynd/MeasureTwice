import React from 'react'
import emailjs from 'emailjs-com'
import './ContactUs.css'

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
          handleSendFormResult(
            <p>
              Your message has been sent! <br></br>
              <br /> I'll Get back to you soon! )
            </p>
          )
        },
        (error) => {
          handleSendFormResult(<p>Whoops, this message didn't send :(</p>)
        }
      )
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  )
}
