import "./globals.css"
import { playfairDisplay, inter } from "./fonts"
import type React from "react"

export const metadata = {
  title: "Aisha Fathima Mohammed - Portfolio",
  description: "Full-stack developer and AI researcher",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
