import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import Header from "../../components/Header";
import { trainers } from "../../data";
import HeaderImage from "../../images/header_bg_5.jpg";
import Trainer from "../../components/Trainer";
import "./trainers.css";

const Trainers = () => {
  return (
    <>
      <Header title="Our Trainers" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore
        minus reiciendis corporis labore nemo quasi magnam quas voluptatibus
        illum!
      </Header>
      <section className="trainers">
        <div className="container trainers-container">
          {trainers.map(({ id, image, name, job, socials }) => {
            return (
              <Trainer
                key={id}
                image={image}
                name={name}
                job={job}
                socials={[
                  { icon: <BsInstagram />, link: socials[0] },
                  { icon: <AiOutlineTwitter />, link: socials[1] },
                  { icon: <FaFacebookF />, link: socials[2] },
                  { icon: <FaLinkedin />, link: socials[3] },
                ]}
              ></Trainer>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Trainers;
