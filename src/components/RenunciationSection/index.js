/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-array-index-key */

import React from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax, TimelineLite, Power3 } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import { debounce } from "lodash";
import styles from "./styles.scss";
import sStyles from "../../shared-styles/styles.scss";
import variables from "../../shared-styles/variables.scss";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";

const lines = [
  "I design for users.",
  "I design for my company.",
  "I design for my client.",
  "I design for my own pleasure.",
  "I design for my creative freedom.",
  "I design for my ego.",
  "I design for dribbble rebounds.",
  "I design for instagram likes.",
  "I design for money.",
  "I design for numbers.",
  "I design for humans.",
  "I design for life-critical operations.",
  "I design for reputation.",
  "I design for non-profits.",
  "I design for defense contractors.",
  "I design for open-source.",
  "I design for HR.",
  "I design for art. ",
];

class RenunciationSection extends React.Component {
  constructor() {
    super();
    this.ref_section = React.createRef();
    this.refs_lines = [];
    for (let i = 0; i < lines.length; i += 1) {
      this.refs_lines.push(React.createRef());
    }
    this.refs_imgs = [];
    for (let i = 0; i < 3; i += 1) {
      this.refs_imgs.push(React.createRef());
    }

    this.scenesIn = [];
    this.scenesOut = [];
  }

  getLineHeight() {
    // Hard code offset values, because the browser takes some time to
    // render it correctly, so on didMount we don't know yet the final size
    // of the lines.
    const breakPoint = parseInt(variables.breakpointHandeld, 10);
    const smallDevice = window.innerWidth < breakPoint;
    return smallDevice ? 30 : 45;
  }

  componentDidMount() {
    const lineHeight = this.getLineHeight();

    // Fade in-out all lines
    for (let i = 0; i < this.refs_lines.length; i += 1) {
      const line = this.refs_lines[i].current;
      // const lineHeight = line.getBoundingClientRect().height;

      const sceneIn = new ScrollMagic.Scene({
        triggerElement: line,
        triggerHook: 0.5,
        // reverse: i !== 0, // The first one should stay when going back up.
      })
        .on("start", e => {
          if (e.scrollDirection === "PAUSED") return;
          TweenMax.to(line, 0.25, {
            opacity: e.scrollDirection === "FORWARD" ? 1 : 0,
          });
        })
        // .addIndicators({ name: `fadein ${i}` })
        .addTo(window.controller);
      this.scenesIn.push(sceneIn);

      const sceneOut = new ScrollMagic.Scene({
        triggerElement: line,
        triggerHook: 0.5,
        offset: lineHeight,
      })
        .on("start", e => {
          if (e.scrollDirection === "PAUSED") return;
          TweenMax.to(line, 0.7, {
            // y: e.scrollDirection === "FORWARD" ? -100 : 0,
            opacity: e.scrollDirection === "FORWARD" ? 0 : 1,
          });
        })
        // .addIndicators({ name: `fadeout ${i}`, indent: 150 })
        .addTo(window.controller);
      this.scenesOut.push(sceneOut);
    }

    // Make the scene offsets "responsive".
    window.addEventListener(
      "resize",
      debounce(_event => {
        const h = this.getLineHeight();
        for (let i = 0; i < this.scenesOut.length; i += 1) {
          this.scenesOut[i].offset(h);
        }
      }, 120)
    );

    // Fade in out the images.
    for (let i = 0; i < this.refs_imgs.length; i += 1) {
      const img = this.refs_imgs[i].current;
      // const tl = new TimelineLite();
      //
      // tl.fromTo(
      //   img,
      //   0.5,
      //   { opacity: 0.7 },
      //   { opacity: 1, ease: Power3.easeIn }
      // );
      // tl.to(img, 0.5, { opacity: 0.7, ease: Power3.easeOut });
      new ScrollMagic.Scene({
        triggerElement: img,
        triggerHook: 0.5,
        duration: 120,
      })
        .setTween(
          TweenMax.fromTo(
            img,
            1,
            { opacity: 0.7 },
            { opacity: 1, ease: Power3.easeIn }
          )
        )
        .addIndicators()
        .addTo(window.controller);
    }
  }

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
          <div className={styles.LineGroup}>
            {lines.map((line, index) => (
              <p
                key={`line-${index}`}
                ref={this.refs_lines[index]}
                className={`${sStyles.UtopianText}`}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
        <div className={sStyles.RightBigColumnPadder}>
          <p className={`${sStyles.UtopianText}`}>
            Fortunately, I see hope. Some designers are willingly selling out
            and to me, that means freedom. Because selling out means finally
            deconstructing the narrative they built for themselves when they got
            into design. Here’s an inspiring compilation of people discussing
            their liberating sellouts, compiled by Mitch Goldstein on Are.na:
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
          <p className={`${sStyles.UtopianText}`}>
            I hereby ask every designer of the digital era to earnestly ask
            themselves questions. Who am I designing for? Which numbers am I
            optimizing for? Which metrics are being tracked? Does it actually
            correspond the vision I have of my values?
          </p>
          <div className={styles.ImageGroup}>
            <img
              className={styles.CommentImage}
              ref={this.refs_imgs[0]}
              src="imgs/did-not-respond-amazon.png"
              alt="Amazon did not respond to a request for comment."
            />
            <img
              className={styles.CommentImage}
              ref={this.refs_imgs[1]}
              src="imgs/did-not-respond-google.png"
              alt="Google did not respond to a request for comment."
            />
            <img
              className={styles.CommentImage}
              ref={this.refs_imgs[2]}
              src="imgs/did-not-respond-facebook.png"
              alt="Facebook did not respond to a request for comment."
            />
          </div>
        </div>
        <div className={sStyles.LeftBigColumnPadder}>
          <p className={`${sStyles.UtopianText}`}>
            This is not a plea for action.
            <br /> This is a plea for honesty with oneself.
            <br />
            <br /> I’m just as guilty as any guilty designer.
            <br /> We simply need to know it.
          </p>
        </div>
      </section>
    );
  }
}

export default RenunciationSection;
