// import { FaLocationArrow } from "react-icons/fa6";
// import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
// import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div
      className="relative flex justify-center items-center flex-col overflow-hidden w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
      }}
    >
      {/* Overlay with borders */}
      <div className="absolute inset-0 bg-blue-900 opacity-30 border-8 border-white"></div>

      <div className="pb-20 pt-36">
        {/**
         *  UI: Spotlights
         *  Link: https://ui.aceternity.com/components/spotlight
         */}
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="blue"
          />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 bg-black bg-opacity-50 p-2 rounded">
              At SKILLED WORKS DECORS, we believe in transforming spaces inside
              and out, creating a seamless flow of beauty from your curb to your
              living room. Our expert team specializes in elevating your
              everyday life by crafting luxurious interiors that reflect your
              unique style, while simultaneously enhancing your home's exterior
              to make a lasting impression on all who approach. Whether you're
              dreaming of an outdoor oasis or a cozy, stylish retreat within,
              we're dedicated to bringing your vision to life and redefining the
              very essence of your living space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
