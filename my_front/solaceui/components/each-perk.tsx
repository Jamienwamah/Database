import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./each-perk.module.css";

export type EachPerkType = {
  className?: string;
  text?: string;
  text1?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
};

const EachPerk: NextPage<EachPerkType> = ({
  className = "",
  text,
  text1,
  propPadding,
  propWidth,
}) => {
  const eachPerkStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const text1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={[styles.eachPerk, className].join(" ")}
      style={eachPerkStyle}
    >
      <div className={styles.question}>
        <div className={styles.text}>{text}</div>
      </div>
      <svg
        className={styles.lineIcon}
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <line x1="0" y1="50" x2="100" y2="50" stroke="black" />
      </svg>

      <p className={styles.text1} style={text1Style}>
        {text1}
      </p>
    </div>
  );
};

export default EachPerk;
