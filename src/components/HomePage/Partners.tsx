import React from 'react';
import { Box, Typography } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';

const Partners = () => {
  return (
    <PartnerContainer>
      <div className={'title'}>AI Teams we are collaborated</div>
      <Box className="logos">
        <StaticImage
          src={'../../images/partner-icons/hbku_2021.svg'}
          alt={'Hamad Bin Khalifa University'}
          width={170}
        />
        <StaticImage
          src={'../../images/partner-icons/mit-csail.svg'}
          alt={'MIT Computer Science & Artificial Intelligence Laboratory'}
          width={120}
        />
        <StaticImage
          src={'../../images/partner-icons/northwestern-university-logo-vector.svg'}
          alt={'Northwestern University'}
          width={200}
        />
        <StaticImage src={'../../images/partner-icons/qatar-univerisity.svg'} alt={'Qatar University'} width={200} />
        <StaticImage src={'../../images/partner-icons/SU-logo.png'} alt={'Sofia University'} width={200} />
      </Box>
    </PartnerContainer>
  );
};

const PartnerContainer = styled.div`
  padding: 40px 12%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .title {
    font-weight: 500;
    padding-bottom: 24px;
    font-size: 1.2rem !important;
  }
  .logos {
    display: flex;
    align-items: center;
    gap: 48px;
  }
`;

export default Partners;
