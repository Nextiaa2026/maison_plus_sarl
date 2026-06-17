"use client"

import React from 'react'
import Link from 'next/link'
import MaisonLogo from './MaisonLogo'
import { Button } from './ui/button'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  CallIcon,
  Mail01Icon,
  Building01Icon,
  ArrowRight01Icon
} from '@hugeicons/core-free-icons'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Services', href: '/services' },
    { name: 'Nos Réalisations', href: '/projects' },
    { name: 'À Propos', href: '/about' },
    { name: 'Notre Équipe', href: '/teams' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'BTP & Construction', href: '/services#btp' },
    { name: 'Locations Meublées', href: '/services#locations' },
    { name: 'Conciergerie Digitale', href: '/services#conciergerie' },
    { name: 'Pack Bienvenue', href: '/services#bienvenue' },
    { name: 'Assurance Location', href: '/services#assurance' },
    { name: 'Prestation de Service', href: '/services#prestations' },
  ]

  return (
    <footer className="bg-[oklch(0.18_0.015_171)] text-white border-t border-white/5 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <MaisonLogo heading={false} light />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed font-medium italic">
              &quot;Votre maison, où que vous soyez, avec un peu plus.&quot;
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <HugeiconsIcon icon={CallIcon} size={14} />
                </div>
                <a href="tel:+33123456789" className="hover:text-primary transition-colors">+33 (0)1 23 45 67 89</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <HugeiconsIcon icon={Mail01Icon} size={14} />
                </div>
                <a href="mailto:contact@maison-plus.com" className="hover:text-primary transition-colors">contact@maison-plus.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-primary">
                  <HugeiconsIcon icon={Building01Icon} size={14} />
                </div>
                <span>12 Rue de la Paix, 75002 Paris, France</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6 lg:pl-10">
            <h4 className="text-md font-semibold tracking-wider text-primary uppercase">
              Plan du Site
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={10}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1.5 group-hover:translate-x-0 transition-all text-primary"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <h4 className="text-md font-semibold tracking-wider text-primary uppercase">
              Nos Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-primary transition-colors flex items-center gap-1.5 group"
                  >
                    <HugeiconsIcon
                      icon={ArrowRight01Icon}
                      size={10}
                      className="opacity-0 group-hover:opacity-100 -translate-x-1.5 group-hover:translate-x-0 transition-all text-primary"
                    />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-6">
            <h4 className="text-md font-semibold tracking-wider text-primary uppercase">
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Inscrivez-vous pour recevoir nos actualités immobilières, offres exclusives et conseils BTP.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div className="relative rounded-lg bg-white/5 border border-white/10 p-1 flex items-center focus-within:border-primary/50 transition-colors">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  required
                  className="bg-transparent text-white text-xs w-full px-3 py-2 outline-none border-none placeholder-gray-500"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-serif italic font-bold rounded-md shadow-md shadow-primary/10 transition-colors shrink-0 text-xs"
                >
                  S&apos;abonner
                </Button>
              </div>
              <p className="text-[10px] text-gray-500">
                En vous abonnant, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </div>

        </div>

        {/* Lower Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-gray-500 gap-4">
          <div>
            &copy; {currentYear} Maison Plus SARL. Tous droits réservés.
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-primary transition-colors">Mentions Légales</Link>
            <Link href="/about" className="hover:text-primary transition-colors">Politique de Confidentialité</Link>
            <Link href="/services" className="hover:text-primary transition-colors">Conditions Générales</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
