"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MaisonHeading from './MaisonHeading'
import { Button } from './ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Menu01Icon,
  Cancel01Icon,
  ChevronDownIcon,
  ArrowRight01Icon,
  Home01Icon,
  Building01Icon,
  UserGroupIcon,
  InformationCircleIcon,
  Mail01Icon
} from '@hugeicons/core-free-icons'

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position to change background style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const navLinks = [
    { name: 'Accueil', href: '/', icon: Home01Icon },
    { name: 'Nos Services', href: '/services', icon: Building01Icon },
    { name: 'Nos Réalisations', href: '/projects', icon: Building01Icon },
    { name: 'À Propos', href: '/about', icon: InformationCircleIcon },
    { name: 'Notre Équipe', href: '/teams', icon: UserGroupIcon },
    { name: 'Contact', href: '/contact', icon: Mail01Icon },
  ]

  const services = [
    { name: 'BTP & Rénovation', href: '/services#btp', desc: 'Rénovation, gros œuvre et finitions premium.' },
    { name: 'Locations Meublées', href: '/services#locations', desc: 'Appartements haut de gamme prêts à vivre.' },
    { name: 'Conciergerie Digitale', href: '/services#conciergerie', desc: 'Gestion et assistance locataire connectée.' },
    { name: 'Pack Bienvenue', href: '/services#bienvenue', desc: 'Accueil personnalisé et kits d\'installation.' },
    { name: 'Assurance Location', href: '/services#assurance', desc: 'Garanties et couvertures locatives sur mesure.' },
    { name: 'Prestation de Service', href: '/services#prestations', desc: 'Maintenance, ménage et assistance quotidienne.' },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/40 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <MaisonHeading size="md" priority />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              
              if (link.name === 'Nos Services') {
                return (
                  <div key={link.name} className="relative group py-2">
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary ${
                        isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
                      }`}
                    >
                      {link.name}
                      <HugeiconsIcon icon={ChevronDownIcon} size={14} className="transition-transform group-hover:rotate-180" />
                    </button>
                    {/* Services Dropdown */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full w-80 bg-card border border-border/50 rounded-xl shadow-xl p-4 grid grid-cols-1 gap-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
                      <div className="text-[10px] font-bold text-muted-foreground tracking-wider uppercase mb-1 px-3">
                        Nos Services Immobiliers & BTP
                      </div>
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex flex-col p-2.5 rounded-lg hover:bg-accent hover:text-accent-foreground group/item transition-colors"
                        >
                          <span className="text-sm font-semibold flex items-center justify-between">
                            {service.name}
                            <HugeiconsIcon
                              icon={ArrowRight01Icon}
                              size={12}
                              className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all"
                            />
                          </span>
                          <span className="text-xs text-muted-foreground font-normal line-clamp-1 mt-0.5">
                            {service.desc}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary relative py-1 ${
                    isActive ? 'text-primary font-semibold' : 'text-muted-foreground'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif italic font-bold px-6 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all text-xs">
                Nous contacter
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <HugeiconsIcon icon={isOpen ? Cancel01Icon : Menu01Icon} size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer (Overlay menu) */}
      <div
        className={`fixed inset-0 z-50 md:hidden bg-background/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between px-6 h-20 border-b border-border/40">
            <Link href="/" onClick={() => setIsOpen(false)} className="flex-shrink-0">
              <MaisonHeading size="md" priority />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              <HugeiconsIcon icon={Cancel01Icon} size={24} />
            </button>
          </div>

          {/* Mobile menu links */}
          <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                
                return (
                  <div key={link.name} className="space-y-2">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-3 text-lg font-semibold px-3 py-2 rounded-lg transition-colors ${
                        isActive ? 'text-primary bg-card border border-primary/30 shadow-sm' : 'text-foreground hover:bg-accent/50'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isActive ? 'bg-primary text-primary-foreground shadow-sm' : 'bg-muted text-muted-foreground'
                      }`}>
                        <HugeiconsIcon icon={link.icon} size={18} />
                      </span>
                      {link.name}
                    </Link>
                    
                    {link.name === 'Nos Services' && (
                      <div className="pl-11 grid grid-cols-1 gap-2 border-l border-border/60 ml-5 py-1">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1 flex items-center justify-between"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                            <HugeiconsIcon icon={ArrowRight01Icon} size={12} className="opacity-60" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>
          </div>

          {/* Mobile menu footer */}
          <div className="p-6 border-t border-border/40 space-y-4">
            <Link href="/contact" className="block w-full">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-serif italic font-bold py-3 rounded-full text-center shadow-lg shadow-primary/20 text-xs">
                Nous contacter
              </Button>
            </Link>
            <div className="text-center text-xs text-muted-foreground">
              Slogan : &quot;Votre maison, où que vous soyez, avec un peu plus.&quot;
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
