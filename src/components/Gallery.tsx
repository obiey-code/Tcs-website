import { useState } from 'react';
import { X, Play } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: 'https://images.pexels.com/photos/358312/pexels-photo-358312.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Poste de Péage Moderne',
    },
    {
      url: 'https://images.pexels.com/photos/1004665/pexels-photo-1004665.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Infrastructure Routière',
    },
    {
      url: 'https://images.pexels.com/photos/2101137/pexels-photo-2101137.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Système de Contrôle',
    },
    {
      url: 'https://images.pexels.com/photos/3856033/pexels-photo-3856033.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Équipement Technologique',
    },
    {
      url: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Voies de Circulation',
    },
    {
      url: 'https://images.pexels.com/photos/2101194/pexels-photo-2101194.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Centre de Contrôle',
    },
  ];

  const videos = [
    {
      thumbnail: 'https://images.pexels.com/photos/1619850/pexels-photo-1619850.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Présentation du Système TCS',
    },
    {
      thumbnail: 'https://images.pexels.com/photos/2101199/pexels-photo-2101199.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Formation des Opérateurs',
    },
  ];

  return (
    <section id="galerie" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galerie & <span className="text-gradient">Vidéos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-green-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos installations et notre technologie en images
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 animate-on-scroll">Photos</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold p-4">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-8 animate-on-scroll">Vidéos</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-xl cursor-pointer animate-on-scroll"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full group-hover:scale-110 transition-transform">
                    <Play className="w-12 h-12 text-white" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white font-bold text-xl">{video.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
