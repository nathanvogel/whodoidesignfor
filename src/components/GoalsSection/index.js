import React from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax, Linear, Sine } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";
import Stickman from "../../images/goals-stickman.inline.svg";
import Target from "../../images/goals-target.inline.svg";
import ViewLine from "../../images/goals-viewline.inline.svg";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";

class GoalsSection extends React.Component {
  constructor() {
    super();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();
    this.ref_viewline = React.createRef();

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

    const viewLineTween = TweenMax.from("#goals-viewline\\.inline", 1, {
      attr: { d: "M1 1L0 1.00024" },
    });
    const viewLineScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      offset: 100,
      triggerHook: 0.0,
      duration: `25%`,
    })
      .setTween(viewLineTween)
      .addIndicators({ name: "viewline" })
      .addTo(window.controller);
    linkSceneToOffset(viewLineScene, 10);
  }

  render() {
    return (
      <section ref={this.ref_pin_container}>
        <div className={styles.GoalsSection} ref={this.ref_pin_content}>
          <div className={styles.TopGradient} />
          <div className={styles.Padder}>
            <div className={styles.GoalsScene}>
              <Target className={styles.Target} />
              <div className={styles.ViewLine}>
                <ViewLine />
              </div>
              <Stickman className={styles.Stickman} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GoalsSection;
