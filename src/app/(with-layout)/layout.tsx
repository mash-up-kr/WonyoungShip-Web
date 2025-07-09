import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "둥둥 - 느리지만 진심을 담은 편지",
  description: "미래의 누군가에게 진심을 전하는 디지털 타임캡슐 편지 서비스",
  openGraph: {
    title: "둥둥 - 느리지만 진심을 담은 편지",
    description: "미래의 누군가에게 진심을 전하는 디지털 타임캡슐 편지 서비스",
    url: "https://doongdoong.org",
    siteName: "둥둥",
    images: [
      {
        url: "/opengraph-image.png",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
}

const layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="m-auto w-full max-w-[420px]">{children}</main>
}

export default layout
