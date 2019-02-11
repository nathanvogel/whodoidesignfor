import React from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, Linear, Back } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";
import Stickman from "../../images/default-stickman.inline.svg";
import Target from "../../images/goals-target.inline.svg";
import ViewLine from "../../images/goals-viewline.inline.svg";
import TargetText from "../../images/goals-q4-text.inline.svg";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";
import { getStickmanTimeline } from "../../utils/get-svg";

class GoalsSection extends React.Component {
  constructor() {
    super();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();
    this.ref_viewline = React.createRef();
    this.ref_truth = React.createRef();

    // A unique ID so that GSAP can find it and its children
    this.stickmanId = "GoalsSectionStickman";
    this.sectionDuration = 60;
  }

  componentDidMount() {
    // Pin the scene
    new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: `${this.sectionDuration}%`,
    })
      .setPin(this.ref_pin_content.current)
      .addIndicators({ name: "pin goals", indent: 150 })
      .addTo(window.controller);

    const viewLineTween = TweenMax.from("#goals-viewline\\.inline", 1, {
      attr: { d: "M1 1L0 1.00024" },
      ease: Linear.easeNone,
    });
    const viewLineScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0.0,
      duration: `25%`,
    })
      .setTween(viewLineTween)
      // .addIndicators({ name: "viewline" })
      .addTo(window.controller);
    linkSceneToOffset(viewLineScene, 10);

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

    // Q4 target text appear
    const targetTextTween = TweenMax.from("#goals-q4-text\\.inline", 0.3, {
      y: -150,
      ease: Back.easeOut,
    });
    const targetTextScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0.0,
      duration: 0,
    })
      .setTween(targetTextTween)
      // .addIndicators({ name: "Target Text" })
      .addTo(window.controller);
    linkSceneToOffset(targetTextScene, 35);

    // Stickman transition.
    const stickman = `#${this.stickmanId}`;
    const ease = undefined;
    const tl = getStickmanTimeline(
      this.stickmanId,
      1,
      ease,
      "goals",
      "shareholders"
    );
    tl.to(stickman, 1, { scale: 192 / 89.42 }, 0);
    const stickTestScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0.0,
      duration: "30%",
    })
      .setTween(tl)
      .addIndicators({ name: "Stickman anim" })
      .addTo(window.controller);
    linkSceneToOffset(stickTestScene, 40);

    // Pin the scene
    // new ScrollMagic.Scene({
    //   triggerElement: this.ref_pin_container.current,
    //   triggerHook: 0,
    //   duration: `${this.sectionDuration + 100}%`,
    // })
    //   .setPin(`${stickman}  svg`, { pushFollowers: false })
    //   .addIndicators({ name: "Pin stickman", indent: 150 })
    //   .addTo(window.controller);
  }

  render() {
    return (
      <section ref={this.ref_pin_container}>
        <div className={styles.GoalsSection} ref={this.ref_pin_content}>
          <div className={styles.TopGradient} />
          <div className={styles.Padder}>
            <div className={styles.GoalsScene}>
              <TargetText className={styles.TargetText} />
              <Target className={styles.Target} />
              <div className={styles.ViewLine}>
                <ViewLine />
              </div>
              <Stickman id={this.stickmanId} className={styles.Stickman} />
              <span className={styles.Truth} ref={this.ref_truth}>
                I was designing for business goals.
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GoalsSection;
