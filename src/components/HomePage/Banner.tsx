import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Flex from '../Flex';
import BannerBackground from './BannerBackground';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import Partners from './Partners';

const Banner = () => {
  return (
    <BannerContainer>
      <BannerBackground />
      <Box pt="200px" pb="180px">
        <div className="title gradient-text">
          The leading AI powered <br />
          news aggregator
        </div>
        <div className="subtitle">A Better NLP Solution for News</div>
        <Flex className="actions">
          <Button className="request-button" variant="contained" size="large">
            Request A Demo <span>→</span>
          </Button>
        </Flex>
      </Box>
      <Partners />
    </BannerContainer>
  );
};

const BannerContainer = styled(Flex)`
  position: relative;
  color: white;
  flex-direction: column;
  padding: 0 12%;
  .title {
    background-size: 100%;
    margin-bottom: 1.25rem;
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .subtitle {
    font-size: 1.3rem;
    font-weight: 400;
    color: #000;
  }
  .actions {
    gap: 2rem;
    padding-top: 2rem;
  }
  .request-button {
    background: linear-gradient(
      90deg,
      #e42d5a 0%,
      #c93d7d 15.44%,
      #b54695 27.32%,
      #a74e9e 36.91%,
      #9e56a2 48.09%,
      #8d6eb0 58.14%,
      #7b84c1 69.33%,
      #6798d0 77.09%,
      #57a9da 84.17%,
      #59b4e1 92.16%,
      #63bbe6 100%
    );
    border-radius: 3px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    span {
      padding-left: 4px;
      margin-top: -3px;
    }
  }
`;

export default Banner;
