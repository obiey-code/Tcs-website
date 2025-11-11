import { Mail, Phone, MapPin, Send, User, MessageSquare, Tag } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-<span className="text-red-600">Nous</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à vos questions et vous accompagner dans votre projet de péage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bloc d'Informations */}
          <div className="animate-on-scroll">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-8">
              
              {/* Adresse */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-red-600 to-green-600 p-3 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Adresse</h3>
                  <p className="text-gray-300">
                    Avenue de l'Indépendance<br />
                    Ouagadougou, Burkina Faso
                  </p>
                </div>
              </div>

              {/* Téléphone */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-amber-600 to-red-600 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Téléphone</h3>
                  <p className="text-gray-300">
                    +226 25 XX XX XX<br />
                    +226 70 XX XX XX
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-green-600 to-amber-600 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <p className="text-gray-300">
                    contact@tcs.bf<br />
                    support@tcs.bf
                  </p>
                </div>
              </div>

              {/* Horaires d'Ouverture */}
              <div className="bg-white/10 rounded-xl p-6 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Horaires d'Ouverture</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-white/20">
                    <span className="font-medium">Lundi - Vendredi</span>
                    <span className="text-gray-300">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-white/20">
                    <span className="font-medium">Samedi</span>
                    <span className="text-gray-300">9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">Dimanche</span>
                    <span className="text-red-500 font-semibold">Fermé</span>
                  </div>
                </div>
              </div>

            </div>
            <div className="pt-8">
              <img
                src="/logo tcs out 2025 T1.png"
                alt="TCS Logo"
                className="h-24 mx-auto opacity-80"
              />
            </div>
          </div>

          {/* Formulaire de Contact Amélioré */}
          <div className="animate-on-scroll">
            <form className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 space-y-6 shadow-2xl">
              
              {/* Ligne 1: Nom & Prénom - Groupés comme l'image de référence */}
              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Nom */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Nom</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="name"
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                      placeholder="Entrer votre nom"
                      required
                    />
                  </div>
                </div>

                {/* Prénom */}
                <div>
                  <label htmlFor="firstname" className="block text-sm font-semibold mb-2">Prénom</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="firstname"
                      type="text"
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                      placeholder="Entrer votre prénom"
                      required
                    />
                  </div>
                </div>

              </div>

              {/* Ligne 2: Email & Téléphone */}
              <div className="grid sm:grid-cols-2 gap-6">
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                      placeholder="Entrer votre email"
                      required
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Téléphone</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      id="phone"
                      type="tel"
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                      placeholder="Entrer votre numéro de téléphone"
                    />
                  </div>
                </div>
              </div>

              {/* Ligne 3: Objet (Select) */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold mb-2">Objet de la demande</label>
                <div className="relative">
                    <Tag className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    <select 
                      id="subject"
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none transition-all"
                      defaultValue="Demande d'information"
                    >
                      <option className="bg-gray-800 text-white">Demande d'information</option>
                      <option className="bg-gray-800 text-white">Demande de démo</option>
                      <option className="bg-gray-800 text-white">Support technique</option>
                      <option className="bg-gray-800 text-white">Partenariat / Affaires</option>
                      <option className="bg-gray-800 text-white">Autre</option>
                    </select>
                    {/* Flèche de sélection customisée pour remplacer l'apparence native */}
                    <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>


              {/* Ligne 4: Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-none"
                      placeholder="Décrivez votre projet ou votre question..."
                      required
                    ></textarea>
                </div>
              </div>

              {/* Bouton d'envoi */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-amber-500 text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-red-500/50 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer ma demande</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}