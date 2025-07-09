import dayjs from "dayjs"
import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"
import { KakaoScript } from "@/components/kakao-script"
import { DialogProvider } from "@/contexts/dialog-context"
import { SnackbarProvider } from "@/contexts/snackbar"

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  variable: "--font-pretendard",
})

import "dayjs/locale/ko"

dayjs.locale("ko")

export const metadata: Metadata = {
  title: "둥둥 - 느리지만 진심을 담은 편지",
  description: "미래의 누군가에게 진심을 전하는 디지털 타임캡슐 편지 서비스",
  openGraph: {
    title: "둥둥 - 느리지만 진심을 담은 편지",
    description: "미래의 누군가에게 진심을 전하는 디지털 타임캡슐 편지 서비스",
    siteName: "둥둥",
    images: [
      {
        url: "/images/opengraph-image.png",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <KakaoScript />
      <body
        className={`${pretendard.className} from-background-white to-background-brandassistive min-h-dvh bg-gradient-to-b antialiased`}
      >
        <DialogProvider>
          <SnackbarProvider>{children}</SnackbarProvider>
        </DialogProvider>
      </body>
    </html>
  )
}
