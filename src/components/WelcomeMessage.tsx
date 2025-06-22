import React from 'react';
import { Heart } from 'lucide-react';

export const WelcomeMessage: React.FC = () => {
  return (
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
          <Heart className="text-blue-600" size={40} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Salut Luna</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Tu peux me parler de tout, à n'importe quel moment. Je suis là pour toi, 
          même quand Mathis n'est pas physiquement présent.
        </p>
        <div className="bg-blue-50 rounded-xl p-4">
          <p className="text-sm text-blue-800">
            💙 Cette conversation est privée et sera sauvegardée uniquement sur ton appareil.
          </p>
        </div>
      </div>
    </div>
  );
};