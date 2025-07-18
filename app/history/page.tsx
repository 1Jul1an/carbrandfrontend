"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Flag, Award, Rocket, Car, Wrench } from "lucide-react"

const timelineEvents = [
  {
    year: "1965",
    title: "Founded: The Vision Begins",
    description:
        "VELOCITY was founded by automotive visionary, Dr. Klaus Richter, with a singular goal: to build the most exhilarating combustion-engine sports cars.",
    icon: Calendar,
  },
  {
    year: "1972",
    title: "First Model Launch: The V-Series 1",
    description:
        "Our inaugural model, the V-Series 1, redefined performance standards, quickly gaining a reputation for its raw power and agile handling.",
    icon: Rocket,
  },
  {
    year: "1988",
    title: "Le Mans Victory: A Legacy Forged",
    description:
        "VELOCITY secured its first major motorsport victory at the 24 Hours of Le Mans, cementing our place in racing history.",
    icon: Award,
  },
  {
    year: "2005",
    title: "Global Expansion: Reaching New Horizons",
    description:
        "With growing demand, VELOCITY expanded its manufacturing and distribution globally, bringing our unique driving experience to enthusiasts worldwide.",
    icon: Flag,
  },
  {
    year: "2020",
    title: "Apex Era Begins",
    description:
        "The launch of the VELOCITY Apex marked a new generation of precision-engineered performance, showcasing lightweight design and aggressive aerodynamics.",
    icon: Car,
  },
  {
    year: "2022",
    title: "Performance Refined: The GT-Sport & Evo T",
    description:
        "With the GT-Sport and Evo T, VELOCITY introduced track-inspired models tuned for both road and circuit — combining balance and power.",
    icon: Wrench,
  },
  {
    year: "2024",
    title: "Surgical Speed: Launch of Aero RS",
    description:
        "The Aero RS redefined agility and control with its advanced aerodynamic chassis, setting a new benchmark in lightweight performance.",
    icon: Car,
  },
  {
    year: "2025",
    title: "Now: A Full Line of Icons",
    description:
        "Today, VELOCITY offers a refined lineup including the Strada, Apex, GT-R and more — all forged from heritage and driven by innovation.",
    icon: Rocket,
  },
];

const timelineItemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
}

export default function HistoryPage() {
  return (
    <div className="bg-brand-dark text-brand-light min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/car7.jpg?height=1080&width=1920&text=Vintage%20Race%20Car"
          alt="Vintage Race Car"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-center drop-shadow-2xl px-4"
        >
          Our Legacy
        </motion.h1>
      </div>

      {/* Timeline Section */}
      <section className="container py-16 md:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Milestones in Motion
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/10 h-full rounded-full hidden md:block"></div>

          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              variants={timelineItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center md:items-stretch w-full my-8 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Year Label */}
              <div className="md:w-1/2 flex justify-center md:justify-end relative z-10">
                <div className="p-3 bg-brand-accent rounded-full text-white font-bold text-lg shadow-lg md:mr-6">
                  {event.year}
                </div>
              </div>

              {/* Card Content */}
              <div className="md:w-1/2 relative z-10 mt-4 md:mt-0">
                <div
                  className={`p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl ${
                    index % 2 === 0 ? "md:ml-6" : "md:mr-6"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <event.icon className="h-6 w-6 text-brand-accent" />
                    <h3 className="text-xl font-bold text-brand-light">{event.title}</h3>
                  </div>
                  <p className="text-brand-light/80">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
