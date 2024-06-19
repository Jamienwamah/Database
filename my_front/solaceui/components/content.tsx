import type { NextPage } from "next";
import styles from "./content.module.css";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <section className={[styles.content, className].join(" ")}>
      <div className={styles.headingWrapperParent}>
        <div className={styles.headingWrapper}>
          <div className={styles.sectionTagWrapper}>
            <div className={styles.heading}>Frequently Asked Questions</div>
          </div>
        </div>
        <h1 className={styles.text}>Answers to some of your questions</h1>
        <div className={styles.paragraph}>
          <p className={styles.text1}>
            <span>Didn’t find the answers you were looking for? Contact us at </span>
            <span className={styles.supportsolacecomng}>
              support@solace.com.ng
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
