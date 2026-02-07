import type { BusinessCardProps } from '../types';
import { SocialButton } from './SocialButton';
import { StatusBadge } from './StatusBadge';

export const BusinessCard = ({ person, onEmailClick, onPhoneClick }: BusinessCardProps) => {
  const handleEmailClick = () => {
    if (onEmailClick) {
      onEmailClick();
    } else {
      window.location.href = `mailto:${person.email}`;
    }
  };

  const handlePhoneClick = () => {
    if (onPhoneClick) {
      onPhoneClick();
    } else {
      window.location.href = `tel:${person.phone}`;
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Carte principale */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
        {/* Header avec dégradé */}
        <div className="h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            {/* Avatar avec bordure animée */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-md group-hover:blur-lg transition-all duration-300 opacity-75" />
              <img
                src={person.avatar}
                alt={person.name}
                className="relative w-32 h-32 rounded-full border-4 border-white object-cover shadow-xl transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Contenu */}
        <div className="pt-20 px-6 pb-6">
          {/* Nom et titre */}
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-1">
              {person.name}
            </h2>
            <p className="text-blue-600 font-semibold mb-1">
              {person.title}
            </p>
            <p className="text-gray-600 text-sm">
              {person.company}
            </p>
          </div>

          {/* Badge de statut */}
          <div className="flex justify-center mb-4">
            <StatusBadge available={person.available} />
          </div>

          {/* Localisation */}
          <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {person.location}
          </div>

          {/* Bio */}
          <p className="text-gray-600 text-center text-sm mb-6 leading-relaxed">
            {person.bio}
          </p>

          {/* Divider */}
          <div className="border-t border-gray-200 mb-6" />

          {/* Boutons d'action */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button
              onClick={handleEmailClick}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </button>
            <button
              onClick={handlePhoneClick}
              className="flex items-center justify-center gap-2 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors duration-300 font-medium"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler
            </button>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex justify-center gap-3">
            {person.socialLinks.map((social) => (
              <SocialButton
                key={social.platform}
                platform={social.platform}
                url={social.url}
                label={social.label}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Info supplémentaire */}
      <div className="mt-4 text-center">
        <p className="text-gray-500 text-xs">
          Carte de visite interactive • React + TypeScript + Tailwind
        </p>
      </div>
    </div>
  );
};