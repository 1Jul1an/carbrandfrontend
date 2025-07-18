"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Button } from "@/components/ui/button"

type Configuration = {
  color: string
  wheels: string
  interior: string
}

const colors = [
  { name: "Velocity Red", value: "red", hex: "#DC2626" },
  { name: "Obsidian Black", value: "black", hex: "#0A0A0A" },
  { name: "Arctic Silver", value: "silver", hex: "#E0E0E0" },
  { name: "Deep Blue", value: "blue", hex: "#1E3A8A" },
]

const wheels = [
  { name: "Sport Alloys", value: "sport", image: "/placeholder.svg?height=100&width=100" },
  { name: "Performance Forged", value: "forged", image: "/placeholder.svg?height=100&width=100" },
  { name: "Carbon Fiber", value: "carbon", image: "/placeholder.svg?height=100&width=100" },
]

const interiors = [
  { name: "Black Leather", value: "black-leather", image: "/placeholder.svg?height=100&width=100" },
  { name: "Alcantara Sport", value: "alcantara", image: "/placeholder.svg?height=100&width=100" },
  { name: "Tan Nappa Leather", value: "tan-leather", image: "/placeholder.svg?height=100&width=100" },
]

export default function ConfigurePage() {
  const [config, setConfig] = useState<Configuration>({
    color: colors[0].value,
    wheels: wheels[0].value,
    interior: interiors[0].value,
  })

  const handleConfigChange = (category: keyof Configuration, value: string) => {
    setConfig((prev) => ({ ...prev, [category]: value }))
  }

  const getPreviewImage = () => {
    // This would be more complex in a real app, mapping config to specific images
    // For now, just a generic placeholder
    return `/placeholder.svg?height=600&width=800&text=${config.color}-${config.wheels}-${config.interior}`
  }

  return (
    <div className="container py-16 md:py-24 min-h-screen flex flex-col lg:flex-row gap-8">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 lg:w-1/2 p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-brand-light mb-8">Configure Your VELOCITY</h1>

        <Tabs defaultValue="color" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl mb-6">
            <TabsTrigger
              value="color"
              className="text-brand-light data-[state=active]:bg-brand-accent data-[state=active]:text-white rounded-lg"
            >
              Color
            </TabsTrigger>
            <TabsTrigger
              value="wheels"
              className="text-brand-light data-[state=active]:bg-brand-accent data-[state=active]:text-white rounded-lg"
            >
              Wheels
            </TabsTrigger>
            <TabsTrigger
              value="interior"
              className="text-brand-light data-[state=active]:bg-brand-accent data-[state=active]:text-white rounded-lg"
            >
              Interior
            </TabsTrigger>
          </TabsList>

          <TabsContent value="color" className="space-y-6">
            <h2 className="text-xl font-semibold text-brand-light">Exterior Color</h2>
            <ToggleGroup
              type="single"
              value={config.color}
              onValueChange={(value) => value && handleConfigChange("color", value)}
              className="flex flex-wrap gap-4 justify-start"
            >
              {colors.map((c) => (
                <ToggleGroupItem
                  key={c.value}
                  value={c.value}
                  aria-label={c.name}
                  className="flex flex-col items-center gap-2 p-3 border border-white/20 rounded-lg data-[state=on]:border-brand-accent data-[state=on]:ring-2 data-[state=on]:ring-brand-accent transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-full border border-white/30"
                    style={{ backgroundColor: c.hex }}
                  ></div>
                  <span className="text-sm text-brand-light">{c.name}</span>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </TabsContent>

          <TabsContent value="wheels" className="space-y-6">
            <h2 className="text-xl font-semibold text-brand-light">Wheel Design</h2>
            <Select value={config.wheels} onValueChange={(value) => handleConfigChange("wheels", value)}>
              <SelectTrigger className="w-[200px] bg-white/10 border border-white/20 text-brand-light">
                <SelectValue placeholder="Select wheels" />
              </SelectTrigger>
              <SelectContent className="bg-black/80 backdrop-blur-md border border-white/10 text-brand-light">
                {wheels.map((w) => (
                  <SelectItem key={w.value} value={w.value} className="hover:bg-white/10">
                    <div className="flex items-center gap-2">
                      <Image
                        src={w.image || "/placeholder.svg"}
                        alt={w.name}
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                      {w.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </TabsContent>

          <TabsContent value="interior" className="space-y-6">
            <h2 className="text-xl font-semibold text-brand-light">Interior Trim</h2>
            <Select value={config.interior} onValueChange={(value) => handleConfigChange("interior", value)}>
              <SelectTrigger className="w-[200px] bg-white/10 border border-white/20 text-brand-light">
                <SelectValue placeholder="Select interior" />
              </SelectTrigger>
              <SelectContent className="bg-black/80 backdrop-blur-md border border-white/10 text-brand-light">
                {interiors.map((i) => (
                  <SelectItem key={i.value} value={i.value} className="hover:bg-white/10">
                    <div className="flex items-center gap-2">
                      <Image
                        src={i.image || "/placeholder.svg"}
                        alt={i.name}
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                      {i.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </TabsContent>
        </Tabs>

        <div className="mt-8 text-right">
          <Button className="bg-brand-accent hover:bg-brand-accent-dark text-white font-bold py-3 px-8 rounded-full transition-colors">
            Request Quote
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex-1 lg:w-1/2 p-6 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl flex flex-col items-center justify-center"
      >
        <h2 className="text-2xl font-bold text-brand-light mb-6">Your Configuration Preview</h2>
        <div className="relative w-full max-w-md aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg">
          <Image
            src={getPreviewImage() || "/placeholder.svg"}
            alt="Configured Car Preview"
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-brand-light text-lg font-semibold">
            {/* Placeholder for dynamic visual updates */}
            <p>
              {colors.find((c) => c.value === config.color)?.name} |{" "}
              {wheels.find((w) => w.value === config.wheels)?.name} |{" "}
              {interiors.find((i) => i.value === config.interior)?.name}
            </p>
          </div>
        </div>
        <div className="mt-6 text-center text-brand-light/80">
          <p>This is a placeholder preview. Actual visuals may vary.</p>
        </div>
      </motion.div>
    </div>
  )
}
