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
export const LoadScale = posed.div({
  open: {
    opacity:1,
    scale:1,
    transition:{
      opacity:{duration:400},
      scale:{duration:400, delay:400},
    }
  },
  closed:{
    opacity:0,
    scale:0.85,
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
});
export const PulseSize = posed.div({
  small:{
    scale:0.99,
    transition:{
      duration:2000,
    }
  },
  large:{
    scale:1.0,
    transition:{
      duration:2000,
    }
  }
})
export const ChangingLeftRight = posed.div({
  small:{
    x:'0%',
    transition:{
      duration:5000,
    }
  },
  large:{
    x:'5%',
    transition:{
      duration:5000,
    }
  }
})
