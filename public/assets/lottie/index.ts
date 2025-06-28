import LetterEmpty from "./letter-empty.json"
import LetterOpen from "./letter-open.json"
import PaperBoat from "./paper-boat.json"
import ShipFlutting from "./ship-flutting.json"

export const HOME_LOTTIES = {
  EMPTY: LetterEmpty,
  IN_DELIVERY: PaperBoat,
  ARRIVED: LetterOpen,
  SHIP_FLUTTING: ShipFlutting,
} as const
