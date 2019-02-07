import React from "react";
import ScrollMagic from "scrollmagic";
import { TweenLite, TimelineMax, Power0, Expo } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";

class TitleSection extends React.Component {
  constructor() {
    super();
    this.ref_main = React.createRef();
    this.ref_wrapper = React.createRef();
    this.ref_h1 = React.createRef();
  }

  componentDidMount() {
    const parallaxTl = new TimelineMax();
    parallaxTl.to(
      this.ref_h1.current,
      2,
      { opacity: 0, ease: Power0.easeNone },
      0
    );

    const slideParallaxScene = new ScrollMagic.Scene({
      triggerElement: this.ref_h1.current,
      triggerHook: 0.2,
      duration: "20%",
    })
      .setTween(parallaxTl)
      .addIndicators({
        name: "fade",
      })
      .addTo(window.controller);

    const scene = new ScrollMagic.Scene({
      triggerElement: this.ref_wrapper.current,
      triggerHook: 0,
      duration: "20%",
    })
      .setPin(this.ref_main.current)
      .addIndicators({ name: "pin 1" }) // add indicators (requires plugin)
      .addTo(window.controller);
  }

  render() {
    return (
      <div ref={this.ref_wrapper}>
        <div className={styles.TitleSection} ref={this.ref_main}>
          <h1 ref={this.ref_h1}>Who do I design for?</h1>
        </div>
      </div>
    );
  }
}

export default TitleSection;
