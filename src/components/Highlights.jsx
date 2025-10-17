import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    gsap.to([".left-column", ".right-column"], {
      scrollTrigger: {
        trigger: "#highlights",
        start: isMobile ? "bottom bottom" : "top center",
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <section id="highlights">
      <h2>Il n'y a jamais eu de meilleur moment pour mettre à niveau.</h2>
      <h3>Voici ce que vous obtenez avec le nouveau MacBook Pro.</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <img src="/laptop.png" alt="Laptop" />
            <p>Exécutez des tâches exigeantes jusqu'à 9,8x plus rapidement.</p>
          </div>
          <div>
            <img src="/sun.png" alt="Sun" />
            <p>
              Un écran <br />
              Liquid Retina XDR <br />
              époustouflant.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <img src="/ai.png" alt="AI" />
            <p>
              Conçu pour <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>
          <div>
            <img src="/battery.png" alt="Battery" />
            <p>
              Jusqu'à
              <span className="green-gradient"> 14 heures d'autonomie supplémentaires </span>
              .
              <span className="text-dark-100"> (Jusqu'à 24 heures au total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Highlights;
