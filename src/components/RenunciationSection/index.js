/* eslint-disable jsx-a11y/media-has-caption */

import React from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax, Linear, TimelineLite } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";
import sStyles from "../../shared-styles/styles.scss";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";

class RenunciationSection extends React.Component {
  constructor() {
    super();
    this.ref_section = React.createRef();
  }

  componentDidMount() {}

  render() {
    return (
      <section className={styles.RenunciationSection} ref={this.ref_section}>
        <div className={sStyles.TopGradient} />
        <div className={sStyles.LeftBigColumnPadder}>
          <p className={`${sStyles.UtopianText} ${styles.EvenThat}`}>
            But in the end, even putting people at the center of the design
            process and mastering the digital medium doesn’t matter, simply
            because:
          </p>
        </div>
        <div className={sStyles.RightBigColumnPadder}>
          <p className={`${sStyles.UtopianText}`}>
            Fortunately, I see hope. Some designers are willingly selling out
            and to me, that means freedom. Because selling out means finally
            deconstructing the narrative they built for themselves when they got
            into design. Here’s an inspiring compilation of people discussing
            their liberating sellouts, compiled by Mitch Goldstein:
          </p>
          <p className={`${sStyles.UtopianText}`}>
            <a href="https://www.are.na/mitch-goldstein/sell-out-with-me">
              Sell Out With Me
            </a>
          </p>
          <iframe
            title="Sell Out With Me"
            src="https://www.are.na/mitch-goldstein/sell-out-with-me"
          />
        </div>
      </section>
    );
  }
}

export default RenunciationSection;
