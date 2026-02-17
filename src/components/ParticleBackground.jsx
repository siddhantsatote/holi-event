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
            push: { quantity: 6 },
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
            speed: { min: 0.5, max: 2 },
            straight: false,
            attract: { enable: true, rotateX: 600, rotateY: 1200 },
          },
          number: {
            density: { enable: true, area: 600 },
            value: 100,
          },
          opacity: {
            value: { min: 0.2, max: 0.8 },
            animation: {
              enable: true,
              speed: 1.5,
              minimumValue: 0.15,
              sync: false,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 6 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.5,
              sync: false,
            },
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.03,
              opacity: 1,
              color: { value: "#ffffff" },
            },
          },
          wobble: {
            enable: true,
            distance: 10,
            speed: { min: -3, max: 3 },
          },
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  );
};

export default ParticleBackground;
