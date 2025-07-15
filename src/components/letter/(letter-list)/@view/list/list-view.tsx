"use client"

import { useState } from "react"

import { useFetchLetterList } from "../../hooks/use-fetch-letter-list"
import { MonthSwipeNavigator } from "../../month-swipe-navigator"

import { FavoriteLetterFilterButton } from "./favorite-letter-filter-button"
import { ListLetterItem } from "./list-letter-item"

export const ListView = () => {
  const [isFavoriteFiltered, setIsFavoriteFiltered] = useState(false)
  const { letterList } = useFetchLetterList()

  const handleFavoritFilterChanged = () => {
    setIsFavoriteFiltered((prev) => !prev)
  }

  const letters = isFavoriteFiltered
    ? letterList.filter((letter) => letter.marked)
    : letterList

  return (
    <MonthSwipeNavigator>
      <div className="flex flex-col gap-3 px-3">
        <div className="pl-4">
          <FavoriteLetterFilterButton
            isFavoriteFiltered={isFavoriteFiltered}
            onFavoritFilterChange={handleFavoritFilterChanged}
          />
        </div>
        <ul className="grid grid-cols-2 gap-2 pb-4">
          {letters.map((letter) => (
            <ListLetterItem key={letter.letterId} letter={letter} />
          ))}
        </ul>
      </div>
    </MonthSwipeNavigator>
  )
}
