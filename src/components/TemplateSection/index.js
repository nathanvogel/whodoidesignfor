import React from "react";
import PropTypes from "prop-types";
import ScrollMagic from "scrollmagic";
import { TweenMax, Power3 } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";
import Stickman from "../../images/default-stickman.inline.svg";
import Template from "../../images/template-template.inline.svg";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";
import { setStickmanPose } from "../../utils/get-svg";

class TemplateSection extends React.Component {
  constructor() {
    super();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();
    this.ref_truth = React.createRef();

    this.stickmanId = "TemplateStickman";
  }

  componentDidMount() {
    // Pin the scene, just to give a scene to setupTransition
    const pinScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: 0.1,
    })
      .setPin(this.ref_pin_content.current)
      // .addIndicators({ name: "pin goals", indent: 150 })
      .addTo(window.controller);

    // Stickman transition
    setStickmanPose(this.stickmanId, "template");
    this.props.setupTransition(
      "pusherToTemplate",
      "out",
      document.getElementById(this.stickmanId),
      pinScene
    );
  }

  render() {
    return (
      <section ref={this.ref_pin_container}>
        <div className={styles.TemplateSection} ref={this.ref_pin_content}>
          <div className={styles.Padder}>
            <Template className={styles.Template} />
            <div className={styles.Title}>Template fillers.</div>
            <Stickman id={this.stickmanId} className={styles.Stickman} />
          </div>
        </div>
      </section>
    );
  }
}

TemplateSection.propTypes = {
  setupTransition: PropTypes.func,
};

export default TemplateSection;
