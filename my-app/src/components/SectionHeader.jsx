import { FaCrown } from "react-icons/fa";
const SectionHeader = ({ icon, title, className }) => {
  return (
    <div className={`section-head ${className}`}>
      <span>{<FaCrown />}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionHeader;
