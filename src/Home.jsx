"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const boxRef = useRef(null);

  const top1Ref = useRef(null);
  const top2Ref = useRef(null);

  const bottom1Ref = useRef(null);
  const bottom2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    //   const carWidth = 400;
      const moveX = window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-container",
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
          pin: true,
          markers: false,
        },
      });

      // CAR
      tl.to(
        boxRef.current,
        {
          x: moveX,
          ease: "none",
          duration: 1,
        },
        0,
      );

      // TOP BOX 1
      tl.to(
        top1Ref.current,
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 0.2,
        },
        0.5,
      );

      // TOP BOX 2
      tl.to(
        top2Ref.current,
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 0.2,
        },
        0.5,
      );

      // BOTTOM BOX 1
      tl.to(
        bottom1Ref.current,
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 0.2,
        },
        0.5,
      );

      // BOTTOM BOX 2
      tl.to(
        bottom2Ref.current,
        {
          y: 0,
          opacity: 1,
          ease: "power3.out",
          duration: 0.2,
        },
        0.5,
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="relative overflow-hidden">
      {/* FIRST SECTION */}
      <section className="scroll-container relative h-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 bg-[#111]" />

        {/* CAR */}
        <div
          ref={boxRef}
          className="
    fixed
    mt-4
    left-80
    top-1/2
    z-10
    h-[160px]
    w-[550px]
    -translate-y-1/2
    overflow-hidden
  "
        >
          <img
            src="/car.png"
            alt="Car"
            className="
      absolute
      left-0
      top-0
      h-[160px]
      w-[550px]
      max-w-none
      object-contain
    "
          />
        </div>

        {/* TOP BOX 1 */}
        <div
          ref={top1Ref}
          className="
            fixed
            left-[10%]
            top-0
            z-30
            h-[150px]
            w-[250px]
            -translate-y-full
            bg-blue-500
            opacity-0

            flex justify-center items-center
            flex-col
            gap-10
          "
        >
          <h1 className="text-7xl font-bold">58%</h1>
          <h2 className="text-[16px]">Increase in pick up point use</h2>
        </div>

        {/* TOP BOX 2 */}
        <div
          ref={top2Ref}
          className="
            fixed
            right-[10%]
            top-0
            z-30
            h-[180px]
            w-[300px]
            -translate-y-full
            bg-purple-500
            opacity-0
            flex justify-center items-center
            flex-col
            gap-10
          "
        >
          <h1 className="text-7xl font-bold">27%</h1>
          <h2 className="text-[20px]">Increase in pick up point use</h2>
        </div>

        {/* BOTTOM BOX 1 */}
        <div
          ref={bottom1Ref}
          className="
            fixed
            left-[10%]
            bottom-0
            z-30
            h-[200px]
            w-[350px]
            translate-y-full
            bg-green-500
            opacity-0
            flex justify-center items-center
            flex-col
            gap-10
          "
        >
          <h1 className="text-7xl font-bold">23%</h1>
          <h2 className="text-[16px]">Decreased in customer phone calls</h2>
        </div>

        {/* BOTTOM BOX 2 */}
        <div
          ref={bottom2Ref}
          className="
            fixed
            right-[10%]
            bottom-0
            z-30
            h-[350px]
            w-[480px]
            translate-y-full
            bg-yellow-500
            opacity-0
            flex justify-center items-center
            flex-col
            gap-10
          "
        >
          <h1 className="text-7xl font-bold">40%</h1>
          <h2 className="text-2xl">Decreased in customer phone calls</h2>
        </div>

        {/* HEADING */}
        <div className="relative z-20 flex h-full items-center">
          <h1 className="mx-10 text-4xl font-serif text-white">WELCOME</h1>

          <h2 className="text-6xl font-bold text-white">ITZFIZZ</h2>
        </div>
      </section>

      {/* SECOND SECTION */}
      <section className="relative flex h-screen items-center bg-[#eee] overflow-hidden">
        {/* Left Content */}
        <div className="w-1/2 px-16">
          <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-gray-500">
            EXPERIENCE THE DIFFERENCE
          </p>

          <h1 className="text-7xl font-bold leading-[0.9] text-black">
            BUILT FOR
            <br />
            <span className="text-gray-400">THE FUTURE.</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-gray-600">
            A modern experience designed to combine performance, technology and
            simplicity into one seamless journey.
          </p>
        </div>

        {/* Right Stats */}
        <div className="absolute right-16 top-1/2 grid -translate-y-1/2 grid-cols-2 gap-12">
          <div>
            <h2 className="text-5xl font-bold text-black">95%</h2>
            <p className="mt-2 text-sm text-gray-500">Performance</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-black">24/7</h2>
            <p className="mt-2 text-sm text-gray-500">Availability</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-black">10K+</h2>
            <p className="mt-2 text-sm text-gray-500">Users</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold text-black">4.9</h2>
            <p className="mt-2 text-sm text-gray-500">User Rating</p>
          </div>
        </div>

        {/* Button — unchanged */}
        <button className="absolute right-0 bottom-40 p-10 bg-pink-300 hover:bg-pink-500 cursor-pointer">
          <h1 className="px-10 text-6xl font-semibold text-black">
            Get Started
          </h1>
        </button>

        {/* Decorative Circle */}
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full border-[60px] border-black/5" />
      </section>
    </main>
  );
}
