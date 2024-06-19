import type { NextPage } from "next";
import Content from "../components/content";
import FrameComponent from "../components/frame-component";
import FrameComponent2 from "../components/frequent-asked-question";
import Main from "../components/main";
import NewFooter from "../components/new-footer";
import styles from "./f-a-q-page.module.css";

type FarewellPageWithForm1Props = {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const FAQPage: NextPage<FarewellPageWithForm1Props> = ({
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <div className={styles.faqPage}>
      <Main />
      <Content />
      <FrameComponent2 />
      <FrameComponent
        email={email}
        setEmail={setEmail}
        handleSubmit={handleSubmit}
      />
      <NewFooter />
    </div>
  );
};

export default FAQPage;
