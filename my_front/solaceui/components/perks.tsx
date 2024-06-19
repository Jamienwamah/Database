import type { NextPage } from "next";
import EachPerk from "./each-perk";
import styles from "./perks.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.perksContentWrapper, className].join(" ")}>
      <div className={styles.perksContent}>
        <div className={styles.perksContentInner}>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group4@2x.png"
            />
            <div className={styles.perkTop}>
              <div className={styles.perkTopContentWrapper}>
                <div className={styles.sectionTagWrapperParent}>
                  <div className={styles.sectionTagWrapper}>
                    <b className={styles.text}>{`Perks `}</b>
                  </div>
                  <div className={styles.tagDescription}>
                    <h1 className={styles.text1}>
                      Perks That Go Beyond Borders
                    </h1>
                  </div>
                </div>
                <p className={styles.text2}>
                  Enjoy flexible work environments, cultural diversity, personal
                  development opportunities, travel adventures, wellness
                  benefits and competitive compensation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.perkSectionBottomWrapper}>
          <div className={styles.eachRow}>
            <EachPerk
              text="Flexible Work Environment"
              text1="Enjoy the freedom to work from anywhere in the world, whether it's the comfort of your home office or the excitement of a new city. Embrace a work-life balance that suits your needs."
            />
            <EachPerk
              text="Cultural Diversity"
              text1="Experience the richness of working with a global team. Collaborate with professionals from different backgrounds, cultures, and perspectives, fostering creativity, innovation, and personal growth."
              propPadding="var(--padding-xl) var(--padding-lgi)"
              propWidth="492px"
            />
          </div>
          <div className={styles.eachRow1}>
            <EachPerk
              text="Personal Development"
              text1="Gain access to a wide range of learning and development opportunities. From training programs to conferences, sharpen your skills and expand your knowledge to stay ahead in the ever-evolving industry."
              propPadding="var(--padding-xl) var(--padding-lgi)"
              propWidth="517px"
            />
            <EachPerk
              text="Travel Opportunities"
              text1="Embark on exciting journeys and visit different locations as part of your job. Engage in on-site collaborations, attend conferences, or simply enjoy the experience of working in diverse environments."
              propPadding="var(--padding-xl) var(--padding-lgi)"
              propWidth="492px"
            />
          </div>
          <div className={styles.eachRow2}>
            <EachPerk
              text="Wellness Benefits"
              text1="Enjoy robust HMO cover from the day of your confirmation. We ensure our staff’s health are covered by providing them with health insurance plan that ensures that we have a healthy workforce, worldwide. "
              propPadding="var(--padding-xl) var(--padding-lgi)"
              propWidth="517px"
            />
            <EachPerk
              text="Competitive Compensation"
              text1="Benefit from a competitive compensation package that recognizes your skills and contributions. Enjoy the perks of a global company that values your expertise and rewards you accordingly."
              propPadding="var(--padding-xl) var(--padding-lgi)"
              propWidth="492px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
