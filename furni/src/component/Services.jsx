import React from 'react'
import '../style/home.css'
import '../style/servies.css'


function Services() {
  return (
    <div className='serives_main'>
      
        <div className='flex'>
        <div className="home1">
          <div className="Modern">
            <h1>Services</h1>
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
            {/* <div className="dapibus"> */}
              {/* <div className="text3">
                <h2>Why Choose Us</h2>
                <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                   Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
              </div> */}

              <div className="Shipping_main serives_mains">

                <div className="Shipping newcls1">
                    <img src="https://themewagon.github.io/furni/images/truck.svg" alt="icon" />
                    <h4>Fast & Free Shipping</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>


                <div className="EasyShop newcls2">
                <img src="https://themewagon.github.io/furni/images/bag.svg" alt="icon" />
                    <h4>Fast & Free Shipping</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="Support  newcls3">
                <img src="https://themewagon.github.io/furni/images/support.svg" alt="icon" />
                    <h4>Fast & Free Shipping</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="Returns  newcls4">
                <img src="https://themewagon.github.io/furni/images/return.svg" alt="icon" />
                    <h4>Fast & Free Shipping</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                     

                <div className="Shipping newcls1">
                    <img src="https://themewagon.github.io/furni/images/truck.svg" alt="icon" />
                    <h4>Fast & Free Shipping</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>


                <div className="EasyShop newcls2">
                <img src="https://themewagon.github.io/furni/images/bag.svg" alt="icon" />
                    <h4>Fast & Free Shipping</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="Support  newcls3">
                <img src="https://themewagon.github.io/furni/images/support.svg" alt="icon" />
                    <h4>Fast & Free Shipping</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="Returns  newcls4">
                <img src="https://themewagon.github.io/furni/images/return.svg" alt="icon" />
                    <h4>Fast & Free Shipping</h4>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>






              </div>
            {/* </div> */}

  
           </div>


           <div className="Crafted-material marging">
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
              <span>$50.00</span> <br />
              <button className='addtocard'>Add</button>
            </div>

            <div className="chair_two">
            <img src="https://themewagon.github.io/furni/images/product-2.png" alt="img" />
              <p>Kruzo Aero Chair</p>
              <span>$78.00</span> <br />
              <button className='addtocard'>Add</button>
            </div>

            <div className="chair_three">
            <img src="https://themewagon.github.io/furni/images/product-3.png" alt="img" />
              <p>Ergonomic Chair</p>
              <span>$43.00</span> <br />
              <button className='addtocard'>Add</button>
            </div>

          </div>

        </div>
     
    </div>
  )
}

export default Services