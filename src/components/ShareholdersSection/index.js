import React from "react";
import PropTypes from "prop-types";
import ScrollMagic from "scrollmagic";
import { TweenMax, Linear } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";
import Stickman from "../../images/default-stickman.inline.svg";
// import Creations from "../../images/shareholders-creations.inline.svg";
import TheShareholder from "../../images/shareholders-theshareholder.inline.svg";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";
import { setStickmanPose } from "../../utils/get-svg";

class ShareholdersSection extends React.Component {
  constructor() {
    super();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();
    this.ref_truth = React.createRef();
    this.ref_theshareholder = React.createRef();
    this.ref_table = React.createRef();

    this.sectionDuration = 90;
    this.stickmanId = "ShareholdersStickman";
    this.shareholderId = "TheShareholder";
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

    // const truthAppearTween = TweenMax.from(this.ref_truth.current, 1, {
    //   text: "",
    //   ease: Linear.easeNone,
    // });
    // const truthAppearScene = new ScrollMagic.Scene({
    //   triggerElement: this.ref_pin_container.current,
    //   triggerHook: 0.0,
    //   duration: `25%`,
    // })
    //   .setTween(truthAppearTween)
    //   // .addIndicators({ name: "truth text" })
    //   .addTo(window.controller);
    // linkSceneToOffset(truthAppearScene, 10);

    // TheShareholder IN
    const shareholderScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: "30%",
    })
      .setTween(TweenMax.from(`#${this.shareholderId}`, 1, { y: "100vh" }))
      // .addIndicators({ name: "TheShareholder" })
      .addTo(window.controller);
    linkSceneToOffset(shareholderScene, 10);
    // TheShareholder OUT
    const shareholderSceneOut = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: "25%",
    })
      .setTween(TweenMax.to(`#${this.shareholderId}`, 1, { y: "100vh" }))
      // .addIndicators({ name: "TheShareholder Out" })
      .addTo(window.controller);
    linkSceneToOffset(shareholderSceneOut, this.sectionDuration - 12);

    // Table IN
    new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: "20%",
    })
      .setTween(TweenMax.from(this.ref_table.current, 1, { x: "100vw" }))
      // .addIndicators({ name: "table" })
      .addTo(window.controller);
    // Table OUT
    const tableSceneOut = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
      duration: "12%",
    })
      .setTween(TweenMax.to(this.ref_table.current, 1, { x: "-100vw" }))
      // .addIndicators({ name: "table out" })
      .addTo(window.controller);
    linkSceneToOffset(tableSceneOut, this.sectionDuration - 6);

    // Text truth IN
    this.ref_truth.current.style.opacity = 0;
    const truthScene = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
    })
      // .setTween(TweenMax.from(this.ref_truth.current, 0.2, { opacity: 0 }))
      .on("start", e => {
        if (e.scrollDirection === "PAUSED") return;
        TweenMax.to(this.ref_truth.current, 0.2, {
          opacity: e.scrollDirection === "FORWARD" ? 1 : 0,
        });
      })
      // .addIndicators({ name: "fade in" })
      .addTo(window.controller);
    linkSceneToOffset(truthScene, 40);
    // Text truth OUT
    const truthSceneOut = new ScrollMagic.Scene({
      triggerElement: this.ref_pin_container.current,
      triggerHook: 0,
    })
      .on("start", e => {
        if (e.scrollDirection === "PAUSED") return;
        TweenMax.to(this.ref_truth.current, 0.2, {
          // y: e.scrollDirection === "FORWARD" ? -100 : 0,
          opacity: e.scrollDirection === "FORWARD" ? 0 : 1,
        });
      })
      // .addIndicators({ name: "fadeout" })
      .addTo(window.controller);
    linkSceneToOffset(truthSceneOut, this.sectionDuration - 8);

    // Stickman transition
    setStickmanPose(this.stickmanId, "shareholders");
    this.props.setupTransition(
      "goalsToShareholders",
      "out",
      document.getElementById(this.stickmanId),
      pinScene
    );

    this.props.setupTransition(
      "shareholdersToConstraints",
      "in",
      document.getElementById(this.stickmanId),
      pinScene
    );
  }

  render() {
    return (
      <section ref={this.ref_pin_container}>
        <div className={styles.ShareholdersSection} ref={this.ref_pin_content}>
          <div className={styles.Padder}>
            <div className={styles.ShareholdersScene}>
              <TheShareholder
                id={this.shareholderId}
                className={styles.TheShareholder}
              />
              <Stickman id={this.stickmanId} className={styles.Stickman} />
              <div className={styles.Table} ref={this.ref_table} />
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
