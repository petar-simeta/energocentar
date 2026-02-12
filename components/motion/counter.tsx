interface CounterProps {
  value: string
  className?: string
}

export function Counter({ value, className }: CounterProps) {
  return <span className={className}>{value}</span>
}
