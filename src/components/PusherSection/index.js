import React from "react";
import PropTypes from "prop-types";
import ScrollMagic from "scrollmagic";
import { TweenMax, Power3 } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";
import Stickman from "../../images/default-stickman.inline.svg";
import Hat from "../../images/construction-hat.inline.svg";
import Pixels from "../../images/pixels.inline.svg";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";
import { setStickmanPose } from "../../utils/get-svg";

class PusherSection extends React.Component {
  constructor() {
    super();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();
    this.ref_truth = React.createRef();

    this.sectionDuration = 35;
    this.stickmanId = "PusherStickman";
    this.pixelsId = "PusherPixelBlocks";
    this.hatId = "ConstructionHat";
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

    const hatScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0.1,
      duration: "20%",
    })
      .setTween(
        TweenMax.from(`#${this.hatId}`, 1, {
          rotation: 540,
          y: "-=100vh",
          opacity: 0,
          ease: Power3.easeOut,
        })
      )
      // .addIndicators({ name: "hat" })
      .addTo(window.controller);

    // Stickman transition
    setStickmanPose(this.stickmanId, "pusher");
    this.props.setupTransition(
      "constraintsToPusher",
      "out",
      document.getElementById(this.stickmanId),
      pinScene
    );
  }

  render() {
    return (
      <section ref={this.ref_pin_container}>
        <div className={styles.PusherSection} ref={this.ref_pin_content}>
          <div className={styles.GraphicsWrapper}>
            <Pixels id={this.pixelsId} className={styles.Pixels} />
            <Stickman id={this.stickmanId} className={styles.Stickman} />
            <Hat id={this.hatId} className={styles.Hat} />
          </div>
          <div className={styles.Padder}>
            <div className={styles.Title}>Pixel pushers</div>
          </div>
        </div>
      </section>
    );
  }
}

PusherSection.propTypes = {
  setupTransition: PropTypes.func,
};

export default PusherSection;
