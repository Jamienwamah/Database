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
            <div className={styles.eachValueContent}>
              <div className={styles.gradientWrapper2}>
                <div className={styles.gradientWrapper3} />
              </div>
              <div className={styles.valueIcon}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector-2.svg"
                  />
                </div>
                <div className={styles.text}>
                  <p className={styles.solacePremium}>{`Solace Premium `}</p>
                  <p className={styles.farewellCover}>{`Farewell Cover `}</p>
                </div>
              </div>
              <p className={styles.text1}>
                Solace Farewell Cover provides funeral expense coverage for
                subscribers' loved ones in the event of their passing.
              </p>
              <b className={styles.navButton}>See Pricing</b>
            </div>
          <div className={styles.lineContainer}>
            <img className={styles.lineIcon2} alt="" src="/line-4.svg" />
          </div>
            <div className={styles.valueButton}>
              <img className={styles.lineIcon} alt="" src="/line-4.svg" />
            </div>
            <div className={styles.eachValueContent1}>
              <div className={styles.gradientWrapper4}>
                <div className={styles.gradientWrapper5} />
              </div>
              <div className={styles.valueIcon1}>
                <div className={styles.groupWrapper}>
                  <img className={styles.groupIcon} alt="" src="/group.svg" />
                </div>
                <div className={styles.text2}>
                  <p
                    className={styles.solaceHealthClub}
                  >{`Solace Health Club `}</p>
                  <p className={styles.forTheElderly}>for the Elderly</p>
                </div>
              </div>
              <p className={styles.text3}>
                Subscribe your elders to enjoy exclusive benefits and privileges
                at partner pharmacies, hospitals and laboratories Nationwide.
              </p>
              <div className={styles.iconContainer}>
                <b className={styles.navButton1}>See Pricing</b>
              </div>
              <div className={styles.bottomLeftContentWrapper} />
            </div>
            <div className={styles.lineWrapper}>
              <img className={styles.lineIcon1} alt="" src="/line-4.svg" />
            </div>
            <div className={styles.valueDetailsWrapper}>
              <div className={styles.valueDetails}>
                <div className={styles.valueIcon2}>
                  <div className={styles.frameParent}>
                    <div className={styles.vectorContainer}>
                      <img
                        className={styles.vectorIcon1}
                        alt=""
                        src="/vector-3.svg"
                      />
                    </div>
                    <div className={styles.text4}>
                      Personalized Wellness Plan for the Elderly
                    </div>
                  </div>
                  <p className={styles.text5}>
                    Enjoy personalized elderly wellness plans which include
                    doctor check-ins, exercise, diet, counseling for holistic
                    care.
                  </p>
                </div>
                <div className={styles.imageContainer}>
                  <b className={styles.navButton2}>Starting Soon</b>
                </div>
              </div>
            </div>
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
            laceAIProactive="Lace AI Proactive "
            careSolution="Care Solution"
            text={`Lace AI monitors elders' health, offers insights & facilitates communication for total well-being in real-time.`}
            navButton="Learn More"
          />
          <div className={styles.lineContainer}>
            <img className={styles.lineIcon2} alt="" src="/line-4.svg" />
          </div>
          <Value
            vector="/group.svg"
            laceAIProactive="Personal Elderly "
            careSolution="Care Services "
            text="Our qualified nurses and  caregivers offer round-the-clock companionship and personal care services."
            navButton="Starting Soon"
            propWidth="271.5px"
            propPadding="0px var(--padding-2xl) 0px var(--padding-xl)"
            propColor="#1b152b"
            propMinWidth="109px"
          />
          <div className={styles.lineFrame}>
            <img className={styles.lineIcon3} alt="" src="/line-4.svg" />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.vectorFrame}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-5.svg"
                  />
                </div>
                <div className={styles.text6}>
                  <p className={styles.teleconsultation}>Teleconsultation</p>
                  <p className={styles.services}>Services</p>
                </div>
              </div>
              <p className={styles.text7}>
                Receive high-quality video medical consultations from global
                experts across diverse medical specialties instantly.
              </p>
            </div>
            <div className={styles.navButtonWrapper}>
              <b className={styles.navButton3}>Starting Soon</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
