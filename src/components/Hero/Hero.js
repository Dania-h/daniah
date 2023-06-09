import "./Hero.scss";
import portrait from "../../assets/images/IMG_9986-small.jpg";

function Hero() {
  return (
    <article className="hero">
      <div className="hero__div">
        <h1 className="hero__name">DANIA HERNANDEZ</h1>
        <p>Welcome! I'm a full stack developer who loves being curious, creative, and detailed in everything I do.</p>
        <img
          className="hero__portrait"
          src={portrait}
          alt="portrait of Dania"
        />
      </div>
    </article>
  );
}

export default Hero;
