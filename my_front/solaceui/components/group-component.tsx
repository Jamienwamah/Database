import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./group-component.module.css";

export type GroupComponentType = {
  className?: string;
  group48096821?: string;
  infoTitle?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propGap?: CSSProperties["gap"];
  propFlex?: CSSProperties["flex"];
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];

  /** Action props */
  onText16Click?: () => void;
};

const GroupComponent: NextPage<GroupComponentType> = ({
  className = "",
  group48096821,
  infoTitle,
  propMinWidth,
  propGap,
  propFlex,
  propPadding,
  propWidth,
  propPadding1,
  onText16Click,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      gap: propGap,
    };
  }, [propMinWidth, propGap]);

  const eachContactInfoWrapperStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const infoWrapperStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const groupIconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div
      className={[styles.eachContactInfoWrapperParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div
        className={styles.eachContactInfoWrapper}
        style={eachContactInfoWrapperStyle}
      >
        <div className={styles.infoWrapper} style={infoWrapperStyle}>
          <img
            className={styles.infoWrapperChild}
            loading="lazy"
            alt=""
            src={group48096821}
            style={groupIconStyle}
          />
        </div>
        <div className={styles.infoTitle}>{infoTitle}</div>
        <div className={styles.infoDetailWrapper} style={frameDiv4Style}>
          <div className={styles.infoDetail} onClick={onText16Click}>
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
