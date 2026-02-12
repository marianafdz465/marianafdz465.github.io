
import React from 'react';
import { UPDATES } from '../constants';
import { Update } from '../types';

const PulseFeed: React.FC = () => {
  const getTypeColor = (type: Update['type']) => {
    switch (type) {
      case 'achievement': return 'bg-pink-50 text-pink-400 border-pink-100';
      case 'research': return 'bg-blue-50 text-blue-400 border-blue-100';
      case 'writing': return 'bg-purple-50 text-purple-400 border-purple-100';
      case 'life': return 'bg-amber-50 text-amber-500 border-amber-100';
      default: return 'bg-gray-50 text-gray-400 border-gray-100';
    }
  };

  return (
    <div className="bg-white/40 p-8 rounded-[2rem] border border-[#FADADD]/30 shadow-sm backdrop-blur-sm">
      <h3 className="elegant text-3xl mb-8 font-light italic">Recent Pulse</h3>
      <div className="max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
        <div className="space-y-8">
          {UPDATES.map((update, idx) => (
            <div key={update.id} className="relative pl-8 pb-8 last:pb-0">
              {idx !== UPDATES.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-[1px] bg-[#FADADD]/40" />
              )}
              <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-[1px] border-[#FADADD] bg-white flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-200 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2">
                  {update.date}
                </span>
                <p className="text-gray-600 leading-relaxed text-sm font-light">
                  {update.content}
                </p>
                <div className="mt-3">
                  <span className={`text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-widest border ${getTypeColor(update.type)}`}>
                    {update.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #FADADD;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default PulseFeed;
