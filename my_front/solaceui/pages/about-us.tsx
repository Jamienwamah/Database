import type { NextPage } from "next";
import { useState } from "react";
import FrameComponent1 from "../components/core-values";
import FrameComponent2 from "../components/about-us";
import FrameComponent3 from "../components/our-gaols";
import NewFooter from "../components/new-footer";
import styles from "./about-us-page.module.css";
import FarewellPageWithForm1 from "./farewell-page-with-form1";
import joinNewsletter from "../helpers/newsletter";

const AboutUsPage: NextPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinNewsletter(email);
  };

  return (
    <div className={styles.aboutUsPage}>
      <FrameComponent3 />
      <FrameComponent2 />
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

export default AboutUsPage;
