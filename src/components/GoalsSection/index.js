import React from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax, Linear, Sine } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";

class GoalsSection extends React.Component {
  constructor() {
    super();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();

    this.sectionDuration = 50;
  }

  componentDidMount() {
    // Pin the scene while doing horizontal scrolling
    new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: `${this.sectionDuration + 10}%`,
    })
      .setPin(this.ref_pin_content.current)
      .addIndicators({ name: "pin 2", indent: 150 })
      .addTo(window.controller);
  }

  render() {
    return (
      <div ref={this.ref_pin_container}>
        <div ref={this.ref_pin_content}>
          <div className={styles.GoalsSection}>
            <div className={styles.TopGradient} />
          </div>
        </div>
      </div>
    );
  }
}

export default GoalsSection;
