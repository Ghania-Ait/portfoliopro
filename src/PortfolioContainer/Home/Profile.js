import React from "react";

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
        </div>
      </div>
    </div>
  );
}

export default Profile;
