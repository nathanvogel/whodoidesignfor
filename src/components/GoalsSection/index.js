import React from "react";
import PropTypes from "prop-types";
import ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax, TweenLite, Linear, Back } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";
import Stickman from "../../images/default-stickman.inline.svg";
import Target from "../../images/goals-target.inline.svg";
import ViewLine from "../../images/goals-viewline.inline.svg";
import TargetText from "../../images/goals-q4-text.inline.svg";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";
import { setStickmanPose } from "../../utils/get-svg";

class GoalsSection extends React.Component {
  constructor() {
    super();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();
    this.ref_viewline = React.createRef();
    this.ref_truth = React.createRef();
    this.ref_stickman_container = React.createRef();

    // A unique ID so that GSAP can find it and its children
    this.stickmanId = "GoalsSectionStickman";
    this.sectionDuration = 60;
  }

  componentDidMount() {
    // Pin the scene
    const pinScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: `${this.sectionDuration}%`,
    })
      .setPin(this.ref_pin_content.current, { pushFollowers: true })
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

    setStickmanPose(this.stickmanId, "goals");

    setTimeout(() => {
      console.log(
        `offset ${pinScene.scrollOffset()} + ${pinScene.offset()} + ${pinScene.duration()}`
      );
      this.props.setupTransition(
        "goalsToShareholders",
        "in",
        document.getElementById(this.stickmanId),
        pinScene
      );
    }, 2000);

    // Stickman transition.
    // const stickman = `#${this.stickmanId}`;
    // const ease = undefined;
    // const tl = getStickmanTimeline(
    //   this.stickmanId,
    //   1,
    //   ease,
    //   "goals",
    //   "shareholders"
    // );
    // tl.to(stickman, 1, { scale: 192 / 89.42 }, 0);
    // const stickTestScene = new ScrollMagic.Scene({
    //   triggerElement: this.ref_pin_container.current,
    //   triggerHook: 0.0,
    //   duration: "80%",
    // })
    //   .setTween(tl)
    //   .addIndicators({ name: "Stickman anim" })
    //   .addTo(window.controller);
    // linkSceneToOffset(stickTestScene, this.sectionDuration);

    // Pin the scene
    // new ScrollMagic.Scene({
    //   triggerElement: this.ref_pin_container.current,
    //   triggerHook: 0,
    //   duration: `${this.sectionDuration + 100}%`,
    // })
    //   .setPin(stickman, { pushFollowers: false })
    //   .addIndicators({ name: "Pin stickman", indent: 150 })
    //   .addTo(window.controller);

    // var transitionTween;
    // const mainStickman = document.getElementById("main-stickman");
    // const localStickman = document.getElementById(this.stickmanId);
    // pinScene.on("leave", event => {
    //     console.log("unpinning");
    //     console.log(event);
    // });
    //
    // pinScene.on("enter", event => {
    //   // if (transitionTween) {
    //   //   tl.remove(transitionTween);
    //   //   transitionTween = 0;
    //   // }
    //   console.log("Destroying transition tween");
    //   mainStickman.style.visibility = "hidden";
    //   TweenLite.killTweensOf(mainStickman);
    // });
  }

  hideMainStickman() {}

  transitionStickmanToNext() {}

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
              <div
                ref={this.ref_stickman_container}
                className={styles.StickmanContainer}
              >
                <Stickman id={this.stickmanId} className={styles.Stickman} />
              </div>
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

GoalsSection.propTypes = {
  setupTransition: PropTypes.func,
};

export default GoalsSection;
