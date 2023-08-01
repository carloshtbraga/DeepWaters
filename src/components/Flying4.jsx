// src/components/Bird.js
import "../styles/Flying4.css";

const Flying4 = ({ gif, lado }) => {
  return (
    <div className="fish-container4">
      <img className={`fish4 ${lado}`} src={gif} alt="fish" />
    </div>
  );
};

export default Flying4;
