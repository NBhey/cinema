interface Typography {
  tag: string
  variant: string
  children: React.ReactElement
}

export const Typography = ({ tag, variant, children }: Typography) => {
  if (tag === 'p') {
    return <p> {children}</p>
  }
}
