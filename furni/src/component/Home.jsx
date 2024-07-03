import React from 'react'
import '../style/home.css'


function Home() {
  return (
    <div className='home'>
      <div className='flex'>
        <div className="home1">
          <div className="Modern">
            <h1>Modern Interior Design Studio</h1>
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

        <div className="Crafted-material">
          <div className="Crafted-one">
            <div>
            <h2>Crafted with  <br /> excellent material.</h2>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
               Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
               <button>Explore</button>
               </div>
          </div>

          <div className="Crafted-two">
            <div className="chair_one">
              <img src="https://themewagon.github.io/furni/images/product-1.png" alt="img" />
              <p>Nordic Chair</p>
              <span>$50.00</span>
            </div>

            <div className="chair_two">
            <img src="https://themewagon.github.io/furni/images/product-2.png" alt="img" />
              <p>Kruzo Aero Chair</p>
              <span>$78.00</span>
            </div>

            <div className="chair_three">
            <img src="https://themewagon.github.io/furni/images/product-3.png" alt="img" />
              <p>Ergonomic Chair</p>
              <span>$43.00</span>
            </div>

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

          <div className="MakeModern_main">
              <div className="Design_img">
                <div className="circle">
                  <img src="https://themewagon.github.io/furni/images/img-grid-2.jpg" alt="img" />
                </div>
              </div>

              <div className="Design_text">
                <h2>We Help You Make Modern  <br /> Interior Design</h2>
                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada.
                   Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque 
                   habitant morbi tristique senectus et netus et malesuada</p>
                   <div className='Donec_main'>

                   <div className="Donec_text">
                    <p>Donec vitae odio quis nisl  <br />dapibus malesuada...</p>
                   </div>
                   <div className="Donec_text">
                    <p>Donec vitae odio quis nisl  <br />dapibus malesuada</p>
                   </div>
                   <div className="Donec_text">
                    <p>Donec vitae odio quis nisl  <br />dapibus malesuada</p>
                   </div>
                   <div className="Donec_text">
                    <p>Donec vitae odio quis nisl  <br />dapibus malesuada</p>
                   </div>

                   </div>
                   <button className='btn4'>Explore</button>
              </div>

          </div>



    </div>
  )
}

export default Home