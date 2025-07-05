# WonyoungShip Web
Web for Mash-Up 15th WonyoungShip Team
# Maintainers
<table>
    <td align="center"><a href="https://github.com/Brightbong92"><img src="https://github.com/Brightbong92.png" width="100px;" alt=""/><br /><sub><b>장현봉</b></sub></a><br />💻</a></td>
    <td align="center"><a href="https://github.com/Pridesd"><img src="https://github.com/Pridesd.png" width="100px;" alt=""/><br /><sub><b>조재석</b></sub></a><br />💻</a></td>
    <td align="center"><a href="https://github.com/sinji2102"><img src="https://github.com/sinji2102.png" width="100px;" alt=""/><br /><sub><b>윤신지</b></sub></a><br />💻</a></td>
</table>

# Checklist

## API 제너레이터
- `pnpm mash-up-web` CLI를 통해 api code 자동 생성을 하고있습니다. 
`.prettierrc`의 `"prettier-plugin-tailwindcss"` 플러그인이 정의된 상태라면 `@http-client/index.ts` 파일의 자동생성시 css포매팅과 충돌이생겨 올바르게 `index.ts` 파일이 생성되지 않습니다.
API 초기 생성시에는 플러그인을 제거한후에 생성했으며, 그이후에는 `mashup.config.ts`파일의 `httpClientRewrite` 옵션을통해 `@http-client/index.ts`가 다시 생성되지 않도록 제거하고 있어요.