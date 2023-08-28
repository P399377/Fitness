import Card from "../UI/Card";

const Trainer = ({ image, name, job, socials }) => {
  return (
    <Card className="tariner">
      <div className="tariner-img">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className="tariner-socials">
        {socials.map(({ icon, link }, index) => {
          return (
            <a key={index} href={link}>
              {icon}
            </a>
          );
        })}
      </div>
    </Card>
  );
};

export default Trainer;
