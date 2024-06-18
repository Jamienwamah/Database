// components/CallToAction.tsx
import type { NextPage } from "next";
import Button from "@mui/material/Button";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google"; // For Google Play icon (if needed)
import styles from "./call-to-action.module.css";

type CallToActionProps = {
  className?: string;
};

const CallToAction: NextPage<CallToActionProps> = ({ className = "" }) => {
  return (
    <section className={[styles.callToAction, className].join(" ")}>
      <div className={styles.ctaSection}>
        <div className={styles.iconFrameWrapper}>
          <svg
            className={styles.iconFrame}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 16l6-6-6-6v12z" />
          </svg>
        </div>
        <div className={styles.textParent}>
          <h1 className={styles.text}>Lets take stress off you!</h1>
          <div className={styles.textWrapper}>
            <p className={styles.text1}>
              Stay in the loop with updates from our team and community. Once a
              week.
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
            <Button
              variant="contained"
              color="primary"
              startIcon={<AppleIcon />}
              className={styles.marketButton}
            >
              Download on the App Store
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<GoogleIcon />} 
              className={styles.marketButton1}
            >
              Download on Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
