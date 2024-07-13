import React from 'react'
import '../style/home.css'
import '../style/about.css'


function About() {
  return (
    <div className='about_main'>
       <div className='flex'>
        <div className="home1">
          <div className="Modern">
            <h1>About</h1>
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
        
        <div className="Choose-Us_main">
            <div className="dapibus">
              <div className="text3">
                <h2>Why Choose Us</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                   Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              </div>

              <div className="Shipping_main">

                <div className="Shipping">
                    <img src="https://themewagon.github.io/furni/images/truck.svg" alt="icon" />
                    <h4>Fast & Free Shipping</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>


                <div className="EasyShop">
                <img src="https://themewagon.github.io/furni/images/bag.svg" alt="icon" />
                    <h4>Fast & Free Shipping</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="Support">
                <img src="https://themewagon.github.io/furni/images/support.svg" alt="icon" />
                    <h4>Fast & Free Shipping</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="Returns">
                <img src="https://themewagon.github.io/furni/images/return.svg" alt="icon" />
                    <h4>Fast & Free Shipping</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                     
              </div>
            </div>

            <div className="dapibus_img">
              <img src="https://themewagon.github.io/furni/images/why-choose-us-img.jpg" alt="img" />
            </div>

        </div>

        <div className="ourteam_main">
             <h2 >Our Team</h2>
             <div className="teamwork">
              <div className="team_one">
                <img src="https://themewagon.github.io/furni/images/person_1.jpg" alt="team" />
                <div className='Lawson'>
                <h3>Lawson Arnold</h3>
                <p className='ceo'>CEO, Founder, Atty.</p>
                <p>Separated they live in. Separated they live in Bookmarksgrove right at 
                  the coast of the Semantics, a large language ocean</p>
                </div>

              </div>

              <div className="team_two">
              <img src="https://themewagon.github.io/furni/images/person_2.jpg" alt="team" />
                <div className='Lawson'>
                <h3>Jeremy Walker</h3>
                <p className='ceo'>CEO, Founder, Atty.</p>
                <p>Separated they live in. Separated they live in Bookmarksgrove right at 
                  the coast of the Semantics, a large language ocean</p>
                </div>

              </div>

              <div className="team_three">
              <img src="https://themewagon.github.io/furni/images/person_3.jpg" alt="team" />
                <div className='Lawson'>
                <h3>Patrik White</h3>
                <p className='ceo'>CEO, Founder, Atty.</p>
                <p>Separated they live in. Separated they live in Bookmarksgrove right at 
                  the coast of the Semantics, a large language ocean</p>
                </div>
              </div>

              <div className="team_four">
              <img src="https://themewagon.github.io/furni/images/person_4.jpg" alt="team" />
                <div className='Lawson'>
                <h3>Kathryn Ryan</h3>
                <p className='ceo'>CEO, Founder, Atty.</p>
                <p>Separated they live in. Separated they live in Bookmarksgrove right at 
                  the coast of the Semantics, a large language ocean</p>
                </div>
              </div>

             </div>
        </div>

    </div>
  )
}

export default About;