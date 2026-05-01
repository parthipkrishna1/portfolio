const skills = [
    {
        name: "Python",
        icon: "/icons/python.png",
    },
    {
        name: "React",
        icon: "/icons/react.png",
    },
    {
        name: "Three.js",
        icon: "/icons/three.png",
    },
    {
        name: "Tensorflow",
        icon: "/icons/tensorflow.png",
    },
    {
        name: "OpenCV",
        icon: "/icons/opencv.png",
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="w-full min-h-screen px-6 py-32 relative flex flex-col items-center"
        >

            {/* background glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.12),transparent_60%)]"></div>

            {/* HEADER */}
            <div className="text-center max-w-2xl">
                <p className="text-purple-400 text-sm tracking-widest uppercase">
                    What I Use
                </p>

                <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 text-transparent bg-clip-text">
                    Skills
                </h2>

                <p className="mt-6 text-white/60">
                    Technologies and tools I use to build modern, interactive experiences.
                </p>
            </div>

            <div className="mt-20 flex flex-wrap justify-center gap-8 max-w-[1200px]">

                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="group relative w-[200px] h-[220px] rounded-2xl p-[1px] transition duration-300 hover:scale-105"
                    >

                        {/* glow */}
                        <div className="absolute inset-0 bg-purple-600/20 blur-2xl rounded-2xl opacity-60 group-hover:opacity-100 transition"></div>

                        {/* glass card */}
                        <div className="relative w-full h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 flex flex-col items-center justify-center overflow-hidden">

                            {/* shine sweep */}
                            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                            {/* icon */}
                            <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-16 h-16 object-contain group-hover:scale-110 transition duration-500"
                            />

                            {/* label */}
                            <p className="mt-6 text-white/80 text-sm text-center">
                                {skill.name}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
};

export default Skills;