import type { NextPage } from "next";
import styles from "./guide.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={[styles.blogOverviewSectionWrapper, className].join(" ")}
    >
      <div className={styles.blogOverviewSection}>
        <div className={styles.blogContentOverviewWrapperWrapper}>
          <div className={styles.blogContentOverviewWrapper}>
            <div className={styles.blogHeadingWrapper}>
              <div className={styles.blogTagsMainWrapper}>
                <div className={styles.blogTagsWrapper}>
                  <b className={styles.text}>Guide</b>
                </div>
                <div className={styles.text1}>Apr 10, 2024</div>
              </div>
              <div className={styles.blogHeadingWrapper1}>
                <h1 className={styles.whyYouShould}>
                  Why You Should Start Caring for Your Mother Now, A Must Read.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.blogFeaturedImageWrapper}
          loading="lazy"
          alt=""
          src="/blog-featured-image-wrapper@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent4;
