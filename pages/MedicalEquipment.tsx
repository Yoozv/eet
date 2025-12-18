
import React from 'react';
import { Product } from '../types';

interface MedicalEquipmentProps {
  addToQuote: (p: Product) => void;
  products: Product[];
}

const MedicalEquipment: React.FC<MedicalEquipmentProps> = ({ addToQuote, products }) => {
  const medicalProducts = products.filter(p => p.category === 'Medical Equipment');

  return (
    <div className="min-h-screen">
      <div className="bg-cyan-900 py-20 px-4 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Medical Equipment</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">Providing advanced healthcare solutions and laboratory equipment to Ethiopia's medical institutions.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {medicalProducts.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <i className="fa-solid fa-microscope text-4xl text-slate-300 mb-4"></i>
            <p className="text-slate-500">No medical products in the catalog currently.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicalProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden group flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.imageUrl} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-cyan-700 text-white text-[10px] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
                    Medical
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 text-sm mb-6 h-12 overflow-hidden">{product.description}</p>
                  
                  {product.specs && Object.keys(product.specs).length > 0 && (
                    <div className="grid grid-cols-3 gap-2 mb-6">
                      {Object.entries(product.specs).map(([key, val]) => (
                        <div key={key} className="bg-slate-50 p-2 rounded text-center">
                          <div className="text-[10px] text-slate-400 uppercase">{key}</div>
                          <div className="text-xs font-bold text-slate-700">{val}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto flex gap-2">
                    <button 
                      onClick={() => addToQuote(product)}
                      className="flex-1 py-3 bg-cyan-700 text-white text-sm font-bold rounded hover:bg-cyan-800 transition flex items-center justify-center gap-2"
                    >
                      <i className="fa-solid fa-plus"></i> Add to RFQ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalEquipment;
