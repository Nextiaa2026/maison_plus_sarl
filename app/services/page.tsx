"use client"

import React from 'react'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import FullBleedSection from '@/components/FullBleedSection'
import { Button } from '@/components/ui/button'
import { images } from '@/lib/images'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  Building01Icon,
  Home01Icon,
  SmartPhone01Icon,
  GiftIcon,
  ShieldIcon,
  UserGroupIcon,
  ArrowRight01Icon,
  ChevronRightIcon
} from '@hugeicons/core-free-icons'

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: "btp",
      title: "BTP & Rénovation",
      subtitle: "Gros œuvre, maçonnerie, électricité et rénovation d'intérieur",
      icon: Building01Icon,
      imageUrl: images.btp.structure,
      desc: "Maison Plus réalise vos projets de rénovation intérieure et de second œuvre avec une attention méticuleuse portée aux détails. Que ce soit pour rafraîchir un studio locatif ou restructurer entièrement un appartement d'exception, nos artisans qualifiés s'occupent de tout.",
      imageDirective: "Gros plan sur un mur en béton ciré gris moderne avec des luminaires encastrés diffusant une lumière chaude dorée, à côté d'un pan de mur habillé de tasseaux en chêne clair vertical.",
      features: [
        "Planification et modélisation 3D de vos espaces",
        "Démolition, cloisons, plâtrerie et isolation thermique",
        "Rénovation complète des réseaux d'électricité et de plomberie",
        "Revêtements de sol premium (parquet massif, carrelages grands formats)",
        "Peintures écologiques haut de gamme et finitions à la main"
      ]
    },
    {
      id: "locations",
      title: "Locations Meublées haut de gamme",
      subtitle: "Des appartements prêts-à-vivre pour courts, moyens et longs séjours",
      icon: Home01Icon,
      imageUrl: images.interiors.livingRoom,
      desc: "Nous proposons une sélection rigoureuse de logements meublés à forte valeur esthétique. Tous nos appartements intègrent du mobilier de designer, une literie de qualité hôtelière et l'intégralité des équipements du quotidien pour se sentir chez soi immédiatement.",
      imageDirective: "Chambre à coucher épurée et baignée de lumière naturelle, grand lit double avec linge en lin blanc froissé, tables de chevet minimalistes, plante verte Monstera dans un pot en terre cuite.",
      features: [
        "Sélection exclusive d'adresses dans les quartiers recherchés",
        "Mobilier haut de gamme et décoration d'intérieur soignée",
        "Équipements complets (smart TV, électroménager premium, vaisselle de choix)",
        "Connexion internet haut débit par fibre optique incluse",
        "Linge de maison de qualité supérieure fourni et renouvelé"
      ]
    },
    {
      id: "conciergerie",
      title: "Conciergerie Digitale",
      subtitle: "Une gestion fluide et connectée de votre séjour et de votre bien",
      icon: SmartPhone01Icon,
      imageUrl: images.interiors.kitchen,
      desc: "Grâce à notre plateforme digitale de conciergerie, gérez votre location en quelques clics. Check-in autonome avec serrure connectée sécurisée, signalement d'incidents techniques, réservation de ménages supplémentaires : la tech simplifie votre quotidien.",
      imageDirective: "Gros plan sur une main tenant un smartphone affichant l'interface moderne d'une application de maison intelligente avec des options de déverrouillage de porte, contrôle de température et éclairage.",
      features: [
        "Accès par serrures connectées sécurisées haut de gamme",
        "Application locataire dédiée pour toutes vos demandes d'assistance",
        "Signalement d'incidents instantané avec suivi des réparations",
        "Livret d'accueil digital contenant toutes les informations du logement",
        "Espace propriétaire en ligne pour suivre les réservations et revenus"
      ]
    },
    {
      id: "bienvenue",
      title: "Pack Bienvenue",
      subtitle: "Un accueil mémorable et des attentions sur mesure dès l'arrivée",
      icon: GiftIcon,
      imageUrl: images.interiors.dining,
      desc: "Parce que les premières minutes dans un nouveau logement sont décisives, notre 'Pack Bienvenue' offre à chaque nouvel occupant des attentions sélectionnées avec soin. De quoi démarrer son installation sous les meilleurs auspices.",
      imageDirective: "Nature morte sur un plan de travail en quartz blanc, montrant un coffret cadeau ouvert en carton recyclé haut de gamme contenant une bouteille de vin fin, une bougie parfumée, des biscuits artisanaux et un livret d'accueil relié.",
      features: [
        "Assortiment de produits locaux de créateurs locaux et gourmandises",
        "Produits d'hygiène bio et écoresponsables de format voyage",
        "Plan de quartier personnalisé avec nos meilleures adresses",
        "Adaptateurs électriques et kits de première nécessité",
        "Option fleurs fraîches et champagne pour les occasions spéciales"
      ]
    },
    {
      id: "assurance",
      title: "Assurance Location sécurisée",
      subtitle: "Protégez vos revenus locatifs et votre patrimoine l'esprit tranquille",
      icon: ShieldIcon,
      imageUrl: images.exteriors.facade,
      desc: "Maison Plus intègre des solutions d'assurance adaptées à la location meublée pour sécuriser au maximum les relations entre bailleurs et locataires. Dormez sur vos deux oreilles grâce à des garanties complètes et efficaces.",
      imageDirective: "Gros plan de mains signant un document de contrat d'assurance officiel posé sur une table en verre noir. Un stylo plume et une clé d'appartement avec un porte-clés en cuir gravé Maison Plus sont disposés à côté.",
      features: [
        "Assurance Garantie Loyers Impayés (GLI) performante",
        "Protection contre les dégradations physiques du logement",
        "Responsabilité civile locative intégrée aux baux",
        "Gestion simplifiée des sinistres et des franchises par nos équipes",
        "Assistance juridique locative dédiée en cas de litige"
      ]
    },
    {
      id: "construction",
      title: "Construction neuve & Rénovation lourde",
      subtitle: "Structure, extensions et accompagnement de vos projets de bâtisseur",
      icon: Building01Icon,
      imageUrl: images.exteriors.modernHouse,
      desc: "En plus des travaux d'intérieur, nos équipes BTP sont qualifiées pour la réalisation de chantiers de construction lourde, d'extensions de maisons et de restructurations de bâtiments. Nous garantissons le respect des normes environnementales et thermiques en vigueur.",
      imageDirective: "Photographie artistique en extérieur montrant la structure d'une maison moderne en cours de construction avec ossature en bois clair et grandes ouvertures vitrées, sous un ciel bleu d'été.",
      features: [
        "Gros œuvre, fondations et travaux de maçonnerie générale",
        "Construction d'extensions contemporaines et de surélévations",
        "Isolation thermique par l'extérieur (ITE) et bardages design",
        "Menuiseries extérieures performantes et verrières de toit",
        "Garantie décennale et conformité aux normes thermiques RE2020"
      ]
    },
    {
      id: "prestations",
      title: "Prestations de Service & Maintenance",
      subtitle: "L'entretien quotidien de votre patrimoine immobilier",
      icon: UserGroupIcon,
      imageUrl: images.interiors.bathroom,
      desc: "Nos techniciens et agents d'entretien veillent au maintien de la valeur de vos biens immobiliers. Nous intervenons rapidement pour des réparations courantes, des opérations de ménage professionnel de type hôtelier ou de l'entretien de copropriété.",
      imageDirective: "Détail soigné d'une salle de bain luxueuse, carreaux de marbre blanc au mur, vasque en pierre naturelle, avec des serviettes blanches parfaitement pliées et un petit flacon de savon disposés à côté.",
      features: [
        "Ménage professionnel de rotation locative (normes sanitaires strictes)",
        "Interventions de maintenance rapide (changement d'ampoules, serrurerie, fuites)",
        "Entretien régulier des espaces communs et extérieurs",
        "Contrôle technique préventif annuel des équipements de chauffage et VMC",
        "Services de blanchisserie professionnelle pour le linge de lit"
      ]
    }
  ]

  return (
    <div className="flex flex-col w-full">

      <PageHero
        badge="Nos Métiers"
        title="Des services immobiliers & BTP de classe supérieure"
        subtitle="De la pose de la première pierre de votre chantier jusqu'à l'accueil de vos locataires meublés avec leur pack de bienvenue, Maison Plus s'occupe de tout pour valoriser votre patrimoine."
        imageUrl={images.breadcrumb.services}
        breadcrumbs={[{ label: "Nos Services" }]}
      />

      {/* Quick nav pills */}
      <section className="py-6 bg-card border-b border-border/40 sticky top-20 z-40 backdrop-blur-md bg-card/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {serviceCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="text-[10px] font-semibold px-3 py-1.5 rounded-full bg-background hover:bg-primary hover:text-primary-foreground border border-border/60 hover:border-primary transition-all shadow-sm"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES DETAIL */}
      <section className="py-12 bg-background space-y-24">
        {serviceCategories.map((service, index) => {
          const isEven = index % 2 === 0
          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <ImagePlaceholder
                    imageUrl={service.imageUrl}
                    directive={service.imageDirective}
                    aspectRatio="video"
                    className="shadow-xl border border-border/40"
                  />
                </div>

                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6 text-left`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <HugeiconsIcon icon={service.icon} size={20} />
                    </div>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 tracking-widest uppercase px-2.5 py-0.5 rounded-full">
                      {service.id === 'btp' || service.id === 'construction' ? 'BTP & Construction' : 'Gestion & Services'}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                      {service.title}
                    </h2>
                    <h4 className="text-xs font-semibold text-primary/80 font-serif italic">
                      {service.subtitle}
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <h5 className="text-xs font-bold text-foreground uppercase tracking-wider">Ce qui est inclus :</h5>
                    <ul className="grid grid-cols-1 gap-2.5 text-xs text-muted-foreground">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary font-bold select-none mt-0.5">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link href="/contact">
                      <Button size="lg" className="bg-primary hover:bg-primary/95 text-primary-foreground font-serif italic font-bold px-6 rounded-full shadow-md text-xs gap-2">
                        Demander un devis
                        <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                      </Button>
                    </Link>
                    <Link href="/projects" className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group">
                      Voir des exemples
                      <HugeiconsIcon icon={ChevronRightIcon} size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>

              {index < serviceCategories.length - 1 && (
                <div className="mt-20 border-b border-border/40" />
              )}
            </div>
          )
        })}
      </section>

      {/* 100VH SHOWCASE */}
      <FullBleedSection
        imageUrl={images.hero.villa}
        imageAlt="Villa de standing avec piscine"
        badge="Clé en Main"
        title="De la pierre à la clé."
        description="Un seul interlocuteur pour vos travaux, votre ameublement, votre gestion locative et votre conciergerie. Maison Plus couvre l'intégralité de la chaîne immobilière."
        ctaLabel="Nous contacter"
        ctaHref="/contact"
        align="left"
      />

      {/* CTA */}
      <section className="py-20 bg-card border-t border-border/40">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Parlons de votre projet
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground font-serif italic">
            Besoin d&apos;une étude de coût sur mesure ?
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Notre équipe vous répond sous 48h avec une proposition adaptée à vos travaux, locations meublées ou services de conciergerie.
          </p>
          <div className="pt-4">
            <Link href="/contact">
              <Button size="lg" className="bg-primary hover:bg-primary/95 text-primary-foreground font-serif italic font-bold px-8 py-4 rounded-full shadow-lg shadow-primary/20 text-xs">
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
