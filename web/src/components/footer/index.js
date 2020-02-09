import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import './styles.css';


const Footer = () => {
    return <>
     <footer className="page-footer font-small cyan darken-3">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-5 flex center">
                        <a className="instagram social" href="https://www.instagram.com/ucookbr/" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a className="facebook social" href="https://www.facebook.com/ucookbr/" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a className="twitter social" href="https://twitter.com/ucookbr" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>
                        <a className="linkedin social" href="https://www.linkedin.com/company/ucookbr/" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a className="footer-name-brand" href="https://www.instagram.com/ucookbr/"> uCook</a>
        </div>
    </footer>
</>
};

export default Footer;