export const profile = {
  firstName: 'Rotsy',
  lastName: 'Rakotondrainy',
  title: 'Développeuse Full Stack',
  email: 'rakotondrainyrotsy@gmail.com',
  phone: '+261 34 57 703 69',
  location: 'Logt 432 Cité Ambohipo, Antananarivo',
  github: 'https://github.com/Rotsy123',
  linkedin: 'https://www.linkedin.com/in/rotsy-rakotondrainy-281b61291',
  summary:
    "Spécialisée dans le développement d'interfaces web modernes et l'intégration d'API backend. Habituée à travailler sur des produits en évolution rapide, avec une forte capacité d'adaptation et une expérience dans la conception de fonctionnalités métier.",
}

export const experiences = [
  {
    role: 'Développeuse Full Stack',
    company: 'myAuxilium — Constellation Group',
    period: "04/2026 → aujourd'hui",
    place: 'Antananarivo',
    stack: ['ReactJS', 'MySQL', 'Redux', 'Tailwind CSS'],
    points: [
      'Développement frontend de fonctionnalités métier sur une plateforme SaaS.',
      'Intégration des API backend Python dans une application ReactJS.',
      'Conception et développement du module de discussion (chat utilisateur + agents).',
      "Implémentation des interactions entre utilisateurs et agents configurés via API.",
      "Gestion de l'état applicatif avec Redux et amélioration de l'expérience utilisateur.",
      "Participation à l'évolution continue du produit et aux améliorations fonctionnelles.",
    ],
  },
  {
    role: 'Développeuse Full Stack',
    company: 'TWISALES — Constellation Group',
    period: "03/2025 → aujourd'hui",
    place: 'Antananarivo',
    stack: [
      'NestJS',
      'ReactJS',
      'VueJS',
      'ExpressJS',
      'MongoDB',
      'Zustand',
      'Shadcn',
      'TurboRepo',
      'Tailwind',
      'Twilio API',
    ],
    points: [
      'Contribution à la refonte du CRM B2B Twisales (performances, sécurité, UX).',
      'Maintenance évolutive du produit à partir des retours utilisateurs et besoins métier.',
      'Nouvelles fonctionnalités frontend et backend (NestJS / React / VueJS).',
      'Application de gestion des appels et SMS via Twilio API.',
      "Interfaces simplifiées pour des utilisateurs non techniques.",
      "Optimisation de l'architecture et des performances via TurboRepo.",
    ],
  },
]

export const education = [
  {
    title: 'Master II MBDS',
    school: "Université Côte d'Azur",
    period: "10/2025 → aujourd'hui",
  },
  {
    title: 'Master I en Informatique',
    school: 'IT University',
    period: '2024 → 2025',
    place: 'Antananarivo',
  },
  {
    title: "Licence en Informatique — Développement d'applications",
    school: 'IT University',
    period: '2021 → 2024',
    place: 'Antananarivo',
  },
  {
    title: 'BAC série C',
    school: 'Collège Saint Michel Amparibe',
    period: '2021',
    place: 'Antananarivo',
  },
  {
    title: 'DELF B1 & B2 — langue française',
    school: "Alliance Française d'Antananarivo",
    period: '2018',
  },
]

export type SkillItem = {
  name: string
  icon: string
}

export const skills: { label: string; items: SkillItem[] }[] = [
  {
    label: "Développement d'applications",
    items: [
      { name: 'Java (Spring Boot)', icon: 'springboot' },
      { name: 'NestJS', icon: 'nestjs' },
      { name: 'ExpressJS', icon: 'express' },
      { name: 'ReactJS', icon: 'react' },
      { name: 'AngularJS', icon: 'angular' },
      { name: 'PHP (CodeIgniter)', icon: 'codeigniter' },
      { name: 'Dotnet MVC', icon: 'dotnet' },
      { name: 'REST APIs', icon: 'swagger' },
      { name: 'Services externes', icon: 'openapiinitiative' },
    ],
  },
  {
    label: "Gestion d'état et UI",
    items: [
      { name: 'Zustand', icon: 'npm' },
      { name: 'Redux', icon: 'redux' },
      { name: 'Shadcn', icon: 'shadcnui' },
      { name: 'Tailwind', icon: 'tailwindcss' },
      { name: 'Bootstrap', icon: 'bootstrap' },
    ],
  },
  {
    label: 'Bases de données',
    items: [
      { name: 'MySQL', icon: 'mysql' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'MongoDB', icon: 'mongodb' },
    ],
  },
  {
    label: 'Outils et méthodologies',
    items: [
      { name: 'Postman', icon: 'postman' },
      { name: 'VS Code', icon: 'visualstudiocode' },
      { name: 'Cursor', icon: 'cursor' },
      { name: 'Git / GitHub', icon: 'github' },
      { name: 'CI / CD', icon: 'githubactions' },
      { name: 'TurboRepo', icon: 'turborepo' },
      { name: 'Twilio', icon: 'twilio' },
    ],
  },
]

export const languages = ['Malagasy', 'Français', 'Anglais']
