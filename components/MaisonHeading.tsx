import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

/** Logo 3 — handwritten Maison+ mark for headings & header */
export const LOGO_HEADING_SRC = '/logo/Maison Plus (5).png'

const sizeMap = {
  sm: { className: 'h-8 w-28', px: 112 },
  md: { className: 'h-10 w-36', px: 144 },
  lg: { className: 'h-14 w-52 sm:h-16 sm:w-60', px: 240 },
  xl: { className: 'h-20 w-72 sm:h-24 sm:w-80', px: 320 },
} as const

interface MaisonHeadingProps {
  size?: keyof typeof sizeMap
  className?: string
  priority?: boolean
}

export default function MaisonHeading({
  size = 'md',
  className = '',
  priority = false,
}: MaisonHeadingProps) {
  const { className: sizeClass, px } = sizeMap[size]

  return (
    <div
      className={cn('relative shrink-0 select-none', sizeClass, className)}
      role="img"
      aria-label="Maison Plus"
    >
      <Image
        src={LOGO_HEADING_SRC}
        alt="Maison Plus"
        fill
        sizes={`${px}px`}
        className="object-contain object-left"
        priority={priority}
      />
    </div>
  )
}
