"use client"
import Image from "next/image";
import banner from "/public/homepage-banner.png";
import { motion } from "framer-motion";

interface Style {
    header: string,
    title: string,
    description: string
}

const styles: Style = {
    header: "font-extrabold uppercase text-4xl md:text-7xl",
    title: "font-bold text-4xl",
    description: "font-satoshi opacity-60"
}

function LandingScreen() {
    return (
        <section className="landingScreen py-10 px-5 md:p-20">
            <section className="container mx-auto grid grid-col-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                <article className="flex flex-col gap-2 md:gap-10">
                    <motion.h1 className={styles.header} >Find Clothes That Matches Your Style</motion.h1>
                    <p className="font-satoshi  opacity-60">Browse through our diverse range of melticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <a className="bg-black w-full md:w-52 lg:w-52 xl:w-52 2xl:w-52 p-3 rounded-full text-center text-white">Shop Now</a>
                    <article className="grid grid-cols-2 justify-center gap-4 md:flex lg:flex xl:flex 2xl:flex md:justify-start lg:justify-start xl:justify-start 2xl:justify-start">
                        <div className="flex justify-center flex-col items-center">
                            <h3 className={styles.title}>200+</h3>
                            <p className={styles.description}>International Brands</p>
                        </div>
                        <div className="flex justify-center flex-col items-center">
                            <h3 className={styles.title}>2,000+</h3>
                            <p className={styles.description}>High-Quality Products</p>
                        </div>
                        <div className="col-span-2 justify-center items-center flex flex-col">
                            <h3 className={styles.title}>30,000+</h3>
                            <p className={styles.description}>Happy Customers</p>
                        </div>
                    </article>
                </article>
                <article className="graphics">
                    <div>
                        <svg width="104" height="104" viewBox="0 0 104 104" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.000565624 51.7439C27.9639 50.1162 50.3531 27.9468 52.256 0.000633812C53.8837 27.9642 76.0531 50.353 103.999 52.2561C76.0358 53.8837 53.6469 76.0534 51.7439 103.999C50.1163 76.036 27.9465 53.6469 0.000565624 51.7439Z" fill="black" />
                        </svg>
                    </div>
                    <div className="flex justify-center relative">
                        <Image src={banner} alt="home page banner" fill={false} className="object-cover overflow-hidden" />
                    </div>
                    <div>
                        <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
                            <path d="M28 0C28.9506 15.0527 40.9472 27.0495 56 28C40.9472 28.9506 28.9506 40.9472 28 56C27.0495 40.9472 15.0527 28.9506 0 28C15.0527 27.0495 27.0495 15.0527 28 0Z" fill="black" />
                        </svg>
                    </div>
                </article>
            </section>
        </section>
    )
}

export default LandingScreen
