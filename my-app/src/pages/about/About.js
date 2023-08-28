import Header from "../../components/Header";
import "./about.css";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi odio
        iste possimus debitis dicta veritatis sint at, eveniet quae assumenda.
      </Header>
      <section className="about-story">
        <div className="container about-container--story">
          <div className="about-section--image">
            <img src={StoryImage} alt="Our-Story Image" />
          </div>
          <div className="about-section--content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              atque quod quis perspiciatis, neque, voluptate in reiciendis
              soluta fugit veritatis totam officia provident maiores quaerat
              nihil eveniet magnam amet inventore nostrum voluptatem earum
              dolores iusto ratione quia. Nam libero unde suscipit ullam iste,
              doloremque optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              voluptatem nisi itaque nulla facilis! Deleniti cupiditate ipsam
              tempore ducimus animi sint necessitatibus autem vitae qui ipsum?
              Ex ipsam rerum aspernatur error eligendi non doloribus culpa?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ipsa consequuntur assumenda perferendis animi praesentium?
            </p>
          </div>
        </div>
      </section>
      <section className="about-Vision">
        <div className="container about-Vision--story">
          <div className="about-section--content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              atque quod quis perspiciatis, neque, voluptate in reiciendis
              soluta fugit veritatis totam officia provident maiores quaerat
              nihil eveniet magnam amet inventore nostrum voluptatem earum
              dolores iusto ratione quia. Nam libero unde suscipit ullam iste,
              doloremque optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              voluptatem nisi itaque nulla facilis! Deleniti cupiditate ipsam
              tempore ducimus animi sint necessitatibus autem vitae qui ipsum?
              Ex ipsam rerum aspernatur error eligendi non doloribus culpa?
            </p>
          </div>
          <div className="about-section--image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>
      <section className="about-mission">
        <div className="container about-mission--story">
          <div className="about-section--image">
            <img src={MissionImage} alt="Our-Mission Image" />
          </div>
          <div className="about-section--content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
              atque quod quis perspiciatis, neque, voluptate in reiciendis
              soluta fugit veritatis totam officia provident maiores quaerat
              nihil eveniet magnam amet inventore nostrum voluptatem earum
              dolores iusto ratione quia. Nam libero unde suscipit ullam iste,
              doloremque optio.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              voluptatem nisi itaque nulla facilis! Deleniti cupiditate ipsam
              tempore ducimus animi sint necessitatibus autem vitae qui ipsum?
              Ex ipsam rerum aspernatur error eligendi non doloribus culpa?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              ipsa consequuntur assumenda perferendis animi praesentium?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
