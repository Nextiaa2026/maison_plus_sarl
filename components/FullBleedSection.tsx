"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'

interface FullBleedSectionProps {
  imageUrl: string
  imageAlt: string
  badge: string
  title: string
  description: string
  ctaLabel: string
  ctaHref: string
  align?: 'left' | 'right'
  showScrollCue?: boolean
}

export default function FullBleedSection({
  imageUrl,
  imageAlt,
  badge,
  title,
  description,
  ctaLabel,
  ctaHref,
  align = 'left',
  showScrollCue = false,
}: FullBleedSectionProps) {
  const isRight = align === 'right'

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className={`absolute inset-0 z-10 ${
            isRight
              ? 'bg-gradient-to-l from-black/85 via-black/45 to-transparent'
              : 'bg-gradient-to-r from-black/85 via-black/45 to-transparent'
          }`}
        />
      </div>

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex ${
          isRight ? 'justify-end text-right' : 'justify-start text-left'
        }`}
      >
        <div className="max-w-xl space-y-6">
          <span className="inline-block text-[10px] font-bold text-primary bg-primary/20 backdrop-blur-md tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30">
            {badge}
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">{title}</h2>
          <p className="text-sm text-gray-300 leading-relaxed font-medium">{description}</p>
          <div className={`pt-2 flex ${isRight ? 'justify-end' : 'justify-start'}`}>
            <Link href={ctaHref}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif italic font-bold px-8 py-4 rounded-full shadow-lg text-xs gap-2"
              >
                {ctaLabel}
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {showScrollCue && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 opacity-80 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Explorer</span>
          <div className="w-1.5 h-6 bg-white/20 rounded-full flex justify-center p-0.5">
            <div className="w-0.5 h-2 bg-primary rounded-full" />
          </div>
        </div>
      )}
    </section>
  )
}
