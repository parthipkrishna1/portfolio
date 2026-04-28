import { Canvas } from "@react-three/fiber";
import Model from "../components/Screen.jsx";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Bounds } from "@react-three/drei";
import { useState, useEffect } from "react";

const Hero = () => {

    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = -(e.clientY / window.innerHeight) * 2 + 1;

            setMouse({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);
    return (
        <section className="w-full min-h-screen flex items-center justify-center px-6 pt-28 md:pt-32">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_40%,rgba(139,92,246,0.15),transparent_50%)]"></div>
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* LEFT */}
                <div className="flex flex-col justify-center text-center md:text-left items-center md:items-start">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Hi, I am <br />
                        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
      Parthip Krishna
    </span>
                    </h1>

                    <p className="mt-6 text-white/60 max-w-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                    </p>

                    <button className="group relative mt-8 w-fit px-6 py-3 rounded-xl overflow-hidden">

                        {/* glass base */}
                        <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/20 rounded-xl"></div>

                        {/* gradient glow border */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-md"></div>

                        {/* inner content */}
                        <div className="relative flex items-center gap-2 text-white/90 group-hover:text-white transition duration-300">
                            View Works
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
                        </div>

                    </button>
                </div>

                {/* RIGHT */}
                <div className="relative flex items-center justify-center overflow-hidden">

                    {/* OUTER GLOW */}
                    <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-3xl"></div>
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.25),transparent_60%)]"></div>
                    {/* GLASS CONTAINER */}
                    <div className="relative w-full h-[500px] md:h-[550px] rounded-3xl overflow-hidden p-[1px] bg-gradient-to-br from-purple-500/30 via-transparent to-blue-500/30">
                        {/* INNER PLACEHOLDER */}

                            {/* subtle inner glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/10 pointer-events-none"></div>

                            {/* 3D container */}
                            <div className="w-full h-full flex items-center justify-center">
                                <div className="w-full h-full">
                                    <Canvas camera={{ position: [0, 0, 4.5], fov: 40 }}>

                                        <EffectComposer>
                                            <Bloom
                                                intensity={0.8}
                                                luminanceThreshold={0.5}
                                                luminanceSmoothing={0.8}
                                            />
                                        </EffectComposer>

                                        {/* Lighting */}
                                        <ambientLight intensity={0.2} />

                                        <directionalLight
                                            position={[5, 5, 5]}
                                            intensity={1.8}
                                        />

                                        <pointLight
                                            position={[0, 0, 2]}
                                            intensity={2.5}
                                            color="#8b5cf6"
                                        />

                                        <pointLight
                                            position={[-2, -1, 1]}
                                            intensity={1.2}
                                            color="#3b82f6"
                                        />

                                        <pointLight
                                            position={[0, 1.5, 2]}
                                            intensity={0.4}
                                            color="#ffffff"
                                        />

                                        <directionalLight
                                            position={[0, 5, 2]}
                                            intensity={0.6}
                                            color="#ffffff"
                                        />

                                        {/* Model */}
                                        <group position={[0, 0, 0]}>
                                            <Bounds fit clip observe margin={1.2}>
                                            <Model mouse={mouse} />
                                            </Bounds>
                                        </group>


                                    </Canvas>
                                </div>
                            </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Hero;