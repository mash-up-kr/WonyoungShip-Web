"use client"

import { useState } from "react"

import { MonthSwipeNavigator } from "../../month-swipe-navigator"
import { LETTERS_RESPONSE } from "../calendar"

import { FavoriteLetterFilterButton } from "./favorite-letter-filter-button"
import { ListLetterItem } from "./list-letter-item"

export const ListView = () => {
  const [isFavoriteFiltered, setIsFavoriteFiltered] = useState(false)

  const handleFavoritFilterChanged = () => {
    setIsFavoriteFiltered((prev) => !prev)
  }

  const letters = isFavoriteFiltered
    ? LETTERS_RESPONSE.letters.filter((letter) => letter.marked)
    : LETTERS_RESPONSE.letters

  return (
    <MonthSwipeNavigator>
      <div className="flex flex-col gap-3 px-3">
        <div className="pl-4">
          <FavoriteLetterFilterButton
            isFavoriteFiltered={isFavoriteFiltered}
            onFavoritFilterChange={handleFavoritFilterChanged}
          />
        </div>
        <ul className="grid grid-cols-2 gap-2">
          {letters.map((letter) => (
            <ListLetterItem key={letter.letterId} letter={letter} />
          ))}
        </ul>
      </div>
    </MonthSwipeNavigator>
  )
}
