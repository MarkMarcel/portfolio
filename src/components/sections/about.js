import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const companies = [
    { company: 'Swiftly Inc.', url: 'https://www.swiftly.com' },
    { company: 'MHP - A Porsche Company', url: 'https://www.mhp.com/' },
    { company: 'IMS GmbH', url: 'https://www.imsberlin.de/' },
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              Hello! I'm Mark, a software engineer from Ghana with a strong belief in the power of
              technology to drive progress. At about 10, I had a childhood dream to contribute to
              the development of my country. That interest led me to consider economics, so I chose
              to study Economics, Mathematics and Computer Science. Over time, I realised that
              technology offered a more direct and scalable way to make a difference. Since then, I
              have followed a simple idea: make the most of my potential and use it to solve
              meaningful problems. My journey began with building tools to improve school operations
              at <a href="https://www.idscorpgh.com/">Infoview</a>.
            </p>

            <p>
              Fast-forward to today, and I’ve had the opportunity to work with a range of{' '}
              <a href="#companies">companies</a>, contributing to products that deliver real value
              to users. I enjoy problem solving and exploration, and software engineering gives me
              space to apply those skills in a practical and creative way. Outside of work, I take
              part in communities that are focused on advancing technology such as{' '}
              <a href="https://ghananlp.org/">Ghana NLP</a>.
            </p>
            <p>
              I moved to Germany in 2025 and am currently looking for a role where I can continue to
              grow, contribute to meaningful projects and learn from those around me. In my free
              time, I enjoy discovering new ideas, tools and ways of thinking, exploring outdoors
              and playing video games.
            </p>

            <p id="companies">Here are a few companies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {companies &&
              companies.map((company, i) => (
                <li key={i}>
                  <a href={company.url}>{company.company}</a>
                </li>
              ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me1.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Mark Marcel"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
