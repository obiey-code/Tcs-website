import { Smartphone, Shield, Zap, BarChart3, CreditCard, Clock } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Smartphone,
      title: 'Système Automatisé',
      description: 'Péage électronique automatique avec reconnaissance de plaques et badges RFID',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: Shield,
      title: 'Sécurité Maximale',
      description: 'Cryptage des données et surveillance 24/7 pour protéger les transactions',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Zap,
      title: 'Passage Rapide',
      description: 'Réduction du temps d\'attente de 70% grâce à la technologie sans arrêt',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: BarChart3,
      title: 'Statistiques en Temps Réel',
      description: 'Tableau de bord analytique pour le suivi du trafic et des revenus',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: CreditCard,
      title: 'Paiement Flexible',
      description: 'Multiple options: carte, mobile money, badge prépayé et espèces',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Clock,
      title: 'Service 24/7',
      description: 'Opérationnel en continu avec support technique disponible à tout moment',
      color: 'from-teal-500 to-teal-600',
    },
    
    
  ];

  return (
    <section id="fonctionnalites" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Fonctionnalités <span className="text-gradient">Avancées</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un système complet et innovant pour une gestion moderne des péages routiers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
