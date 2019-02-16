import React from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax, Linear, Sine } from "gsap";
import "animation.gsap";
// import "debug.addIndicators";
import styles from "./styles.scss";

class ThoughtsSection extends React.Component {
  constructor() {
    super();
    this.ref_small = React.createRef();
    this.ref_medium = React.createRef();
    this.ref_big = React.createRef();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();
    this.ref_dummy_pusher = React.createRef();

    this.sectionDuration = 200;
  }

  componentDidMount() {
    // Pin the scene while doing horizontal scrolling
    new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: `${this.sectionDuration + 140}%`,
    })
      .setPin(this.ref_pin_content.current, { pushFollowers: false })
      // .addIndicators({ name: "pin 2", indent: 150 })
      .addTo(window.controller);
    new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: `${this.sectionDuration + 15}%`,
    })
      .setPin(this.ref_dummy_pusher.current, { pushFollowers: true })
      // .addIndicators({ name: "pin 2", indent: 150 })
      .addTo(window.controller);

    const x = -3700 + window.innerWidth;
    const refs = [this.ref_small, this.ref_medium, this.ref_big];
    const distances = [x * 0.28, x * 0.56, x];

    for (let i = 0; i < refs.length; i += 1) {
      new ScrollMagic.Scene({
        triggerElement: this.ref_pin_container.current,
        triggerHook: 0,
        duration: `${this.sectionDuration}%`,
      })
        .setTween(refs[i].current, {
          x: distances[i],
          ease: Sine.easeInOut,
        })
        // .addIndicators({ name: "hori tween" })
        .addTo(window.controller);
    }
  }

  render() {
    return (
      <section ref={this.ref_pin_container}>
        <div ref={this.ref_pin_content}>
          <div className={styles.ThoughtsSection}>
            <div className={styles.verticalAlign}>
              <div className={styles.Sentence} ref={this.ref_small}>
                I thought I was designing for users.
              </div>
              <div className={styles.Sentence} ref={this.ref_medium}>
                I thought my role was to delight users.
              </div>
              <div className={styles.Sentence} ref={this.ref_big}>
                I thought the most versatile media ever invented would offer me
                infinite freedom.
              </div>
            </div>
          </div>
        </div>
        <div ref={this.ref_dummy_pusher} />
      </section>
    );
  }
}

export default ThoughtsSection;
