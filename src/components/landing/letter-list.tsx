import Image from "next/image"

import LetterBackground from "@/assets/images/letter-background.png"

import { Text, WeatherIcon } from "../common"

type Weather = "sunny" | "cloudy" | "rainy" | "snow" | "shiny"

const LETTER_LIST: {
  id: number
  date: string // YYYY-MM-DD
  weather: Weather
  letter: string
}[] = [
  {
    id: 1,
    date: "2025-05-06",
    weather: "sunny",
    letter:
      "마라톤(문화어: 마라손, 마라쏜, 영어: marathon)은 육상 경기의 한 종목으로, 42.195 km (26마일과 385야드)의 거리를 달리는 도로 경주이다. 마라톤은 일반적으로 포장된 도로, 즉 아스팔트 도로에서 개최된다. 현재 마라톤 강국은 케냐와 에티오피아이며 (대한민국은 금메달 2개 획득), 이 중 에티오피아는 올림픽에서 금메달도 여러 개 딴 실질적 마라톤 강국이다. 2012년에는 우간다 선수가 케냐 선수를 제치고 금메달을 따기도 하였다. 마라톤은 1921년까지 완주 거리가 공식적으로 표준화되지 않았지만 1896년 개최된 최초의 근대 올림픽 종목 중 하나이다. 마라톤 대회 규모에 따라 수만 명의 참가자가 있을 수 있고, 매년 800개 이상의 마라톤이 전세계에서 열리지만, 대다수의 경쟁자들은 아마추어 운동선수들이다 마라톤은 그리스의 아테네에서 북동쪽 약 30Km 떨어져 위치한 지역 이름으로서, 이 곳에서 기원전 490년에 페르시아군과 아테네군 사이에 전투가 있었다. 이 전투에서 아테네의 승전 소식을 아테네에 뛰어가 전한 전령 페이디피데스를 기리는 뜻에서 1896년에 올림픽에 채택된 육상 경기 종목으로 알려져 있다. 그러나 헤로도토스 (역사 6, 106-107)에 따르면 기원전 490년 아테네가 페르시아군이 마라톤에 상륙한다는 소식을 듣고 전령 페이디피데스를 스파르타에 도움을 청하기 위해 파견하였으며 페이디피데스는 약 200Km의 거리를 이틀에 걸쳐 돌주하였다고 한다. 스파르타는 아테네의 위급한 상황을 듣고 원군을 파병하는데 동의 하였으나 스파르타의 전통에 따라 만월에 출전하는 것이 금지되어 있기 때문에 아테네는 스파르타의 도움없이 몇몇 동맹도시의 도움으로 마라톤 평야에서 페르시아군을 물리쳤다고 한다. 여기서 헤로도토스는 페이디피데스가 마라톤 승전 소식을 아테네에 전했다는 사실을 언급하고 있지 않기 때문에 오늘날 마치 전설처럼 퍼져 있는 마라톤의 유래에 관한 이야기는 후대에 지어낸 것으로 여겨진다. 물론 마라톤 전투와 관련된 일화로 페이디피데스가 스파르타로 질주하던 중 팬(판)신이 나타나 아테네의 건투를 약속했다고 하며, 이를 기리기 위해 아테네에서는 횃불 들고 달리기를 해마다 열었다고 한다.",
  },
  {
    id: 2,
    date: "2025-05-07",
    weather: "cloudy",
    letter:
      "블루스(영어: blues)는 19세기 중엽, 미국 노예 해방 선언 이후 미국으로 넘어온 미국 남부의 아프리카계 미국인[1]들이 창시한 장르[2] 혹은 음악적 형태를 말한다. 이 장르는 아프리카 전통 음악과 노동요,[3] 그리고 유럽계 미국인의 포크송을 뿌리로 두는데, 구체적으로 스피릿튜얼스, 노동요, 필드홀러, 링 샤우트, 찬트, 그리고 리듬이 간단하고 경험을 풀어낸 발라드 등이 합쳐져 개인이 부르는 노래로 바뀌어 블루스가 되었다고 한다. 블루스 형식은 재즈, 리듬 앤 블루스, 로큰롤에서도 볼 수 있는데, 주고 받기 형식(Call and Response), 블루스 스케일을 이용한 여러 코드 진행, 두 박자 또는 네 박자의 12마디로 진행하는 블루스가 일반적이며 장조와 단조가 뚜렷하지 않다. 블루 노트는 보통 3도, 혹은 5도 플랫한 음을 말하는데, 이 음들은 블루스에서 가장 중요한 소리다. 블루스 스케일, 블루스 노트, 셔플 블루스, 혹은 워킹 베이스를 포함해 우리가 아는 그루브가 생겼다",
  },
  {
    id: 3,
    date: "2025-05-08",
    weather: "rainy",
    letter:
      "가장 단순한 형태의 알코올은 메탄올(CH3OH)이다. 예전에는 나무를 건류하여 얻었기에 목정(木精)이라고도 한다. 에탄올과 냄새와 성질이 비슷한 투명한 액체로, 끓는점(64.7 °C)은 약간 낮다. 용매, 연료, 원료 등으로 쓰인다. 에탄올과 달리 메탄올은 매우 독성이 강하여, 10 ml의 소량으로도 시신경이 파괴되어 실명할 수 있으며, 30 ml로도 사망할 수 있다.[1]",
  },
  {
    id: 4,
    date: "2025-05-09",
    weather: "snow",
    letter:
      "콜레스테롤(영어: cholesterol)은 스테롤(스테로이드와 알코올의 조합)의 하나로서 모든 동물 세포의 세포막에서 발견되는 지질이며 혈액을 통해 운반된다. 식물 세포의 세포막에서도 보다 적은 양이지만 발견된다.",
  },
  {
    id: 5,
    date: "2025-05-10",
    weather: "shiny",
    letter:
      "쓸개는 여러 동물에서 볼 수 있으며 곰의 쓸개는 웅담(熊膽)이라고 부른다. 쓸개즙을 얻기 위해 사육되는 곰을 사육곰이라고 한다. 쥐, 사슴, 당나귀, 고래, 비둘기 등에는 쓸개가 없으며 쓸개즙이 바로 샘창자로 분비된다.",
  },
]

