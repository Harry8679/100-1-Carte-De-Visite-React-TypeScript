// Types pour la carte de visite

export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email' | 'phone';

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface PersonInfo {
  name: string;
  title: string;
  company: string;
  location: string;
  bio: string;
  avatar: string;
  available: boolean;
  email: string;
  phone: string;
  socialLinks: SocialLink[];
}

export interface BusinessCardProps {
  person: PersonInfo;
  onEmailClick?: () => void;
  onPhoneClick?: () => void;
}

export interface SocialButtonProps {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface StatusBadgeProps {
  available: boolean;
}