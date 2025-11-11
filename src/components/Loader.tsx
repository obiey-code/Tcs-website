import { useEffect, useState } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-red-600 via-amber-500 to-green-600 animate-gradient">
      <div className="text-center">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 border-8 border-white border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-8 border-amber-300 border-b-transparent rounded-full animate-spin-reverse"></div>
          <img
            src="/logo tcs out 2025 T1.png"
            alt="TCS Logo"
            className="absolute inset-8 w-32 h-32 object-contain animate-pulse"
          />
        </div>
        <h2 className="text-3xl font-bold text-white mb-2">TOLL CONTROL SYSTEM</h2>
         
        <div className="mt-6 flex justify-center space-x-2">
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '3ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
