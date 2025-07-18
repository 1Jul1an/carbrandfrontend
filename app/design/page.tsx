"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const designSections = [
  {
    id: "exterior",
    title: "Exterior: Sculpted for Aerodynamics",
    description:
      "Every curve and line is meticulously crafted not just for beauty, but for unparalleled aerodynamic efficiency, pushing the boundaries of speed and stability.",
    image: "/car13.jpg?height=800&width=1200",
    highlights: [
      { text: "Carbon Fiber Body", position: "top-1/4 left-1/4" },
      { text: "Active Aero Elements", position: "bottom-1/4 right-1/4" },
    ],
  },
  {
    id: "interior",
    title: "Interior: The Driver's Sanctuary",
    description:
      "Step into a cockpit where luxury meets performance. Premium materials, ergonomic design, and cutting-edge technology converge to create an immersive driving experience.",
    image: "/car10.jpg?height=800&width=1200",
    highlights: [
      { text: "Hand-Stitched Leather", position: "top-1/4 right-1/4" },
      { text: "Digital Cockpit Display", position: "bottom-1/4 left-1/4" },
    ],
  },
  {
    id: "aerodynamics",
    title: "Aerodynamics: Mastering the Airflow",
    description:
      "From the ground up, our vehicles are engineered to slice through the air with minimal resistance, generating optimal downforce for superior grip and handling at extreme speeds.",
    image: "/car2.png?height=800&width=1200",
    highlights: [
      { text: "Integrated Diffuser", position: "bottom-1/3 left-1/3" },
      { text: "Rear Wing Optimization", position: "top-1/3 right-1/3" },
    ],
  },
]

export default function DesignPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })



  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100])

  return (
      <div className="bg-brand-dark text-brand-light min-h-screen" ref={ref}>
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
              {/* Hintergrundbild */}
              <Image
                  src="/car7.jpg"
                  alt="Car Hero"
                  fill
                  className="object-cover"
                  priority
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"/>

              {/* Text */}
              <h1 className="relative z-10 text-white text-5xl md:text-7xl font-bold text-center px-4">
                  Design Beyond Limits
              </h1>
          </section>

          {/* Design Sections */}
          <div className="py-16 md:py-24">
              {designSections.map((section, index) => (
                  <Section key={section.id} section={section} index={index}/>
              ))}
          </div>
      </div>
  )
}

function Section({section, index}: { section: (typeof designSections)[0]; index: number }) {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({target: ref, offset: ["start 0.8", "end 0.2"]})

    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
    const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])

    return (
        <motion.section
            ref={ref}
            style={{opacity, y}}
            className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center my-16 md:my-24 overflow-hidden"
      >
        <Image
            src={section.image || "/placeholder.svg"}
            alt={section.title}
            width={1200}
            height={800}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50"></div> {/* Darker overlay for text */}
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-light mb-4 drop-shadow-lg">{section.title}</h2>
        <p className="text-lg md:text-xl text-brand-light/90 drop-shadow-md">{section.description}</p>
      </div>
      {/* Highlight Cards */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {section.highlights.map((highlight, hIndex) => (
          <motion.div
            key={hIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + hIndex * 0.2, duration: 0.5 }}
            className={`absolute ${highlight.position} p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-xl text-brand-light text-sm md:text-base font-medium text-center pointer-events-auto`}
          >
            {highlight.text}
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
