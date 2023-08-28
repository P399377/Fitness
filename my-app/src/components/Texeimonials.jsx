import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { ImQuotesLeft } from "react-icons/im";
import Card from "../UI/Card";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { testimonials } from "../data";

const Texeimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimoniaHandler = () => {
    setIndex((prev) => prev - 1);
    if (index <= 0) {
      setIndex(testimonials.length - 1);
    }
  };
  const nextTestimoniaHandler = () => {
    setIndex((prev) => prev + 1);
    if (index >= testimonials.length - 1) {
      setIndex(0);
    }
  };

  return (
    <section className="testimonials">
      <div className="container testimonials-container">
        <SectionHeader
          icon={<ImQuotesLeft />}
          title="Texeimonials"
          className="testimonials-head"
        />
        <Card className="testimonial">
          <div className="testimonial-avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <p className="testimonial-quote">{`"${quote}"`}</p>
          <h5>{name}</h5>
          <small className="testimonial-title">{job}</small>
        </Card>
        <div className="testimonials-btn--container">
          <button className="testimonials-btn" onClick={prevTestimoniaHandler}>
            <IoIosArrowDropleftCircle />
          </button>
          <button className="testimonials-btn" onClick={nextTestimoniaHandler}>
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Texeimonials;
