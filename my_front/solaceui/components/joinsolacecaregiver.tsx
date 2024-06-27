import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./joinsolacecaregiver.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  const router = useRouter();

  const onButtonClick = useCallback(() => {
    router.push("/join-caregivers-page-main-pag");
  }, [router]);

  return (
    <section className={[styles.contentWrapper, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.sectionTagWrapperWrapper}>
          <button className={styles.sectionTagWrapper}>
            <div className={styles.text}>Join The Network</div>
          </button>
        </div>
        <div className={styles.textWrapper}>
          <p className={styles.text1}>
            <span
              className={styles.doctorsNursesNutritionists}
            >{`Doctors, Nurses, Nutritionists and Therapists  `}</span>
            <span className={styles.inNigeriaBecome}>
              in Nigeria, Become Solace Caregivers.
            </span>
          </p>
        </div>
        <div className={styles.testimonialContentWrapper}>
          <div className={styles.maskGroupParent}>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group-2@2x.png"
            />
            <div className={styles.textParent}>
              <p className={styles.text2}>
                <span className={styles.areYouA}>
                  Are you a qualified Doctor, Nurse, Nutritionist or Therapist
                  in Nigeria? Join Solace Caregivers today and experience better
                  pay and greater opportunities. Our platform empowers you to
                  deliver exceptional home and remote care services to the
                  elderly.
                </span>
                <span className={styles.blankLine}>&nbsp;</span>
                <span className={styles.ourStraightforwardRegistrati}>
                  Our straightforward registration process includes thorough
                  vetting to maintain our high standards of service quality.
                  Elevate your career today by becoming a Solace Caregiver and
                  make a meaningful impact in the lives of over 40.8 million
                  elderly Nigerians.
                </span>
              </p>
              <button className={styles.button} onClick={onButtonClick}>
                <div className={styles.clickHereTo}>
                  Click Here to Become a Solace Caregiver
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
