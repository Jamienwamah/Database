import type { NextPage } from "next";
import styles from "./coming-soon.module.css";
import Header from "./header";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={[styles.headerSectionWrapperWrapper, className].join(" ")}
    >
      <div className={styles.headerSectionWrapper}>
        <div className={styles.headerSection}>
          <Header />

          <div className={styles.heroHeadingWrapper}>
            <button className={styles.badge}>
              <div className={styles.badgeLayer}>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                </div>
                <div className={styles.comingSoon}>Coming Soon</div>
              </div>
            </button>
            <h1 className={styles.text}>
              Lace AI is a Revolutionary Health Intelligence System for Better
              Health Management.
            </h1>
            <p className={styles.text1}>
              <span
                className={styles.itWillIntegrate}
              >{`It will integrate wearable health sensors that monitor vital signs, utilizing proprietary AI algorithms to analyze health data, identify trends and trigger alerts for potential health issues. Lace AI would enable timely medical `}</span>
              <span className={styles.interventionsAndImprove}>
                interventions and improve chronic disease management in Africa.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
