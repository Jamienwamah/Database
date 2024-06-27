import type { NextPage } from "next";
import styles from "./features-content-wrapper.module.css";

export type FeaturesContentWrapperType = {
  className?: string;
};

const FeaturesContentWrapper: NextPage<FeaturesContentWrapperType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.featuresContentWrapper, className].join(" ")}>
      <div className={styles.backgroundBlur}>
        <div className={styles.blurCircle} />
      </div>
      <div className={styles.iconWrapper}>
        <div className={styles.featureWrapper}>
          <div className={styles.featureItem}>
            <div className={styles.groupWrapper}>
              <img
                className={styles.groupIcon}
                loading="lazy"
                alt=""
                src="/group.svg"
              />
            </div>
            <div className={styles.text}>
              <p className={styles.holisticCareFor}>{`Holistic Care for `}</p>
              <p className={styles.theElderly}>the Elderly</p>
            </div>
          </div>
          <p
            className={styles.text1}
          >{`Beyond doctor visits, we leverage our AI solution to provide a proactive care for the elderly that caters for their general well-being. `}</p>
        </div>
      </div>
      <div className={styles.featureContent}>
        <img className={styles.lineIcon} alt="" src="/line-2.svg" />
      </div>
      <div className={styles.eachFeatureWrapper}>
        <div className={styles.backgroundBlur1}>
          <div className={styles.blurCircle1} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.vectorWrapper}>
            <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
          </div>
          <div
            className={styles.text2}
          >{`Cutting-Edge Tech Infrastructure `}</div>
        </div>
        <p
          className={styles.text3}
        >{`Because it doesn't exist, we are building the most advanced tech infrastructure that will drive the provision of world-class holistic care for the elderly in Africa. `}</p>
      </div>
      <div className={styles.lineWrapper}>
        <img className={styles.lineIcon1} alt="" src="/line-2.svg" />
      </div>
      <div className={styles.backgroundBlur2}>
        <div className={styles.blurCircle2} />
      </div>
      <div className={styles.featuresContentWrapperInner}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.iconContainer}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
            </div>
            <div className={styles.text4}>
              <p className={styles.intuitive}>{`Intuitive `}</p>
              <p className={styles.mobileApp}>Mobile App</p>
            </div>
          </div>
          <p
            className={styles.text5}
          >{`We offer the most intuitive On-demand Care Service Delivery System (OCSDS) that guarantees best service quality for the elderly & their loved ones in Africa.`}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesContentWrapper;
