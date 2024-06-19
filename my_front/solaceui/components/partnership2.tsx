import type { NextPage } from "next";
import styles from "./partnership2.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section className={[styles.homepageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.sectionTagWrapperWrapper}>
              <div className={styles.sectionTagWrapper}>
                <div className={styles.text}>Our Partners</div>
              </div>
            </div>
            <h1 className={styles.text1}>
              We partnered with the best in Africa
            </h1>
            <div className={styles.headingWrapper}>
              <p className={styles.text2}>
                To us, partnership is key. We are able to deliver exceptional
                innovative elderly care solutions by partnering with the best
                licensed services providers all over the world. We are open to
                partnering with more valuable partners from all over the world.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.bottomLogoWrapper}>
          <svg
            className={styles.paystackLogoIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <image href="/paystack-logo@2x.png" width="100%" height="100%" />
          </svg>
          <svg
            className={styles.zoloLogoIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <image href="/zolo-logo@2x.png" width="100%" height="100%" />
          </svg>
          <svg
            className={styles.ubaLogoIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <image href="/uba-logo@2x.png" width="100%" height="100%" />
          </svg>
          <svg
            className={styles.monnifyLogoIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <image href="/monnify-logo@2x.png" width="100%" height="100%" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
