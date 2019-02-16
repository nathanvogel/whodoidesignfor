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
      .addIndicators({ name: "video webcom" })
      .addTo(window.controller)
      .on("progress", event => {
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
      .addIndicators({ name: "video webcom" })
      .addTo(window.controller)
      .on("progress", event => {
        const duration = this.ref_video_people.current.duration;
        if (!duration) return;
        this.ref_video_people.current.currentTime = event.progress * duration;
      });
  }

  render() {
    return (
      <section ref={this.ref_pin_container}>
        <div className={styles.RomantisationSection} ref={this.ref_pin_content}>
          <div className={styles.Padder}>
            <div className={styles.Text}>
              I don’t want trendy brutalist side projects.
              <br />I want brutal design on https://www.web.com
            </div>

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
        </div>
      </section>
    );
  }
}

export default RomantisationSection;
