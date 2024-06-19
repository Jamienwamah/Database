import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./each-blog-main-wrapper.module.css";

export type EachBlogMainWrapperType = {
  className?: string;
  categoryName?: string;
  blogTitle?: string;
  blogDescription?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propMinWidth?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propDisplay?: CSSProperties["display"];
};

const EachBlogMainWrapper: NextPage<EachBlogMainWrapperType> = ({
  className = "",
  categoryName,
  blogTitle,
  blogDescription,
  propGap,
  propMinWidth,
  propHeight,
  propDisplay,
}) => {
  const eachBlogMainWrapperStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const categoryNameStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const blogDescriptionStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      display: propDisplay,
    };
  }, [propHeight, propDisplay]);

  return (
    <div
      className={[styles.eachBlogMainWrapper, className].join(" ")}
      style={eachBlogMainWrapperStyle}
    >
      <div className={styles.eachBlogWrapper}>
        <div className={styles.eachBlogContent}>
          <div className={styles.wrapperBlogsFeaturedImage}>
            <svg
              className={styles.blogsFeaturedImage}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <image
                href="/blogs-featured-image@2x.png"
                width="32"
                height="32"
              />
            </svg>
          </div>
          <div className={styles.blogCategoryTagMainWrapper}>
            <div className={styles.blogCategoryTagWrapper}>
              <div className={styles.categoryName} style={categoryNameStyle}>
                {categoryName}
              </div>
            </div>
          </div>
          <div className={styles.blogFeaturedContentMainWra}>
            <div className={styles.blogTitle}>{blogTitle}</div>
            <p className={styles.blogDescription} style={blogDescriptionStyle}>
              {blogDescription}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.blogReadMore}>
        <a className={styles.readMoreButton}>Read more</a>
        <div className={styles.blogDivider} />
      </div>
    </div>
  );
};

export default EachBlogMainWrapper;
