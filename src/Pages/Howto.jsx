import { Link } from "react-router-dom";
import "../styles/Howto.css";
export default function Howto() {
  return (
    <div className="start-containerh">
      <div className="login-containerh">
        <h5 className="h5h">
          Esse site foi desenvolvido para que ao navegar, você tenha uma
          experiência diferente do usual.
        </h5>
        <h5 className="h5h">
          Peço que ao começar sua jornada, role a tela para baixo lentamente e
          leia todos os textos com atenção. Vá com calma e tente após cada texto
          que passar, refletir sobre o que foi dito. Essa é a sua jornada.
        </h5>
        <h5 className="h5h">
          <a
            target="_blank"
            href="https://portf-lio-react-red.vercel.app/"
            rel="noreferrer"
          >
            By Carlos Tonini{" "}
          </a>
        </h5>
        <br />
        <br />
        <Link to="/start">
          <button type="submit" className="bh">
            Começar
          </button>
        </Link>
      </div>
    </div>
  );
}
