import type { NextPage } from "next";
import { useState } from "react";
import FrameComponent1 from "../components/guide-interviews-stoies";
import FrameComponent3 from "../components/enjoy-thoughts";
import NewFooter from "../components/footer";
import joinNewsletter from "../helpers/newsletter";
import styles from "./blog-page.module.css";
import FarewellPageWithForm1 from "./farewell-page-with-form1";

const BlogPage: NextPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinNewsletter(email);
  };

  return (
    <div className={styles.blogPage}>
      <FrameComponent3 />
      <FrameComponent1 />
      <FarewellPageWithForm1
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <NewFooter />
    </div>
  );
};

export default BlogPage;
