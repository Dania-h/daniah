import "./Hero.scss";
import portrait from "../../assets/images/IMG_9986-bw.png";
import scroll from "../../assets/icons/scroll-down.svg";

function Hero() {
  return (
    <article className="hero">
      <div className="hero__div">
        <h1 className="hero__name">DANIA HERNANDEZ</h1>
        <h2 className="hero__subheader">FULL STACK SOFTWARE ENGINEER</h2>
        <p className="hero__text">Curious, creative, detailed</p>
      </div>
      <img className="hero__portrait" src={portrait} alt="portrait of Dania" />
      <div className="hero__scroll">
        <img className="hero__scroll--arrow" src={scroll} alt="scroll down" />
      </div>
    </article>
  );
}

export default Hero;
