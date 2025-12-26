type TextProps = {
  text: string
  className?: string
}

export const Header1 = ({ text, className }: TextProps) => {
  return (
    <h1 className={`text-5xl font-semibold tracking-tight ${className ?? ""}`}>
      {text}
    </h1>
  )
}

export const Header2 = ({ text, className }: TextProps) => {
  return (
    <h2 className={`text-3xl font-semibold tracking-tight ${className ?? ""}`}>
      {text}
    </h2>
  )
}

export const Header3 = ({ text, className }: TextProps) => {
  return (
    <h3 className={`text-2xl font-medium tracking-tight ${className ?? ""}`}>
      {text}
    </h3>
  )
}

export const Text = ({ text, className }: TextProps) => {
  return (
    <p className={`text-base text-neutral-300 ${className ?? ""}`}>
      {text}
    </p>
  )
}

export const Muted = ({ text, className }: TextProps) => {
  return (
    <p className={`text-sm text-neutral-500 ${className ?? ""}`}>
      {text}
    </p>
  )
}

export const Mono = ({ text, className }: TextProps) => {
  return (
    <span className={`font-mono text-sm ${className ?? ""}`}>
      {text}
    </span>
  )
}
