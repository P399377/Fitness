import Image from "../images/values.jpg";
import SectionHeader from "./SectionHeader";

import { GiCutDiamond } from "react-icons/gi";
import { values } from "../data";
import Card from "../UI/Card";
const Values = () => {
  return (
    <section className="values">
      <div className="container values-container">
        <div className="values-left">
          <div className="values-image">
            <img src={Image} alt="values Image" />
          </div>
        </div>
        <div className="values-right">
          <SectionHeader icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa dolor
            fuga placeat omnis, iste accusantium.
          </p>
          <div className="values-wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card key={id} className="values-value">
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
