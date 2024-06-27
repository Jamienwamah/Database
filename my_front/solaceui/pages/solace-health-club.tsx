import type { NextPage } from "next";
import { useState } from "react";
import FrameComponent2 from "../components/discover";
import FrameComponent3 from "../components/cashback";
import FrameComponent from "../components/started";
import NewFooter from "../components/footer";
import joinNewsletter from "../helpers/newsletter";
import FarewellPageWithForm1 from "./farewell-page-with-form1";
import styles from "./solace-health-club.module.css";

const SolaceHealthClub: NextPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinNewsletter(email);
  };

  return (
    <div className={styles.solaceHealthClub}>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent />
      <FarewellPageWithForm1
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <NewFooter />
    </div>
  );
};

export default SolaceHealthClub;
