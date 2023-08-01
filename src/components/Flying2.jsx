// src/components/Bird.js
import "../styles/Flying2.css";

const Flying2 = ({ gif, lado }) => {
  return (
    <div className="fish-container2">
      <img className={`fish2 ${lado}`} src={gif} alt="fish" />
    </div>
  );
};

export default Flying2;
