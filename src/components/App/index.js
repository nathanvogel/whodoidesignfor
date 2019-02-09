import React from "react";
import ScrollMagic from "scrollmagic";
import styles from "./styles.scss";
import TitleSection from "../TitleSection";
import ThoughtsSection from "../ThoughtsSection";
import GoalsSection from "../GoalsSection";

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
        <div className={styles.nextSection}>Hey!</div>
      </div>
    );
  }
}

export default App;
