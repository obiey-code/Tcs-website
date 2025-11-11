import { FileText, ArrowRight } from 'lucide-react';

const LOCAL_IMAGE_PATHS = {
    CAMERA: "/equipements/DASHCA_1-removebg-preview.png",
    PAYMENT_TERMINAL: "/equipements/Compte_bancaire___Quelle_assurance__pour_quel_incident__-removebg-preview.png",
    AVC_SYSTEM: "/equipements/WhatsApp_Image_2025-11-08_à_13.18.57_848a4810_-_Copie-removebg-preview.png",
    CENTRAL_UNIT: "/equipements/__Pink_Salt_Weight_Loss_Recipe__The_Natural_Detox_Tonic_Women_Are_Raving_About-removebg-preview.png",
    AVC_GENERATED: "/equipements/systeme_classification_vehicule_3d.png" 
};

const equipmentList = [
    { 
        imageUrl: LOCAL_IMAGE_PATHS.CAMERA, 
        title: "Caméra de Reconnaissance ANPR", 
        subtitle: "Capture et identification intelligente des plaques d'immatriculation",
        description: "Intégrées à notre système TCS, ces caméras ultra-performantes garantissent une lecture fiable des plaques (ANPR) en toutes conditions de luminosité et de vitesse. Elles sont essentielles pour la gestion des incidents et le contrôle d'accès automatisé.",
        color: "text-red-600",
        bg: "bg-blue-900",
    },
    { 
        imageUrl: LOCAL_IMAGE_PATHS.AVC_SYSTEM, 
        subtitle: "Détection précise de la classe et de la hauteur du véhicule par imagerie",
        description: "Ce système utilise des capteurs laser 3D de dernière génération pour un comptage ultra-précis des essieux et une classification automatique des véhicules. Il est crucial pour prévenir la fraude et garantir une tarification juste selon la classe du véhicule.",
        color: "text-green-600",
        bg: "bg-blue-900",
    },
    { 
        imageUrl: LOCAL_IMAGE_PATHS.PAYMENT_TERMINAL, 
        title: "Terminal de Paiement Multi-Modal", 
        subtitle: "Facilité et sécurité pour toutes les transactions au péage",
        description: "Nos bornes tactiles et robustes acceptent les paiements par carte bancaire (EMV), NFC, et intègrent le support Télépéage. Leur conception modulaire assure une maintenance simplifiée et une disponibilité maximale sur les voies.",
        color: "text-orange-500",
        bg: "bg-blue-900",
    },
    { 
        imageUrl: LOCAL_IMAGE_PATHS.CENTRAL_UNIT, 
        title: "Unité de Traitement Centrale (UTC)", 
        subtitle: "Cœur numérique du système de contrôle de péage",
        description: "L'UTC est l'épine dorsale de l'architecture TCS. Elle assure le traitement en temps réel de toutes les données (transactions, images ANPR, classifications) et garantit la redondance et la conformité aux exigences de sécurité et d'auditabilité.",
        color: "text-gray-400",
        bg: "bg-blue-900",
    },
];


const EquipmentImage = ({ item }) => (
    <div className="w-full max-w-xl h-64 md:h-96 mb-8 overflow-hidden rounded-xl flex justify-center items-center p-4">
        <img 
            src={item.imageUrl} 
            alt={`Image de ${item.title}`} 
            className="h-full object-contain" 
            onError={(e) => { 
                e.target.onerror = null; 
                e.target.src="https://placehold.co/800x600/AAAAAA/FFFFFF?text=Image+Indisponible"; 
                console.error(`Erreur de chargement pour l'image: ${item.imageUrl}`);
            }}
        />
    </div>
);


export default function Equipment() {
  return (
    <section id="equipment" className="py-16 sm:py-24 bg-slate-900 text-white"> 
      <div className="container mx-auto px-4 max-w-6xl animate-on-scroll">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Notre <span className="text-red-600">Matériel</span> de Pointe
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-orange-500 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Chaque composant matériel du Toll Control System est sélectionné pour sa robustesse, sa précision et sa capacité à opérer en continu dans les environnements les plus exigeants.
          </p>
        </div>

        
        <div className="space-y-24">
          {equipmentList.map((item, index) => (
            <div 
                key={index} 
                className={`flex flex-col items-center text-center p-8 transition duration-500`}
            >
              
             
              <EquipmentImage item={item} />

              
              <h3 className="text-4xl font-extrabold text-white mb-2">{item.title}</h3>
              <p className={`text-lg font-semibold mb-6 ${item.color}`}>{item.subtitle}</p>
              <p className="text-lg text-gray-300 max-w-4xl mb-10">{item.description}</p>
              

            
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center w-full max-w-md">
                
                  <a
                      href="#"
                      className="flex items-center justify-center py-3 px-6 rounded-full font-bold text-sm tracking-wider
                                  text-white bg-transparent border-2 border-white/50
                                  hover:bg-red-600 hover:border-red-600
                                  transition duration-300 shadow-lg"
                  >
                      Je Découvre la Brochure 
                      <FileText className="ml-3 w-5 h-5" />
                  </a>

                  
                  <a
                      href="#contact"
                      className="flex items-center justify-center py-3 px-6 rounded-full font-bold text-sm tracking-wider
                                  text-blue-900 bg-white border-2 border-white
                                  hover:bg-green-600 hover:text-white hover:border-green-600
                                  transition duration-300 shadow-lg"
                  >
                      Je Passe Commande 
                      <ArrowRight className="ml-3 w-5 h-5" />
                  </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
