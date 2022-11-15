import React from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Grid } from '@mui/material';

const UseCase = () => {
  return (
    <UseCaseContainer>
      <div className="section-title gradient-text">USE CASES</div>
      <div className="section-subtitle">Explore Tanbih News Aggregator Use Cases</div>
      <Grid container>
        <Grid xs={4}>
          <StaticImage src="../../images/icons/insights.svg" alt="insight" width={48} />
          <div className="section-text">Uncovers stance, bias and propaganda in the news</div>
        </Grid>
        <Grid xs={4}>
          <StaticImage src="../../images/icons/attract-user.svg" alt="insight" width={48} />
          <div className="section-text">Promotes different viewpoints, engages users</div>
        </Grid>
        <Grid xs={4}>
          <StaticImage src="../../images/icons/fake-news.svg" alt="insight" width={48} />
          <div className="section-text">Limits the effect of Fake News</div>
        </Grid>
      </Grid>
    </UseCaseContainer>
  );
};

const UseCaseContainer = styled.div`
  padding: 5rem 12%;
  font-size: 1.2rem;
  .section-title {
    font-weight: 500;
    width: fit-content;
  }
  .section-subtitle {
    font-weight: 500;
    font-size: 2.2rem;
    padding: 16px 0 32px;
  }
  .section-text {
    font-weight: 500;
    font-size: 1.5rem;
    padding-top: 1rem;
    color: #555555;
  }
`;

export default UseCase;
