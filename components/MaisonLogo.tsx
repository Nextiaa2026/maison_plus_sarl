import React from 'react'
import Image from 'next/image'
import { LOGO_HEADING_SRC } from './MaisonHeading'

interface MaisonLogoProps {
  className?: string
  iconOnly?: boolean
  light?: boolean
  /** Use logo 3 (handwritten Maison+) — default for navbar/header */
  heading?: boolean
}

export default function MaisonLogo({
  className = '',
  iconOnly = false,
  light = false,
  heading = true,
}: MaisonLogoProps) {
  const logoSrc = heading
    ? LOGO_HEADING_SRC
    : light
      ? '/logo/MAISON PLUS (2).png'
      : '/logo/MAISON PLUS (1).png'

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      {iconOnly ? (
        <svg
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-auto"
        >
          <circle cx="50" cy="60" r="40" fill={light ? '#FFFFFF' : '#606060'} />
          <path
            d="M32 75V43L48 62L64 43V75"
            stroke={light ? '#606060' : '#FFFFFF'}
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M62 42C56 42 50 46 50 54C50 62 56 66 62 66C68 66 72 62 72 60"
            stroke="#61BBA4"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M66 54H82M74 46V62"
            stroke="#61BBA4"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <div className={`relative ${heading ? 'h-11 w-40' : 'h-12 w-44'}`}>
          <Image
            src={logoSrc}
            alt="Maison Plus"
            fill
            className="object-contain object-left"
            priority
          />
        </div>
      )}
    </div>
  )
}
