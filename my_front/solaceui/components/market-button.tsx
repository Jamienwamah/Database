import type { NextPage } from "next";
import styles from "./market-button.module.css";

export type MarketButtonType = {
  className?: string;
};

const MarketButton: NextPage<MarketButtonType> = ({ className = "" }) => {
  return (
    <div className={[styles.marketButton, className].join(" ")}>
      <svg
        className={styles.icnSvgIcnIcnLg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 2v20M4 10l16-8M4 14l16 8" />
      </svg>
      <div className={styles.textButton}>
        <b className={styles.downloadOnThe}>Download on the</b>
        <div className={styles.googlePlay}>Google Play</div>
      </div>
    </div>
  );
};

export default MarketButton;
