import React, { Component } from 'react';

import posed from 'react-pose';


// Some react poses which are used on every page

export const StaggerRemaining = posed.div({
  open:{
    staggerChildren: 50,
    delayChildren: 750
  }
});
export const StaggerChildren = posed.div({
  open:{
    staggerChildren: 250,
    delayChildren: 100
  }
});
export const LoadFade = posed.div({
  open: {
    opacity:1,
    transition:{
      duration:400,
    }
  },
  closed:{
    opacity:0,
  }
});
export const ZeroToFullWidth = posed.div({
  open:{
    width:'100vw',
    transition:{
      duration:400,
    }
  },
  closed:{
    width:'0px',
  }
})