# WonyoungShip Web
Web for Mash-Up 15th WonyoungShip Team
# Maintainers
<table>
    <td align="center"><a href="https://github.com/Brightbong92"><img src="https://github.com/Brightbong92.png" width="100px;" alt=""/><br /><sub><b>장현봉</b></sub></a><br />💻</a></td>
    <td align="center"><a href="https://github.com/Pridesd"><img src="https://github.com/Pridesd.png" width="100px;" alt=""/><br /><sub><b>조재석</b></sub></a><br />💻</a></td>
    <td align="center"><a href="https://github.com/sinji2102"><img src="https://github.com/sinji2102.png" width="100px;" alt=""/><br /><sub><b>윤신지</b></sub></a><br />💻</a></td>
</table>

# Issue

### API Generator UseCase
- `pnpm mash-up-web` CLI를 통해 API 코드를 자동으로 생성하고 있습니다.
- `.prettierrc`에 `"prettier-plugin-tailwindcss"` 플러그인이 정의되어 있을 경우, `@http-client/index.ts` 파일 자동 생성 시 CSS 포매팅과 충돌이 발생하여 index.ts 파일이 올바르게 생성되지 않는 문제가 있습니다.
- API를 처음 생성할 때는 해당 플러그인을 제거한 후 코드를 생성하였고, 이후에는 `mashup.config.ts` 파일의 httpClientRewrite 옵션을 통해 `@http-client/index.ts`가 다시 생성되지 않도록 제어하고 있습니다.