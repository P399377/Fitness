import React from "react";
import { FaCrown } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { programs } from "../data";
import Card from "../UI/Card";
import { Link } from "react-router-dom";
import { AiFillCaretRight } from "react-icons/ai";

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs-container">
        <SectionHeader title="Programs" />

        <div className="programs-wrapper">
          {programs.map(({ id, icon, title, info, path }) => {
            return (
              <Card className="programs-program" key={id}>
                <span>{<FaCrown />}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  {" "}
                  Learn More
                  <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programs;
