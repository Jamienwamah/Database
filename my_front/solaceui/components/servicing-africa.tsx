import type { NextPage } from "next";
import styles from "./servicing-africa.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section className={[styles.careerPageInner, className].join(" ")}>
      <div className={styles.gisearthEuroAfricaOParent}>
        <img
          className={styles.gisearthEuroAfricaOIcon}
          loading="lazy"
          alt=""
          src="/giseartheuroafricao.svg"
        />
        <div className={styles.servicingAfricaWrapper}>
          <div className={styles.servicingAfrica}>Servicing Africa</div>
        </div>
        <img
          className={styles.imageCollectionWrapper}
          alt=""
          src="/image-collection-wrapper@2x.png"
        />
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.circleParent}>
              <div className={styles.circle} />
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon2.svg"
              />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.featureTitleParent}>
              <div className={styles.featureTitle}>
                <div className={styles.text}>20+</div>
              </div>
              <div className={styles.text1}>Talented Global Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
