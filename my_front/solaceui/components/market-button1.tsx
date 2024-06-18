import type { NextPage } from "next";
import styles from "./market-button1.module.css";

export type MarketButton1Type = {
  className?: string;
};

const MarketButton1: NextPage<MarketButton1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.marketButton, className].join(" ")}>
      <svg
        className={styles.vectorIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2v20M4 10l16-8M4 14l16 8" />
      </svg>
      <div className={styles.textButton}>
        <b className={styles.downloadOnThe}>Download on the</b>
        <div className={styles.appStore}>App Store</div>
      </div>
    </div>
  );
};

export default MarketButton1;
