"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Background Image with Blur */}
      <Image
        src="/car14.jpg?height=1080&width=1920"
        alt="Showroom Background"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 container grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl text-brand-light"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center lg:text-left">Contact Us</h1>
          <p className="text-brand-light/80 mb-8 text-center lg:text-left">
            Reach out to our team for inquiries, support, or to schedule a private viewing.
          </p>
          <form className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-brand-light">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                className="bg-white/10 border-white/20 text-brand-light placeholder:text-brand-light/60 focus:ring-brand-accent"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-brand-light">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="bg-white/10 border-white/20 text-brand-light placeholder:text-brand-light/60 focus:ring-brand-accent"
              />
            </div>
            <div>
              <Label htmlFor="subject" className="text-brand-light">
                Subject
              </Label>
              <Input
                id="subject"
                type="text"
                placeholder="Inquiry Subject"
                className="bg-white/10 border-white/20 text-brand-light placeholder:text-brand-light/60 focus:ring-brand-accent"
              />
            </div>
            <div>
              <Label htmlFor="message" className="text-brand-light">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Your message here..."
                rows={5}
                className="bg-white/10 border-white/20 text-brand-light placeholder:text-brand-light/60 focus:ring-brand-accent"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-brand-accent hover:bg-brand-accent-dark text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Send Message
            </Button>
          </form>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-8 bg-black/30 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl text-brand-light space-y-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Headquarters</h2>
          <div className="space-y-4 text-brand-light/90">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-brand-accent" />
              <span>123 Velocity Drive, Wernigerode, Germany</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-brand-accent" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-brand-accent" />
              <span>info@velocitycars.com</span>
            </div>
          </div>

          <div className="w-full h-64 rounded-xl overflow-hidden border border-white/10 shadow-md">
            {/* Embedded Static Map Placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92831.30081826213!2d10.7102614!3d51.8368074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b232b9d264da3f%3A0x2c43f6d7e7b2b093!2sWernigerode%2C%20Germany!5e0!3m2!1sen!2sus!4v1721313600000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Headquarters Location"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
