import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.scss";
const Footer = () => (
  <footer>
    <p class="whitetext">
      Created by <strong>krisyupher & guissmejia</strong>
    </p>
    <hr />
    <div className="FontAwesomeIconContainer">
      <a href="https://github.com/krisyupher/BookMe-platzi">
        <FontAwesomeIcon icon={faGithub} className="FontAwesomeIcon" />
      </a>
    </div>
  </footer>
);
export default Footer;
