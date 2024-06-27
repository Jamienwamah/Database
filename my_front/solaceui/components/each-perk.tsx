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
      <img className={styles.lineIcon} loading="lazy" alt="" src="/line2.svg" />
      <p className={styles.text1} style={text1Style}>
        {text1}
      </p>
    </div>
  );
};

export default EachPerk;
