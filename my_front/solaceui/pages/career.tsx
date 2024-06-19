import type { NextPage } from "next";
import { useState } from "react";
import FrameComponent1 from "../components/perks";
import FrameComponent from "../components/careers";
import FrameComponent2 from "../components/servicing-africa";
import FrameComponent3 from "../components/join";
import NewFooter from "../components/new-footer";
import joinNewsletter from "../helpers/newsletter";
import styles from "./career-page.module.css";
import FarewellPageWithForm1 from "./farewell-page-with-form1";

const CareerPage: NextPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinNewsletter(email);
  };

  return (
    <div className={styles.careerPage}>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
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

export default CareerPage;
