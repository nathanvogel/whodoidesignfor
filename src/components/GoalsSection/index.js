import React from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax, Linear, Sine } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";
import Stickman from "../../images/goals-stickman.inline.svg";
import Target from "../../images/goals-target.inline.svg";

class GoalsSection extends React.Component {
  constructor() {
    super();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();

    this.sectionDuration = 50;
  }

  componentDidMount() {
    // Pin the scene
    new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: `${this.sectionDuration + 10}%`,
    })
      .setPin(this.ref_pin_content.current)
      .addIndicators({ name: "pin goals", indent: 150 })
      .addTo(window.controller);
  }

  render() {
    return (
      <section ref={this.ref_pin_container}>
        <div id="a" className={styles.GoalsSection} ref={this.ref_pin_content}>
          <div className={styles.TopGradient} />
          <div className={styles.Padder}>
            <div className={styles.GoalsScene}>
              <Stickman className={styles.Stickman} />
              <Target className={styles.Target} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GoalsSection;
