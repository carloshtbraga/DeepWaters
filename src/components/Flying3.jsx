// src/components/Bird.js
import "../styles/Flying3.css";

const Flying3 = ({ gif, lado }) => {
  return (
    <div className="fish-container3">
      <img className={`fish3 ${lado}`} src={gif} alt="fish" />
    </div>
  );
};

export default Flying3;
