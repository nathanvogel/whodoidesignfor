import React from "react";
import ScrollMagic from "scrollmagic";
import { TextPlugin } from "gsap/all";
import styles from "./styles.scss";
import TitleSection from "../TitleSection";
import ThoughtsSection from "../ThoughtsSection";
import GoalsSection from "../GoalsSection";

// This line makes sure plugins aren't tree-shacked out of the bundle.
// https://greensock.com/docs/NPMUsage
const plugins = [TextPlugin];

class App extends React.Component {
  constructor() {
    super();
    const controller = new ScrollMagic.Controller();
    window.controller = controller;
  }

  render() {
    return (
      <div className="main-root-content">
        <TitleSection />
        <ThoughtsSection />
        <GoalsSection />
        <section className={styles.nextSection}>Hey!</section>
      </div>
    );
  }
}

export default App;
