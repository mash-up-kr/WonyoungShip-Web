interface LetterContentProp {
  content: string
}

export const LetterContent = ({ content }: LetterContentProp) => {
  return <div>{content}</div>
}
