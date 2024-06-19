import type { NextPage } from "next";
import styles from "./usp.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: NextPage<FrameComponent7Type> = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.sectionTagWrapperWrapper}>
          <button className={styles.sectionTagWrapper}>
            <div className={styles.noise} />
            <b className={styles.text}>Our USP</b>
          </button>
        </div>
        <h1 className={styles.text1}>
          Discover why we are completely different from others
        </h1>
        <p className={styles.text2}>
          <span>
            Our competitive edge is hinged on our audacity to differentiate
            ourselves from others by offering exceptional services that delivers
            holistic value to our customers.
          </span>
        </p>
      </div>
    </div>
  );
};

export default FrameComponent7;
