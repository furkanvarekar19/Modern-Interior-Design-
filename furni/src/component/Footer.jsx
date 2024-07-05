import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <>
      <div id="footer_main">
        <div className="footer_img">
          <img
            src="https://themewagon.github.io/furni/images/sofa.png"
            alt="sofa"
          />
        </div>
        <div className="Subscribe">
          <h2>
            {" "}
            <i class="fa-regular fa-envelope"></i> Subscribe to Newsletter
          </h2>
          <div className="inputs">
            <input type="text" placeholder="enter your name" />
            <input type="email" placeholder="enter your emai" />
            <button>
              <i class="fa-solid fa-bolt"></i>
            </button>
          </div>
        </div>

        <div className="heading">
          <h2>Furni.</h2>
        </div>

        <div className="furni_main">
          <div className="para">
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
          </div>

          <div className="about_us">
            <h4>About us</h4>
            <h4>Services</h4>
            <h4>Blog</h4>
            <h4>Contact us</h4>
          </div>

          <div className="live_chat">
            <h4>Support</h4>
            <h4>Knowledge base</h4>
            <h4>Live chat</h4>
          </div>

          <div className="jobs">
            <h4>Jobs</h4>
            <h4>Our team</h4>
            <h4>Leadership</h4>
            <h4>Privacy Policy</h4>
          </div>

          <div className="nordic_chair">
            <h4>Nordic Chair</h4>
            <h4>Kruzo Aero</h4>
            <h4>Ergonomic Chair</h4>
          </div>
        </div>

        <div id="icons">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>
    </>
  );
}

export default Footer;
