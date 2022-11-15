import React from 'react';
import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Button, Grid } from '@mui/material';

const Footer = () => {
  return (
    <FooterContainer>
      <Box sx={{ padding: '0 12%' }}>
        <Grid container>
          <Grid item xs={6} p="60px">
            <div className="section-title gradient-text">Contact us</div>
            <Box className="contact-info">
              <div className="icon">
                <StaticImage src="../../images/icons/location.svg" alt="location" width={20} />
              </div>
              <div>
                <div>Qatar Computing Research Institute,</div>
                <div>HBKU Research Complex B1,</div>
                <div>Education City, Doha, Qatar</div>
              </div>
            </Box>
            <Box className="contact-info">
              <div className="icon">
                <StaticImage src="../../images/icons/email.svg" alt="email" width={20} />
              </div>
              <div>tanbih@qcri.org</div>
            </Box>
            <Box className="contact-info">
              <div className="icon">
                <StaticImage src="../../images/icons/phone.svg" alt="phone" width={20} />
              </div>
              <div>+974 4454 0629</div>
            </Box>
          </Grid>

          <Grid item xs={6} p="60px">
            <StaticImage src={'../../images/tanbih.png'} alt="Logo" />
            <Box pl="16px">
              <Box className="description">
                Tanbih makes news aggregator simple and hassle-free for thousands of websites worldwide.{' '}
              </Box>
              <Button className="request-button" variant="contained" size="large">
                Request A Demo <span>→</span>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <div className="bottom">{`© ${new Date().getFullYear()} Tanbih - QCRI News Project.`}</div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  .contact-info {
    display: flex;
    gap: 12px;
    padding: 12px;
    align-items: center;
    .icon {
      min-width: 20px;
      width: 20px;
      height: 20px;
    }
  }
  .description {
    padding-bottom: 20px;
    font-size: 1.2rem;
    color: #555555;
  }
  .section-title {
    font-size: 1.2rem;
    font-weight: 500;
    width: fit-content;
  }
  .bottom {
    border-top: 1px solid #dddddd;
    padding: 12px 12%;
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

export default Footer;
