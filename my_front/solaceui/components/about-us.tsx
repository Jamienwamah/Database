import type { NextPage } from "next";
import styles from "./about-us.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.storySectionWrapper, className].join(" ")}>
      <div className={styles.storySection}>
        <div className={styles.sectionTagWrapper}>
          <a className={styles.text}>About Us</a>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.textWrapper}>
            <p className={styles.text1}>
              <span className={styles.atSolaceWe}>
                At Solace, we specialize in enabling the provision of
                top-quality elderly care services that go beyond ensuring that
                the older adults are free from illnesses or diseases. We
                leverage on our proprietary AI model to provide proactive and
                holistic care for the elderly, catering to their general
                well-being.
              </span>
              <span className={styles.blankLine}>&nbsp;</span>
              <span className={styles.solaceStartedAs}>
                Solace started as a personal project while one of the founders
                was mastering User Experience design in 2022. During the
                research phase of the healthtech project, he discovered that
                most seniors in Nigeria aged 60 years and above don’t enjoy
                their seniorhood because there is no solution that takes proper
                care of their total well-being.
              </span>
              <span className={styles.blankLine1}>&nbsp;</span>
              <span className={styles.theTwoCoFounders}>
                The two co-founders, Paul and Precious, decided to address this
                significant problem. We built Solace to provide comfort to the
                elderly through top-quality service offerings powered by
                innovative technology.
              </span>
            </p>
          </div>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group-11@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
