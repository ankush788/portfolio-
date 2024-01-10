import React from "react";
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
function SocialMedia() {
  return (
    <div className="app__social">
      <div>
        <BsTwitterX />
      </div>
      <div>
        <BsInstagram />
      </div>
      <div>
        <FaFacebookF />
      </div>
    </div>
  );
}

export default SocialMedia;
