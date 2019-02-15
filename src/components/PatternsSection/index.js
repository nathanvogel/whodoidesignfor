import React from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax, Linear } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";
import words from "./words.json";

const ROW_ID_PREFIX = "patterns-row-";

class PatternsSection extends React.Component {
  constructor() {
    super();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();
    this.ref_truth = React.createRef();

    for (let i = 0; i < words.length; i += 1) {
      const row = words[i];
    }
    this.rowsId = ["patterns-row-1", "patterns-row-2", "patterns-row-3"];
  }

  componentDidMount() {
    for (let i = 0; i < words.length; i += 1) {
      const rowId = `${ROW_ID_PREFIX}${i}`;
      const fromOrTo = i % 2 ? TweenMax.to : TweenMax.from;
      const tween = fromOrTo(`#${rowId}`, 1, {
        x: "-=50%",
        ease: Linear.easeNone,
      });

      const scene = new ScrollMagic.Scene({
        triggerElement: `#${rowId}`,
        triggerHook: 1,
        duration: "150%",
      })
        .setTween(tween)
        .addIndicators({ name: rowId })
        .addTo(window.controller);
    }
  }

  render() {
    return (
      <section ref={this.ref_pin_container}>
        <div className={styles.PatternsSection} ref={this.ref_pin_content}>
          <div className={styles.Padder}>
            <div className={styles.Title}>Pattern pickers.</div>
          </div>
          {words.map((row, index) => (
            <div id={`${ROW_ID_PREFIX}${index}`} className={styles.PatternRow}>
              {row.map(word => (
                <span className={styles.Pattern}>{word}</span>
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default PatternsSection;
