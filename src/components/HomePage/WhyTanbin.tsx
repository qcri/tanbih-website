import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';

const WhyTanbin = () => {
  return (
    <UseCaseContainer>
      <div className="section-title gradient-text">WHY TANBIH?</div>
      <div className="section-subtitle">Easy To Start, Optimize, and Scale</div>
      <Grid container>
        <Grid xs={4}>
          <StaticImage src="../../images/icons/flexible.svg" alt="insight" width={48} />
          <div className="feat-title gradient-text">FLEXIBLE</div>
          <div className="feat-text">Self-serve & Enterprise Plans</div>
          <div className="feat-subtext">
            Start immediately with our self-service platform, or chat with us about our enterprise features.
          </div>
        </Grid>
        <Grid xs={4}>
          <StaticImage src="../../images/icons/accurate.svg" alt="insight" width={48} />
          <div className="feat-title gradient-text">ACCURATE</div>
          <div className="feat-text">Best-In-Class Quality</div>
          <div className="feat-subtext">
            Get to production quality within days, with instructions feedback, automated edge-case detection, and more.
          </div>
        </Grid>
        <Grid xs={4}>
          <StaticImage src="../../images/icons/multi-lingual.svg" alt="insight" width={48} />
          <div className="feat-title gradient-text">MULTI-LINGUAL</div>
          <div className="feat-text">16 Languages Supported</div>
          <div className="feat-subtext">
            Scale's natural language processing suite supports 16 languages and regional context, so you have global
            coverage.
          </div>
        </Grid>
      </Grid>
    </UseCaseContainer>
  );
};

const UseCaseContainer = styled.div`
  padding: 5rem 12%;
  font-weight: 500;
  .section-title {
    font-size: 1.2rem;
    font-weight: 500;
    width: fit-content;
  }
  .section-subtitle {
    font-weight: 500;
    font-size: 2.2rem;
    padding: 16px 0 32px;
  }
  .feat-title {
    padding-top: 1rem;
    width: fit-content;
    font-weight: 500;
  }
  .feat-text {
    font-weight: 500;
    font-size: 1.3rem;
    padding-top: 1rem;
    color: #555555;
  }
  .feat-subtext {
    font-weight: 500;
    font-size: 1rem;
    padding-top: 1rem;
    color: #555555;
  }
`;
export default WhyTanbin;
