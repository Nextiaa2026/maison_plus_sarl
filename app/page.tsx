"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import FullBleedSection from '@/components/FullBleedSection'
import MaisonHeading from '@/components/MaisonHeading'
import { Button } from '@/components/ui/button'
import { images } from '@/lib/images'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  ArrowRight01Icon,
  Home01Icon,
  Building01Icon,
  SmartPhone01Icon,
  GiftIcon,
  ShieldIcon,
  UserGroupIcon
} from '@hugeicons/core-free-icons'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function HomePage() {
  const brandPillars = [
    {
      title: "Plus de Confort",
      desc: "Des espaces de vie meublés de standing, pensés et équipés pour votre bien-être immédiat, sans compromis.",
      icon: Home01Icon,
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Plus de Sérénité",
      desc: "Un accompagnement technique BTP complet et des contrats d'assurance garantissant vos investissements.",
      icon: ShieldIcon,
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-950/30 dark:text-emerald-400"
    },
    {
      title: "Plus de Proximité",
      desc: "Une conciergerie digitale réactive et des équipes locales pour répondre à tous vos besoins en temps réel.",
      icon: UserGroupIcon,
      color: "bg-teal-100 text-teal-600 dark:bg-teal-950/30 dark:text-teal-400"
    }
  ]

  const featuredServices = [
    {
      id: "btp",
      title: "BTP & Rénovation",
      desc: "Rénovation d'intérieur haut de gamme, gros œuvre, finitions méticuleuses et suivi de chantier transparent.",
      icon: Building01Icon
    },
    {
      id: "locations",
      title: "Locations Meublées",
      desc: "Des appartements et villas de standing, entièrement équipés, prêts pour vos séjours professionnels ou privés.",
      icon: Home01Icon
    },
    {
      id: "conciergerie",
      title: "Conciergerie Digitale",
      desc: "Gestion intelligente des clés, check-in autonomes ou accueillis, et assistance technique via notre application.",
      icon: SmartPhone01Icon
    },
    {
      id: "bienvenue",
      title: "Pack Bienvenue",
      desc: "Kits de bienvenue personnalisés avec produits locaux de choix et guide essentiel pour une installation sereine.",
      icon: GiftIcon
    },
    {
      id: "assurance",
      title: "Assurance Location",
      desc: "Garanties loyers impayés et couverture multirisque habitation adaptées aux propriétaires et locataires.",
      icon: ShieldIcon
    },
    {
      id: "prestations",
      title: "Prestations de Service",
      desc: "Ménage hôtelier, repassage, maintenance technique et entretien régulier de vos biens immobiliers.",
      icon: UserGroupIcon
    }
  ]

  const portfolioProjects = [
    {
      title: "Rénovation Loft Haussmannien",
      category: "BTP & Rénovation",
      tag: "Paris 8e",
      url: images.interiors.loft,
      directive: "Photographie lumineuse d'un grand salon style haussmannien avec moulures blanches, cheminée d'époque, parquet en point de Hongrie ciré, et grand miroir doré. Mobilier scandinave épuré dans les tons crème."
    },
    {
      title: "Appartement Penthouse 'Horizon'",
      category: "Locations Meublées",
      tag: "Lyon Presqu'île",
      url: images.interiors.livingRoom,
      directive: "Intérieur d'un appartement penthouse très haut de gamme au coucher du soleil, grande baie vitrée avec vue panoramique sur la ville, meubles design en velours vert émeraude, luminaire en laiton doré."
    },
    {
      title: "Villa d'Architecte Contemporaine",
      category: "Construction & BTP",
      tag: "Côte d'Azur",
      url: images.exteriors.villaPool,
      directive: "Façade extérieure d'une villa cubique blanche d'architecte contemporain, terrasse en bois de teck avec transats au bord d'une piscine à débordement turquoise. Palmiers et ciel bleu azur en arrière-plan."
    },
    {
      title: "Appartement d'Affaires 'Le Splendide'",
      category: "Locations Meublées",
      tag: "Bordeaux Centre",
      url: images.interiors.bedroom,
      directive: "Chambre à coucher épurée et moderne de type suite hôtelière de luxe, linge de lit blanc soyeux, tête de lit en chêne massif avec liseuses intégrées, grand miroir rond reflétant une plante verte."
    },
    {
      title: "Résidence 'Les Jardins'",
      category: "Locations Meublées",
      tag: "Nice",
      url: images.interiors.dining,
      directive: "Salle à manger contemporaine baignée de lumière, table en marbre, chaises design et baie vitrée ouvrant sur un jardin méditerranéen."
    },
    {
      title: "Extension Bois & Verre",
      category: "BTP & Construction",
      tag: "Annecy",
      url: images.exteriors.modernHouse,
      directive: "Maison contemporaine avec extension en bois et grandes baies vitrées, intégrée dans un paysage montagnard."
    }
  ]

  const lifestyleGallery = [
    { url: images.interiors.kitchen, label: "Cuisine équipée" },
    { url: images.interiors.bathroom, label: "Salle de bain spa" },
    { url: images.exteriors.balcony, label: "Terrasse panoramique" },
    { url: images.interiors.dining, label: "Espace convivial" },
    { url: images.exteriors.facade, label: "Façade rénovée" },
    { url: images.hero.luxuryHome, label: "Maison de standing" },
  ]

  const testimonials = [
    {
      name: "Antoine L.",
      role: "Propriétaire bailleur",
      text: "La conciergerie digitale de Maison Plus a transformé ma gestion locative. Mes locataires adorent le pack bienvenue et l'assistance technique est d'une efficacité incroyable. Un vrai 'plus' !"
    },
    {
      name: "Sarah M.",
      role: "Expatriée & Locataire",
      text: "Arrivée à Paris pour le travail, j'ai trouvé un appartement meublé d'une propreté exemplaire, décoré avec beaucoup de goût. Le pack de bienvenue m'a permis de m'installer instantanément en toute sérénité."
    },
    {
      name: "Philippe D.",
      role: "Client Rénovation BTP",
      text: "Des travaux de rénovation totale réalisés dans les délais annoncés et avec un niveau de finition exceptionnel. Les équipes BTP de Maison Plus sont de vrais professionnels de confiance."
    }
  ]

  return (
    <div className="flex flex-col w-full overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 bg-gradient-to-br from-[oklch(0.99_0.003_171)] via-[oklch(0.96_0.015_171)] to-[oklch(0.93_0.03_171)] dark:from-[oklch(0.15_0.015_171)] dark:to-[oklch(0.12_0.02_171)]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(var(--color-primary)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <MaisonHeading size="xl" priority />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-foreground">
                Votre maison, <br />
                <span className="text-primary bg-gradient-to-r from-primary to-[oklch(0.65_0.12_171)] bg-clip-text text-transparent">où que vous soyez</span>,<br />
                avec un peu plus.
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                BTP, Rénovation haut de gamme, locations meublées d&apos;exception et conciergerie digitale intégrée. Nous apportons ce &quot;plus&quot; d&apos;excellence, de confort et de sérénité à chacun de vos projets immobiliers.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-primary-foreground font-serif italic font-bold px-8 py-4 rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all text-xs gap-2">
                    Estimer mon projet
                    <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-border hover:bg-muted/50 font-serif italic font-bold px-8 py-4 rounded-full text-xs">
                    Découvrir nos services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Image Container */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl transform rotate-3 scale-95 pointer-events-none" />
              <ImagePlaceholder
                imageUrl={images.hero.villa}
                directive="Photographie haut de gamme d'une magnifique villa contemporaine d'architecte avec piscine à débordement éclairée au crépuscule. Reflets chauds et ciel dégradé de bleu à orange."
                aspectRatio="square"
                className="shadow-2xl relative z-10 border border-white/20 dark:border-white/5"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* BRAND PILLARS SECTION */}
      <section className="py-20 bg-card border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
              Notre Philosophie
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
              Pourquoi choisir Maison Plus ?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Nous réinventons les services de l&apos;immobilier et de la construction en plaçant la qualité, le détail et l&apos;humain au cœur de nos engagements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex flex-col p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform ${pillar.color}`}>
                  <HugeiconsIcon icon={pillar.icon} size={22} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 100VH — L'ART DE VIVRE MEUBLÉ */}
      <FullBleedSection
        imageUrl={images.hero.penthouse}
        imageAlt="Appartement meublé haut de gamme baigné de lumière"
        badge="Pôle Locations Meublées"
        title="L'art de vivre meublé."
        description="Vivez l'exception dans des espaces pensés pour votre confort absolu. Literie hôtelière de premier choix, design soigné par des architectes d'intérieur et conciergerie active à chaque instant."
        ctaLabel="Visiter nos résidences"
        ctaHref="/projects"
        align="left"
        showScrollCue
      />

      {/* SERVICE EXPLORER GRID */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl text-left">
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
                Nos Métiers & Expertise
              </span>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
                Une offre complète pour vos biens
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                De la construction à la conciergerie en passant par l&apos;assurance, nous offrons un accompagnement de bout en bout pour optimiser et entretenir votre patrimoine.
              </p>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="border-border hover:bg-muted/50 rounded-full gap-2 shrink-0 font-serif italic font-bold text-xs">
                Voir toutes nos réalisations
                <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="flex flex-col p-6 rounded-2xl bg-card border border-border/40 hover:border-primary/40 hover:shadow-md hover:translate-y-[-2px] transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <HugeiconsIcon icon={service.icon} size={18} />
                  </div>
                  <h3 className="text-md font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed flex-grow">
                  {service.desc}
                </p>
                <div className="mt-4 flex items-center text-xs font-serif italic font-bold text-primary gap-1 group-hover:translate-x-1 transition-transform">
                  En savoir plus
                  <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 100VH — L'ART DE BÂTIR */}
      <FullBleedSection
        imageUrl={images.btp.structure}
        imageAlt="Chantier BTP moderne en cours de construction"
        badge="Pôle BTP & Rénovation"
        title="L'art de bâtir."
        description="Concevoir des fondations solides et rénover des espaces intérieurs avec une méticulosité absolue. Nos ingénieurs BTP et compagnons artisans concrétisent vos plans dans le respect des délais et des exigences thermiques."
        ctaLabel="Lancer mon projet BTP"
        ctaHref="/services#btp"
        align="right"
      />

      {/* PORTFOLIO SHOWCASE CAROUSEL */}
      <section className="py-20 bg-card border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
              Réalisations & Logements
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
              Découvrez nos réalisations
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Un aperçu en images de nos chantiers BTP finalisés et de nos appartements meublés disponibles à la location.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 mb-12">
            <Link href="/projects">
              <Button variant="outline" className="border-border hover:bg-muted/50 rounded-full gap-2 font-serif italic font-bold text-xs">
                Voir le portfolio complet
                <HugeiconsIcon icon={ArrowRight01Icon} size={12} />
              </Button>
            </Link>
          </div>

          <div className="relative px-8">
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {portfolioProjects.map((project, idx) => (
                  <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 pl-4">
                    <Link href="/projects" className="block">
                    <div className="flex flex-col rounded-2xl overflow-hidden border border-border/40 bg-background hover:shadow-lg transition-all duration-300 group">
                      
                      {/* Visual placeholder with directive */}
                      <ImagePlaceholder
                        imageUrl={project.url}
                        directive={project.directive}
                        aspectRatio="video"
                        className="rounded-none border-b border-border/40"
                      />

                      {/* Card Content */}
                      <div className="p-5 space-y-3 text-left">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {project.category}
                          </span>
                          <span className="text-[10px] font-semibold text-muted-foreground font-mono">
                            {project.tag}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-xs font-serif italic text-primary/80">
                          Découvrir le projet →
                        </p>
                      </div>
                    </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 bg-background border border-border" />
              <CarouselNext className="absolute right-0 bg-background border border-border" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* LIFESTYLE IMAGE MOSAIC */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
              Galerie Immobilière
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
              Des espaces qui <span className="font-serif italic text-primary">inspirent</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Intérieurs lumineux, terrasses panoramiques et finitions d&apos;exception — un aperçu visuel de l&apos;univers Maison Plus.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {lifestyleGallery.map((item, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl group ${
                  i === 0 ? 'col-span-2 row-span-2 aspect-[4/3] md:aspect-auto md:min-h-[320px]' : 'aspect-square'
                }`}
              >
                <Image
                  src={item.url}
                  alt={item.label}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-3 left-3 text-xs font-serif italic font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-card border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
              Témoignages Clients
            </span>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
              Ce que disent nos clients
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              La plus belle reconnaissance de notre promesse &quot;un peu plus&quot; réside dans l&apos;avis des personnes que nous accompagnons au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-8 rounded-2xl bg-background border border-border/40 hover:shadow-md transition-shadow relative"
              >
                {/* Quotes decoration */}
                <span className="absolute top-4 right-6 text-6xl font-serif text-primary/10 select-none pointer-events-none">“</span>
                
                <div className="space-y-4">
                  {/* Stars indicators */}
                  <div className="flex gap-1 text-primary">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s} className="text-base">★</span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed italic">
                    &quot;{t.text}&quot;
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-bold text-xs text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-foreground">{t.name}</h5>
                    <span className="text-[10px] text-muted-foreground">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA SECTION */}
      <section className="py-16 bg-gradient-to-br from-primary to-[oklch(0.55_0.10_171)] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-serif italic">
            Prêt à démarrer l&apos;aventure avec Maison Plus ?
          </h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Que vous souhaitiez faire des travaux, louer un appartement de standing ou confier l&apos;intendance de votre propriété, notre équipe est là pour vous.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 font-serif italic font-bold px-8 py-3 rounded-full text-xs shadow-lg transition-colors">
                Demander un devis
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white font-serif italic font-bold px-8 py-3 rounded-full text-xs">
                Nous écrire directement
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}