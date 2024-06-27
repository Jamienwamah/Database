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
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group-4@2x.png"
            />
          </div>
          {/* <div className={styles.frameGroup}>
            <div className={styles.textParent}>
              <p className={styles.text2}>
                I am thoroughly impressed with the value Solace Health Club
                offers. For just ₦1000 I registeredmy mother as a member. She
                now receieves cashback and VVIP treatment at partner pharmacies,
                hospitals, clinics, and laboratories nationawide. Solace Health
                Club will help me save up to ₦250k on her medical bills ths
                year, while she ejoys first-classmedical services anytime,
                anywhere. I highly recommend Solace Health CLub with confidence
              </p>
              <div className={styles.clientsInfo}>
                <div className={styles.text3}>Mr. Atenage Collins</div>
                <div className={styles.text4}>Founder/CEO Aco Multimedia</div>
              </div>
            </div>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group-4@2x.png"
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.textParent}>
              <p className={styles.text2}>
                Paul's passion fr creating inovative solutions to improve  the
                well being of older adults in Africa is truly inspirin.  I can
                testify to his ability to innovate when he served under my 
                supervision at Tochstone Ltd between 2010 to 2012. His ability
                to  think without-the-box and execute on his ideas sets him
                apart as a  leader. I have n doubt that Solace will continue
                to achieve great  success under his leadership and i highly
                recommend partnering with  Solace now at the ealy stage of
                their growth
              </p>
              <div className={styles.clientsInfo}>
                <div className={styles.text3}>Pastor Tunde Ojo</div>
                <div className={styles.text4}>CEO. Touchstone Limited</div>
              </div>
            </div>
            <img
              className={styles.maskGroupIcon}
              alt=""
              src="/mask-group-4@2x.png"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;

