import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../../components/canvasLoader";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../../constants";
import Target from "../../components/Target";
import ReactLogo from "../../components/ReactLogo";
import Cube from "../../components/Cube";
import Rings from "../../components/Ring";
import HeroCamera from "../../components/HeroCamera";
import Button from "../../components/Button";



const HeroSections = () => {
  // Fix: Remove nested object and provide a title string
  {/*const { positionX, positionY, positionZ, rotationX, rotationY, rotationZ, scale } = useControls("Hacker Room Position", {
    positionX: { value: 2.5, min: -10, max: 10 },
    positionY: { value: 2.5, min: -10, max: 10 },
    positionZ: { value: 2.5, min: -10, max: 10 },
    rotationX: { value: 2.5, min: -10, max: 10 },
    rotationY: { value: 2.5, min: -10, max: 10 },
    rotationZ: { value: 2.5, min: -10, max: 10 },
    scale: { value: 0.5, min: 0.1, max: 2 }
  })*/}

  const isSmall=useMediaQuery({ query: "(max-width: 480px)" })
  const isMobile=useMediaQuery({ query: "(max-width: 768px)" })
  const isTablet = useMediaQuery({ query: "(min-width: 768px) and (max-width: 1024px)" })

  const sizes=calculateSizes(isSmall,isMobile,isTablet)

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
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

              {/* Pass dynamic position values to HackerRoom */}
              {/*<HackerRoom scale={scale} position={[positionX, positionY, positionZ]} rotation={[rotationX, rotationY, rotationZ]} />*/}
              <HeroCamera isMobile={isMobile} >
                <HackerRoom 
                  //scale={ismobile ? 0.07:0.1} 
                  //position={[0.5, -8, 2]} 
                  //rotation={[0, -Math.PI, 0]} 
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                  rotation={[0, -Math.PI, 0]}
                />
              </HeroCamera>
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition}/>
                <Cube position={sizes.cubePosition} />
                <Rings position={sizes.ringPosition}/>
              </group>
              <ambientLight intensity={1} />
              <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space ">
        <a href="#contact" className=" w-fit " >
          <Button text="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  );
};

export default HeroSections;
 