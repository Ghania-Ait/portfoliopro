import React from "react";
import Typical from 'react-typical'

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://google.com">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://instagram.com">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="www.linkedin.com/in/ghania-ait-driss-b9694a231">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://twitter.com/i/flow/login">
              <i className="fa fa-twitter"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Ghania</span>
            </span>
            
          </div>

          <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                    {" "}
                <Typical 
                loop={Infinity}
                steps={[
                    "Ghania Ait driss ",
                    1000, 
                    "Full Stack Developer",
                    1000, 
                    "Mern Stack Dev",
                    1000, 
                    "React Dev",
                    1000,
                ]}
                />
                </h1>
                <span className="profile-role-tagline">
                    Knack of building applications with front and backend operations.
                </span>
              </span>
              <div className='profile-options'>
                  <button className="btn primary-btn">
                  {" "}
                      Hire Me {" "}
                  </button>
                  <a href="cv.pdf" download='cv.pdf'>
                      <button className="btn btn-primary">download Resume</button>
                  </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
