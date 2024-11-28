import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

export default function Hero() {
    const [vidSrc, setVidSrc] = useState(
        window.innerWidth < 760 ? smallHeroVideo : heroVideo
    );

    const handleVideoSrc = () =>
        setVidSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo);
    const handleDelay = () => (window.innerWidth < 760 ? 2.5 : 1.25);

    useEffect(() => {
        window.addEventListener("resize", handleVideoSrc);
        return () => window.removeEventListener("resize", handleVideoSrc);
    }, []);

    useGSAP(() => {
        gsap.to(".hero__title", {
            opacity: 1,
            y: 0,
            delay: handleDelay,
        });
        gsap.to(".hero__cta", {
            opacity: 1,
            y: -100,
            delay: handleDelay,
        });
    }, []);

    return (
        // 105px is the navbars height on desktop
        <section className="h-[calc(100vh-105px)] relative">
            <div className="h-5/6 flex flex-col items-center justify-center">
                <p className="hero__title text-center font-semibold text-3xl text-primary-gray-100 opacity-0 translate-y-2 max-md:mb-10">
                    iPhone 15 Pro
                </p>
                <div className="w-3/4 md:w-5/6">
                    <video
                        autoPlay
                        muted
                        playsInline
                        tabIndex={-1}
                        key={vidSrc}
                    >
                        <source src={vidSrc} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="hero__cta flex flex-col items-center opacity-0 translate-y-20">
                <a
                    href="#highlights"
                    className="px-5 py-2 my-5 rounded-3xl bg-primary-blue outline-none border border-transparent hover:bg-transparent hover:border hover:text-primary-blue hover:border-primary-blue focus-visible:bg-transparent focus-visible:border focus-visible:text-primary-blue focus-visible:border-primary-blue"
                >
                    Buy
                </a>
                <p className="text-xl">From $199/month or $999</p>
            </div>
        </section>
    );
}
