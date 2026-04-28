const About = () => {
    return (
        <section className="w-full min-h-screen flex items-center justify-center px-6 relative">

            {/* background glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_60%,rgba(139,92,246,0.12),transparent_60%)]"></div>

            <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT — PHOTO */}
                <div className="relative flex justify-center group">

                    {/* outer glow (reactive) */}
                    <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-3xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

                    {/* glass frame */}
                    <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/30 via-transparent to-blue-500/30 transition duration-500 group-hover:scale-[1.03]">

                        {/* inner container */}
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl">

                            {/* image */}
                            <img
                                src="/images/profile.png"
                                alt="Parthip Krishna"
                                className="w-full h-[420px] object-cover object-center transition duration-700 group-hover:scale-105"
                            />

                            {/* gradient overlay (depth) */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition duration-500"></div>

                            {/* subtle shine sweep */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                                <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 translate-x-0 group-hover:translate-x-[200%] transition duration-1000"></div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* RIGHT — TEXT */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        About Me
                    </h2>

                    <p className="mt-6 text-white/60 leading-relaxed">
                        I build immersive digital experiences combining modern web technologies
                        with real-time 3D and interactive design. My focus is on creating
                        interfaces that feel alive, intuitive, and visually engaging.
                    </p>

                    <p className="mt-4 text-white/60 leading-relaxed">
                        Currently exploring the intersection of AI, computer vision, and
                        interactive UI systems to build tools that are both functional
                        and visually compelling.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;