"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Car, Zap, Trophy, Gem, ShieldCheck } from "lucide-react" // Added icons for brand values

export default function HomePage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/car2.png?height=1080&width=1920" // Placeholder image for video poster
        >
          {/* Replace with your video source */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-driving-on-a-mountain-road-447-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 text-center text-brand-light px-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-2xl">
            Redefining Precision
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl font-medium opacity-90 drop-shadow-xl">
            Experience Pure Driving Emotion.
          </p>
        </motion.div>
      </div>

      {/* Performance Section */}
      <section className="w-full py-16 md:py-24 bg-brand-dark relative z-10">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-brand-light mb-12"
          >
            Unrivaled Performance
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl text-center"
            >
              <Zap className="h-12 w-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-light mb-2">Top Speed</h3>
              <p className="text-4xl font-extrabold text-brand-accent">340 km/h</p>
              <p className="text-brand-light/80 mt-2">Unleash the full potential.</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl text-center"
            >
              <Car className="h-12 w-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-light mb-2">Acceleration</h3>
              <p className="text-4xl font-extrabold text-brand-accent">4.0s</p>
              <p className="text-brand-light/80 mt-2">100-200 km/h in a blink.</p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl text-center"
            >
              <Trophy className="h-12 w-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-light mb-2">Horsepower</h3>
              <p className="text-4xl font-extrabold text-brand-accent">750 hp</p>
              <p className="text-brand-light/80 mt-2">Raw power, refined control.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="w-full py-16 md:py-24 bg-brand-dark relative z-10">
        <div className="container">
          <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center text-brand-light mb-12"
          >
            Visual Masterpiece
          </motion.h2>
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="flex overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
          >
            {[
              { src: "/car4.png", alt: "Car Image 1" },
              { src: "/car6.png", alt: "Car Image 2" },
              { src: "/car5.png", alt: "Car Image 3" },
            ].map((img, i) => (
                <div key={i} className="flex-shrink-0 w-full md:w-2/3 lg:w-1/2 xl:w-1/3 snap-center px-4">
                  <Image
                      src={img.src}
                      alt={img.alt}
                      width={800}
                      height={500}
                      className="w-full h-auto rounded-2xl shadow-lg border border-white/10 object-cover"
                  />
                </div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Brand Values Section */}
      <section className="w-full py-16 md:py-24 bg-brand-dark relative z-10">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center text-brand-light mb-12"
          >
            Our Core Philosophy
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl text-center"
            >
              <Gem className="h-12 w-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-light mb-2">Precision</h3>
              <p className="text-brand-light/80">
                Every component, every stitch, every line is crafted with obsessive attention to detail.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl text-center"
            >
              <ShieldCheck className="h-12 w-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-light mb-2">Heritage</h3>
              <p className="text-brand-light/80">
                Built on a legacy of innovation and a passion for the purest driving experience.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl text-center"
            >
              <Zap className="h-12 w-12 text-brand-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-brand-light mb-2">Power</h3>
              <p className="text-brand-light/80">
                Unleashing raw, unadulterated power, meticulously engineered for the road.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
