import type { NextPage } from "next";
import styles from "./enjoy-thoughts.module.css";
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
            <h1 className={styles.text}>Enjoy Thought Provoking Content</h1>
            <p className={styles.text1}>
              <span
                className={styles.exploreOurCaptivating}
              >{`Explore our captivating blog filled with thought-provoking articles and inspiring content that will entertain, `}</span>
              <span className={styles.educateAndExpand}>
                educate and expand your knowledge and planning for the
                inevitable.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
