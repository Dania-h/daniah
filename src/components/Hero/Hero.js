import "./Hero.scss";
import portrait from "../../assets/images/IMG_9986-small.jpg";
import scroll from "../../assets/icons/scroll-down.svg";
import { HashLink } from "react-router-hash-link";

function Hero() {
  return (
    <article className="hero">
      <div className="hero__div">
        <h1 className="hero__name">DANIA HERNANDEZ</h1>
        <h3 className="hero__subheader">FULL STACK DEVELOPER</h3>
        <p className="hero__text">I'm a curious, creative, and detailed software developer from Miami. When it comes to building applications, you can find me at the intersection of logical thinking and clean design.</p>
      </div>
      <img className="hero__portrait" src={portrait} alt="portrait of Dania" />
      <HashLink smooth to="/#skills">
        <div className="hero__scroll">
          <img className="hero__scroll--arrow" src={scroll} alt="scroll down" />
        </div>
      </HashLink>
    </article>
  );
}

export default Hero;
