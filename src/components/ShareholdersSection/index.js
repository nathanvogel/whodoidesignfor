import React from "react";
import PropTypes from "prop-types";
import ScrollMagic from "scrollmagic";
import { TweenMax, Linear } from "gsap";
import "animation.gsap";
// import "debug.addIndicators";
import styles from "./styles.scss";
import Stickman from "../../images/default-stickman.inline.svg";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";
import { setStickmanPose } from "../../utils/get-svg";

class ShareholdersSection extends React.Component {
  constructor() {
    super();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();
    this.ref_truth = React.createRef();

    this.sectionDuration = 50;
    this.stickmanId = "ShareholdersStickman";
  }

  componentDidMount() {
    // Pin the scene
    const pinScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: `${this.sectionDuration + 10}%`,
    })
      .setPin(this.ref_pin_content.current)
      // .addIndicators({ name: "pin goals", indent: 150 })
      .addTo(window.controller);

    const truthAppearTween = TweenMax.from(this.ref_truth.current, 1, {
      text: "",
      ease: Linear.easeNone,
    });
    const truthAppearScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0.0,
      duration: `25%`,
    })
      .setTween(truthAppearTween)
      // .addIndicators({ name: "truth text" })
      .addTo(window.controller);
    linkSceneToOffset(truthAppearScene, 10);

    setStickmanPose(this.stickmanId, "shareholders");
    setTimeout(() => {
      this.props.setupTransition(
        "goalsToShareholders",
        "out",
        document.getElementById(this.stickmanId),
        pinScene
      );
    }, 1000);
  }

  render() {
    return (
      <section ref={this.ref_pin_container}>
        <div className={styles.ShareholdersSection} ref={this.ref_pin_content}>
          <div className={styles.Padder}>
            <div className={styles.ShareholdersScene}>
              <Stickman id={this.stickmanId} className={styles.Stickman} />
              <span className={styles.Truth} ref={this.ref_truth}>
                My role was to delight shareholders.
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

ShareholdersSection.propTypes = {
  setupTransition: PropTypes.func,
};

export default ShareholdersSection;
