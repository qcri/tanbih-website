import * as React from 'react';
import '../styles/base.css';
import { Box, Button, Card, CardActions, CardContent, Typography, styled } from '@mui/material';

import Flex from '../components/Flex';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import Banner from '../components/HomePage/Banner';
import Partners from '../components/HomePage/Partners';
import UseCase from '../components/HomePage/UseCase';
import WhyTanbin from '../components/HomePage/WhyTanbin';
import MediaFeedback from '../components/HomePage/MediaFeedback';

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <UseCase />
      <WhyTanbin />
      <MediaFeedback />
      {/*<CardContainer>*/}
      {/*  <Card>*/}
      {/*    <CardContent>*/}
      {/*      <Typography variant="h5" component="div">*/}
      {/*        ABOUT*/}
      {/*      </Typography>*/}
      {/*      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
      {/*        The project aims at developing a news aggregation application that helps users “step out of their bubble”*/}
      {/*        and achieve a healthy “news diet”.*/}
      {/*      </Typography>*/}
      {/*    </CardContent>*/}
      {/*  </Card>*/}
      {/*  <Card>*/}
      {/*    <CardContent>*/}
      {/*      <Typography variant="h5" component="div">*/}
      {/*        RESEARCH*/}
      {/*      </Typography>*/}
      {/*      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
      {/*        We make explicit media stance, bias, and propaganda, thus limiting the effect of fake news. We further*/}
      {/*        offer different viewpoints and angles on controversial events and topics.*/}
      {/*      </Typography>*/}
      {/*    </CardContent>*/}
      {/*    <CardActions>*/}
      {/*      <Button size="small">Learn More</Button>*/}
      {/*    </CardActions>*/}
      {/*  </Card>*/}
      {/*  <Card>*/}
      {/*    <CardContent>*/}
      {/*      <Typography variant="h5" component="div">*/}
      {/*        PARTNERS*/}
      {/*      </Typography>*/}
      {/*      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
      {/*        We partner with MIT CSAIL. We further collaborate with Qatar University, Northwestern University, HBKU,*/}
      {/*        Sofia University, Data Science Society, and A Data Pro.*/}
      {/*      </Typography>*/}
      {/*      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
      {/*        Forbes, Boston Globe, Aljazeera, MIT Technology Review, Science Daily, Popular Science, Fast Company, The*/}
      {/*        Register, WIRED, Engadget, among many others*/}
      {/*      </Typography>*/}
      {/*    </CardContent>*/}
      {/*  </Card>*/}
      {/*</CardContainer>*/}

      {/*<MediaCoverage>*/}
      {/*  <Flex className="text">*/}
      {/*    <Typography>MEDIA COVERAGE</Typography>*/}
      {/*    <Typography>Our research was featured by 100+ news outlets including:</Typography>*/}
      {/*  </Flex>*/}
      {/*  <StaticImage className="img img-1" src={'../images/home-page-image-1.png'} alt="home-image-1" width={400} />*/}
      {/*  <StaticImage className="img img-2" src={'../images/home-page-image-2.png'} alt="home-image-2" width={400} />*/}
      {/*</MediaCoverage>*/}

      {/*<Publications>*/}
      {/*  <Typography>Selected Publications</Typography>*/}
      {/*  <Flex>*/}
      {/*    <Card>*/}
      {/*      <CardContent>*/}
      {/*        <Typography variant="h5" component="div">*/}
      {/*          Proppy: A System to Unmask Propaganda in Online News*/}
      {/*        </Typography>*/}
      {/*        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
      {/*          AAAI-2019*/}
      {/*        </Typography>*/}
      {/*        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
      {/*          USA*/}
      {/*        </Typography>*/}
      {/*      </CardContent>*/}
      {/*    </Card>*/}
      {/*    <Card>*/}
      {/*      <CardContent>*/}
      {/*        <Typography variant="h5" component="div">*/}
      {/*          Predicting Factuality of Reporting and Bias of News Media Sources*/}
      {/*        </Typography>*/}
      {/*        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
      {/*          EMNLP-2018*/}
      {/*        </Typography>*/}
      {/*        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
      {/*          Belgium*/}
      {/*        </Typography>*/}
      {/*      </CardContent>*/}
      {/*    </Card>*/}
      {/*    <Card>*/}
      {/*      <CardContent>*/}
      {/*        <Typography variant="h5" component="div">*/}
      {/*          ClaimRank: Detecting Check-Worthy Claims in Arabic and English.*/}
      {/*        </Typography>*/}
      {/*        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
      {/*          NAACL-2018*/}
      {/*        </Typography>*/}
      {/*        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>*/}
      {/*          USA*/}
      {/*        </Typography>*/}
      {/*      </CardContent>*/}
      {/*    </Card>*/}
      {/*  </Flex>*/}
      {/*  <Typography>See more...</Typography>*/}
      {/*</Publications>*/}
    </Layout>
  );
};

const CardContainer = styled(Flex)`
  justify-content: center;
  gap: 3rem;
  transform: translateY(-40%);
  padding: 0 12%;
`;

const MediaCoverage = styled(Flex)`
  padding: 2rem 12%;
  justify-content: center;
  align-items: center;
  height: 300px;
  .text {
    flex-direction: column;
    align-items: center;
    padding-right: 3rem;
  }
  .img {
    box-shadow: 0 6px 6px -3px rgb(0 0 0 / 20%), 0 10px 14px 1px rgb(0 0 0 / 14%), 0 4px 18px 3px rgb(0 0 0 / 12%);
    border-radius: 0.5rem;
  }
  .img-1 {
    transform: translateY(-12%);
  }
  .img-2 {
    z-index: 1;
    transform: translate(-25%, 12%);
  }
`;

const Publications = styled(Flex)`
  padding: 2rem 12%;
  flex-direction: column;
  align-items: center;
`;

export default IndexPage;

// export const Head: HeadFC = () => <SEO />;
