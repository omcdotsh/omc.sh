import { useEffect, useState } from "react";
import {
  Particles as TSParticles,
  initParticlesEngine,
} from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { PARTICLES_CONFIG } from "./particles.config";
import { useAppTheme } from "@/features/theme/useAppTheme";

type ParticlesProps = {
  className?: string;
};

export const Particles = ({ className }: ParticlesProps) => {
  const [init, setInit] = useState(false);
  const { color } = useAppTheme();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <TSParticles className={className} options={PARTICLES_CONFIG(color)} />
  );
};
