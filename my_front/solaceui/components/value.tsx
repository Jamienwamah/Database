import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./value.module.css";

export type ValueType = {
  className?: string;
  vector?: string;
  laceAIProactive?: string;
  careSolution?: string;
  text?: string;
  navButton?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Value: NextPage<ValueType> = ({
  className = "",
  vector,
  laceAIProactive,
  careSolution,
  text,
  navButton,
  propWidth,
  propPadding,
  propColor,
  propMinWidth,
}) => {
  const valueStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const valueItemStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const navButtonStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={[styles.value, className].join(" ")} style={valueStyle}>
      <div className={styles.divider}>
        <div className={styles.valueItem} style={valueItemStyle}>
          <img className={styles.vectorIcon} alt="" src={vector} />
        </div>
        <div className={styles.text} style={textStyle}>
          <p className={styles.laceAiProactive}>{laceAIProactive}</p>
          <p className={styles.careSolution}>{careSolution}</p>
        </div>
      </div>
      <p className={styles.text1}>{text}</p>
      <div className={styles.valueIcon}>
        <b className={styles.navButton} style={navButtonStyle}>
          {navButton}
        </b>
      </div>
    </div>
  );
};

export default Value;
