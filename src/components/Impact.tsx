import { TrendingUp, Leaf, Users2, Coins } from 'lucide-react';

export default function Impact() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Croissance Économique',
      description: 'Amélioration des revenus nationaux et financement des infrastructures routières',
      stats: '+35% de revenus',
      image: 'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Leaf,
      title: 'Impact Environnemental',
      description: 'Réduction des émissions de CO2 grâce à la fluidité du trafic',
      stats: '-40% d\'émissions',
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Users2,
      title: 'Création d\'Emplois',
      description: 'Opportunités professionnelles dans la gestion et la maintenance du système',
      stats: '1000+ emplois',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Coins,
      title: 'Transparence Financière',
      description: 'Traçabilité complète des transactions et reporting automatisé',
      stats: '99.9% de précision',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <section id="avantages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Avantages & <span className="text-gradient">Impact</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des bénéfices concrets pour le développement du 
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0">
                <img
                  src={benefit.image}
                  alt={benefit.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
              </div>
              <div className="relative p-8 h-80 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-white/90 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="inline-block bg-gradient-to-r from-red-600 to-green-600 text-white px-4 py-2 rounded-full font-bold">
                  {benefit.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
