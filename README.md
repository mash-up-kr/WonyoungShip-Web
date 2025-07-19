# 둥둥 <img width="100" height="100" alt="Group 21" src="https://github.com/user-attachments/assets/d15a0a49-dc20-4b48-8125-b19673ca47f2" align="left" />
느리지만, 미래의 누군가에게 진심을 담아 보내는 편지

<img width="1920" height="1080" alt="Page5" src="https://github.com/user-attachments/assets/70f1adf9-c5ec-4347-b7ce-7ec44b5582b3" />


## 👥 Maintainers
<table align="center">
    <td align="center"><a href="https://github.com/Brightbong92"><img src="https://github.com/Brightbong92.png" width="100px;" alt=""/><br /><sub><b>장현봉</b></sub></a><br />💻</a></td>
    <td align="center"><a href="https://github.com/Pridesd"><img src="https://github.com/Pridesd.png" width="100px;" alt=""/><br /><sub><b>조재석</b></sub></a><br />💻</a></td>
    <td align="center"><a href="https://github.com/sinji2102"><img src="https://github.com/sinji2102.png" width="100px;" alt=""/><br /><sub><b>윤신지</b></sub></a><br />💻</a></td>
</table>

<h2>📷 Screen Shot</h2>
<table align="center">
        <tr align="center">
            <th>뷰</th>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
        </tr>
        <tr>
            <td width="88" align="center">랜딩/홈</td>
            <td><img width="1125" height="1860" alt="image" src="https://github.com/user-attachments/assets/4fc35f72-e51a-47af-bfb3-9dd7ba0dc149" /></td>
            <td><img width="1125" height="1865" alt="image" src="https://github.com/user-attachments/assets/63b5cec4-35e2-4d17-aa52-04435c7ae640" /></td>
            <td><img width="1125" height="1894" alt="image" src="https://github.com/user-attachments/assets/a4240895-1d26-4661-b4d5-2bfe01a20905" /></td>
            <td><img width="1125" height="1879" alt="image" src="https://github.com/user-attachments/assets/3c9de390-43b5-4a62-995f-fd35dce07d5b" /></td>
        </tr>
        <tr>
            <td align="center">편지</br>보내기</td>
            <td><img width="1125" height="1884" alt="image" src="https://github.com/user-attachments/assets/5f4b8a87-28ab-46b2-9ae1-c2e6e05b90cf" /></td>
            <td><img width="1125" height="1861" alt="image" src="https://github.com/user-attachments/assets/cc3f9fa0-2a7b-46fe-b105-61f5bdcaf109" /></td>
            <td><img width="1125" height="1873" alt="image" src="https://github.com/user-attachments/assets/6c34b388-6417-433f-ab06-db9860bf19a3" /></td>
            <td><img width="1125" height="1897" alt="image" src="https://github.com/user-attachments/assets/6722ae22-4556-4f35-bbdc-29f56e31b1e0" /></td>
        </tr>
        <tr>
            <td align="center">편지</br>열어보기</td>
            <td><img width="1125" height="1881" alt="image" src="https://github.com/user-attachments/assets/3c7530bd-15a0-4457-ba73-f20818c15d75" /></td>
            <td><img width="1125" height="1878" alt="image" src="https://github.com/user-attachments/assets/a7448e4f-d2bf-4eee-8fe4-86c1427b0bbf" /></td>
            <td><img width="1125" height="1876" alt="image" src="https://github.com/user-attachments/assets/d8ecbe6a-dc21-4849-88cd-41694ce4d3ca" /></td>
            <td><img width="1125" height="1874" alt="image" src="https://github.com/user-attachments/assets/72eb6dad-a40f-4770-a9a1-b5d4d35df147" /></td>
        </tr>
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
