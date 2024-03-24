import React from 'react';
import StyledFooter from './Footer.styled';
import { ReactComponent as LinkedinIcon } from '../../icons/Linkedin.svg';
import { ReactComponent as GithubIcon } from '../../icons/Github.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer__container">
        <div className="footer__links">
          <a
            href="https://github.com/Maciejnecka"
            target="blank"
            className="footer__link"
          >
            <GithubIcon className="footer__link--icon" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/maciek-n%C4%99cka/"
            target="blank"
            className="footer__link"
          >
            <LinkedinIcon className="footer__link--icon" /> LinkedIn
          </a>
        </div>
        <h1 className="footer__paragraph">Built by Maciej Nęcka.</h1>
      </div>
    </StyledFooter>
  );
};

export default Footer;
