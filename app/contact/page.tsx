"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { images } from '@/lib/images'
import { HugeiconsIcon } from '@hugeicons/react'
import {
  CallIcon,
  Mail01Icon,
  Building01Icon,
  Clock01Icon,
  Location01Icon,
  ArrowRight01Icon,
  Home01Icon,
  SmartPhone01Icon,
  UserGroupIcon,
} from '@hugeicons/core-free-icons'

const contactInfo = {
  phone: '+33 (0)1 23 45 67 89',
  email: 'contact@maison-plus.com',
  address: '12 Rue de la Paix, 75002 Paris, France',
  hours: 'Lun – Ven : 9h00 – 18h30',
  response: 'Réponse sous 48h ouvrées',
}

const departments = [
  {
    title: 'BTP & Rénovation',
    email: 'btp@maison-plus.com',
    desc: 'Devis travaux, chantiers et rénovation lourde',
    icon: Building01Icon,
  },
  {
    title: 'Locations Meublées',
    email: 'locations@maison-plus.com',
    desc: 'Réservations, visites et gestion locative',
    icon: Home01Icon,
  },
  {
    title: 'Conciergerie & Services',
    email: 'conciergerie@maison-plus.com',
    desc: 'Assistance locataires et propriétaires',
    icon: SmartPhone01Icon,
  },
  {
    title: 'Recrutement',
    email: 'careers@maison-plus.com',
    desc: 'Candidatures et opportunités',
    icon: UserGroupIcon,
  },
]

