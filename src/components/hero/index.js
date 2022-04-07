import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__image_wrapper">
        <Image src="/hero.png" alt="hero_image" layout="fill" objectFit="contain" />
      </div>
    </div>
  );
};

export default Hero;
