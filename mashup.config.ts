import type { MashupConfig } from "@mash-up-web-toolkit/command"

const config: MashupConfig = {
  "gen:api": {
    /**
     * @description 생성될 파일의 경로
     */
    output: "./src/__generated__",

    /**
     * @description 생성할 API의 주소
     */
    url: "https://api.doongdoong.org/v3/api-docs",

    /**
     * @description fetch 또는 axios 인스턴스 경로
     */
    instancePath: "@/configs/fetch/instance",

    /**
     * @description httpClient 덮어쓰기 여부 (true: 덮어쓰기, false: 기존 파일 사용)
     */
    httpClientRewrite: false,
  },
}

export default config
