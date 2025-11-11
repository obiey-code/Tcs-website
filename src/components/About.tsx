import { Building2, Users, Target, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Building2, value: '10+', label: 'Postes de Péage' },
    { icon: Users, value: '500K+', label: 'Usagers par Jour' },
    { icon: Target, value: '99.9%', label: 'Fiabilité' },
    { icon: Award, value: '5+', label: 'Années d\'Excellence' },
  ];

  return (
    <section id="apropos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            À Propos du <span className="text-gradient">TCS </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-green-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-on-scroll">
            <img
              src="https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Infrastructure"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="animate-on-scroll">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Notre Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le Toll Control System (TCS)  représente une innovation majeure dans la gestion des infrastructures routières du pays. Notre système utilise des technologies de pointe pour assurer une collecte efficace et transparente des péages.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nous nous engageons à moderniser le réseau routier  tout en garantissant une expérience utilisateur optimale et en contribuant au développement économique du pays.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-green-600"></div>
              <span className="text-amber-600 font-bold">Version 2.0</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-red-50 to-green-50 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-red-600" />
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
