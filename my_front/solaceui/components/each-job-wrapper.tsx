import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./each-job-wrapper.module.css";

export type EachJobWrapperType = {
  className?: string;
  text?: string;
  fullTime?: string;
  solaceIsInNeedOfAResultOr?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const EachJobWrapper: NextPage<EachJobWrapperType> = ({
  className = "",
  text,
  fullTime,
  solaceIsInNeedOfAResultOr,
  propGap,
  propPadding,
  propWidth,
}) => {
  const eachJobWrapperStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      padding: propPadding,
    };
  }, [propGap, propPadding]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.eachJobWrapper, className].join(" ")}
      style={eachJobWrapperStyle}
    >
      <div className={styles.textParent} style={frameDiv1Style}>
        <div className={styles.text}>{text}</div>
        <div className={styles.text1}>
          <span>{fullTime}</span>
          <span className={styles.span}>{` - `}</span>
          <span className={styles.remote}>Remote</span>
        </div>
        <p className={styles.text2}>
          <span>{solaceIsInNeedOfAResultOr}</span>
          <span className={styles.readMore}>Read more.</span>
        </p>
      </div>
      <div className={styles.iconWrapperWrapper}>
        <svg
          className={styles.iconWrapper}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <use href="/icon-wrapper.svg#Layer_1" />
        </svg>
      </div>
    </div>
  );
};

export default EachJobWrapper;
