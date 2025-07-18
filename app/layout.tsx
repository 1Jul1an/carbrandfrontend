import type React from "react"
import type { Metadata } from "next"
import PageClient from "./pageClient"

export const metadata: Metadata = {
  title: "VELOCITY - Redefining Precision",
  description: "Experience the pinnacle of high-performance sports cars.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <PageClient>{children}</PageClient>
}


import './globals.css'