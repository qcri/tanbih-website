import React, { ReactNode } from 'react';

import { AppBar, Box, styled, useScrollTrigger } from '@mui/material';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

function ElevationScroll(props: { window?: () => Window; children: React.ReactElement }) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    className: trigger ? 'scrolled' : '',
    elevation: trigger ? 4 : 0,
  });
}

const ROUTES = [];

const Layout = ({ children, title = 'TANBIN - QCRI News Project' }: { children?: ReactNode; title?: string }) => {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';

  return (
    <div>
      <ElevationScroll>
        <StyledAppBar>
          <HeaderContainer>
            <StaticImage src={'../images/tanbih.png'} alt="Tanbih" />
            <LinksWrapper>
              {ROUTES.map(route => (
                <Box key={route.href}>
                  <Link to={route.href} className={route.href === pathname ? 'active' : ''}>
                    {route.label}
                  </Link>
                </Box>
              ))}
            </LinksWrapper>
          </HeaderContainer>
        </StyledAppBar>
      </ElevationScroll>
      {children}
    </div>
  );
};

const StyledAppBar = styled(AppBar)`
  background-color: transparent;
  &.scrolled {
    background-color: white;
  }
`;

const HeaderContainer = styled(Box)`
  display: flex;
  width: 90%;
  padding: 0 5%;
  justify-content: space-between;
  align-items: center;
`;

const LinksWrapper = styled(Box)`
  display: flex;
  a {
    padding: 16px;
    border-radius: 8px;
    margin: 0 8px;
    text-decoration: none;
    will-change: transform, opacity;
    transition: background-color 0.3s linear;
    color: white;
    &.active {
      color: #228ae6;
      background-color: white;
    }
    :hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export default Layout;
