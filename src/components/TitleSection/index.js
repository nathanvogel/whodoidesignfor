import React from 'react';
import ScrollMagic from 'scrollmagic';
import { TweenLite, TimelineMax, Power0, Expo } from 'gsap';
import 'animation.gsap';
import 'debug.addIndicators';
import styles from './styles.scss';

class TitleSection extends React.Component {
  constructor() {
    super();
    this.loaderWrap = null;
    this.loaderTween = null;
  }

  componentDidMount() {
    // Init ScrollMagic
    const controller = new ScrollMagic.Controller();
    const parallaxTl = new TimelineMax();
    parallaxTl.to(this.loaderWrap, 2, { opacity: 0, ease: Power0.easeNone }, 0);

    const slideParallaxScene = new ScrollMagic.Scene({
      triggerElement: this.loaderWrap,
      triggerHook: 0.2,
      duration: '20%',
    })
      .setTween(parallaxTl)
      .addIndicators({
        name: 'fade scene',
        colorTrigger: 'black',
      })
      .addTo(controller);
  }

  render() {
    return (
      <div className={styles.TitleSection}>
        <h1
          ref={div => {
            this.loaderWrap = div;
          }}
        >
          Who do I design for?
        </h1>
      </div>
    );
  }
}

export default TitleSection;
