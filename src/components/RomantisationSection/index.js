/* eslint-disable jsx-a11y/media-has-caption */

import React from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax, Linear } from "gsap";
import "animation.gsap";
import "debug.addIndicators";
import styles from "./styles.scss";
import sStyles from "../../shared-styles/styles.scss";
import { linkSceneToOffset } from "../../utils/SceneResponsiveness";

class RomantisationSection extends React.Component {
  constructor() {
    super();
    this.ref_pin_container = React.createRef();
    this.ref_pin_content = React.createRef();

    this.ref_video_webcom = React.createRef();
    this.ref_video_strikethrough = React.createRef();
    this.ref_video_people = React.createRef();
  }

  componentDidMount() {
    new ScrollMagic.Scene({
      triggerElement: this.ref_video_webcom.current,
      triggerHook: 0.5,
      duration: "40%",
    })
      // .addIndicators({ name: "video webcom" })
      .addTo(window.controller)
      .on("progress", event => {
        if (!this.ref_video_webcom.current) return;
        const duration = this.ref_video_webcom.current.duration;
        if (!duration) {
          // Video has not loaded yet.
          return;
        }
        this.ref_video_webcom.current.currentTime = event.progress * duration;
      });

    new ScrollMagic.Scene({
      triggerElement: this.ref_video_strikethrough.current,
      triggerHook: 0.5,
      duration: 222,
    })
      // .addIndicators({ name: "video webcom" })
      .addTo(window.controller)
      .on("progress", event => {
        if (!this.ref_video_strikethrough.current) return;
        const duration = this.ref_video_strikethrough.current.duration;
        if (!duration) return;
        this.ref_video_strikethrough.current.currentTime =
          event.progress * duration;
      });

    new ScrollMagic.Scene({
      triggerElement: this.ref_video_people.current,
      triggerHook: 0.5,
      duration: "30%",
    })
      // .addIndicators({ name: "video webcom" })
      .addTo(window.controller)
      .on("progress", event => {
        if (!this.ref_video_people.current) return;
        const duration = this.ref_video_people.current.duration;
        if (!duration) return;
        this.ref_video_people.current.currentTime = event.progress * duration;
      });
  }

  render() {
    return (
      <section ref={this.ref_pin_container}>
        <div className={styles.RomantisationSection} ref={this.ref_pin_content}>
          <div className={sStyles.Padder}>
            <p>
              I don’t want trendy brutalist side projects.
              <br />I want brutal design on https://www.web.com
            </p>

            <video
              id="video"
              className={styles.WebComVideo}
              muted
              autoPlay={false}
              autostart={0}
              ref={this.ref_video_webcom}
            >
              <source src="vids/web-com-intervention.mp4" type="video/mp4" />
              Sorry, your browser does not support embedded videos.
            </video>

            <video
              id="video"
              className={styles.PaintStrikethroughVideo}
              muted
              autoPlay={false}
              autostart={0}
              ref={this.ref_video_strikethrough}
            >
              <source src="vids/paint-strikethrough.mp4" type="video/mp4" />
              Sorry, your browser does not support embedded videos.
            </video>

            <video
              id="video"
              className={styles.PaintPeopleVideo}
              muted
              autoPlay={false}
              autostart={0}
              ref={this.ref_video_people}
            >
              <source src="vids/paint-people.mp4" type="video/mp4" />
              Sorry, your browser does not support embedded videos.
            </video>
          </div>
          <div className={sStyles.LeftBigColumnPadder}>
            <p className={styles.Quote}>
              “Getting wild with digital design in 2018 means getting wild in
              2018 with responsive design that’s agnostic to the kind of device
              you’re rocking. That’s doable, probably, but it’s really, really
              hard.”
            </p>
            <p className={styles.QuoteSignature}>
              - Tim Carmody,{" "}
              <a href="https://kottke.org/18/01/foreclosing-on-the-future-of-the-book">
                Jan 12, 2018 on kottke.org
              </a>
            </p>
            <p className={styles.AndWith}>
              And it means getting wild with accessibility.
              <br /> And with performances.
              <br /> And with engineering costs.
              <br /> And with GDPR.
              <br /> And with business goals.
            </p>
            <p className={sStyles.UtopianText}>And I’ll fucking go wild.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default RomantisationSection;
