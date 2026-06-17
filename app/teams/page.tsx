"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import ImagePlaceholder from '@/components/ImagePlaceholder'
import { Button } from '@/components/ui/button'
import { images } from '@/lib/images'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  UserGroupIcon,
  Mail01Icon,
  ArrowRight01Icon
} from '@hugeicons/core-free-icons'

export default function TeamsPage() {
  const teamDivisions = [
    {
      title: "Pôle BTP & Conception",
      desc: "Architectes, conducteurs de travaux et artisans qualifiés coordonnent vos chantiers avec une rigueur absolue.",
      banner: images.btp.site,
      members: [
        {
          name: "Marc Laurent",
          role: "Directeur de Travaux BTP",
          bio: "Ingénieur en génie civil de formation avec 15 ans d'expérience dans la réhabilitation lourde et le gros œuvre de bâtiments.",
          imageUrl: images.team.engineer,
          directive: "Portrait professionnel d'un homme mûr souriant, portant un casque de chantier blanc posé sur les genoux, chemise bleu clair de travail, arrière-plan flou de chantier de rénovation lumineux."
        },
        {
          name: "Sophie Valois",
          role: "Architecte d'Intérieur",
          bio: "Spécialiste du design minimaliste et des agencements haut de gamme, elle conçoit des intérieurs meublés uniques et ergonomiques.",
          imageUrl: images.team.architect,
          directive: "Portrait professionnel d'une femme souriante, bras croisés, portant des lunettes modernes et un pull à col roulé noir, arrière-plan de bureau d'architecte épuré et lumineux avec des nuanciers colorés."
        }
      ]
    },
    {
      title: "Pôle Hospitalité & Conciergerie",
      desc: "Gérants immobiliers et coordinateurs d'accueil veillent au confort quotidien des résidents et à l'intendance.",
      banner: images.interiors.livingRoom,
      members: [
        {
          name: "Thomas Renard",
          role: "Directeur de l'Hospitalité",
          bio: "Ancien concierge d'hôtel de luxe, il insuffle l'exigence et le souci du détail de la haute hôtellerie dans notre service de conciergerie.",
          imageUrl: images.team.concierge,
          directive: "Portrait d'un homme en costume gris ajusté et chemise blanche, souriant chaleureusement, posant dans le hall d'un immeuble haussmannien soigné."
        },
        {
          name: "Emma Benard",
          role: "Responsable Expérience Client",
          bio: "Elle coordonne la création des packs de bienvenue et supervise l'ensemble des rotations de ménage de type hôtelier.",
          imageUrl: images.team.architect,
          directive: "Portrait d'une jeune femme souriante, portant une veste en lin beige sur un t-shirt blanc, dans un intérieur d'appartement meublé moderne et lumineux."
        }
      ]
    },
    {
      title: "Pôle Tech & Innovation",
      desc: "Développeurs et chefs de projet digital élaborent notre plateforme et nos outils de conciergerie connectée.",
      banner: images.interiors.kitchen,
      members: [
        {
          name: "Lucas Gauthier",
          role: "Directeur Produit Digital",
          bio: "Il conçoit les interfaces et supervise le développement de notre application mobile de conciergerie digitale pour propriétaires et locataires.",
          imageUrl: images.team.tech,
          directive: "Portrait d'un jeune homme de type tech moderne, souriant, portant des lunettes de créateur et un sweat-shirt gris chiné, arrière-plan flou de bureau de développement informatique avec écrans."
        }
      ]
    }
  ]

  return (
    <div className="flex flex-col w-full">

      <PageHero
        badge="Nos Experts"
        title="Les visages derrière la promesse « un peu plus »"
        subtitle="Maison Plus SARL rassemble des profils complémentaires unis par la même passion de la rigueur opérationnelle, de la technologie connectée et de l'hospitalité sur mesure."
        imageUrl={images.breadcrumb.teams}
        breadcrumbs={[{ label: "Notre Équipe" }]}
      />

      {/* TEAM BANNER STRIP */}
      <section className="py-12 bg-card border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[images.team.group, images.btp.plans, images.interiors.loft, images.exteriors.balcony].map((url, i) => (
              <div key={i} className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image src={url} alt="" fill sizes="25vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERS DIVISIONS */}
      <section className="py-16 bg-background space-y-24">
        {teamDivisions.map((division, idx) => (
          <div key={idx} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

            {/* Division header with banner */}
            <div className="relative rounded-2xl overflow-hidden min-h-[180px] flex items-end">
              <Image src={division.banner} alt={division.title} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="relative z-10 p-8 text-left space-y-2">
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  {division.title}
                </h2>
                <p className="text-sm text-white/75 max-w-2xl">
                  {division.desc}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {division.members.map((member, mIdx) => (
                <div
                  key={mIdx}
                  className="flex flex-col bg-card border border-border/40 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
                >
                  <ImagePlaceholder
                    imageUrl={member.imageUrl}
                    directive={member.directive}
                    aspectRatio="portrait"
                    className="rounded-none border-b border-border/40"
                  />

                  <div className="p-6 flex-grow flex flex-col justify-between space-y-4 text-left">
                    <div className="space-y-1">
                      <h4 className="text-md font-bold text-foreground group-hover:text-primary transition-colors">
                        {member.name}
                      </h4>
                      <span className="text-xs font-semibold text-primary/80 uppercase tracking-wider block font-serif italic">
                        {member.role}
                      </span>
                      <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                        {member.bio}
                      </p>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-border/40 text-muted-foreground text-xs">
                      <a
                        href="mailto:contact@maison-plus.com"
                        className="hover:text-primary transition-colors flex items-center gap-1.5"
                      >
                        <HugeiconsIcon icon={Mail01Icon} size={14} />
                        Contact email
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CAREERS */}
      <section className="py-20 bg-card border-y border-border/40">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
            <HugeiconsIcon icon={UserGroupIcon} size={22} />
          </div>
          <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
            Rejoignez-Nous
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground font-serif italic">
            Vous souhaitez intégrer l&apos;équipe Maison Plus ?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Nous recherchons en permanence des conducteurs de travaux BTP, des gestionnaires locatifs rigoureux, des agents d&apos;accueil chaleureux et des talents tech.
          </p>
          <div className="pt-4">
            <a href="mailto:careers@maison-plus.com">
              <Button size="lg" className="bg-primary hover:bg-primary/95 text-primary-foreground font-serif italic font-bold px-8 py-4 rounded-full shadow-lg shadow-primary/20 text-xs gap-2">
                Déposer une candidature spontanée
                <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
