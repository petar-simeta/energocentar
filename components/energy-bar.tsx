interface EnergyBarProps {
  variant?: "full" | "green"
  className?: string
}

export function EnergyBar({ variant = "full", className = "" }: EnergyBarProps) {
  return (
    <div
      className={`${variant === "green" ? "energy-bar-green" : "energy-bar"} ${className}`}
      aria-hidden="true"
    />
  )
}
