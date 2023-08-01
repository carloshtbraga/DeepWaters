import Flying from "./Flying";

import gif1 from "../assets/peixegif.gif";
import gif2 from "../assets/whale.gif";
import gif3 from "../assets/gif3.gif";
import gif4 from "../assets/angler.gif";

import wave from "../assets/wave.svg";

import passador9 from "../assets/passador9.gif";
import estranho2 from "../assets/estranho2.gif";
import eua from "../assets/uk.png";
import brasil from "../assets/br.png";

import vector1 from '../assets/Vectors/vector1.jpg'
import vector2 from '../assets/Vectors/vector2.png'

import vector4 from '../assets/Vectors/vector4.png'
import shark from '../assets/Vectors/shark.png'
import bvector2 from '../assets/Vectors/bvector2.webp'



import squid from "../assets/Vectors/squid.png";
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
import Flying2 from "./Flying2";
import Flying3 from "./Flying3";
import Flying4 from "./Flying4";

export default function Ocean() {
  const [en, setEn] = useState(true);

  const languageToggle = () => {
    setEn(!en);
  };

  return (
    <>
      <img src={wave} alt="" className="wave" />
      <div className="ocean">
        <Flying gif={vector1} lado="direita" />
        <Flying gif={vector2} lado="esquerda" />
        <Flying gif={vector4} lado="direita" />
        <div className="divh1 animate__animated animate__fadein">
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
        <Flying2 gif={vector1} lado="direita" />
        <Flying2 gif={vector2} lado="esquerda" />
        <Flying2 gif={vector4} lado="direita" />
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
        <Flying3 gif={shark} lado="esquerda" />
        <Flying3 gif={bvector2} lado="esquerda" />
     
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
        <Flying4 gif={squid} lado="esquerda" />
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
