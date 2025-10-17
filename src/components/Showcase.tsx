import { useMediaQuery } from "react-responsive";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Showcase = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  useGSAP(() => {
    if (!isTablet) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#showcase",
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      timeline
        .to(".mask img", {
          transform: "scale(1.1)",
        })
        .to(".content", { opacity: 1, y: 0, ease: "power1.in" });
    }
  }, [isTablet]);

  return (
    <section id="showcase">
      <div className="media">
        <video src="/videos/game.mp4" loop muted autoPlay playsInline />
        <div className="mask">
          <img src="/mask-logo.svg" />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Puce Révolutionnaire</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Découvrez{" "}
                <span className="text-white">
                  M4, la prochaine génération de silicium Apple
                </span>
                . M4 alimente
              </p>
              <p>
                Il intègre Apple Intelligence sur iPad Pro, pour que vous puissiez écrire, créer et accomplir plus facilement. Le tout dans un design incroyablement fin, léger et puissant.
              </p>
              <p>
                Un tout nouveau moteur d'affichage offre une précision époustouflante, une fidélité des couleurs et une luminosité exceptionnelle. Et un GPU de nouvelle génération avec ray tracing accéléré par matériel apporte des graphismes de niveau console au bout de vos doigts.
              </p>
              <p className="text-primary">
                En savoir plus sur Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Jusqu'à</p>
              <h3>4x plus rapide</h3>
              <p>en performance de rendu professionnel par rapport au M2</p>
            </div>
            <div className="space-y-2">
              <p>Jusqu'à</p>
              <h3>1,5x plus rapide</h3>
              <p>en performance CPU par rapport au M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Showcase;
