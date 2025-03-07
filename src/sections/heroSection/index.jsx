import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../../components/canvasLoader";
import { useControls } from "leva";

const HeroSection = () => {
  // Fix: Remove nested object and provide a title string
  const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ, scale } = useControls("Hacker Room Position", {
    positionX: { value: 2.5, min: -10, max: 10 },
    positionY: { value: 2.5, min: -10, max: 10 },
    positionZ: { value: 2.5, min: -10, max: 10 },
    rotationX: { value: 2.5, min: -10, max: 10 },
    rotationY: { value: 2.5, min: -10, max: 10 },
    rotationZ: { value: 2.5, min: -10, max: 10 },
    scale: { value: 0.5, min: 0.1, max: 2 }
  });

  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Utkarsh <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>  

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

              {/* Pass dynamic position values to HackerRoom */}
              <HackerRoom scale={scale} position={[positionX, positionY, positionZ]} rotation={[rotationX, rotationY, rotationZ]} />
              <ambientLight intensity={1} />
              <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default HeroSection;
