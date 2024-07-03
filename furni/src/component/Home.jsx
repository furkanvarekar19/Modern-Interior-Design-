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
    </div>
  )
}

export default Home