import type { NextPage } from "next";
import Value from "./value";
import styles from "./subscribe.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={[styles.valuesBottomWrappersWrapper, className].join(" ")}
    >
      <div className={styles.valuesBottomWrappers}>
        <div className={styles.gradientWrapper}>
          <div className={styles.gradientWrapper1} />
        </div>
        <div className={styles.valueItemWrapper}>
          <div className={styles.valueItem}>
            <Value
              vector="/vector-2.svg"
              laceAIProactive="Solace Premium"
              careSolution="Farewell Cover"
              text="Solace Farewell Cover provides funeral expense coverage for subscribers' loved ones in the event of their passing."
              navButton="See Pricing"
            />
            <div className={styles.valueButton}>
              <svg
                className={styles.lineIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <use href="/line-4.svg#Layer_1" />
              </svg>
              <svg
                className={styles.lineIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <use href="/line-4.svg#Layer_1" />
              </svg>
            </div>
            <Value
              vector="/group.svg"
              laceAIProactive="Solace Health Club"
              careSolution="for the Elderly"
              text="Subscribe your elders to enjoy exclusive benefits and privileges at partner pharmacies, hospitals and laboratories Nationwide."
              navButton="See Pricing"
            />
            <div className={styles.lineWrapper}>
              <svg
                className={styles.lineIcon1}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <use href="/line-4.svg#Layer_1" />
              </svg>
            </div>
            <Value
              vector="/vector-3.svg"
              laceAIProactive="Personalized Wellness Plan"
              careSolution="for the Elderly"
              text="Enjoy personalized elderly wellness plans which include doctor check-ins, exercise, diet, counseling for holistic care."
              navButton="Starting Soon"
            />
          </div>
        </div>
        <div className={styles.gradientWrapper6}>
          <div className={styles.gradientWrapper7} />
        </div>
        <div className={styles.gradientWrapper8}>
          <div className={styles.gradientWrapper9} />
        </div>
        <div className={styles.gradientWrapper10}>
          <div className={styles.gradientWrapper11} />
        </div>
        <div className={styles.valueItem1}>
          <Value
            vector="/vector-1.svg"
            laceAIProactive="Lace AI Proactive"
            careSolution="Care Solution"
            text="Lace AI monitors elders' health, offers insights & facilitates communication for total well-being in real-time."
            navButton="Learn More"
          />
          <div className={styles.lineContainer}>
            <svg
              className={styles.lineIcon2}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <use href="/line-4.svg#Layer_1" />
            </svg>
          </div>
          <Value
            vector="/group.svg"
            laceAIProactive="Personal Elderly"
            careSolution="Care Services"
            text="Our qualified nurses and caregivers offer round-the-clock companionship and personal care services."
            navButton="Starting Soon"
            propWidth="271.5px"
            propPadding="0px var(--padding-2xl) 0px var(--padding-xl)"
            propColor="#1b152b"
            propMinWidth="109px"
          />
          <div className={styles.lineFrame}>
            <svg
              className={styles.lineIcon3}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <use href="/line-4.svg#Layer_1" />
            </svg>
          </div>
          <Value
            vector="/vector-5.svg"
            laceAIProactive="Teleconsultation"
            careSolution="Services"
            text="Receive high-quality video medical consultations from global experts across diverse medical specialties instantly."
            navButton="Starting Soon"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
