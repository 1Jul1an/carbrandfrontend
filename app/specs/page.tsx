"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Car, Gauge, Ruler, Cog, GitFork } from "lucide-react"

const specsData = [
  {
    category: "Performance",
    icon: Gauge,
    details: [
      { label: "Engine Output", value: "720 hp @ 8500 rpm" },
      { label: "Torque", value: "770 Nm @ 6000 rpm" },
      { label: "0-100 km/h", value: "2.8 seconds" },
      { label: "Top Speed", value: "340 km/h (211 mph)" },
      { label: "Power-to-Weight", value: "480 hp/tonne" },
    ],
  },
  {
    category: "Dimensions",
    icon: Ruler,
    details: [
      { label: "Length", value: "4600 mm" },
      { label: "Width", value: "2000 mm" },
      { label: "Height", value: "1200 mm" },
      { label: "Wheelbase", value: "2700 mm" },
      { label: "Curb Weight", value: "1500 kg" },
    ],
  },
  {
    category: "Chassis & Body",
    icon: Car,
    details: [
      { label: "Chassis", value: "Carbon Fiber Monocoque" },
      { label: "Suspension", value: "Double Wishbone (Front & Rear)" },
      { label: "Brakes", value: "Carbon Ceramic Discs" },
      { label: "Tires", value: "Michelin Pilot Sport Cup 2" },
      { label: "Aerodynamics", value: "Active Aero System" },
    ],
  },
  {
    category: "Engine",
    icon: Cog,
    details: [
      { label: "Type", value: "4.0L Twin-Turbo V8" },
      { label: "Cylinders", value: "8" },
      { label: "Displacement", value: "3994 cc" },
      { label: "Fuel System", value: "Direct Injection" },
      { label: "Redline", value: "9000 rpm" },
    ],
  },
  {
    category: "Transmission",
    icon: GitFork,
    details: [
      { label: "Type", value: "7-Speed Dual-Clutch" },
      { label: "Drive", value: "Rear-Wheel Drive" },
      { label: "Differential", value: "Electronic Limited-Slip" },
    ],
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function SpecsPage() {
  return (
    <div className="container py-16 md:py-24 min-h-screen">
      <motion.h1
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.2}}
          className="text-4xl md:text-5xl font-bold text-center text-brand-light mb-12"
      >
        Technical Specifications of our newest model. <br/> <br/> VELOCITY Apex
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {specsData.map((category, index) => (
          <motion.div
            key={category.category}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <category.icon className="h-8 w-8 text-brand-accent" />
              <h2 className="text-2xl font-bold text-brand-light">{category.category}</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {category.details.map((detail, detailIndex) => (
                <AccordionItem
                  key={detail.label}
                  value={`item-${category.category}-${detailIndex}`}
                  className="border-b border-white/10"
                >
                  <AccordionTrigger className="text-brand-light hover:no-underline py-3">
                    <span className="font-medium">{detail.label}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-brand-light/80 pb-3">{detail.value}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
