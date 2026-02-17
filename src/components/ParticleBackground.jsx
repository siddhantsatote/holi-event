import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "grab" },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            grab: { distance: 140, links: { opacity: 0.4 } },
          },
        },
        particles: {
          color: {
            value: ["#FF4500", "#FF1493", "#32CD32", "#9400D3", "#FFD700", "#00BFFF", "#FF6347", "#7B68EE"],
          },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "out" },
            random: true,
            speed: { min: 0.3, max: 1.5 },
            straight: false,
            attract: { enable: false },
          },
          number: {
            density: { enable: true, area: 800 },
            value: 60,
          },
          opacity: {
            value: { min: 0.1, max: 0.6 },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 4 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.5,
              sync: false,
            },
          },
          twinkle: {
            particles: {
              enable: false,
            },
          },
          wobble: {
            enable: false,
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  );
};

export default ParticleBackground;
