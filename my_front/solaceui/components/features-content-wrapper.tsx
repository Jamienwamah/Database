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
              <svg
                className={styles.groupIcon}
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="100"
                viewBox="0 0 100 100"
              ></svg>
            </div>
            <div className={styles.text}>
              <p className={styles.holisticCareFor}>{`Holistic Care for `}</p>
              <p className={styles.theElderly}>the Elderly</p>
            </div>
          </div>
          <p
            className={styles.text1}
          >{`Beyond doctor visits, we leverage our AI solution to provide a proactive care for the 
          elderly that caters for their general well-being. `}</p>
        </div>
      </div>
      <div className={styles.featureContent}>
        <svg
          className={styles.lineIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2v20M4 10l16-8M4 14l16 8" />
        </svg>
      </div>
      <div className={styles.eachFeatureWrapper}>
        <div className={styles.backgroundBlur1}>
          <div className={styles.blurCircle1} />
        </div>
        <div className={styles.frameParent}>
          <div className={styles.vectorWrapper}>
            <svg
              className={styles.vectorIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2v20M4 10l16-8M4 14l16 8" />
            </svg>
          </div>
          <div
            className={styles.text2}
          >{`Cutting-Edge Tech Infrastructure `}</div>
        </div>
        <p
          className={styles.text3}
        >{`Because it doesn't exist, we are building the most advanced tech infrastructure that 
        will drive the provision of world-class holistic care for the elderly in Africa. `}</p>
      </div>
      <div className={styles.lineWrapper}>
        <svg
          className={styles.lineIcon1}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2v20M4 10l16-8M4 14l16 8" />
        </svg>
      </div>
      <div className={styles.backgroundBlur2}>
        <div className={styles.blurCircle2} />
      </div>
      <div className={styles.featuresContentWrapperInner}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.iconContainer}>
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2v20M4 10l16-8M4 14l16 8" />
              </svg>
            </div>
            <div className={styles.text4}>
              <p className={styles.intuitive}>{`Intuitive `}</p>
              <p className={styles.mobileApp}>Mobile App</p>
            </div>
          </div>
          <p
            className={styles.text5}
          >{`We offer the most intuitive On-demand Care Service Delivery System (OCSDS) that guarantees 
          best service quality for the elderly & their loved ones in Africa.`}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesContentWrapper;
