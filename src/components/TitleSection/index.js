import React from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";
import "animation.gsap";
// import "debug.addIndicators";
import styles from "./styles.scss";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";

class TitleSection extends React.Component {
  constructor() {
    super();
    this.ref_main = React.createRef();
    this.ref_scroll_container = React.createRef();
    this.refs_h1 = [];

    this.titles = [
      "Who do I design for?",
      "Who do you design for?",
      "Who does she design for?",
      "Who does he design for?",
      "Who do we design for?",
      "Who do they design for?",
    ];

    for (let i = 0; i < this.titles.length; i += 1) {
      this.refs_h1.push(React.createRef());
    }

    this.sectionDuration = 30;
  }

  componentDidMount() {
    // Pin the scene for a while
    new ScrollMagic.Scene({
      triggerElement: this.ref_scroll_container.current,
      triggerHook: 0,
      duration: `${this.sectionDuration}%`,
    })
      .setPin(this.ref_main.current)
      // .addIndicators({ name: "pin 1" }) // add indicators (requires plugin)
      .addTo(window.controller);

    // Fade in-out all titles
    for (let i = 0; i < this.titles.length; i += 1) {
      const header = this.refs_h1[i].current;

      const sceneIn = new ScrollMagic.Scene({
        triggerElement: this.ref_main.current,
        triggerHook: 0.5,
        reverse: i !== 0, // The first one should stay when going back up.
      })
        .on("start", e => {
          if (e.scrollDirection === "PAUSED") return;
          TweenMax.to(header, 0.25, {
            opacity: e.scrollDirection === "FORWARD" ? 1 : 0,
          });
        })
        // .addIndicators({ name: `fadein ${i}` })
        .addTo(window.controller);
      linkSceneToOffset(sceneIn, 50 + i * 5);

      const sceneOut = new ScrollMagic.Scene({
        triggerElement: this.ref_main.current,
        triggerHook: 0.5,
      })
        .on("start", e => {
          if (e.scrollDirection === "PAUSED") return;
          TweenMax.to(header, 0.7, {
            // y: e.scrollDirection === "FORWARD" ? -100 : 0,
            opacity: e.scrollDirection === "FORWARD" ? 0 : 1,
          });
        })
        // .addIndicators({ name: `fadeout ${i}`, indent: 150 })
        .addTo(window.controller);
      linkSceneToOffset(sceneOut, 55 + i * 5);
    }

    // Intro animation
    // only if the user didn't already scroll (page refresh).
    if (window.scrollY === 0) {
      TweenMax.fromTo(
        this.refs_h1[0].current,
        1.1,
        { opacity: 0 },
        { opacity: 1, delay: 1.2 }
      );
    }
  }

  render() {
    const titles_h1 = [];
    for (let i = 0; i < this.titles.length; i += 1) {
      titles_h1.push(
        <h1 ref={this.refs_h1[i]} key={`h1-${i}`}>
          {this.titles[i]}
        </h1>
      );
    }

    return (
      <section ref={this.ref_scroll_container}>
        <div className={styles.TitleSection} ref={this.ref_main}>
          <div className={styles.TitleList}>{titles_h1}</div>
        </div>
      </section>
    );
  }
}

export default TitleSection;
