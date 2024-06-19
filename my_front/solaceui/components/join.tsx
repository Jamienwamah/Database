import type { NextPage } from "next";
import styles from "./join.module.css";
import Header from "./header";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div className={[styles.headerSectionWrapper, className].join(" ")}>
      <div className={styles.headerSection}>
        <div className={styles.headerSection1}>
          <Header />

          <div className={styles.heroHeadingWrapper}>
            <h1 className={styles.text}>
              Join Team Solace, Lets comfort Africa
            </h1>
            <p className={styles.text1}>
              <span
                className={styles.lookingForAn}
              >{`Looking for an opportunity to showcase your skills and bring your creativity to live? Join our global team of talented `}</span>
              <span
                className={styles.workforceTodayAnd}
              >{`workforce today and be part of the team revolutionizing the elderly care industry in Africa. `}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
