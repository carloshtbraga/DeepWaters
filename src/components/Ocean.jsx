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

import passador10 from "../assets/passador10.gif";


export default function Ocean() {
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
            You wanted to change your life... You are now in the middle of the
            ocean. You are not sure if you are ready for this journey. Doubts
            creep into your mind, questioning whether you are truly ready for
            this unknown path. Despite the uncertainty, something pushes you
            forward, and you choose to embrace the adventure that lies ahead.
            You keep going.
          </h1>
        </div>

        <div className="divh1 animate__animated animate__fadeIn">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={gif2} alt="" className="gif1" />
            </div>
       
            You are about to get into deep waters. Forget everything you know...
            things will work differently from now on. But maybe,thats what you
            really wanted. So you keep going.
          </h1>
        </div>

        <div className="divh1 animate__animated animate__fadeIn">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={passador9} alt="" className="gif1" />
            </div>
            The creatures you face are now bigger and stronger, yet they fall
            one by one. You look down and you notice that you cant barely see
            things anymore. You start to get really scared, when will this end?
            But you keep going.
          </h1>
        </div>


        <div className="divh1 animate__animated animate__fadeIn">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={gif3} alt="" className="gif3" />
            </div>
            Its now cold, dark, lonely, silent and the pressure is unimaginable.
            This is not a place for humans at all. Somehow you feel confortable.
            As you go deeper, you see less creatures but they get weirder and
            weirder. You know that now, theres no way back on this journey so...
            you keep going.
          </h1>
        </div>

     
        <div className="divh1 animate__animated animate__fadeIn">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={gif4} alt="" className="gif4" />
             
            </div>
            You are now in the deepest part of the ocean. This is called Abyssal
            zone or The Abyss. Darkness reigns. This region has actually never
            had light. It is the darkest place on Earth. This is only comparable
            to the space. You feel weak and tired. You are about to give up.
            Then you think of all the things you have learned and how much you
            have grown. You think of all the people that are depending on you.
            Also you are unreasonably enjoying the journey. So you keep going. 
          </h1>
        </div>
       

        <div className="divh1 animate__animated animate__fadeIn">
          <h1 className="deepwaters ">
       

            At the bottom of the ocean you hear something. You look around and
            see nothing but you feel warmth coming.It sparks hope within you and
            you swim towards it. You see a lot of people there. They are all
            devs. They are all happy and contentment, having embraced the
            challenges of the abyss. As they welcome you with open arms, you
            realize that you are not meant to face this journey alone. Why dont
            you join them?{" "}
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
