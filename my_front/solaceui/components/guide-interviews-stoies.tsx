import type { NextPage } from "next";
import EachBlogMainWrapper from "./each-blog-main-wrapper";
import styles from "./guide-interview-stories.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={[styles.blogCategoriesWrapperWrapper, className].join(" ")}
    >
      <div className={styles.blogCategoriesWrapper}>
        <div className={styles.blogCategories}>
          <div className={styles.category}>
            <div className={styles.eachCategory}>
              <div className={styles.text}>All</div>
            </div>
            <div className={styles.eachCategory1}>
              <div className={styles.text1}>Guide</div>
            </div>
            <div className={styles.eachCategory2}>
              <div className={styles.text2}>Interviews</div>
            </div>
            <div className={styles.eachCategory3}>
              <div className={styles.text3}>Stories</div>
            </div>
          </div>
        </div>
        <div className={styles.blogsCollectionMainWrapperParent}>
          <div className={styles.blogsCollectionMainWrapper}>
            <EachBlogMainWrapper
              categoryName="Guide"
              blogTitle="Why You Should Start Caring for Your Mother Now, A Must Read."
              blogDescription="When should you begin to care for your mother? The answer is simple: start now, while you're still young. No blessing offers as much comfort in life as the heartfelt prayers from a contented mother who feels loved and cherished while she is alive."
            />
            <EachBlogMainWrapper
              categoryName="Interviews"
              blogTitle="The Future of AI in Healthcare: Transforming Patient Care"
              blogDescription="Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. "
              propGap="27px"
              propMinWidth="69px"
              propHeight="unset"
              propDisplay="unset"
            />
            <EachBlogMainWrapper
              categoryName="Stories"
              blogTitle="The Future of AI in Healthcare: Transforming Patient Care"
              blogDescription="Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. "
              propGap="27px"
              propMinWidth="49px"
              propHeight="unset"
              propDisplay="unset"
            />
          </div>
          <div className={styles.blogsCollectionMainWrapper1}>
            <EachBlogMainWrapper
              categoryName="Stories"
              blogTitle="The Future of AI in Healthcare: Transforming Patient Care"
              blogDescription="Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. "
              propGap="unset"
              propMinWidth="49px"
              propHeight="unset"
              propDisplay="unset"
            />
            <EachBlogMainWrapper
              categoryName="Guide"
              blogTitle="The Future of AI in Healthcare: Transforming Patient Care"
              blogDescription="Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. "
              propGap="unset"
              propMinWidth="41px"
              propHeight="unset"
              propDisplay="unset"
            />
            <EachBlogMainWrapper
              categoryName="Interviews"
              blogTitle="The Future of AI in Healthcare: Transforming Patient Care"
              blogDescription="Explore the incredible potential of artificial intelligence (AI) in revolutionizing healthcare. Discover how AI-driven technologies are enhancing diagnostics, personalized medicine, and patient outcomes. "
              propGap="unset"
              propMinWidth="69px"
              propHeight="unset"
              propDisplay="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
