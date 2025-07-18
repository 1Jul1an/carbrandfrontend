"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const carModels = [

  {
    name: "VELOCITY Strada",
    power: "580 hp",
    acceleration: "0-100 km/h in 3.4s",
    tagline: "Where refinement meets raw instinct.",
    image: "/car10.jpg?height=400&width=600",
  },
    {
        name: "VELOCITY Evo T",
        power: "590 hp",
        acceleration: "0-100 km/h in 3.4s",
        tagline: "Balance perfected. Thrill refined.",
        image: "/car7.jpg?height=400&width=600",
    },
    {
        name: "VELOCITY GT-Sport",
        power: "620 hp",
        acceleration: "0-100 km/h in 3.2s",
        tagline: "Precision without punishment.",
        image: "/car12.jpg?height=400&width=600",
    },
    {
        name: "VELOCITY Aero RS",
        power: "685 hp",
        acceleration: "0-100 km/h in 3.1s",
        tagline: "Lightweight. Agile. Surgical.",
        image: "/car13.jpg?height=400&width=600",
    },
  {
    name: "VELOCITY Apex",
    power: "720 hp",
    acceleration: "0-100 km/h in 2.8s",
    tagline: "Unleash the ultimate track beast.",
    image: "/car2.png?height=400&width=600",
  },
  {
    name: "VELOCITY GT-R",
    power: "750 hp",
    acceleration: "0-100 km/h in 2.6s",
    tagline: "Race-bred performance for the road.",
    image: "/car1.png?height=400&width=600",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function ModelsPage() {
  return (
    <div className="container py-16 md:py-24">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-center text-brand-light mb-12"
      >
        Our Exquisite Models
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {carModels.map((model, index) => (
          <motion.div
            key={model.name}
            variants={cardVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <Image
              src={model.image || "/placeholder.svg"}
              alt={model.name}
              width={600}
              height={400}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="p-6 relative z-10">
              <h2 className="text-2xl font-bold text-brand-light mb-2">{model.name}</h2>
              <p className="text-brand-accent font-semibold text-lg mb-2">{model.power}</p>
              <p className="text-brand-light/80 text-sm mb-4">{model.acceleration}</p>
              <p className="text-brand-light/70 text-base italic mb-6">{model.tagline}</p>
              <Link
                href={`/models/${model.name.toLowerCase().replace(/\s/g, "-")}`}
                className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-light transition-colors font-medium"
              >
                Discover More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Glass overlay on hover */}
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
