import type { NextPage } from "next";
import AppleIcon from '@mui/icons-material/Apple';
import styles from "./call-to-action.module.css";
import GooglePlayIcon from './GooglePlay';  

export type CallToActionType = {
  className?: string;
};

const CallToAction: NextPage<CallToActionType> = ({ className = "" }) => {
  return (
    <section className={[styles.callToAction, className].join(" ")}>
      <div className={styles.ctaSection}>
        <div className={styles.iconFrameWrapper}>
          <AppleIcon className={styles.iconFrame} />
        </div>
        <div className={styles.textParent}>
          <h1 className={styles.text}>Lets take stress off you!</h1>
          <div className={styles.textWrapper}>
            <p className={styles.text1}>
              Stay in the loop with updates from our team and community. Once a week.
            </p>
          </div>
        </div>
        <div className={styles.inputWrapper}>
          <div className={styles.input}>
            <div className={styles.textContainer}>
              <div className={styles.text2}>Enter your email</div>
            </div>
            <button className={styles.input1}>
              <div className={styles.text3}>Subscribe to our newsletter</div>
            </button>
          </div>
        </div>
        <div className={styles.downloadButtonsWrapper}>
          <div className={styles.downloadButtons}>
            <div className={styles.marketButton}>
              <AppleIcon className={styles.vectorIcon} />
              <div className={styles.textButton}>
                <b className={styles.downloadOnThe}>Download on the</b>
                <div className={styles.appStore}>App Store</div>
              </div>
            </div>
            <div className={styles.marketButton1}>
              <GooglePlayIcon className={styles.icnSvgIcnIcnLg} />
              <div className={styles.textButton1}>
                <b className={styles.downloadOnThe1}>Download on the</b>
                <div className={styles.googlePlay}>Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
