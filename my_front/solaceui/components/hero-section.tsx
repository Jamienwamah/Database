import type { NextPage } from "next";
import MarketButton1 from "./market-button1";
import MarketButton from "./market-button";
import styles from "./hero-section.module.css";

export type HeroSectionType = {
  className?: string;
};

const HeroSection: NextPage<HeroSectionType> = ({ className = "" }) => {
  return (
    <div className={[styles.heroSection, className].join(" ")}>
      <div className={styles.heroHeadingWrapper}>
        <h1 className={styles.text}>
          The older adults in your family deserve very good care and a befitting
          farewell.
        </h1>
        <p className={styles.text1}>
          <span>
            <span
              className={styles.solaceIsA}
            >{`Solace is a healthcare app for the 14.8 million older adults aged 60 and above in Nigeria. 
            Solace Health Club offers elderly members `}</span>
            <span
              className={styles.upTo25}
            >{`up to 25% cashback on medical expenses yearly. Solace Farewell Cover provides 
            subscribers with a dignified farewell for `}</span>
            <span className={styles.theirLovedOnes}>
              their loved ones in the event of their passing, offering a service
              benefit of up to ₦8 million.
            </span>
          </span>
        </p>
      </div>
      <div className={styles.downloadButtons}>
        <MarketButton1 />
        <MarketButton />
      </div>
      <svg
        className={styles.maskGroupIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <image href="/mask-group@2x.png" width="100%" height="100%" />
      </svg>

      <div className={styles.statsMainWrapper}>
        <div className={styles.statsWrapper}>
          <div className={styles.text2}>{`8K `}</div>
          <div className={styles.text3}>{`Active App Users `}</div>
        </div>
        <img
          className={styles.lineIcon}
          loading="lazy"
          alt=""
          src="/line.svg"
        />
        <div className={styles.statsWrapper1}>
          <div className={styles.text4}>{`2,425 `}</div>
          <div className={styles.text5}>{`Caregivers & Partners`}</div>
        </div>
        <img className={styles.lineIcon1} alt="" src="/line-1.svg" />
        <div className={styles.statsWrapper2}>
          <div className={styles.text6}>98%</div>
          <div className={styles.text7}>Satisfied Customers</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