export const LetterList = () => {
  const letterList = [...LETTER_LIST, ...LETTER_LIST, ...LETTER_LIST]

  const formatDate = (date: string | Date) => {
    const d = new Date(date)
    const month = d.getMonth() + 1
    const day = String(d.getDate())
    const dayOfWeek = d.toLocaleDateString("ko-KR", { weekday: "long" })

    return `${month}월 ${day}일 ${dayOfWeek}`
  }

  return (
    <div className="relative overflow-hidden">
      {/* 측면 그라데이션 숨김을 위한 요소 */}
      <div className="absolute top-0 bottom-0 left-0 z-10 w-[100px] bg-gradient-to-r from-[#f2f5f7] to-[#f2f5f700] md:w-[50px] xl:w-[100px]"></div>
      <div className="absolute top-0 right-0 bottom-0 z-10 w-[100px] bg-gradient-to-l from-[#f2f5f7] to-[#f2f5f700] md:w-[50px] xl:w-[100px]"></div>
      {/* 편지 목록 */}
      <div className="animate-infinite-slide-left flex w-max will-change-transform">
        {letterList.map(({ id, date, letter, weather }, index) => (
          <section
            key={`${id}-${index}`}
            className="bg-blue-10 relative mr-3 flex h-[209px] w-[209px] flex-none flex-col gap-3 rounded-[13px] p-6"
          >
            <Image
              src={LetterBackground}
              alt=""
              className="absolute top-0 right-0 bottom-0 left-0 mix-blend-multiply"
            />
            <div className="flex items-center justify-between">
              <Text
                variant="body"
                size="small"
                font="Ownglyph ryurue"
                color="neutral-50"
                className="font-normal"
              >
                {formatDate(date)}
              </Text>
              <WeatherIcon weather={weather} size="sm" color="disabled" />
            </div>
            <Text
              variant="body"
              size="medium"
              font="Ownglyph ryurue"
              color="neutral-80"
              className="line-clamp-8 leading-[100%] font-normal"
            >
              {letter}
            </Text>
          </section>
        ))}
      </div>
    </div>
  )
}
