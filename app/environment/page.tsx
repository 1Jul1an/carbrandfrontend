"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Leaf, Recycle, Fuel, Factory, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function EnvironmentPage() {
  return (
      <div className="bg-brand-dark text-brand-light min-h-screen">
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <Image
              src="/car15.png?height=1080&width=1920&text=Modern%20Factory%20Interior"
              alt="Modern Factory Interior"
              width={1920}
              height={1080}
              className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <motion.div
              initial={{opacity: 0, y: 50}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.8, delay: 0.5}}
              className="relative z-10 text-center text-brand-light px-4 max-w-4xl"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-2xl">
              Responsibility in Motion
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl font-medium opacity-90 drop-shadow-xl">
              Performance and environmental awareness can coexist, driving innovation forward.
            </p>
          </motion.div>
        </div>

        {/* Material & Manufacturing Section */}
        <section className="container py-16 md:py-24">
          <motion.h2
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.6}}
              className="text-3xl md:text-4xl font-bold text-center text-brand-light mb-12"
          >
            Crafted with Conscience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.6, delay: 0.1}}
                className="p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-shadow"
            >
              <Leaf className="h-12 w-12 text-brand-accent mx-auto mb-4"/>
              <h3 className="text-2xl font-bold text-brand-light mb-2">Responsibly Sourced</h3>
              <p className="text-brand-light/80">
                Utilizing materials acquired with respect for ecological and social standards.
              </p>
            </motion.div>
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.6, delay: 0.2}}
                className="p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-shadow"
            >
              <Recycle className="h-12 w-12 text-brand-accent mx-auto mb-4"/>
              <h3 className="text-2xl font-bold text-brand-light mb-2">Recycled Elements</h3>
              <p className="text-brand-light/80">
                Integrating high-quality recycled materials into interior and non-structural components.
              </p>
            </motion.div>
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.6, delay: 0.3}}
                className="p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl text-center hover:shadow-2xl transition-shadow"
            >
              <Lightbulb className="h-12 w-12 text-brand-accent mx-auto mb-4"/>
              <h3 className="text-2xl font-bold text-brand-light mb-2">Lightweight Innovation</h3>
              <p className="text-brand-light/80">
                Pioneering lightweight designs to enhance performance and reduce material consumption.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Efficiency & Emissions Section */}
        <section className="container py-16 md:py-24">
          <motion.h2
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.6}}
              className="text-3xl md:text-4xl font-bold text-center text-brand-light mb-12"
          >
            Optimized for Tomorrow
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.6, delay: 0.1}}
                className="p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <Fuel className="h-8 w-8 text-brand-accent"/>
                <h3 className="text-2xl font-bold text-brand-light">Fuel Efficiency</h3>
              </div>
              <p className="text-brand-light/80 mb-4">
                Our advanced engine technologies deliver exhilarating performance with mindful fuel consumption.
              </p>
              <div className="text-center">
                <motion.span
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.8, delay: 0.3}}
                    className="text-5xl font-extrabold text-brand-accent"
                >
                  9.8 L/100km
                </motion.span>
                <p className="text-brand-light/70 mt-2">Combined Cycle (WLTP)</p>
              </div>
            </motion.div>
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.6, delay: 0.2}}
                className="p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <Factory className="h-8 w-8 text-brand-accent"/>
                <h3 className="text-2xl font-bold text-brand-light">CO₂ Reduction</h3>
              </div>
              <p className="text-brand-light/80 mb-4">
                Continuous innovation has led to significant reductions in CO₂ emissions compared to previous
                generations.
              </p>
              <div className="text-center">
                <motion.span
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.8, delay: 0.4}}
                    className="text-5xl font-extrabold text-brand-accent"
                >
                  -15%
                </motion.span>
                <p className="text-brand-light/70 mt-2">Average CO₂ reduction (vs. 2015 models)</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Did You Know Section */}
        <section className="container py-12 md:py-20">
          <motion.h3
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.6}}
              className="text-2xl md:text-3xl font-semibold text-brand-light text-center mb-8"
          >
            Did You Know?
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-brand-light/80">
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.4, delay: 0.1}}
            >
              <p className="text-lg font-medium">80% of interior trim is made from recycled material.</p>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.4, delay: 0.2}}
            >
              <p className="text-lg font-medium">All manufacturing plants are powered by 100% renewable energy.</p>
            </motion.div>
            <motion.div
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.5}}
                transition={{duration: 0.4, delay: 0.3}}
            >
              <p className="text-lg font-medium">New paint systems cut chemical emissions by 45%.</p>
            </motion.div>
          </div>
        </section>


        {/* Vision Statement / Philosophy */}
        <section className="container py-16 md:py-24 text-center max-w-3xl mx-auto">
          <motion.h2
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.6}}
              className="text-3xl md:text-4xl font-bold text-brand-light mb-8"
          >
            Our Unwavering Commitment
          </motion.h2>
          <motion.p
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.6, delay: 0.2}}
              className="text-lg md:text-xl text-brand-light/90 leading-relaxed"
          >
            At VELOCITY, our pursuit of ultimate driving performance is paramount. We believe this pursuit must be
            mindful
            of our impact, continuously exploring advancements in materials and efficiency without compromising the
            exhilarating experience our vehicles deliver. Our commitment is to responsible innovation, ensuring the
            legacy
            of pure driving emotion endures.
          </motion.p>
          <motion.div
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.6, delay: 0.4}}
              className="mt-12"
          >
            <Button
                asChild
                className="bg-brand-accent hover:bg-brand-accent-dark text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
            >
              <Link href="/models">Explore Our Models</Link>
            </Button>
          </motion.div>
        </section>

        <section className="container pb-24 text-center">
          <motion.blockquote
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true, amount: 0.5}}
              transition={{duration: 0.6}}
              className="text-xl md:text-2xl italic text-brand-light/70 max-w-2xl mx-auto"
          >
            "True performance respects its origin — and its future."
          </motion.blockquote>
        </section>


      </div>
  )
}
