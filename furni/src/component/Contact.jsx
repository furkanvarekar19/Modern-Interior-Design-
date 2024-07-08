import React from 'react'
import '../style/home.css'
import '../style/contact.css'


function Contact() {
  return (
    <div className='contact_main'>
            <div className='flex'>
        <div className="home1">
          <div className="Modern">
            <h1>Contact</h1>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
              Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              <button className='shops'>Shop Now</button> 
              <button className='explore'>Explore</button>
          </div>
        </div>

        <div className="home2">
          <img src="https://themewagon.github.io/furni/images/couch.png" alt="img" />
        </div>
        </div>

        <div className='contact-form_main'>
            <div className="Raymouthaddress_main">
              <div className="yourdomain1">
                <div className="locations_logo">
                <i class="fa-solid fa-location-dot"></i>
                </div>
                <div className="locations_text">
                  <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                </div>
              </div>

              <div className="yourdomain2">
              <div className="locations_logo">
              <i class="fa-solid fa-envelope"></i>
                </div>
                <div className="email_text">
                  <p>info@yourdomain.com</p>
                </div>
              </div>

              <div className="yourdomain3">
              <div className="locations_logo">
              <i class="fa-solid fa-phone"></i>
                </div>
                <div className="call_text">
                  <p>+1 294 3925 3939</p>
                </div>
              </div>

            </div>

            <div>
              <h1>hleeo</h1>
            </div>
        </div>
        
    </div>
  )
}

export default Contact;