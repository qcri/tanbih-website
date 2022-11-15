import * as React from 'react';
import '../styles/base.css';

import Layout from '../components/Layout';
import Banner from '../components/HomePage/Banner';
import UseCase from '../components/HomePage/UseCase';
import WhyTanbin from '../components/HomePage/WhyTanbin';
import Review from '../components/HomePage/Review';
import MediaCoverage from '../components/HomePage/MediaCoverage';
import Footer from '../components/HomePage/Footer';

const IndexPage = () => {
  return (
    <Layout>
      <Banner />
      <UseCase />
      <MediaCoverage />
      <Review />
      <WhyTanbin />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

// export const Head: HeadFC = () => <SEO />;
