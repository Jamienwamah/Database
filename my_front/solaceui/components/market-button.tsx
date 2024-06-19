import type { NextPage } from "next";
import GoogleIcon from './GooglePlay';
import styles from "./market-button.module.css";

export type MarketButtonType = {
  className?: string;
};

const MarketButton: NextPage<MarketButtonType> = ({ className = "" }) => {
  return (
    <div className={[styles.marketButton, className].join(" ")}>
      <GoogleIcon className={styles.icnSvgIcnIcnLg} />
      <div className={styles.textButton}>
        <b className={styles.downloadOnThe}>Download on the</b>
        <div className={styles.googlePlay}>Google Play</div>
      </div>
    </div>
  );
};

export default MarketButton;
