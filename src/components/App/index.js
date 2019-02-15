import React from "react";
import { debounce } from "lodash";
import ScrollMagic from "scrollmagic";
// import "debug.addIndicators";
import { TextPlugin } from "gsap/all";
import { TweenLite, Linear, Power3 } from "gsap";
import styles from "./styles.scss";
import TitleSection from "../TitleSection";
import ThoughtsSection from "../ThoughtsSection";
import GoalsSection from "../GoalsSection";
import ShareholdersSection from "../ShareholdersSection";
import ConstraintsSection from "../ConstraintsSection";
import PusherSection from "../PusherSection";
import PatternsSection from "../PatternsSection";
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
    this.setupTransition = this.setupTransition.bind(this);
    this.updateTransition = this.updateTransition.bind(this);

    this.transitions = {
      goalsToShareholders: {
        inPose: "goals",
        outPose: "shareholders",
        easing: Linear.easeNone,
      },
      shareholdersToConstraints: {
        inPose: "shareholders",
        outPose: "constraints",
        easing: Power3.easeIn,
      },
      constraintsToPusher: {
        inPose: "constraints",
        outPose: "pusher",
        easing: Power3.easeInOut,
      },
    };
  }

  componentDidMount() {
    this.mainStickman = document.getElementById("main-stickman");
    this.originalWidth = this.mainStickman.getBoundingClientRect().width;
    this.updateAlltransitions();
    window.addEventListener(
      "resize",
      debounce(e => {
        this.updateAlltransitions();
      }, 120)
    );
  }

  setupTransition(tId, inOut, stickman, scene) {
    const t = this.transitions[tId];
    const debouncedUpdate = debounce(
      this.updateTransition.bind(this, tId),
      120
    );
    if (inOut === "out") {
      t.outStickman = stickman;
      t.outPinScene = scene;
      t.outPinScene.on("shift", debouncedUpdate);
    } else if (inOut === "in") {
      t.inStickman = stickman;
      t.inPinScene = scene;
      t.inPinScene.on("shift", debouncedUpdate);
    }

    this.updateTransition(t);
  }

  updateAlltransitions() {
    Object.keys(this.transitions).forEach(key => {
      this.updateTransition(key);
    });
  }

  updateTransition(t, event) {
    if (typeof t === "string") {
      t = this.transitions[t];
      // console.log("update from ", event);
    }

    if (!t.inPinScene) {
      console.log("Missing inPinScene, not updating yet");
      return;
    }
    if (!t.outPinScene) {
      console.log("Missing outPinScene, not updating yet");
      return;
    }
    if (!this.mainStickman) {
      console.log("Missing mainStickman, not updating yet");
      return;
    }

    // console.log("Updating transition");

    // Calculate from / to positions, it's just the absolute difference.
    const inRect = t.inStickman.getBoundingClientRect();
    const outRect = t.outStickman.getBoundingClientRect();
    const pxToFinalInTop =
      (1 - t.inPinScene.progress()) * t.inPinScene.duration();
    const pxToStartingOutTop =
      -t.outPinScene.progress() * t.outPinScene.duration();
    const inTop = inRect.top + window.scrollY + pxToFinalInTop;
    const outTop = outRect.top + window.scrollY + pxToStartingOutTop;
    const inLeft = inRect.left;
    const outLeft = outRect.left;
    const inScale = inRect.width / this.originalWidth;
    const outScale = outRect.width / this.originalWidth;

    const sceneDuration =
      t.outPinScene.scrollOffset() -
      t.inPinScene.scrollOffset() -
      t.inPinScene.duration();
    const sceneOffset = t.inPinScene.duration();

    // console.log(
    //   `Duration: ${t.outPinScene.scrollOffset()} - ${t.inPinScene.scrollOffset()} - ${t.inPinScene.duration()} = ${sceneDuration}`
    // );

    // console.log(
    //   `Going from ${inRect.top} + ${
    //     window.scrollY
    //   } + ${pxToFinalInTop} = ${inTop} to ${outRect.top} + ${
    //     window.scrollY
    //   } + ${pxToStartingOutTop} = ${outTop}`
    // );

    // Build the animation timeline.
    if (!t.tl) {
      t.tl = getStickmanTimeline(
        this.mainStickman.id,
        1,
        t.easing,
        t.inPose,
        t.outPose
      );
    }

    // Y transition,
    // It's the most suspect to changes because of DOM ScrolLMagic weirdness.
    if (t.tweenY) {
      t.tweenY.kill();
    }
    t.tweenY = TweenLite.fromTo(
      this.mainStickman,
      1,
      { y: inTop },
      { y: outTop, ease: t.easing }
    );
    t.tl.add(t.tweenY, 0);

    // X transition, might not need to be recreated on every event.
    if (t.tweenX) t.tweenX.kill();
    t.tweenX = TweenLite.fromTo(
      this.mainStickman,
      1,
      { x: inLeft },
      { x: outLeft, ease: t.easing }
    );
    t.tl.add(t.tweenX, 0);

    // Scale transition, same
    if (t.tweenScale) t.tweenScale.kill();
    t.tweenScale = TweenLite.fromTo(
      this.mainStickman,
      1,
      { scale: inScale },
      { scale: outScale, ease: t.easing }
    );
    t.tl.add(t.tweenScale, 0);

    // Build the scene
    if (!t.scene) {
      t.scene = new ScrollMagic.Scene({
        triggerElement: t.inPinScene.triggerElement(),
        triggerHook: 0.0,
        duration: sceneDuration,
        offset: sceneOffset,
      })
        .setTween(t.tl)
        // .addIndicators({ name: "STICKMAN transition" })
        .addTo(window.controller);

      t.scene.on("enter", _event => {
        // Substitute stickmans
        t.inStickman.style.visibility = "hidden";
        t.outStickman.style.visibility = "hidden";
        this.mainStickman.style.visibility = "visible";
      });
      t.scene.on("leave", _event => {
        // Substitute stickmans
        t.inStickman.style.visibility = "visible";
        t.outStickman.style.visibility = "visible";
        this.mainStickman.style.visibility = "hidden";
      });
    } else {
      if (sceneDuration < 0) {
        console.warn("SceneDuration is < zero!", sceneDuration);
      } else {
        t.scene.duration(sceneDuration);
      }
      t.scene.offset(sceneOffset);
    }
  }

  render() {
    return (
      <div className={styles.MainRootContent}>
        <TitleSection />
        <ThoughtsSection />
        <GoalsSection setupTransition={this.setupTransition} />
        <ShareholdersSection setupTransition={this.setupTransition} />
        <ConstraintsSection setupTransition={this.setupTransition} />
        <PusherSection setupTransition={this.setupTransition} />
        <PatternsSection />
        <section className={styles.nextSection}>Hey!</section>
        <Stickman id="stickman-poses" style={{ display: "none" }} />
        <AnimatedStickman id="main-stickman" className={styles.MainStickman} />
      </div>
    );
  }
}

export default App;