const faqs = [
  {
    q: 'Quel est le délai pour obtenir un devis BTP ?',
    a: 'Nous vous répondons sous 48h ouvrées. Pour les projets complexes, un rendez-vous sur site peut être proposé sous 5 jours ouvrés.',
  },
  {
    q: 'Comment réserver une visite pour un appartement meublé ?',
    a: 'Remplissez le formulaire en sélectionnant « Location meublée » ou contactez directement locations@maison-plus.com. Nous planifions une visite virtuelle ou physique selon vos disponibilités.',
  },
  {
    q: 'Proposez-vous un accompagnement clé en main pour investisseurs ?',
    a: 'Oui. Maison Plus couvre la chaîne complète : travaux, ameublement, gestion locative, conciergerie et assurance. Contactez-nous via le formulaire pour une étude personnalisée.',
  },
  {
    q: 'Dans quelles villes intervenez-vous ?',
    a: 'Nous sommes présents à Paris, Lyon, Bordeaux, Nice, Annecy et dans les grandes métropoles. Contactez-nous pour vérifier la couverture de votre projet.',
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'devis-btp',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[Maison Plus] ${form.subject} — ${form.name}`)
    const body = encodeURIComponent(
      `Nom : ${form.name}\nEmail : ${form.email}\nTéléphone : ${form.phone}\n\nMessage :\n${form.message}`
    )
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col w-full">

      <PageHero
        badge="Contactez-Nous"
        title="Parlons de votre projet immobilier"
        subtitle="Que vous souhaitiez lancer des travaux, louer un appartement de standing ou confier la gestion de votre bien, notre équipe vous répond rapidement et avec attention."
        imageUrl={images.breadcrumb.contact}
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* QUICK CONTACT STRIP */}
      <section className="py-8 bg-card border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: CallIcon, label: 'Téléphone', value: contactInfo.phone, href: 'tel:+33123456789' },
              { icon: Mail01Icon, label: 'Email', value: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: Location01Icon, label: 'Siège social', value: contactInfo.address, href: undefined },
              { icon: Clock01Icon, label: 'Horaires', value: contactInfo.hours, href: undefined },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border/40 hover:border-primary/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <HugeiconsIcon icon={item.icon} size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-xs font-semibold text-foreground hover:text-primary transition-colors break-words">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-xs font-semibold text-foreground break-words">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + SIDEBAR */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Contact form */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
                  Formulaire de contact
                </span>
                <h2 className="text-2xl font-semibold text-foreground">
                  Envoyez-nous un <span className="font-serif italic text-primary">message</span>
                </h2>
                <p className="text-sm text-muted-foreground">
                  {contactInfo.response}. Tous les champs marqués * sont obligatoires.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto text-xl">✓</div>
                  <h3 className="text-lg font-bold text-foreground font-serif italic">Message prêt à envoyer</h3>
                  <p className="text-sm text-muted-foreground">
                    Votre client mail s&apos;est ouvert. Si ce n&apos;est pas le cas, écrivez-nous directement à{' '}
                    <a href={`mailto:${contactInfo.email}`} className="text-primary hover:underline">{contactInfo.email}</a>.
                  </p>
                  <Button
                    variant="outline"
                    className="font-serif italic font-bold rounded-full text-xs"
                    onClick={() => setSubmitted(false)}
                  >
                    Envoyer un autre message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 p-6 sm:p-8 rounded-2xl bg-card border border-border/40 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-foreground">Nom complet *</label>
                      <input
                        id="name"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jean Dupont"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-foreground">Email *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jean@exemple.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-foreground">Téléphone</label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+33 6 12 34 56 78"
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="subject" className="text-xs font-semibold text-foreground">Objet de votre demande *</label>
                      <select
                        id="subject"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all"
                      >
                        <option value="devis-btp">Devis BTP & Rénovation</option>
                        <option value="location">Location meublée</option>
                        <option value="conciergerie">Conciergerie & Gestion</option>
                        <option value="assurance">Assurance locative</option>
                        <option value="partenariat">Partenariat / Investissement</option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-foreground">Votre message *</label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Décrivez votre projet, vos besoins et vos délais souhaités..."
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/95 text-primary-foreground font-serif italic font-bold px-8 py-3 rounded-full shadow-lg shadow-primary/20 text-xs gap-2"
                  >
                    Envoyer ma demande
                    <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
                  </Button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={images.interiors.livingRoom}
                  alt="Bureau d'accueil Maison Plus"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-serif italic font-bold text-white">Siège — Paris 2e</p>
                  <p className="text-xs text-white/70">{contactInfo.address}</p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border/40 space-y-4">
                <h3 className="text-sm font-bold text-foreground">Contacter un pôle directement</h3>
                <div className="space-y-3">
                  {departments.map((dept) => (
                    <a
                      key={dept.title}
                      href={`mailto:${dept.email}`}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-muted/50 border border-transparent hover:border-border/40 transition-all group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <HugeiconsIcon icon={dept.icon} size={14} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground group-hover:text-primary transition-colors">{dept.title}</p>
                        <p className="text-[10px] text-muted-foreground">{dept.desc}</p>
                        <p className="text-[10px] text-primary mt-0.5">{dept.email}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-3">
                <h3 className="text-sm font-semibold text-foreground font-serif italic">Une question sur votre projet ?</h3>
                <p className="text-xs text-muted-foreground">
                  Décrivez votre besoin dans le formulaire — un expert vous répond sous 48h avec une proposition sur mesure.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OFFICE VISUAL + MAP PLACEHOLDER */}
      <section className="py-16 bg-card border-y border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
                Nous rendre visite
              </span>
              <h2 className="text-2xl font-semibold text-foreground">
                Venez nous rencontrer à <span className="font-serif italic text-primary">Paris</span>
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Notre équipe vous accueille sur rendez-vous du lundi au vendredi. Présentation de projets, visites de showrooms meublés et conseils personnalisés pour propriétaires et locataires.
              </p>
              <ul className="space-y-2 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={Building01Icon} size={14} className="text-primary" />
                  Métro Opéra (lignes 3, 7, 8) — 3 min à pied
                </li>
                <li className="flex items-center gap-2">
                  <HugeiconsIcon icon={Clock01Icon} size={14} className="text-primary" />
                  {contactInfo.hours} — sur rendez-vous le samedi
                </li>
              </ul>
              <a href={`tel:+33123456789`}>
                <Button className="bg-primary hover:bg-primary/95 text-primary-foreground font-serif italic font-bold rounded-full text-xs gap-2 mt-2">
                  Prendre rendez-vous
                  <HugeiconsIcon icon={CallIcon} size={14} />
                </Button>
              </a>
            </div>

            <div className="lg:col-span-7 relative aspect-[16/9] rounded-2xl overflow-hidden border border-border/40">
              <Image
                src={images.exteriors.facade}
                alt="Façade immeuble parisien — zone Opéra"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center space-y-2 px-6">
                  <HugeiconsIcon icon={Location01Icon} size={28} className="text-white mx-auto" />
                  <p className="text-sm font-serif italic font-bold text-white">12 Rue de la Paix, 75002 Paris</p>
                  <a
                    href="https://maps.google.com/?q=12+Rue+de+la+Paix+75002+Paris"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-white/80 hover:text-white underline underline-offset-2"
                  >
                    Ouvrir dans Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-[10px] font-bold text-primary tracking-widest uppercase bg-primary/10 px-3 py-1 rounded-full">
              Questions fréquentes
            </span>
            <h2 className="text-2xl font-semibold text-foreground">
              Avant de nous écrire
            </h2>
          </div>

          <Accordion type="single" collapsible className="rounded-2xl border-border/40">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="px-4 py-3 text-sm font-semibold">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary to-[oklch(0.55_0.10_171)] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl font-serif italic">
            Une question ? Nous sommes à votre écoute.
          </h2>
          <p className="text-sm text-white/80 max-w-xl mx-auto leading-relaxed">
            Appelez-nous directement ou écrivez-nous — chaque projet mérite ce &quot;plus&quot; d&apos;attention qui fait la différence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href={`tel:+33123456789`}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/95 font-serif italic font-bold px-8 py-3 rounded-full text-xs shadow-lg gap-2">
                <HugeiconsIcon icon={CallIcon} size={14} />
                {contactInfo.phone}
              </Button>
            </a>
            <a href={`mailto:${contactInfo.email}`}>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 font-serif italic font-bold px-8 py-3 rounded-full text-xs gap-2">
                <HugeiconsIcon icon={Mail01Icon} size={14} />
                Nous écrire
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
