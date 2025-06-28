import { Icon, Text } from "@/components/common"

interface FavoriteLetterFilterButtonProps {
  isFavoriteFiltered: boolean
  onFavoritFilterChange: VoidFunction
}

export const FavoriteLetterFilterButton = ({
  isFavoriteFiltered,
  onFavoritFilterChange,
}: FavoriteLetterFilterButtonProps) => {
  return (
    <div className="flex items-center gap-1">
      <button
        role="switch"
        onClick={onFavoritFilterChange}
        aria-checked={isFavoriteFiltered}
      >
        <Icon
          icon="star"
          fill={isFavoriteFiltered ? "secondary" : "disabled"}
          className="transition-all duration-200 ease-out"
          ariaLabel="즐겨찾기"
        />
      </button>
      <Text variant="body" size="small" color="secondary">
        저장된 편지만 보기
      </Text>
    </div>
  )
}
