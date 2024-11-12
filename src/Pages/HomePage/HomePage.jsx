import Hero from "../../Component/Hero/Hero";
import wave from './../../assets/wave.svg'

const HomePage = () => {
  return (
    <div className="flex relative flex-col justify-center items-center min-h-[calc(100vh-132px)]">
      <Hero />
      <img src={wave} alt="" className="w-full absolute bottom-0 -z-10" />
    </div>
  );
};

export default HomePage;
