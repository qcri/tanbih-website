import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

const MediaCoverage = () => {
  return (
    <Container>
      <div className="section-title gradient-text">MEDIA COVERAGE</div>
      <div className="text">Our AI model was featured by 100+ news outlets</div>
      <div className="images">
        <StaticImage className="img img-1" src={'../../images/home-page-image-1.png'} alt="home-image-1" width={600} />
        <StaticImage className="img img-2" src={'../../images/home-page-image-2.png'} alt="home-image-2" width={600} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 5rem 12%;
  justify-content: center;
  align-items: center;
  .section-title {
    font-size: 1.2rem;
    font-weight: 500;
    width: fit-content;
  }
  .text {
    font-weight: 500;
    font-size: 1.3rem;
    padding-top: 1rem;
    color: #555555;
  }
  .images {
    text-align: center;
    padding-top: 4rem;
    height: 600px;
    .img {
      box-shadow: 0 6px 6px -3px rgb(0 0 0 / 20%), 0 10px 14px 1px rgb(0 0 0 / 14%), 0 4px 18px 3px rgb(0 0 0 / 12%);
      border-radius: 0.5rem;
    }
    .img-1 {
      transform: translateY(0%);
    }
    .img-2 {
      z-index: 1;
      transform: translate(-25%, 60%);
    }
  }
`;
export default MediaCoverage;
