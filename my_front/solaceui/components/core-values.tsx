import type { NextPage } from "next";
import styles from "./core-values.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.aboutUsPageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.sectionTagWrapperWrapper}>
              <button className={styles.sectionTagWrapper}>
                <b className={styles.text}>Our Values</b>
              </button>
            </div>
            <h1 className={styles.text1}>
              We are driven by strong core values
            </h1>
            <p className={styles.text2}>
              Our core values are essentially our guiding principles, the
              beliefs that inform every action we take and every decision we
              make. Below are the values in which the Solace brand is built on.
            </p>
          </div>
        </div>
        <div className={styles.valuesBottomWrappers}>
          <div className={styles.gradientWrapper}>
            <div className={styles.gradientWrapper1} />
          </div>
          <div className={styles.gradientWrapper2}>
            <div className={styles.gradientWrapper3} />
          </div>
          <div className={styles.gradientWrapper4}>
            <div className={styles.gradientWrapper5} />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.heroiconsSolidheartWrapper}>
                  <img
                    className={styles.heroiconsSolidheart}
                    loading="lazy"
                    alt=""
                    src="/heroiconssolidheart.svg"
                  />
                </div>
                <div className={styles.text3}>Empathy</div>
              </div>
              <p className={styles.text4}>
                We prioritize understanding your challenges. By seeing things
                from your perspective, we craft solutions that truly address
                your pain points.
              </p>
            </div>
            <div className={styles.lineWrapper}>
              <img
                className={styles.lineIcon}
                loading="lazy"
                alt=""
                src="/line-4.svg"
              />
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.frameParent3}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.vectorIcon}
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
                <div className={styles.text5}>Innovation</div>
              </div>
              <p className={styles.text6}>
                We spark innovation in the elderly care industry through a
                culture of creativity and constant improvement on our platform.
                There is excellence in all we do.
              </p>
            </div>
            <div className={styles.lineContainer}>
              <img className={styles.lineIcon1} alt="" src="/line-4.svg" />
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <div className={styles.vectorContainer}>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector-11.svg"
                  />
                </div>
                <div className={styles.text7}>Partnership</div>
              </div>
              <p className={styles.text8}>
                We unlock greater value for our clients by partnering on a
                global scale, empowering success across Africa. Partnership for
                better service delivery all the time.
              </p>
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
          <div className={styles.frameParent6}>
            <div className={styles.frameParent7}>
              <div className={styles.frameParent8}>
                <div className={styles.vectorFrame}>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
                <div className={styles.text9}>Customer-centric</div>
              </div>
              <p className={styles.text10}>
                {" "}
                Putting our customers is at the heart of everything we do,
                delivering exceptional experiences and exceeding their
                expectations.
              </p>
            </div>
            <div className={styles.lineFrame}>
              <img className={styles.lineIcon2} alt="" src="/line-4.svg" />
            </div>
            <div className={styles.frameParent9}>
              <div className={styles.frameParent10}>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.icon}
                    loading="lazy"
                    alt=""
                    src="/icon1.svg"
                  />
                </div>
                <div className={styles.text11}>Sustainability</div>
              </div>
              <p className={styles.text12}>
                Creating a positive impact through environmental and social
                responsibility initiatives. Together, we are building a
                sustainable future the next generation.
              </p>
            </div>
            <div className={styles.lineWrapper1}>
              <img className={styles.lineIcon3} alt="" src="/line-4.svg" />
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.frameParent12}>
                <div className={styles.vectorWrapper1}>
                  <img
                    className={styles.vectorIcon3}
                    alt=""
                    src="/vector-31.svg"
                  />
                </div>
                <div className={styles.text13}>Excellence</div>
              </div>
              <p className={styles.text14}>
                Pursuing excellence in all aspects of our work, setting high
                standards and striving for continuous growth and improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
