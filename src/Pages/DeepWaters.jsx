
import Sky from "../components/Sky";
import Ocean from "../components/Ocean";
import fundo from '../assets/fundo.svg'
import '../styles/DeepWaters.css'

export default function DeepWaters() {
  return (
    <>
      <Sky />
      <Ocean />

      <img src={fundo} alt="" className="ocean-floor" />
    </>
  );
}
