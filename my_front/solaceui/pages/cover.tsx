import type { NextPage } from "next";
import { useState } from "react";
import FrameComponent from "../components/Subscriptions";
import NewFooter from "../components/footer";
import joinNewsletter from "../helpers/newsletter";
import FarewellPageAnnualPayment from "./farewell-page-annual-payment";
import styles from "./farewell-page-quarterly-payme.module.css";
import FarewellPageWithForm1 from "./farewell-page-with-form1";

const FarewellPageQuarterlyPayme: NextPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    joinNewsletter(email);
  };

  return (
    <div className={styles.farewellPageQuarterlyPayme}>
      <FrameComponent />
      <FarewellPageAnnualPayment />
      <FarewellPageWithForm1
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <NewFooter />
    </div>
  );
};

export default FarewellPageQuarterlyPayme;
