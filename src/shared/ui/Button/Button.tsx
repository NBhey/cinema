interface Button {
  text: string
  className?: string
}

export const Button = ({ text, className }: Button) => {
    
  return <button className={`${className}`}>{text}</button>
}
