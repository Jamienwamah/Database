import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./group-component1.module.css";

export type GroupComponentType = {
  className?: string;
  group48096821?: string;
  text?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propGap?: CSSProperties["gap"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];

  /** Action props */
  onText17Click?: () => void;
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  group48096821,
  text,
  propMinWidth,
  propGap,
  propFlex,
  propPadding,
  propWidth,
  propPadding1,
  onText17Click,
}) => {
  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      gap: propGap,
    };
  }, [propMinWidth, propGap]);

  const eachContactInfoWrapper1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const groupIcon1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv7Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={[styles.eachContactInfoWrapperParent, className].join(" ")}
      style={groupDiv1Style}
    >
      <div
        className={styles.eachContactInfoWrapper}
        style={eachContactInfoWrapper1Style}
      >
        <div
          className={styles.eachContactInfoWrapperInner}
          style={frameDiv6Style}
        >
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src={group48096821}
            style={groupIcon1Style}
          />
        </div>
        <div className={styles.text}>{text}</div>
        <div className={styles.textWrapper} style={frameDiv7Style}>
          <div className={styles.text1} onClick={onText17Click}>
            Register Here
          </div>
        </div>
      </div>
      <div className={styles.lineWrapper}>
        <img
          className={styles.lineIcon}
          loading="lazy"
          alt=""
          src="/line3.svg"
        />
      </div>
    </div>
  );
};

export default GroupComponent;
