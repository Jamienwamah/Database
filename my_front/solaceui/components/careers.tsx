import type { NextPage } from "next";
import EachJobWrapper from "./each-job-wrapper";
import styles from "./careers.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section className={[styles.careerPageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.sectionTagWrapperWrapper}>
              <button className={styles.sectionTagWrapper}>
                <b className={styles.text}>Careers</b>
              </button>
            </div>
            <h1 className={styles.text1}>New job opportunities</h1>
            <div className={styles.textWrapper}>
              <p className={styles.text2}>
                Browse through vacancies. internships and job postings at
                Solace.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.careersSectionBottomWrapper}>
          <EachJobWrapper
            text="Business Developers"
            fullTime="Full Time"
            solaceIsInNeedOfAResultOr="Solace is in need of a result-oriented Business Developer in Lagos, Port Harcourt and Abuja. "
          />
          <EachJobWrapper
            text="Fullstack Mobile Developer"
            fullTime="Full Time"
            solaceIsInNeedOfAResultOr="Solace is in need of an experienced Fullstack mobile developer from Nigeria, Pakistan or India. "
            propGap="20px"
            propPadding="var(--padding-xl) var(--padding-26xl) var(--padding-6xl) var(--padding-xl)"
            propWidth="863px"
          />
          <EachJobWrapper
            text="Generative AI Engineer"
            fullTime="Contract"
            solaceIsInNeedOfAResultOr="Solace is in need of an experienced Generative AI Engineer from Nigeria, Pakistan or India. "
            propGap="20px"
            propPadding="var(--padding-xl) var(--padding-26xl) var(--padding-6xl) var(--padding-xl)"
            propWidth="863px"
          />
          <EachJobWrapper
            text="Funeral Managers"
            fullTime="Full Time"
            solaceIsInNeedOfAResultOr="Solace is in need of a result-oriented Funeral Manager in Lagos, Port Harcourt and Abuja. "
            propGap="78px"
            propPadding="var(--padding-xl) var(--padding-xl) var(--padding-6xl)"
            propWidth="867px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
