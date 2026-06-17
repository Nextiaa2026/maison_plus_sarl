"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import FullBleedSection from '@/components/FullBleedSection'
import { Button } from '@/components/ui/button'
import { images } from '@/lib/images'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Building01Icon,
  ShieldIcon,
  UserGroupIcon,
  ArrowRight01Icon
} from '@hugeicons/core-free-icons'

export default function AboutPage() {
  const values = [
    {
      title: "Excellence & Rigueur",
      desc: "Nous ne laissons rien au hasard. De la précision d'une chape de béton en BTP à la propreté d'un drap de lit meublé, nos standards sont rigoureux.",
      icon: ShieldIcon,
      color: "bg-primary/10 text-primary",
      image: images.btp.tools
    },
    {
      title: "Innovation & Tech",
      desc: "Nous mettons la technologie au service de l'humain. Notre conciergerie digitale et nos outils connectés garantissent réactivité et transparence.",
      icon: Building01Icon,
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400",
      image: images.interiors.livingRoom
    },
    {
      title: "Service & Attention",
      desc: "Le 'plus' de notre nom incarne ce supplément d'âme : des attentions personnalisées et un sens de l'accueil digne de la grande hôtellerie.",
      icon: UserGroupIcon,
      color: "bg-teal-100 text-teal-600 dark:bg-teal-950/30 dark:text-teal-400",
      image: images.interiors.bedroom
    }
  ]

  const timelineSteps = [
    {
      year: "2022",
      title: "Fondation & Focus BTP",
      desc: "Création de Maison Plus SARL avec une activité initiale centrée sur le bâtiment et les travaux publics (BTP) et la rénovation lourde d'appartements à Paris.",
      image: images.btp.site
    },
    {
      year: "2023",
      title: "Lancement des Locations Meublées",
      desc: "Afin de proposer une solution clé en main aux investisseurs, Maison Plus développe son parc locatif meublé de standing, associant travaux d'intérieur et gestion.",
      image: images.hero.penthouse
    },
    {
      year: "2024",
      title: "Révolution de la Conciergerie Digitale",
      desc: "Conception et déploiement de notre application interne de conciergerie digitale pour automatiser l'intendance, les check-ins connectés et l'assistance.",
      image: images.interiors.kitchen
    },
    {
      year: "2025",
      title: "Expansion Nationale",
      desc: "Maison Plus structure son offre unifiée (BTP, Locations, Conciergerie, Assurance) et déploie ses équipes locales dans les grandes métropoles françaises.",
      image: images.exteriors.modernHouse
    }
  ]

  return (
    <div className="flex flex-col w-full">

      <PageHero
        badge="Qui Sommes-Nous ?"
        title="L'alliance de la rigueur BTP et de l'art de recevoir"
        subtitle="Maison Plus SARL simplifie la vie des propriétaires immobiliers et offre une expérience d'hébergement exceptionnelle en intégrant tous les métiers du bâtiment et de l'hospitalité."
        imageUrl={images.breadcrumb.about}
        breadcrumbs={[{ label: "À Propos" }]}
      />

      {/* CORE VISION & IMAGE */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-6 text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                Notre Histoire
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                À l&apos;origine, Maison Plus est une entreprise générale de bâtiment spécialisée dans les chantiers de rénovation haut de gamme. Constatant les difficultés récurrentes des propriétaires à faire gérer leurs appartements après travaux et à y attirer des locataires exigeants, nous avons imaginé une offre globale unique.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                En réunissant sous une même enseigne des ingénieurs BTP, des décorateurs d&apos;intérieur, des spécialistes de l&apos;assurance et un service de conciergerie digitale d&apos;excellence, nous assurons la maîtrise totale de la chaîne de valeur.
              </p>

              <div className="pt-4 flex flex-wrap gap-3">
                <Link href="/services">
                  <Button className="bg-primary hover:bg-primary/95 text-primary-foreground font-serif italic font-bold rounded-full px-6 text-xs gap-2">
                    Découvrir notre offre intégrée
                    <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" className="font-serif italic font-bold rounded-full px-6 text-xs gap-2">
                    Voir nos réalisations
                    <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden col-span-1">
                <Image src={images.btp.plans} alt="Plans de construction" fill sizes="50vw" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden col-span-1 mt-8">
                <Image src={images.interiors.loft} alt="Intérieur rénové" fill sizes="50vw" className="object-cover" />
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden col-span-2">
                <Image src={images.exteriors.balcony} alt="Terrasse avec vue" fill sizes="100vw" className="object-cover" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 100VH VISION */}
      <FullBleedSection
        imageUrl={images.hero.skyline}
        imageAlt="Skyline urbain et immobilier de standing"
        badge="Notre Vision"
        title="Un peu plus, partout."
        description="Nous croyons que chaque projet immobilier mérite un supplément d'excellence — en BTP, en hospitalité et en technologie connectée."
        ctaLabel="Rencontrer notre équipe"
        ctaHref="/teams"
        align="right"
      />

      {/* VALUES WITH IMAGES */}
      <section className="py-20 bg-card border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
              Nos Valeurs Cardinales
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
              Ce qui nous guide au quotidien
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex flex-col rounded-2xl bg-background border border-border/50 hover:shadow-lg hover:border-primary/30 transition-all group overflow-hidden text-left"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image src={v.image} alt={v.title} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm -mt-10 relative z-10 border-4 border-background ${v.color}`}>
                    <HugeiconsIcon icon={v.icon} size={22} />
                  </div>
                  <h3 className="text-md font-bold text-foreground mb-3">{v.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE WITH IMAGES */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
              Notre Parcours
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
              Les étapes de notre développement
            </h2>
          </div>

          <div className="space-y-16">
            {timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
                    <Image src={step.image} alt={step.title} fill sizes="50vw" className="object-cover" />
                    <span className="absolute top-4 left-4 text-sm font-semibold text-white bg-primary px-3 py-1 rounded-full">
                      {step.year}
                    </span>
                  </div>
                </div>
                <div className={`lg:col-span-7 space-y-3 text-left ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="text-xl font-bold text-foreground">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-[oklch(0.55_0.10_171)] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-serif italic">
            Donnez de la valeur à vos actifs immobiliers
          </h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Nos experts BTP, immobiliers et gestion locative sont à votre écoute pour concevoir la formule parfaitement adaptée à vos exigences.
          </p>
          <div className="flex justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 font-serif italic font-bold px-8 py-3 rounded-full text-xs shadow-lg transition-colors">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
