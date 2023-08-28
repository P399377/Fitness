import FAQs from "../../components/FAQs";

import MainHeader from "../../components/MainHeader";
import Programs from "../../components/Programs";
import Texeimonials from "../../components/Texeimonials";
import Values from "../../components/Values";
import "./home.css";
const Home = () => {
  return (
    <>
      <MainHeader />
      <Programs />
      <Values />
      <FAQs />
      <Texeimonials />
    </>
  );
};

export default Home;
