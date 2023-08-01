import Flying from "./Flying";

import gif1 from "../assets/peixegif.gif";
import gif2 from "../assets/whale.gif";
import gif3 from "../assets/gif3.gif";
import gif4 from "../assets/angler.gif";

import wave from "../assets/wave.svg";
import passador1 from "../assets/passador1.gif";
import passador8 from "../assets/passador8.gif";
import passador6 from "../assets/passador6.gif";
import passador7 from "../assets/passador7.gif";
import passador9 from "../assets/passador9.gif";
import estranho2 from "../assets/estranho2.gif";
import eua from "../assets/uk.png";
import brasil from "../assets/br.png";

import passador10 from "../assets/passador10.gif";
import { useState } from "react";

import {
  text1en,
  text1pt,
  text2en,
  text2pt,
  text3en,
  text3pt,
  text4en,
  text4pt,
  text5en,
  text5pt,
  text6en,
  text6pt,
} from "../Texts/Texts.jsx";

export default function Ocean() {
  const [en, setEn] = useState(true);

  const languageToggle = () => {
    setEn(!en);
  };

  return (
    <>
      <img src={wave} alt="" className="wave" />
      <div className="ocean">
        <Flying gif={passador8} lado="direita" />
        <Flying gif={passador6} lado="esquerda" />
        <Flying gif={passador10} lado="esquerda" />
        <Flying gif={passador1} lado="direita" />
        <Flying gif={passador7} lado="esquerda" />
        <div className="divh1 animate__animated animate__backInUp">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={gif1} alt="" className="gif1" />
            </div>
            <button className="buttonen" onClick={languageToggle}>
              {en ? (
                <img className="bandeira" src={brasil} alt="" />
              ) : (
                (<img className="bandeira" src={eua} alt="" />)
              )}
            </button>
            <br />
            {en ? text1en : text1pt}
          </h1>
        </div>

        <div className="divh1 animate__animated animate__fadeIn">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={gif2} alt="" className="gif1" />
            </div>

            <button className="buttonen" onClick={languageToggle}>
              {en ? (
                <img className="bandeira" src={brasil} alt="" />
              ) : (
                (<img className="bandeira" src={eua} alt="" />)
              )}
            </button>
            <br />
            {en ? text2en : text2pt}
          </h1>
        </div>

        <div className="divh1 animate__animated animate__fadeIn">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={passador9} alt="" className="gif1" />
            </div>
            <button className="buttonen" onClick={languageToggle}>
              {en ? (
                <img className="bandeira" src={brasil} alt="" />
              ) : (
                (<img className="bandeira" src={eua} alt="" />)
              )}
            </button>
            <br />
            {en ? text3en : text3pt}
          </h1>
        </div>

        <div className="divh1 animate__animated animate__fadeIn">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={gif3} alt="" className="gif3" />
            </div>
            <button className="buttonen" onClick={languageToggle}>
              {en ? (
                <img className="bandeira" src={brasil} alt="" />
              ) : (
                (<img className="bandeira" src={eua} alt="" />)
              )}
            </button>
            <br />
            {en ? text4en : text4pt}
          </h1>
        </div>

        <div className="divh1 animate__animated animate__fadeIn">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={gif4} alt="" className="gif4" />
            </div>
            <button className="buttonen" onClick={languageToggle}>
              {en ? (
                <img className="bandeira" src={brasil} alt="" />
              ) : (
                (<img className="bandeira" src={eua} alt="" />)
              )}
            </button>
            <br />
            {en ? text5en : text5pt}
          </h1>
        </div>

        <div className="divh1 animate__animated animate__fadeIn">
          <h1 className="deepwaters ">
          <button className="buttonen" onClick={languageToggle}>
              {en ? (
                <img className="bandeira" src={brasil} alt="" />
              ) : (
                (<img className="bandeira" src={eua} alt="" />)
              )}
            </button>
            <br />
            {en ? text6en : text6pt}
            <a
              href="https://www.devs4good.com.br"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              www.devs4good.com.br
            </a>

            <div className="divimg">
              <img src={estranho2} alt="" className="gif5" />
              {/* <img src={astro} alt=""  className="astro"/> */}
            </div>
          </h1>
        </div>
      </div>
    </>
  );
}
