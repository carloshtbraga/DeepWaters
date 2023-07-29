

import gif1 from "../assets/peixegif.gif";
import gif2 from "../assets/whale.gif";
import gif3 from "../assets/gif3.gif";
import gif4 from '../assets/angler.gif'
import dolhpin from '../assets/dolphin.gif'
import astro from '../assets/astro.gif'
import wave from "../assets/wave.svg";

export default function Ocean() {
  return (
    <>
    <img src={wave} alt="" className="wave" />
      <div className="ocean">

        <div className="divh1 animate__animated animate__backInUp">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={gif1} alt="" className="gif1" />
            </div>
            You decided to be a dev. You are now in the middle of the ocean.
            You are not sure if you are ready for this journey. But you are
            here. So you keep going.
          </h1>
        </div>

        <div className="divh1 animate__animated animate__backInUp">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={dolhpin} alt="" className="gif1" />
            </div>
            You are about to get into deep waters. Forget everything you know...
            things will work differently from now on.
          </h1>
        </div>
        

        <div className="divh1 animate__animated animate__backInUp">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={gif2} alt="" className="gif1" />
            </div>
            Its now cold, dark, lonely, silent and the pressure is unimaginable.
            But you are a DEV so somehow you feel confortable.
          </h1>
        </div>

        <div className="divh1 animate__animated animate__backInUp">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={gif3} alt="" className="gif3" />
            </div>
            As you go deeper, you see less creatures but they get weirder and
            weirder. You know theres no way back on this journey so you keep
            going.
          </h1>
        </div>

        <div className="divh1 animate__animated animate__backInUp">
          <h1 className="deepwaters ">
            <div className="divimg">
              <img src={gif4} alt="" className="gif4" />
            </div>
            You are now in the deepest part of the ocean. This is called Abyssal
            zone or The Abyss. There is no light. This region has actually never
            had light. It is the darkest place on Earth. This is only comparable
            to the space. You feel weak and tired. You are about to give up.
            Then you think of all the things you have learned and how much you
            have grown. You think of all the people that are depending on you.
            Also you are unreasonably enjoying the journey. So you keep going.
          </h1>
        </div>

        <div className="divh1 animate__animated animate__backInUp">
          <h1 className="deepwaters ">
            At the bottom of the ocean you hear something. You look around and
            see a light. You swim towards it. You see a lot of people there.
            They are all devs. They are all happy. And finally, they want to help you.
            Why dont you join them?{" "}

            <a href="https://www.devs4good.com.br" target="_blank" rel="noreferrer"> www.devs4good.com.br</a>
            <div className="divimg">
            <img src={astro} alt=""  className="astro"/>
            </div>
          </h1>
        </div>


      </div>
      </>
  )
}
