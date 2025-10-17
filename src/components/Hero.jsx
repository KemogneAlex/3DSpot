import { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1 style={{ marginTop: '-20px', marginBottom: '20px' }}>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

      <button>Acheter maintenant</button>

      <p>À partir de 1359 € ou 113 €/mois pendant 12 mois</p>
    </section>
  );
};
export default Hero;
