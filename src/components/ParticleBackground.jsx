import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "./config/particles-config";

const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
  return (
    <Particles
      className="particles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesConfig}>
    </Particles>
  )
}

export default ParticleBackground