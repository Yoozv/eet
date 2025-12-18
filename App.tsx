
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/navbar";
import Home from './pages/home';
import Imports from './pages/imports';
import Exports from './pages/exports';
import MedicalEquipment from './pages/medicalEquipment';
import EdibleProducts from './pages/edibleProducts';
import Contracting from './pages/contracting';
import Contact from './pages/contact';
import About from './pages/about';
import RFQModal from './components/rFQModal';
import TradeAssistant from './components/tradeAssistant';
import AdminPanel from './components/adminPanel';
import { Language, Product, QuoteItem, Inquiry, Partner, Project, ExportCategory } from './types';
import { IMPORT_PRODUCTS, MEDICAL_PRODUCTS, EDIBLE_PRODUCTS, PARTNERS as DEFAULT_PARTNERS, PROJECTS, EXPORT_CATEGORIES } from './constants';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isRFQOpen, setIsRFQOpen] = useState(false);
  
  // Dynamic State for Admin Features
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('etv_products');
    if (saved) return JSON.parse(saved);
    return [...IMPORT_PRODUCTS, ...MEDICAL_PRODUCTS, ...EDIBLE_PRODUCTS];
  });
  
  const [partners, setPartners] = useState<Partner[]>(() => {
    const saved = localStorage.getItem('etv_partners');
    if (saved) return JSON.parse(saved);
    return DEFAULT_PARTNERS.map((p, idx) => ({ ...p, id: `p-${idx}` }));
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('etv_projects');
    if (saved) return JSON.parse(saved);
    return PROJECTS.map((p, idx) => ({ ...p, id: `proj-${idx}`, description: 'Completed with full adherence to international safety standards.' }));
  });

  const [exportCategories, setExportCategories] = useState<ExportCategory[]>(() => {
    const saved = localStorage.getItem('etv_exports');
    if (saved) return JSON.parse(saved);
    return EXPORT_CATEGORIES.map((e, idx) => ({ ...e, id: `exp-${idx}` }));
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    const saved = localStorage.getItem('etv_inquiries');
    if (saved) return JSON.parse(saved);
    return [];
  });

  const [theme, setTheme] = useState({ 
    primary: localStorage.getItem('etv_theme_primary') || '#1e3a8a', 
    green: localStorage.getItem('etv_theme_green') || '#15803d' 
  });

  const [siteImages, setSiteImages] = useState({
    logo: localStorage.getItem('etv_img_logo') || '',
    hero: localStorage.getItem('etv_img_hero') || 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=2000',
    about: localStorage.getItem('etv_img_about') || 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800',
    whyChooseUs: localStorage.getItem('etv_img_whychoose') || 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
  });

  const [seoKeywords, setSeoKeywords] = useState<string[]>(() => {
    const saved = localStorage.getItem('etv_seo_keywords');
    if (saved) return JSON.parse(saved);
    return [
      "Ethiopian Export Agent", 
      "Construction Machinery Importer Ethiopia", 
      "EV Dealer Addis Ababa", 
      "General Contractor Ethiopia",
      "Medical Equipment Ethiopia",
      "Edible Oil Importer Ethiopia",
      "Kabod Mall Addis Ababa",
      "Bole Bulbula Trade",
      "Coffee Export Ethiopia",
      "Sesame Seed Supplier",
      "Industrial Raw Materials Ethiopia",
      "Electric Vehicle Charging Infrastructure",
      "Ethiopian Business Gateway",
      "Import Export Logistics Addis"
    ];
  });

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('etv_products', JSON.stringify(products));
    localStorage.setItem('etv_partners', JSON.stringify(partners));
    localStorage.setItem('etv_projects', JSON.stringify(projects));
    localStorage.setItem('etv_exports', JSON.stringify(exportCategories));
    localStorage.setItem('etv_inquiries', JSON.stringify(inquiries));
    localStorage.setItem('etv_seo_keywords', JSON.stringify(seoKeywords));
  }, [products, partners, projects, exportCategories, inquiries, seoKeywords]);

  useEffect(() => {
    localStorage.setItem('etv_theme_primary', theme.primary);
    localStorage.setItem('etv_theme_green', theme.green);
    localStorage.setItem('etv_img_logo', siteImages.logo);
    localStorage.setItem('etv_img_hero', siteImages.hero);
    localStorage.setItem('etv_img_about', siteImages.about);
    localStorage.setItem('etv_img_whychoose', siteImages.whyChooseUs);
    
    document.documentElement.style.setProperty('--primary-blue', theme.primary);
    document.documentElement.style.setProperty('--primary-blue-hover', theme.primary + 'ee');
    document.documentElement.style.setProperty('--accent-green', theme.green);
  }, [theme, siteImages]);

  const addToQuote = (product: Product) => {
    setQuoteItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsRFQOpen(true);
  };

  const removeFromQuote = (id: string) => {
    setQuoteItems(prev => prev.filter(item => item.product.id !== id));
  };

  const updateQuantity = (id: string, q: number) => {
    setQuoteItems(prev => prev.map(item => item.product.id === id ? { ...item, quantity: Math.max(1, q) } : item));
  };

  const addInquiry = (inquiry: Omit<Inquiry, 'id' | 'timestamp'>) => {
    const newInquiry: Inquiry = {
      ...inquiry,
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString()
    };
    setInquiries(prev => [newInquiry, ...prev]);
    if (inquiry.type === 'RFQ') {
      setQuoteItems([]);
    }
  };

  const deleteInquiry = (id: string) => {
    setInquiries(prev => prev.filter(i => i.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          quoteCount={quoteItems.length} 
          openRFQ={() => setIsRFQOpen(true)} 
          openAdmin={() => setIsAdminOpen(true)}
          logo={siteImages.logo}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home lang={lang} heroImage={siteImages.hero} whyChooseUsImage={siteImages.whyChooseUs} partners={partners} />} />
            <Route path="/imports" element={<Imports addToQuote={addToQuote} products={products} />} />
            <Route path="/exports" element={<Exports exportCategories={exportCategories} />} />
            <Route path="/medical" element={<MedicalEquipment addToQuote={addToQuote} products={products} />} />
            <Route path="/edibles" element={<EdibleProducts addToQuote={addToQuote} products={products} />} />
            <Route path="/contracting" element={<Contracting projects={projects} />} />
            <Route path="/about" element={<About lang={lang} aboutImage={siteImages.about} />} />
            <Route path="/contact" element={<Contact addInquiry={addInquiry} />} />
          </Routes>
        </main>

        <footer className="bg-slate-900 text-white py-12 px-4 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Ethio Trade Venture PLC</h3>
              <p className="text-slate-400 text-sm">Empowering industry and trade across borders with professional reliability.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li><a href="/" className="hover:text-white">Home</a></li>
                <li><a href="/#/imports" className="hover:text-white">Global Imports</a></li>
                <li><a href="/#/exports" className="hover:text-white">Ethiopian Exports</a></li>
                <li><a href="/#/medical" className="hover:text-white">Medical Equipment</a></li>
                <li><a href="/#/edibles" className="hover:text-white">Edible Products</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Business Hours</h4>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>Mon - Fri: 8:30 AM - 5:30 PM</li>
                <li>Sat: 8:30 AM - 12:30 PM</li>
                <li>Sun: Closed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <div className="flex gap-2">
                <input className="bg-slate-800 border-0 rounded px-4 py-2 text-sm flex-1 outline-none focus:ring-1 focus:ring-blue-500" placeholder="Email" />
                <button className="bg-blue-700 px-4 py-2 rounded text-sm hover:bg-blue-600">Join</button>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
            <div>&copy; {new Date().getFullYear()} Ethio Trade Venture PLC. All rights reserved. Kabod Mall 3rd floor, Addis Ababa, Ethiopia.</div>
            <button 
              onClick={() => setIsAdminOpen(true)}
              className="hover:text-slate-400 transition-colors"
              title="Admin Access"
            >
              <i className="fa-solid fa-user-shield"></i> System Access
            </button>
          </div>
        </footer>

        <RFQModal 
          isOpen={isRFQOpen} 
          onClose={() => setIsRFQOpen(false)} 
          items={quoteItems} 
          removeFromQuote={removeFromQuote}
          updateQuantity={updateQuantity}
          addInquiry={addInquiry}
        />
        
        <AdminPanel 
          isOpen={isAdminOpen} 
          onClose={() => setIsAdminOpen(false)} 
          products={products}
          setProducts={setProducts}
          partners={partners}
          setPartners={setPartners}
          projects={projects}
          setProjects={setProjects}
          exportCategories={exportCategories}
          setExportCategories={setExportCategories}
          theme={theme}
          setTheme={setTheme}
          siteImages={siteImages}
          setSiteImages={setSiteImages}
          seoKeywords={seoKeywords}
          setSeoKeywords={setSeoKeywords}
          inquiries={inquiries}
          deleteInquiry={deleteInquiry}
        />

        <TradeAssistant />
      </div>
    </Router>
  );
};

export default App;
