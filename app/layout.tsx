import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Focus - Deep Work Without Distractions",
  description: "Focus helps teams maintain deep work through intelligent blocking, scheduling, and real-time collaboration.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black text-black dark:text-white">
        {children}
      </body>
    </html>
  )
}
