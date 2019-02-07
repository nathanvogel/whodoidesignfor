import React from "react";
import ScrollMagic from "scrollmagic";
import { TweenLite, TimelineMax, TweenMax, Power0, Expo } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";

class TitleSection extends React.Component {
  constructor() {
    super();
    this.ref_main = React.createRef();
    this.ref_wrapper = React.createRef();
    // this.ref_h1 = React.createRef();
    this.refs_h1 = [];
    this.refs_triggers = [];

    this.titles = [
      "Who do I design for?",
      "Who do you design for?",
      "Who does he design for?",
      "Who does she design for?",
      "Who do we design for?",
      "Who do they design for?",
    ];

    for (let i = 0; i < this.titles.length; i += 1) {
      this.refs_h1.push(React.createRef());
      this.refs_triggers.push(React.createRef());
    }

    this.sectionDuration = 50;
  }

  componentDidMount() {
    // const parallaxTl = new TimelineMax();
    // parallaxTl.to(
    //   this.ref_h1.current,
    //   2,
    //   { opacity: 0, ease: Power0.easeNone },
    //   0
    // );

    // Pin the scene for a while
    new ScrollMagic.Scene({
      triggerElement: this.ref_wrapper.current,
      triggerHook: 0,
      duration: `${this.sectionDuration + 20}%`,
    })
      .setPin(this.ref_main.current)
      .addIndicators({ name: "pin 1" }) // add indicators (requires plugin)
      .addTo(window.controller);

    // Fade in-out all titles
    for (let i = 0; i < this.titles.length; i += 1) {
      const header = this.refs_h1[i].current;
      new ScrollMagic.Scene({
        triggerElement: this.refs_triggers[i].current,
        triggerHook: 1,
      })
        .on("start", e => {
          console.log("in start ", e.scrollDirection);
          TweenMax.to(header, 0.3, {
            // y: e.scrollDirection === "FORWARD" ? 0 : -100,
            opacity: e.scrollDirection === "FORWARD" ? 1 : 0,
          });
        })
        // .setTween(tweenIn)
        .addIndicators({ name: `fadein ${i}` })
        .addTo(window.controller);
      new ScrollMagic.Scene({
        triggerElement: this.refs_triggers[i].current,
        triggerHook: 0.9075,
      })
        .on("start", e => {
          console.log("out start", e.scrollDirection);
          TweenMax.to(header, 0.3, {
            // y: e.scrollDirection === "FORWARD" ? -100 : 0,
            opacity: e.scrollDirection === "FORWARD" ? 0 : 1,
          });
        })
        // .setTween(tweenOut)
        .addIndicators({ name: `fadeout ${i}`, indent: 200 })
        .addTo(window.controller);
    }

    // Intro animation
    TweenMax.fromTo(
      this.refs_h1[0].current,
      1.3,
      {
        opacity: 0,
      },
      {
        opacity: 1,
      }
    );
  }

  render() {
    const titles_h1 = [];
    const titles_triggers = [];
    const triggerInterval = this.sectionDuration / this.titles.length;
    for (let i = 0; i < this.titles.length; i += 1) {
      titles_h1.push(
        <h1 ref={this.refs_h1[i]} key={`h1-${i}`}>
          {this.titles[i]}
        </h1>
      );
      titles_triggers.push(
        <span
          className={styles.Trigger}
          ref={this.refs_triggers[i]}
          key={`trig-${i}`}
          style={{
            transform: `translateY(${-(this.titles.length - i) *
              triggerInterval +
              0 -
              20}vh)`,
          }}
        />
      );
    }

    return (
      <div ref={this.ref_wrapper}>
        <div className={styles.TitleSection} ref={this.ref_main}>
          <div className={styles.TitleList}>{titles_h1}</div>
        </div>
        {titles_triggers}
      </div>
    );
  }
}

export default TitleSection;
