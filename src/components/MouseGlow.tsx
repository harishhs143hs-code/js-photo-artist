import { useEffect, useState } from 'react'

export default function MouseGlow() {
  const [point, setPoint] = useState({ x: -100, y: -100, visible: false, active: false })

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!finePointer.matches || reducedMotion.matches) return

    const move = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null
      setPoint({
        x: event.clientX,
        y: event.clientY,
        visible: true,
        active: !!target?.closest('a, button, [role="button"], input, textarea, select'),
      })
    }
    const leave = () => setPoint(p => ({ ...p, visible: false }))
    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', leave)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', leave)
    }
  }, [])

  if (!point.visible) return null
  return (
    <div className={`mouse-glow${point.active ? ' mouse-glow-active' : ''}`} aria-hidden="true"
      style={{ left: point.x, top: point.y }} />
  )
}
