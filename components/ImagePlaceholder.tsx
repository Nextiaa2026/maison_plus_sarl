"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { HugeiconsIcon } from '@hugeicons/react'
import { Building01Icon, InformationCircleIcon } from '@hugeicons/core-free-icons'

interface ImagePlaceholderProps {
  directive: string
  imageUrl?: string
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide'
  className?: string
}

export default function ImagePlaceholder({
  directive,
  imageUrl,
  aspectRatio = 'video',
  className = ''
}: ImagePlaceholderProps) {
  const [hovered, setHovered] = useState(false)

  const aspectClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[21/9]'
  }

  const hasImage = !!imageUrl

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative w-full ${aspectClasses[aspectRatio]} overflow-hidden rounded-2xl border transition-all duration-300 ${
        hasImage 
          ? 'border-border/40 bg-black/10 hover:shadow-xl' 
          : 'bg-gradient-to-tr from-[oklch(0.92_0.005_171)] to-[oklch(0.95_0.02_171)] border-border/80 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5'
      } flex flex-col items-center justify-center p-6 text-center group ${className}`}
    >
      {hasImage ? (
        <>
          {/* Main Visual Image */}
          <Image
            src={imageUrl}
            alt={directive}
            fill
            sizes="(max-w-7xl) 100vw, 33vw"
            className={`object-cover transition-all duration-700 ${
              hovered ? 'scale-105 blur-[3px] brightness-50' : 'scale-100 blur-0 brightness-100'
            }`}
            priority={false}
          />
          
          {/* Glassmorphic Small Indicator (Visible when not hovered) */}
          <div 
            className={`absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[9px] font-bold text-white flex items-center gap-1 shadow-sm transition-all duration-300 ${
              hovered ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <HugeiconsIcon icon={InformationCircleIcon} size={10} />
            <span>Info Image</span>
          </div>

          {/* Hover Directive Overlay */}
          <div
            className={`absolute inset-0 z-20 flex flex-col items-center justify-center p-6 transition-all duration-300 ${
              hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            <div className="max-w-md space-y-2 text-white">
              <span className="inline-block text-[10px] font-bold text-primary bg-primary/20 backdrop-blur-md tracking-widest uppercase px-2.5 py-1 rounded-full border border-primary/30">
                Directive Visuelle
              </span>
              <p className="text-xs leading-relaxed italic px-4 font-medium drop-shadow-sm text-white/90">
                &quot;{directive}&quot;
              </p>
              <p className="text-[9px] text-white/50 tracking-wider">
                Unsplash · Pexels
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Background patterns for empty placeholders */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 pointer-events-none" />

          {/* Decorative center icon */}
          <div className="mb-4 w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary border border-border shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
            <HugeiconsIcon icon={Building01Icon} size={20} />
          </div>

          {/* Label and directive instructions */}
          <div className="relative z-10 max-w-md space-y-2">
            <span className="inline-block text-[10px] font-bold text-primary bg-primary/10 tracking-widest uppercase px-2.5 py-1 rounded-full">
              Directive Visuelle
            </span>
            <h5 className="text-xs font-semibold text-foreground tracking-tight">
              Emplacement Média Suggéré
            </h5>
            <p className="text-xs text-muted-foreground leading-relaxed italic px-4 group-hover:text-foreground/90 transition-colors">
              &quot;{directive}&quot;
            </p>
          </div>
        </>
      )}

      {/* Technical aspect info in bottom corner */}
      <div className="absolute bottom-3 right-3 z-10 text-[9px] font-mono text-muted-foreground bg-white/70 px-2 py-0.5 rounded border border-border/50 uppercase select-none">
        Ratio: {aspectRatio}
      </div>
    </div>
  )
}
