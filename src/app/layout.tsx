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

// TODO: 메타 태그 설정 필요
export const metadata: Metadata = {
  title: "둥둥 - DoongDoong",
  description: "시간이 천천히 흐르는 이곳에서 특별한 편지를 보내보세요",
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
