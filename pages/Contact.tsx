
import React, { useState } from 'react';
import { Inquiry } from '../types';

interface ContactProps {
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'timestamp'>) => void;
}

const Contact: React.FC<ContactProps> = ({ addInquiry }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addInquiry({
      type: 'CONTACT',
      name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      department: formData.department,
      message: formData.message
    });
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Get in Touch</h1>
              <p className="text-lg text-slate-600">Have a trade or construction inquiry? Our team in Addis Ababa is ready to partner with you.</p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-900">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Physical Address</h4>
                  <p className="text-slate-600">Bole Bulbula Kabod Mall 3rd floor<br />Addis Ababa, Ethiopia</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-900">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone & WhatsApp</h4>
                  <div className="flex flex-col gap-2">
                    <a 
                      href="https://wa.me/251948476240" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-primary-blue transition-colors flex items-center gap-2"
                    >
                      +251 948 476 240 <i className="fa-brands fa-whatsapp text-green-500"></i>
                    </a>
                    <a 
                      href="https://wa.me/251701350808" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-primary-blue transition-colors flex items-center gap-2"
                    >
                      +251 701 350 808 <i className="fa-brands fa-whatsapp text-green-500"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 text-blue-900">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600">info@ethiotradeventure.com</p>
                </div>
              </div>
            </div>

            <div className="w-full h-80 rounded-2xl overflow-hidden grayscale contrast-125 border border-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11526433291!2d38.70426543160413!3d8.963479539328574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24c49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-20 animate-fadeIn">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-check text-4xl"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Message Received</h3>
                <p className="text-slate-600">Thank you for reaching out. An Ethio Trade representative will contact you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 px-8 py-3 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-8">Send an Inquiry</h3>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
                      <input 
                        required
                        className="w-full p-4 bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" 
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
                      <input 
                        required
                        className="w-full p-4 bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" 
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
                    <input 
                      required
                      type="email"
                      className="w-full p-4 bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Department</label>
                    <select 
                      className="w-full p-4 bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                    >
                      <option>Global Imports</option>
                      <option>Ethiopian Exports</option>
                      <option>General Contracting</option>
                      <option>Other / General</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
                    <textarea 
                      required
                      rows={6} 
                      className="w-full p-4 bg-slate-50 border-0 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full py-5 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-lg hover:shadow-blue-900/20">
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
