import React from "react";
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import {Link} from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
const Home = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi I Am, <span>Muhammad Asif</span>
        </h1>
        <p>
          I am Muhammad, Sr frontend developer in react js . Designing, developing, and testing
          UI for web applications. Build reusable code and libraries
          for future use. Accurately translate user and business needs into
          functional frontend code.
        </p>
        <div className="icons">
            <Link className="icon-holder">  
            <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
            </Link>
            <Link className="icon-holder">  
            <FontAwesomeIcon icon={faGithub} className="icon git"/>
            </Link>
            <Link className="icon-holder">  
            <FontAwesomeIcon icon={faLinkedin} className="icon ln"/>
            </Link>
            
           
        </div>
      </header>
    </div>
  );
};

export default Home;
