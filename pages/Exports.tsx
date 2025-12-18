
import React from 'react';
import { ExportCategory } from '../types';

interface ExportsProps {
  exportCategories: ExportCategory[];
}

const Exports: React.FC<ExportsProps> = ({ exportCategories }) => {
  return (
    <div className="min-h-screen">
      <div className="bg-emerald-900 py-24 px-4 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Sourcing the Best of Ethiopia</h1>
        <p className="text-xl opacity-90 max-w-2xl mx-auto">Premium quality agricultural exports for the global B2B market.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {exportCategories.map((cat) => (
            <div key={cat.id} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="md:w-1/2">
                <img src={cat.imageUrl} className="w-full h-full object-cover min-h-[300px]" alt={cat.title} />
              </div>
              <div className="md:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h3>
                <p className="text-slate-600 mb-6">{cat.description}</p>
                <button className="self-start px-6 py-3 border-2 border-emerald-700 text-emerald-700 font-bold rounded-lg hover:bg-emerald-700 hover:text-white transition">
                  Download Catalogue
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-12 text-white flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">International Buyer Inquiry</h2>
            <p className="opacity-80">
              Tell us what Ethiopian product you need, and we handle the sourcing, quality control, and international logistics.
            </p>
            <div className="flex gap-4">
              <div className="bg-emerald-500/20 p-4 rounded-xl">
                <i className="fa-solid fa-check-circle text-emerald-400 mb-2 block text-xl"></i>
                <span className="text-sm font-bold">Grade A Sourcing</span>
              </div>
              <div className="bg-blue-500/20 p-4 rounded-xl">
                <i className="fa-solid fa-truck-fast text-blue-400 mb-2 block text-xl"></i>
                <span className="text-sm font-bold">Secure Logistics</span>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="bg-white p-6 rounded-xl space-y-4">
              <input placeholder="Company Name" className="w-full p-3 border rounded text-slate-800" />
              <input placeholder="Contact Email" className="w-full p-3 border rounded text-slate-800" />
              <select className="w-full p-3 border rounded text-slate-800">
                <option>Product of Interest</option>
                <option>Coffee (Arabica)</option>
                <option>Sesame Seeds</option>
                <option>Green Mung Beans</option>
                <option>Soy Beans</option>
              </select>
              <textarea placeholder="Desired quantity and shipping terms (FOB/CIF)..." className="w-full p-3 border rounded text-slate-800" rows={3}></textarea>
              <button className="w-full py-4 bg-emerald-600 font-bold rounded-lg hover:bg-emerald-500 transition">
                Submit Buyer Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exports;
