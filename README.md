# WonyoungShip Web

미래의 나에게 편지를 보내는 서비스, WonyoungShip의 웹 프로젝트입니다.

## 👥 Maintainers
<table>
    <td align="center"><a href="https://github.com/Brightbong92"><img src="https://github.com/Brightbong92.png" width="100px;" alt=""/><br /><sub><b>장현봉</b></sub></a><br />💻</a></td>
    <td align="center"><a href="https://github.com/Pridesd"><img src="https://github.com/Pridesd.png" width="100px;" alt=""/><br /><sub><b>조재석</b></sub></a><br />💻</a></td>
    <td align="center"><a href="https://github.com/sinji2102"><img src="https://github.com/sinji2102.png" width="100px;" alt=""/><br /><sub><b>윤신지</b></sub></a><br />💻</a></td>
</table>


## 🏛️ 아키텍처
<img width="5464" height="1661" alt="WonyoungShip Screenshot" src="https://github.com/user-attachments/assets/46de03d2-f43d-46b4-8077-b2eee1830eac" />

## 🛠 Tech Stack

### Core
- ![Next.js](https://img.shields.io/badge/Next.js_15.3-000000?style=flat-square&logo=next.js&logoColor=white)
- ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
- ![HeadlessUI](https://img.shields.io/badge/HeadlessUI-66E3FF?style=flat-square&logo=headlessui&logoColor=black)

### Development
- ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)
- ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=black)
- ![Husky](https://img.shields.io/badge/Husky-41454A?style=flat-square&logo=git&logoColor=white)
- ![pnpm](https://img.shields.io/badge/pnpm-F69220?style=flat-square&logo=pnpm&logoColor=white)

## 🌟 Key Features

### 1. Next.js App Router & Parallel Routes
```typescript
/letter/
├── (letter-list)/
│   ├── layout.tsx    # 공통 레이아웃
│   ├── page.tsx      # 기본 페이지
│   └── @view/        # Parallel Route
│       ├── calendar/ # 캘린더 뷰
│       └── list/     # 리스트 뷰
```

### 2. Mash-up Web CLI
자체 개발한 CLI 도구를 통해 API 통신 코드 생성을 자동화:
- OAS(Swagger) 스펙 자동 파싱
- TypeScript 타입 생성
- API 함수 자동 생성

## 🚨 Known Issues

### API Generator 사용 시 주의사항
- `pnpm mash-up-web` CLI를 통해 API 코드를 자동으로 생성합니다.
- **주의**: `.prettierrc`의 `"prettier-plugin-tailwindcss"` 플러그인과 충돌 발생
  - 해결방법:
    1. 초기 API 생성 시 해당 플러그인 제거
    2. 이후 `mashup.config.ts`의 `httpClientRewrite: false` 설정으로 재생성 방지

## 📝 Configuration

### mashup.config.ts
```typescript
const config: MashupConfig = {
  "gen:api": {
    output: "./src/__generated__",
    url: "https://api.doongdoong.org/v3/api-docs",
    instancePath: "@/configs/fetch/instance",
    httpClientRewrite: false,
  },
}
```
