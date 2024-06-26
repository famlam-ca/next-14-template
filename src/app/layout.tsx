import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Navbar } from "@/components/navigation/navbar"
import { cn } from "@/lib/utils"
import { Providers } from "@/providers"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen font-sans text-text antialiased",
          inter.className,
        )}>
        <Providers>
          <Navbar />

          <main className="h-[calc(100vh-3.5rem)]">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
