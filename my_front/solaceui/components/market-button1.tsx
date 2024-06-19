import type { NextPage } from "next";
import AppleIcon from '@mui/icons-material/Apple';
import styles from "./market-button1.module.css";

export type MarketButton1Type = {
  className?: string;
};

const MarketButton1: NextPage<MarketButton1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.marketButton, className].join(" ")}>
      <AppleIcon className={styles.vectorIcon} />
      <div className={styles.textButton}>
        <b className={styles.downloadOnThe}>Download on the</b>
        <div className={styles.appStore}>App Store</div>
      </div>
    </div>
  );
};

export default MarketButton1;
