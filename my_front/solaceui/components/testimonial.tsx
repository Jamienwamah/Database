import type { NextPage } from "next";
import styles from "./testimonial.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.homepageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.sectionTagWrapperWrapper}>
          <button className={styles.sectionTagWrapper}>
            <b className={styles.text}>Testimonials</b>
          </button>
        </div>
        <div className={styles.wrapper}>
          <h1 className={styles.text1}>Don’t take our words for it</h1>
        </div>
        <div className={styles.testimonialContentWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.textParent}>
              <p className={styles.text2}>
                Solace Farewell Cover is the first of its kind in Nigeria, if
                not in the whole of Africa. Subscribing to Solace Farewell cover
                has given me peace of mind, knowing that my my father’s farewell
                expenses are covered up to ₦8 million. The most interesting part
                is that, I will receive up to ₦1,200,000 in reimbursement for
                every five subscriptions I pay if papa hasn’t joined his
                ancestors. This is simply amazing and recommendable! Thank you
                Solace for this innovative service.
              </p>
              <div className={styles.clientsInfo}>
                <div className={styles.text3}>Mrs. Amarachi Chukwuemaka</div>
                <div className={styles.text4}>Accountant/Consultant</div>
              </div>
            </div>
            <svg
              className={styles.maskGroupIcon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32" 
            >
              <image href="/mask-group-4@2x.png" width="32" height="32" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
