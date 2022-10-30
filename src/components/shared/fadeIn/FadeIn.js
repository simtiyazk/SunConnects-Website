import React from 'react';
import { Tween } from 'react-gsap';

const FadeIn = ({ children, duration }) => (
  <Tween
    from={{ css: { opacity: 0 }}}
    duration={duration}
  >
    {children}
  </Tween>
);

export default FadeIn;
