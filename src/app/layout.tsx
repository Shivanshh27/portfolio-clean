import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 relative overflow-x-hidden",
          fontSans.variable
        )}
      >
        {/* Ambient Glow Blobs */}
        <div className="fixed -top-[10%] -left-[20%] w-[500px] h-[500px] rounded-full bg-cyan-400/10 dark:bg-cyan-500/5 blur-[120px] pointer-events-none z-[-1] animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="fixed -bottom-[10%] -right-[20%] w-[600px] h-[600px] rounded-full bg-purple-400/10 dark:bg-purple-500/5 blur-[130px] pointer-events-none z-[-1]" />
        <div className="fixed top-[35%] right-[-10%] w-[300px] h-[300px] rounded-full bg-blue-400/10 dark:bg-blue-500/5 blur-[100px] pointer-events-none z-[-1]" />

        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
