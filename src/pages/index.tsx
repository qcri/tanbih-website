import * as React from 'react';
import '../styles/base.css';
import { styled } from '@mui/material';

import Flex from '../components/Flex';
import Layout from '../components/Layout';
import Banner from '../components/HomePage/Banner';
import UseCase from '../components/HomePage/UseCase';
import WhyTanbin from '../components/HomePage/WhyTanbin';
import Review from '../components/HomePage/Review';
import MediaCoverage from '../components/HomePage/MediaCoverage';

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <UseCase />
      <MediaCoverage />
      <Review />
      <WhyTanbin />
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

const Publications = styled(Flex)`
  padding: 2rem 12%;
  flex-direction: column;
  align-items: center;
`;

export default IndexPage;

// export const Head: HeadFC = () => <SEO />;
