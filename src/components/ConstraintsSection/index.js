import React from "react";
import PropTypes from "prop-types";
import ScrollMagic from "scrollmagic";
import { TweenMax, Power3 } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";
import Stickman from "../../images/default-stickman.inline.svg";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";
import { setStickmanPose } from "../../utils/get-svg";

class ConstraintsSection extends React.Component {
  constructor() {
    super();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();
    this.ref_truth = React.createRef();

    this.sectionDuration = 35;
    this.stickmanId = "ConstraintsStickman";
  }

  componentDidMount() {
    // Pin the scene
    const pinScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: `${this.sectionDuration}%`,
    })
      .setPin(this.ref_pin_content.current)
      // .addIndicators({ name: "pin goals", indent: 150 })
      .addTo(window.controller);

    // Text truth
    const truthScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0.6,
      duration: "60%",
    })
      .setTween(
        TweenMax.to(this.ref_truth.current, 0.5, {
          rotation: 90,
          ease: Power3.easeIn,
        })
      )
      // .addIndicators({ name: "rotation" })
      .addTo(window.controller);
    // linkSceneToOffset(truthScene, 10);

    // Stickman transition
    setStickmanPose(this.stickmanId, "constraints");
    this.props.setupTransition(
      "shareholdersToConstraints",
      "out",
      document.getElementById(this.stickmanId),
      pinScene
    );
  }

  render() {
    return (
      <section ref={this.ref_pin_container}>
        <div className={styles.ConstraintsSection} ref={this.ref_pin_content}>
          <div className={styles.Padder}>
            <Stickman id={this.stickmanId} className={styles.Stickman} />
            <div className={styles.Table} ref={this.ref_table} />
            <span className={styles.TruthPart1}>The digital has infinite </span>
            <div className={styles.TruthPart2} ref={this.ref_truth}>
              constraints.
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ConstraintsSection.propTypes = {
  setupTransition: PropTypes.func,
};

export default ConstraintsSection;
