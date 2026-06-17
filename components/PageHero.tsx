"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MaisonHeading from '@/components/MaisonHeading'
import { HugeiconsIcon } from '@hugeicons/react'
import { Home01Icon, ChevronRightIcon } from '@hugeicons/core-free-icons'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeroProps {
  title: string
  subtitle?: string
  badge?: string
  imageUrl: string
  imageAlt?: string
  breadcrumbs?: BreadcrumbItem[]
  height?: 'md' | 'lg'
  align?: 'left' | 'center'
}

export default function PageHero({
  title,
  subtitle,
  badge,
  imageUrl,
  imageAlt = '',
  breadcrumbs = [],
  height = 'lg',
  align = 'left',
}: PageHeroProps) {
  const heightClass = height === 'lg' ? 'min-h-[45vh] sm:min-h-[50vh]' : 'min-h-[35vh]'

  return (
    <section className={`relative ${heightClass} flex items-end overflow-hidden`}>
      <Image
        src={imageUrl}
        alt={imageAlt || title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-28">
        {/* Breadcrumb trail */}
        <nav aria-label="Fil d'Ariane" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-medium">
            <li>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors"
              >
                <HugeiconsIcon icon={Home01Icon} size={12} />
                Accueil
              </Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <HugeiconsIcon icon={ChevronRightIcon} size={10} className="text-white/40" />
                {crumb.href ? (
                  <Link href={crumb.href} className="text-white/70 hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-semibold">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className={`max-w-3xl space-y-4 ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
          {badge && (
            <span className="inline-block text-[10px] font-bold text-primary bg-primary/20 backdrop-blur-md tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30">
              {badge}
            </span>
          )}
          <div className={`inline-block bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-lg ${align === 'center' ? 'mx-auto' : ''}`}>
            <MaisonHeading size="lg" priority />
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white/95 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
