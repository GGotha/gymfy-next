import { inter } from "@/app/fonts"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Gymfy",
  description: "Web3 Based Fitness App",
  icons: {
    icon: ["/assets/images/logo_without_text.svg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
