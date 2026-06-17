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
  ArrowRight01Icon,
  ChevronRightIcon
} from '@hugeicons/core-free-icons'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Chantier Eiffel - Restructuration & BTP",
      category: "BTP & Gros Œuvre",
      location: "Paris 7e",
      url: images.btp.site,
      directive: "Photographie de chantier de rénovation BTP en extérieur, structure en poutres IPN en acier noir posées par des maçons, sous une lumière de fin d'après-midi.",
      desc: "Rénovation lourde d'un immeuble en pierre de taille. Reprise de sous-œuvre, démolition de murs porteurs et pose de structures IPN pour ouvrir les espaces. Isolation phonique renforcée aux normes écologiques.",
      details: ["180 m² rénovés", "IPN sur 3 niveaux", "Performances thermiques améliorées de 40%"]
    },
    {
      title: "Loft Saint-Honoré - Aménagement Meublé",
      category: "Locations Meublées",
      location: "Paris 1er",
      url: images.hero.penthouse,
      directive: "Grand loft d'architecte meublé baigné de soleil sous verrière en fer noir d'atelier, canapé en lin blanc et coussins vert sauge, parquet en chêne naturel brut.",
      desc: "Création et aménagement d'un loft haut de gamme destiné à la location de moyenne durée. Ameublement sur-mesure par nos décorateurs, équipement électroménager haut de gamme et intégration de la conciergerie connectée.",
      details: ["Loft de 95 m²", "Gestion locative intégrale", "Taux d'occupation annuel de 94%"]
    },
    {
      title: "Villa Cap-d'Antibes - Extension & Rénovation",
      category: "Construction & BTP",
      location: "Antibes",
      url: images.exteriors.villaPool,
      directive: "Villa blanche cubique d'architecte contemporaine, grande terrasse en bois exotique, piscine à débordement turquoise et palmiers sous un grand ciel bleu d'été.",
      desc: "Extension contemporaine en béton banché et rénovation complète d'une villa des années 70. Création d'une verrière panoramique, pose d'un carrelage en travertin et installation d'un système de climatisation réversible écologique.",
      details: ["Extension de 70 m²", "Chauffage réversible RE2020", "Piscine à débordement rénovée"]
    },
    {
      title: "Appartement 'Haute Couture' - Rénovation Finitions",
      category: "Locations Meublées & Services",
      location: "Paris 16e",
      url: images.interiors.livingRoom,
      directive: "Salon chic parisien, moulures blanches restaurées à la main, cheminée en marbre noir d'époque, meubles de designers italiens gris anthracite et tapis en laine crème.",
      desc: "Rénovation minutieuse des peintures, parquets et moulures d'un appartement de 120 m². Remise en état des staffs d'époque, décoration raffinée et intégration du pack de bienvenue complet pour l'installation d'expatriés.",
      details: ["120 m² de finitions d'art", "Pack Bienvenue Premium fourni", "Ménage hôtelier régulier configuré"]
    },
    {
      title: "Résidence 'Les Terrasses' - Location Premium",
      category: "Locations Meublées",
      location: "Nice",
      url: images.exteriors.balcony,
      directive: "Terrasse panoramique avec vue mer, mobilier outdoor design et pergola bioclimatique sur un appartement de standing.",
      desc: "Aménagement complet d'un appartement vue mer avec terrasse végétalisée, mobilier outdoor sur-mesure et intégration domotique pour une expérience locative haut de gamme.",
      details: ["110 m² + 40 m² terrasse", "Vue mer panoramique", "Conciergerie 24/7"]
    },
    {
      title: "Maison Bois & Verre - Construction Neuve",
      category: "Construction & BTP",
      location: "Annecy",
      url: images.exteriors.modernHouse,
      directive: "Maison contemporaine en bois et verre, intégrée dans un paysage montagnard avec grandes baies vitrées.",
      desc: "Construction neuve aux normes RE2020 avec ossature bois, isolation performante et menuiseries triple vitrage. Livraison clé en main avec aménagement paysager.",
      details: ["185 m² habitables", "Label RE2020", "Livraison en 14 mois"]
    }
  ]

  const galleryStrip = [
    { url: images.interiors.loft, label: "Loft Haussmannien" },
    { url: images.interiors.kitchen, label: "Cuisine design" },
    { url: images.interiors.bedroom, label: "Suite parentale" },
    { url: images.interiors.bathroom, label: "Salle de bain spa" },
    { url: images.btp.plans, label: "Plans & conception" },
    { url: images.interiors.dining, label: "Espace repas" },
  ]

  return (
    <div className="flex flex-col w-full">

      <PageHero
        badge="Portfolio"
        title="Nos plus beaux projets"
        subtitle="Chantiers BTP, constructions d'extensions et appartements meublés d'exception livrés à nos clients propriétaires et locataires."
        imageUrl={images.breadcrumb.projects}
        breadcrumbs={[{ label: "Nos Réalisations" }]}
      />

      {/* STATS STRIP WITH IMAGE */}
      <section className="py-12 bg-card border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={images.btp.plans}
                alt="Plans de construction et maquette de projet"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "120+", label: "Projets livrés" },
                { value: "94%", label: "Taux d'occupation" },
                { value: "15", label: "Villes couvertes" },
                { value: "48h", label: "Délai de réponse" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left space-y-1">
                  <p className="text-2xl sm:text-3xl font-semibold text-primary">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="flex flex-col bg-card border border-border/40 rounded-3xl overflow-hidden hover:shadow-xl hover:translate-y-[-2px] transition-all duration-300 group text-left"
              >
                <ImagePlaceholder
                  imageUrl={project.url}
                  directive={project.directive}
                  aspectRatio="video"
                  className="rounded-none border-b border-border/40"
                />

                <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground font-mono">
                        {project.location}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="space-y-2 pt-2">
                      <h5 className="text-[10px] font-bold text-foreground uppercase tracking-wider">Chiffres clés du projet :</h5>
                      <ul className="grid grid-cols-1 gap-1.5 text-xs text-muted-foreground">
                        {project.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <span className="text-primary font-bold">✓</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border/40 flex items-center justify-between">
                    <Link href="/contact">
                      <Button className="bg-primary hover:bg-primary/95 text-primary-foreground font-serif italic font-bold px-6 rounded-full text-xs gap-2 shadow-sm">
                        Estimer un projet similaire
                        <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                      </Button>
                    </Link>
                    <Link href="/services" className="text-xs font-semibold text-muted-foreground hover:text-foreground flex items-center gap-1 group/link transition-colors">
                      Prestations associées
                      <HugeiconsIcon icon={ChevronRightIcon} size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 100VH SHOWCASE */}
      <FullBleedSection
        imageUrl={images.interiors.loft}
        imageAlt="Loft haussmannien rénové avec moulures et parquet"
        badge="Rénovation d'Exception"
        title="Chaque détail compte."
        description="De la pose du parquet au choix des finitions, nos équipes BTP et décorateurs travaillent main dans la main pour livrer des espaces d'une qualité irréprochable."
        ctaLabel="Demander un devis sur mesure"
        ctaHref="/contact"
        align="left"
      />

      {/* HORIZONTAL GALLERY STRIP */}
      <section className="py-16 bg-card border-y border-border/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <h2 className="text-2xl font-semibold text-foreground">
            En images — <span className="font-serif italic text-primary">nos espaces</span>
          </h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory scrollbar-hide">
          {galleryStrip.map((item, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-72 sm:w-80 aspect-[4/5] rounded-2xl overflow-hidden snap-start group"
            >
              <Image
                src={item.url}
                alt={item.label}
                fill
                sizes="320px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-4 text-sm font-serif italic font-bold text-white">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-[oklch(0.55_0.10_171)] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-serif italic">
            Vous avez un projet immobilier d&apos;envergure ?
          </h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Profitez de l&apos;accompagnement complet de Maison Plus pour concevoir, rénover et valoriser votre patrimoine.
          </p>
          <div className="flex justify-center pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 font-serif italic font-bold px-8 py-3 rounded-full text-xs shadow-lg transition-colors">
                Obtenir un chiffrage prévisionnel
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
