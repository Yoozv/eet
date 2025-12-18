
import React, { useState } from 'react';
import { QuoteItem, Inquiry } from '../types';

interface RFQModalProps {
  items: QuoteItem[];
  isOpen: boolean;
  onClose: () => void;
  removeFromQuote: (id: string) => void;
  updateQuantity: (id: string, q: number) => void;
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'timestamp'>) => void;
}

const RFQModal: React.FC<RFQModalProps> = ({ items, isOpen, onClose, removeFromQuote, updateQuantity, addInquiry }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({
      type: 'RFQ',
      name: formData.name,
      email: formData.email,
      company: formData.company,
      message: formData.message,
      items: items
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-blue-900 text-white">
          <h2 className="text-xl font-bold">Request for Quote (RFQ)</h2>
          <button onClick={onClose} className="hover:text-slate-200"><i className="fa-solid fa-xmark text-xl"></i></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fa-solid fa-check text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2">Quote Request Sent!</h3>
              <p className="text-slate-600">Our procurement team will review your list and get back to you with pricing and lead times within 24-48 hours.</p>
              <button 
                onClick={onClose}
                className="mt-6 px-8 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition"
              >
                Close
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-slate-500 mb-4">Your quote list is empty.</p>
              <button onClick={onClose} className="text-blue-600 font-bold underline">Go explore products</button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="flex items-center gap-4">
                      <img src={item.product.imageUrl} alt={item.product.name} className="w-12 h-12 rounded object-cover" />
                      <div>
                        <h4 className="font-bold text-slate-800 text-sm">{item.product.name}</h4>
                        <p className="text-xs text-slate-500">{item.product.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <input 
                        type="number" 
                        min="1" 
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                        className="w-16 px-2 py-1 border rounded text-center text-sm"
                      />
                      <button onClick={() => removeFromQuote(item.product.id)} className="text-red-500 hover:text-red-700">
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    required 
                    placeholder="Full Name" 
                    className="w-full p-3 border rounded-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    required 
                    type="email" 
                    placeholder="Work Email" 
                    className="w-full p-3 border rounded-lg"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <input 
                  required 
                  placeholder="Company Name" 
                  className="w-full p-3 border rounded-lg"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                />
                <textarea 
                  rows={3} 
                  placeholder="Additional Project Details..." 
                  className="w-full p-3 border rounded-lg"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                <button 
                  type="submit" 
                  className="w-full py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition"
                >
                  Submit Quote Request
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RFQModal;
