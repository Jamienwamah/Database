import type { NextPage } from "next";
import styles from "./frequent-asked-questions.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <section
      className={[styles.frequentlyAskedQuestionsWrapper, className].join(" ")}
    >
      <div className={styles.frequentlyAskedQuestions}>
        <div className={styles.answerParent}>
          <div className={styles.answer}>
            <div className={styles.isSolaceARegisteredCompanyParent}>
              <div className={styles.isSolaceA}>
                Is Solace a registered company?
              </div>
              <img
                className={styles.heroiconsOutlineminus}
                loading="lazy"
                alt=""
                src="/heroiconsoutlineminus.svg"
              />
            </div>
          </div>
          <div className={styles.explanation}>
            <p className={styles.text}>
              <span
                className={styles.solaceIsA}
              >{`Solace is a brand name owned by Gmonie Technologies Ltd. `}</span>
              <span className={styles.theCompanyIs}>
                The company is a legally registered company recognized by the
                Corporate Affairs Commission of Nigeria. Our registration number
                is 2003597. This ensures our commitment to operating within
                legal frameworks and providing trustworthy services to our
                clients.
              </span>
            </p>
          </div>
          <div className={styles.fAQItemDivider} />
          <div className={styles.item}>
            <p className={styles.whatCanI}>
              What can I use the Solace web and mobile app for?
            </p>
            <img
              className={styles.svgIcon}
              loading="lazy"
              alt=""
              src="/svg.svg"
            />
          </div>
          <div className={styles.item1}>
            <p className={styles.whatTypeOf}>
              What type of technical expertise does Proxify offer?
            </p>
            <img className={styles.svgIcon1} alt="" src="/svg.svg" />
          </div>
          <div className={styles.item2}>
            <div className={styles.whatTypeOf1}>
              What type of technical expertise does Proxify offer?
            </div>
            <img className={styles.svgIcon2} alt="" src="/svg.svg" />
          </div>
          <div className={styles.item3}>
            <div className={styles.whatTypeOf2}>
              What type of technical expertise does Proxify offer?
            </div>
            <img className={styles.svgIcon3} alt="" src="/svg.svg" />
          </div>
          <div className={styles.item4}>
            <div className={styles.whatTypeOf3}>
              What type of technical expertise does Proxify offer?
            </div>
            <img className={styles.svgIcon4} alt="" src="/svg.svg" />
          </div>
          <div className={styles.item5}>
            <div className={styles.whatTypeOf4}>
              What type of technical expertise does Proxify offer?
            </div>
            <img className={styles.svgIcon5} alt="" src="/svg.svg" />
          </div>
          <div className={styles.item6}>
            <div className={styles.whatTypeOf5}>
              What type of technical expertise does Proxify offer?
            </div>
            <img className={styles.svgIcon6} alt="" src="/svg.svg" />
          </div>
          <div className={styles.item7}>
            <div className={styles.whatTypeOf6}>
              What type of technical expertise does Proxify offer?
            </div>
            <img className={styles.svgIcon7} alt="" src="/svg.svg" />
          </div>
          <div className={styles.item8}>
            <div className={styles.whatTypeOf7}>
              What type of technical expertise does Proxify offer?
            </div>
            <img className={styles.svgIcon8} alt="" src="/svg.svg" />
          </div>
        </div>
        <div className={styles.itemParent}>
          <div className={styles.item9}>
            <div className={styles.heading5}>
              <div className={styles.isSolaceA1}>
                Is Solace a Bank or an Insurance Company?
              </div>
              <img className={styles.svgIcon9} alt="" src="/svg.svg" />
            </div>
          </div>
          <div className={styles.item10}>
            <div className={styles.heading51}>
              <div className={styles.whereIsGmonie}>
                Where is Gmonie Technologies Ltd office located?
              </div>
              <img className={styles.svgIcon10} alt="" src="/svg.svg" />
            </div>
          </div>
          <div className={styles.item11}>
            <div className={styles.heading52}>
              <div className={styles.whatTypeOf8}>
                What type of technical expertise does Proxify offer?
              </div>
              <img className={styles.svgIcon11} alt="" src="/svg.svg" />
            </div>
          </div>
          <div className={styles.item12}>
            <div className={styles.heading53}>
              <div className={styles.whatTypeOf9}>
                What type of technical expertise does Proxify offer?
              </div>
              <img className={styles.svgIcon12} alt="" src="/svg.svg" />
            </div>
          </div>
          <div className={styles.item13}>
            <div className={styles.heading54}>
              <div className={styles.whatTypeOf10}>
                What type of technical expertise does Proxify offer?
              </div>
              <img className={styles.svgIcon13} alt="" src="/svg.svg" />
            </div>
          </div>
          <div className={styles.item14}>
            <div className={styles.heading55}>
              <div className={styles.whatTypeOf11}>
                What type of technical expertise does Proxify offer?
              </div>
              <img className={styles.svgIcon14} alt="" src="/svg.svg" />
            </div>
          </div>
          <div className={styles.item15}>
            <div className={styles.heading56}>
              <div className={styles.whatTypeOf12}>
                What type of technical expertise does Proxify offer?
              </div>
              <img className={styles.svgIcon15} alt="" src="/svg.svg" />
            </div>
          </div>
          <div className={styles.item16}>
            <div className={styles.heading57}>
              <div className={styles.whatTypeOf13}>
                What type of technical expertise does Proxify offer?
              </div>
              <img className={styles.svgIcon16} alt="" src="/svg.svg" />
            </div>
          </div>
          <div className={styles.item17}>
            <div className={styles.heading58}>
              <div className={styles.whatTypeOf14}>
                What type of technical expertise does Proxify offer?
              </div>
              <img className={styles.svgIcon17} alt="" src="/svg.svg" />
            </div>
          </div>
          <div className={styles.item18}>
            <div className={styles.heading59}>
              <div className={styles.whatTypeOf15}>
                What type of technical expertise does Proxify offer?
              </div>
              <img className={styles.svgIcon18} alt="" src="/svg.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
