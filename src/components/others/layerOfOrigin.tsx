"use client"
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

const LayerOfOrigin = () => {
    const secondCardRef = useRef<HTMLDivElement>(null);
    const isSecondCardInView = useInView(secondCardRef);

    return (
        <div className="w-full bg-white py-20 perspective-[1000px]">
            <div
                className="w-full relative h-full border-[2px] border-green-500 pt-[15dvh]"
            >
                <motion.div
                ref={secondCardRef}
                    className="mx-auto w-[80%] border-[.5px] border-opacity-70 border-black p-8 rounded-3xl bg-white shadow-lg"
                    initial={{ opacity: 0, y: 50, rotateX: 0, rotateY: 0, rotateZ: 0 }}
                    animate={isSecondCardInView ?
                        { opacity: 1, y: 0, rotateX: -40, rotateY: -30, rotateZ: -40 } :
                        { opacity: 0, y: 50, rotateX: 0, rotateY: 0, rotateZ: 0 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center"
                    }}
                >
                    <div className="md:space-y-7 lg:space-y-5 xl:space-y-12 h-[70dvh] pt-4 md:pt-6 lg:pt-8 xl:pt-10 w-[70%] mx-auto">
                        <div className="flex">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-16 w-16 text-orange-500"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    d="M12 2L4 7l8 5 8-5-8-5zM4 12l8 5 8-5M4 17l8 5 8-5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-light tracking-wide font-sweetSuckerPunch">
                                OUR GROWTH:
                            </h1>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal">
                                Expanding Horizons
                            </h2>
                        </div>

                        <p className="text-sm xl:text-lg text-black text-opacity-55 leading-relaxed mx-auto">
                            As we moved forward, UnderPin Services expanded its reach and capabilities. We embraced new technologies, refined our strategies, and built a team of passionate experts. Our commitment to helping small businesses thrive in the digital landscape only grew stronger, setting the stage for the industry-leading company we are today.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="mx-auto absolute top-[12dvh] left-[15dvh] w-[80%] border-[.5px] border-opacity-70 border-black p-8 rounded-3xl bg-white shadow-lg"
                    initial={{ opacity: 0, y: 50, rotateX: 0, rotateY: 0, rotateZ: 0 }}
                    animate={isSecondCardInView ?
                        { opacity: 1, y: 0, rotateX: -40, rotateY: -30, rotateZ: -40 } :
                        { opacity: 0, y: 50, rotateX: 0, rotateY: 0, rotateZ: 0 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center"
                    }}
                >
                    <div className="md:space-y-7 lg:space-y-5 xl:space-y-12 h-[70dvh] pt-4 md:pt-6 lg:pt-8 xl:pt-10 w-[70%] mx-auto">
                        <div className="flex">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-16 w-16 text-orange-500"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    d="M12 2L4 7l8 5 8-5-8-5zM4 12l8 5 8-5M4 17l8 5 8-5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-light tracking-wide font-sweetSuckerPunch">
                                OUR GROWTH:
                            </h1>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal">
                                Expanding Horizons
                            </h2>
                        </div>

                        <p className="text-sm xl:text-lg text-black text-opacity-55 leading-relaxed mx-auto">
                            As we moved forward, UnderPin Services expanded its reach and capabilities. We embraced new technologies, refined our strategies, and built a team of passionate experts. Our commitment to helping small businesses thrive in the digital landscape only grew stronger, setting the stage for the industry-leading company we are today.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="mx-auto absolute top-[10dvh] left-[9dvh] w-[80%] border-[.5px] border-opacity-70 border-black p-8 rounded-3xl bg-white shadow-lg"
                    initial={{ opacity: 0, y: 50, rotateX: 0, rotateY: 0, rotateZ: 0 }}
                    animate={isSecondCardInView ?
                        { opacity: 1, y: 0, rotateX: -40, rotateY: -30, rotateZ: -40 } :
                        { opacity: 0, y: 50, rotateX: 0, rotateY: 0, rotateZ: 0 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center"
                    }}
                >
                    <div className="md:space-y-7 lg:space-y-5 xl:space-y-12 h-[70dvh] pt-4 md:pt-6 lg:pt-8 xl:pt-10 w-[70%] mx-auto">
                        <div className="flex">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-16 w-16 text-orange-500"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    d="M12 2L4 7l8 5 8-5-8-5zM4 12l8 5 8-5M4 17l8 5 8-5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-light tracking-wide font-sweetSuckerPunch">
                                OUR GROWTH:
                            </h1>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal">
                                Expanding Horizons
                            </h2>
                        </div>

                        <p className="text-sm xl:text-lg text-black text-opacity-55 leading-relaxed mx-auto">
                            As we moved forward, UnderPin Services expanded its reach and capabilities. We embraced new technologies, refined our strategies, and built a team of passionate experts. Our commitment to helping small businesses thrive in the digital landscape only grew stronger, setting the stage for the industry-leading company we are today.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="mx-auto absolute top-[7.5dvh] left-[2dvh] w-[80%] border-[.5px] border-opacity-70 border-black p-8 rounded-3xl bg-white shadow-lg"
                    initial={{ opacity: 0, y: 50, rotateX: 0, rotateY: 0, rotateZ: 0 }}
                    animate={isSecondCardInView ?
                        { opacity: 1, y: 0, rotateX: -40, rotateY: -30, rotateZ: -40 } :
                        { opacity: 0, y: 50, rotateX: 0, rotateY: 0, rotateZ: 0 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center"
                    }}
                >
                    <div className="md:space-y-7 lg:space-y-5 xl:space-y-12 h-[70dvh] pt-4 md:pt-6 lg:pt-8 xl:pt-10 w-[70%] mx-auto">
                        <div className="flex">
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                className="h-16 w-16 text-orange-500"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    d="M12 2L4 7l8 5 8-5-8-5zM4 12l8 5 8-5M4 17l8 5 8-5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-9xl font-light tracking-wide font-sweetSuckerPunch">
                                OUR GROWTH:
                            </h1>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-normal">
                                Expanding Horizons
                            </h2>
                        </div>

                        <p className="text-sm xl:text-lg text-black text-opacity-55 leading-relaxed mx-auto">
                            As we moved forward, UnderPin Services expanded its reach and capabilities. We embraced new technologies, refined our strategies, and built a team of passionate experts. Our commitment to helping small businesses thrive in the digital landscape only grew stronger, setting the stage for the industry-leading company we are today.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default LayerOfOrigin
