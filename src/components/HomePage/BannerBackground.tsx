// @ts-nocheck
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Container, Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import styled from '@emotion/styled';

const OPTIONS = {
  detectRetina: false,
  fpsLimit: 60,
  interactivity: {
    detectsOn: 'canvas',
    events: {
      onHover: {
        enable: true,
        mode: 'bubble',
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 80,
        duration: 2,
        opacity: 1,
        size: 6,
      },
    },
  },
  style: {
    position: 'absolute',
  },
  particles: {
    color: {
      value: '#0ff',
    },
    links: {
      blink: false,
      color: '#000',
      consent: false,
      distance: 40,
      enable: true,
      opacity: 0.4,
      width: 0.5,
    },
    move: {
      attract: {
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      bounce: false,
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: false,
        area: 2000,
      },
      limit: 0,
      value: 400,
    },
    opacity: {
      animation: {
        enable: false,
        minimumValue: 0.05,
        speed: 2,
        sync: false,
      },
      random: false,
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      animation: {
        enable: false,
        minimumValue: 0.1,
        speed: 40,
        sync: false,
      },
      random: false,
      value: 0.5,
    },
  },
};

const BannerBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);
  return (
    <ParticlesContainer>
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={OPTIONS} />
    </ParticlesContainer>
  );
};

const ParticlesContainer = styled.div`
  z-index: -1;
  #tsparticles {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #ffffff;
  }
`;
export default BannerBackground;
