import React from "react";
import ScrollMagic from "scrollmagic";
import { TextPlugin } from "gsap/all";
import { TimelineLite, TweenLite, Linear } from "gsap";
import styles from "./styles.scss";
import TitleSection from "../TitleSection";
import ThoughtsSection from "../ThoughtsSection";
import GoalsSection from "../GoalsSection";
import ShareholdersSection from "../ShareholdersSection";
import Stickman from "../../images/stickman.inline.svg";
import AnimatedStickman from "../../images/default-stickman.inline.svg";
import { getStickmanTimeline } from "../../utils/get-svg";

// This line makes sure plugins aren't tree-shacked out of the bundle.
// https://greensock.com/docs/NPMUsage
const plugins = [TextPlugin];

class App extends React.Component {
  constructor() {
    super();
    const controller = new ScrollMagic.Controller();
    window.controller = controller;
    this.mainStickman;
    this.setupTransition = this.setupTransition.bind(this);

    this.transitions = {
      goalsToShareholders: {
        inPose: "goals",
        outPose: "shareholders",
      },
    };
  }

  componentDidMount() {
    console.log("App mounted");
    this.mainStickman = document.getElementById("main-stickman");
    this.originalWidth = this.mainStickman.getBoundingClientRect().width;
  }

  setupTransition(tId, inOut, stickman, scene) {
    const t = this.transitions[tId];
    if (inOut === "out") {
      t.outStickman = stickman;
      t.outPinScene = scene;
      t.outPinScene.on("shift", this.updateTransition.bind(this, tId));
    } else if (inOut === "in") {
      t.inStickman = stickman;
      t.inPinScene = scene;
      t.inPinScene.on("shift", this.updateTransition.bind(this, tId));
    }

    this.updateTransition(t);
  }

  updateTransition(t) {
    if (typeof t === "string") {
      t = this.transitions[t];
    }

    if (!t.inPinScene) {
      console.log("Missing inPinScene, not updating yet");
      return;
    }
    if (!t.outPinScene) {
      console.log("Missing outPinScene, not updating yet");
      return;
    }

    // Calculate from / to positions, it's just the absolute difference.
    const inRect = t.inStickman.getBoundingClientRect();
    const outRect = t.outStickman.getBoundingClientRect();
    const inTop = inRect.top + window.scrollY + t.inPinScene.duration();
    const outTop = outRect.top + window.scrollY;
    const inLeft = inRect.left;
    const outLeft = outRect.left;
    const inScale = inRect.width / this.originalWidth;
    const outScale = outRect.width / this.originalWidth;

    const sceneStart = t.inPinScene.scrollOffset() + t.inPinScene.duration();
    const sceneDuration = t.outPinScene.scrollOffset() - sceneStart;
    const sceneOffset = t.inPinScene.duration();

    console.log(inLeft);
    // console.log(
    //   `Going from ${inRect.top} + ${
    //     window.scrollY
    //   } + ${t.inPinScene.duration()} = ${inTop} to ${outRect.top} + ${
    //     window.scrollY
    //   }`
    // );

    // Build the animation timeline.
    if (!t.tl) {
      t.tl = getStickmanTimeline(
        this.mainStickman.id,
        1,
        Linear.easeNone,
        t.inPose,
        t.outPose
      );
    }

    if (!t.tweenY) {
      t.tweenY = TweenLite.fromTo(
        this.mainStickman,
        1,
        { y: inTop },
        { y: outTop }
      );
      t.tl.add(t.tweenY, 0);
    } else {
      t.tweenY.vars.startAt.y = inTop;
      t.tweenY.vars.y = outTop;
      t.tweenY.invalidate();
    }

    if (!t.tweenX) {
      t.tweenX = TweenLite.fromTo(
        this.mainStickman,
        1,
        { x: inLeft },
        { x: outLeft }
      );
      t.tl.add(t.tweenX, 0);
    } else {
      t.tweenX.vars.startAt.x = inLeft;
      t.tweenX.vars.x = outLeft;
      t.tweenX.invalidate();
    }

    if (!t.tweenScale) {
      t.tweenScale = TweenLite.fromTo(
        this.mainStickman,
        1,
        { scale: inScale },
        { scale: outScale }
      );
      t.tl.add(t.tweenScale, 0);
    } else {
      t.tweenY.vars.startAt.scale = inScale;
      t.tweenY.vars.scale = outScale;
      t.tweenY.invalidate();
    }

    // Build the scene
    if (!t.scene) {
      t.scene = new ScrollMagic.Scene({
        triggerElement: t.inPinScene.triggerElement(),
        triggerHook: 0.0,
        duration: sceneDuration,
        offset: sceneOffset,
      })
        .setTween(t.tl)
        .addIndicators({ name: "STICKMAN transition" })
        .addTo(window.controller);

      t.scene.on("enter", event => {
        // Substitute stickmans
        t.inStickman.style.visibility = "hidden";
        t.outStickman.style.visibility = "hidden";
        this.mainStickman.style.visibility = "visible";
      });
      t.scene.on("leave", event => {
        // Substitute stickmans
        t.inStickman.style.visibility = "visible";
        t.outStickman.style.visibility = "visible";
        this.mainStickman.style.visibility = "hidden";

        console.log("Destroying...");
        // TweenLite.killTweensOf(mainStickman);
      });
    } else {
      t.scene.duration(sceneDuration);
      t.scene.offset(sceneOffset);
    }
  }

  // setupTransitionEnd() {
  //
  //       pinScene.on("enter", event => {
  //         // if (transitionTween) {
  //         //   tl.remove(transitionTween);
  //         //   transitionTween = 0;
  //         // }
  //         console.log("Destroying transition tween");
  //         mainStickman.style.visibility = "hidden";
  //         TweenLite.killTweensOf(mainStickman);
  //       });
  // }

  render() {
    return (
      <div className="main-root-content">
        <TitleSection />
        <ThoughtsSection />
        <GoalsSection setupTransition={this.setupTransition} />
        <ShareholdersSection setupTransition={this.setupTransition} />
        <section className={styles.nextSection}>Hey!</section>
        <Stickman id="stickman-poses" style={{ display: "none" }} />
        <AnimatedStickman id="main-stickman" className={styles.MainStickman} />
      </div>
    );
  }
}

export default App;
