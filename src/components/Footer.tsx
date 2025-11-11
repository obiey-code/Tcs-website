export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src="/logo tcs out 2025 T1.png" alt="TCS Logo" className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold">TOLL CONTROL SYSTEM</h3>
                <p className="text-sm text-green-500"></p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Système de gestion des péages moderne et efficace pour le développement des infrastructures routières du .
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-gray-400 hover:text-red-500 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-gray-400 hover:text-red-500 transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#fonctionnalites" className="text-gray-400 hover:text-red-500 transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-red-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Informations</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Version 2.0</li>
              <li>Service 24/7</li>
              <li>Support Technique</li>
              <li>Confidentialité</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 mb-2">
            © 2025 NOISIM Engineering Services - Tous droits réservés
          </p>
          <p className="text-sm text-gray-500">
            www.toll-cs.com
          </p>
        </div>
      </div>
    </footer>
  );
}
