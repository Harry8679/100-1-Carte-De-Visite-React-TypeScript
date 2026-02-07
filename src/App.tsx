import { BusinessCard } from './components/BusinessCard';
import { profileData, profileDataBusy } from './data/profileData';

function App() {
  const handleEmailClick = () => {
    console.log('📧 Email button clicked!');
    alert('Ouverture de votre client email...');
  };

  const handlePhoneClick = () => {
    console.log('📞 Phone button clicked!');
    alert('Initialisation de l\'appel...');
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            🎴 Carte de Visite Interactive
          </h1>
          <p className="text-gray-600">
            Projet 1/100 • React + TypeScript + Tailwind CSS
          </p>
        </div>

        {/* Grille de cartes */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Carte 1 - Disponible */}
          <BusinessCard
            person={profileData}
            onEmailClick={handleEmailClick}
            onPhoneClick={handlePhoneClick}
          />

          {/* Carte 2 - Occupé */}
          <BusinessCard
            person={profileDataBusy}
            onEmailClick={handleEmailClick}
            onPhoneClick={handlePhoneClick}
          />
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            📚 Concepts React abordés
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">✅ Composants</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Composants fonctionnels</li>
                <li>• Props drilling</li>
                <li>• Composition de composants</li>
                <li>• Réutilisabilité</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">✅ TypeScript</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Interfaces et types</li>
                <li>• Typage des props</li>
                <li>• Union types</li>
                <li>• Optional properties</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">✅ Events</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• onClick handlers</li>
                <li>• Callbacks optionnels</li>
                <li>• Window navigation</li>
                <li>• Event delegation</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700 mb-2">✅ Styling</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tailwind utility classes</li>
                <li>• Conditional classes</li>
                <li>• Hover & transitions</li>
                <li>• Responsive design</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next steps */}
        <div className="mt-8 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg shadow-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-2">🚀 Prochaine étape</h3>
          <p className="mb-4">
            Projet 2 : Compteur Simple (useState, event handlers, state management)
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Voir le projet suivant →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;