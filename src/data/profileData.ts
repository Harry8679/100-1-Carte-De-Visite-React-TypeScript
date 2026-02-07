import type { PersonInfo } from '../types';

export const profileData: PersonInfo = {
  name: 'Harry Développeur',
  title: 'Développeur Full-Stack',
  company: 'Freelance • Expert React & Node.js',
  location: 'Paris, France',
  bio: 'Passionné par le développement web et mobile. Spécialisé en React, TypeScript, Node.js et Symfony. Créateur de contenu éducatif sur YouTube.',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  available: true,
  email: 'harry.dev@example.com',
  phone: '+33612345678',
  socialLinks: [
    {
      platform: 'github',
      url: 'https://github.com/harrydev',
      label: 'GitHub',
    },
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/harrydev',
      label: 'LinkedIn',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/harrydev',
      label: 'Twitter',
    },
  ],
};

// Exemple avec statut occupé
export const profileDataBusy: PersonInfo = {
  name: 'Marie Dupont',
  title: 'UI/UX Designer',
  company: 'Design Studio Pro',
  location: 'Lyon, France',
  bio: 'Designer passionnée par les interfaces intuitives et l\'expérience utilisateur. Spécialisée en design systems et prototypage.',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  available: false,
  email: 'marie.dupont@example.com',
  phone: '+33698765432',
  socialLinks: [
    {
      platform: 'linkedin',
      url: 'https://linkedin.com/in/mariedupont',
      label: 'LinkedIn',
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/mariedesign',
      label: 'Twitter',
    },
  ],
};