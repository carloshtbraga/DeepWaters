// src/components/Bird.js
import "../styles/Flying.css";

const Flying = ({ gif, lado }) => {
  return (
    <div className="fish-container">
      <img className={`fish ${lado}`} src={gif} alt="fish" />
    </div>
  );
};

export default Flying;
