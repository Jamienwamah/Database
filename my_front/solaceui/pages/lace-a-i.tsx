import type { NextPage } from "next";
import NewFooter from "../components/new-footer";
import styles from "./lace-a-i-page.module.css";
import FrameComponent2 from "../components/coming-soon";
import FrameComponent1 from "../components/forms/laceaiform";
import FarewellPageWithForm1 from "./farewell-page-with-form1";
import { useState } from "react";
import joinNewsletter from "../helpers/newsletter";

const LaceAIPage: NextPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinNewsletter(email);
  };

  return (
    <div className={styles.laceAiPage}>
      <FrameComponent2 />
      <section className={styles.maskGroupWrapper}>
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group3@2x.png"
        />
      </section>
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

export default LaceAIPage;
