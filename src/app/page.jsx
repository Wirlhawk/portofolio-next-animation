"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const containerRef = useRef(null);
    const dotRef = useRef(null);
    const lenisRef = useRef(null);


    useEffect(() => {
        lenisRef.current = new Lenis({
            duration: 1.3, 
            easing: (t) => t, 
        });

        function raf(time) {
            lenisRef.current.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        const containerHeight = containerRef.current.offsetHeight;
        // Animate dot 
        gsap.to(dotRef.current, {
            y: containerHeight, 
            width: 70,
            height:70,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "20% top", 
                end: "bottom top", 
                scrub: true, 
                // markers: true
            },
        });

        return () => {
            lenisRef.current.destroy();
        };

    }, []);

    return (
        <main className="bg-white" ref={containerRef}>
            <section className="h-[150vh]">
                <div className="relative h-[100vh]">
                    <div className="flex items-center gap-2 ml-2">
                        <span className="block h-[0.5rem] w-32 bg-black" />
                        <h1 className="text-9xl">Ray</h1>
                    </div>

                    <div className="mt-16">
                        <h1 className="text-9xl font-bold">Web Developer</h1>

                        <span className="flex mt-10 items-end gap-2">
                            <h1 className="text-9xl font-bold">Student</h1>
                            <span
                                ref={dotRef}
                                className=" mix-blend-difference block h-7 w-7 bg-white z-10 rounded-full mb-5"
                            />
                        </span>
                    </div>

                    <h1 className="absolute bottom-[1rem]  font-bold leading-[0.95rem] text-2xl">
                        -projects.
                    </h1>
                    <h1 className="absolute bottom-[3px] right-[1px] font-bold leading-[0.95rem] text-2xl">
                        scroll down.
                        <br />
                        scroll down.
                        <br />
                        scroll down.
                    </h1>
                </div>
            </section>

            <section className="bg-black h-[100vh] flex justify-center items-center gap-16 relative">
                <h1 className="absolute top-[3rem] left-[0] font-bold leading-[0.95rem] text-4xl text-white">
                    -projects
                </h1>

                <h1 className="absolute bottom-[3rem] right-[0]  leading-[0.95rem] text-4xl text-white">
                    {">>>"}
                    <br />
                    {">>>"}
                    <br />
                    {">>>"}
                </h1>
                <div className="bg-white p-5 flex flex-col gap-5 mt-10">
                    <Image
                        src="https://dqpoykzl4wufkey0.public.blob.vercel-storage.com/Chat-ucXRlIYkwffeqBfrbrXLzK15f6Kd7q.png"
                        alt="opinion"
                        width={500}
                        height={300}
                    />
                    <h1 className="font-bold text-2xl ">Opinion V1</h1>
                </div>
                <div className="bg-white p-5 flex flex-col gap-5 mb-10">
                    <Image
                        src="https://dqpoykzl4wufkey0.public.blob.vercel-storage.com/OpinionX-kJctbv9OGHIg0gZ297BtVseCF6gLq7.png"
                        alt="opinion"
                        width={500}
                        height={300}
                    />
                    <h1 className="font-bold text-2xl ">Opinion X</h1>
                </div>
            </section>
        </main>
    );
}
