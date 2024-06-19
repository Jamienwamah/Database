import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import styles from "./farewell-page-with-form1.module.css";

type FarewellPageWithForm1Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const FarewellPageWithForm1: NextPage<FarewellPageWithForm1Props> = ({
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <div className={styles.farewellPageWithForm2}>
      <FrameComponent
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default FarewellPageWithForm1;
