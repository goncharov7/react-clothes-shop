import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Індивідуальність<br />
              Якість<br /> 
              Комфорт
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Відкрийте нові горизонти стилю та відчуйте вищий рівень комфорту</span>
            <span>з нашим верхнім одягом найкращої якості</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <span className="secondaryText">Магазин верхнього одягу</span>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8950} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Виготовлених Товарів</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Відгуків</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={11} /> <span>+</span>
              </span>
              <span className="secondaryText">Років На Ринку</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./ex2.jpg" alt="clothes" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
