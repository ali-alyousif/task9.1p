import React from 'react'; 
import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() 
{ 
        return <div className='icons-list'>
<center><div>CONNECT US</div></center>
        <a
         
          className="faLinkedin app-link social-media-list"
          href="https://www.linkedin.com/in/iCrowd/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          className="faGithub app-link social-media-list"
          href="https://github.com/iCrowd"
          target="_blank"
          rel="noopener noreferrer"
        >
           <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          className="fatwitter app-link social-media-list"
          href="https://twitter.com/iCrowd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
</div>  }

export default Footer;