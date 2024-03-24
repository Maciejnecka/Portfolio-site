import styled from 'styled-components';
import { media } from '../Styled/mediaqueries';

const StyledFooter = styled.footer`
  background-color: var(--project-description-background);
  padding: 1.5rem 0;
  text-align: center;

  ${media.tablet`
     padding: 1.25rem 0;
  `}
  ${media.mobile`
     padding: 1rem 0;
  `}

  .footer__container {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer__links {
    width: 90%;
    border-bottom: 1px solid #6fb9bb;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    ${media.mobile`
    width: 80%;
  `}
  }

  .footer__link {
    color: var(--icons-carousel-backgroud);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    text-decoration: none;
    font-size: 1rem;
    transition: var(--transition);

    &:hover {
      color: var(--font-main-white);
      .footer__link--icon {
        filter: var(--icon-color-white);
      }
    }

    ${media.tablet`
    font-size: 0.9rem;
  `}
    ${media.mobile`
    font-size: 0.8rem;
  `}
  }

  .footer__link--icon {
    filter: var(--icon-color-blue-bright);
    height: 1.5rem;
    width: 1.5rem;
    transition: all 0.3s ease;

    ${media.tablet`
     height: 1.2rem;
    width: 1.2rem;
  `}
    ${media.mobile`
     height: 1rem;
    width: 1rem;
  `}
  }

  .footer__paragraph {
    color: var(--icons-carousel-backgroud);
    padding: 1rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    white-space: wrap;

    ${media.tablet`
    font-size: 0.9rem;
    `}

    ${media.mobile`
    font-size: 0.8rem;
    `}
  }
`;

export default StyledFooter;
