import { Building2 } from 'lucide-react';

export default function Partners() {
  const partners = [
    { name: 'Ministère des Infrastructures', role: 'Partenaire Gouvernemental' },
    { name: 'Banque Mondiale', role: 'Financement' },
    { name: 'NOISIM Engineering Services', role: 'Solutions Technologiques' },
    { name: 'Société Nationale des Routes', role: 'Gestion des Routes' },
    { name: 'Orange ', role: 'Partenaire Télécoms' },
    { name: 'Coris Bank', role: 'Partenaire Bancaire' },
  ];

  return (
    <section id="partenaires" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-gradient-light">Partenaires</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            En collaboration avec des acteurs majeurs pour le développement du 
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-red-600 to-green-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                  <p className="text-gray-400">{partner.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 animate-on-scroll">
          <h3 className="text-2xl font-bold mb-6 text-center">Références & Réalisations</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-500 mb-2">15+</div>
              <p className="text-gray-300">Postes Modernisés</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-500 mb-2">2M+</div>
              <p className="text-gray-300">Transactions Mensuelles</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-500 mb-2">98%</div>
              <p className="text-gray-300">Satisfaction Usagers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
