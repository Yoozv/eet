
import React, { useState } from 'react';
import { Product, Inquiry, Partner, Project, ExportCategory } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  setProducts: (p: Product[]) => void;
  partners: Partner[];
  setPartners: (p: Partner[]) => void;
  projects: Project[];
  setProjects: (p: Project[]) => void;
  exportCategories: ExportCategory[];
  setExportCategories: (e: ExportCategory[]) => void;
  theme: { primary: string; green: string };
  setTheme: (t: { primary: string; green: string }) => void;
  siteImages: { logo: string; hero: string; about: string; whyChooseUs: string };
  setSiteImages: (i: { logo: string; hero: string; about: string; whyChooseUs: string }) => void;
  seoKeywords: string[];
  setSeoKeywords: (k: string[]) => void;
  inquiries: Inquiry[];
  deleteInquiry: (id: string) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  isOpen, 
  onClose, 
  products, 
  setProducts, 
  partners,
  setPartners,
  projects,
  setProjects,
  exportCategories,
  setExportCategories,
  theme, 
  setTheme,
  siteImages,
  setSiteImages,
  seoKeywords,
  setSeoKeywords,
  inquiries,
  deleteInquiry
}) => {
  const [newProduct, setNewProduct] = useState<Partial<Product>>({ name: '', category: 'Heavy Machinery', description: '' });
  const [newProject, setNewProject] = useState<Partial<Project>>({ title: '', category: '', description: '' });
  const [newExport, setNewExport] = useState<Partial<ExportCategory>>({ title: '', description: '' });
  const [newPartner, setNewPartner] = useState<Partial<Partner>>({ name: '', type: 'Sister Company' });
  
  const [imgPreview, setImgPreview] = useState<string>('');
  const [projImgPreview, setProjImgPreview] = useState<string>('');
  const [expImgPreview, setExpImgPreview] = useState<string>('');
  const [partnerImgPreview, setPartnerImgPreview] = useState<string>('');
  
  const [newKeyword, setNewKeyword] = useState('');
  const [activeTab, setActiveTab] = useState<'content' | 'inbox' | 'seo'>('content');

  if (!isOpen) return null;

  const handleFileUpload = (callback: (base64: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => callback(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  // Partner Handlers
  const updatePartnerField = (id: string, field: keyof Partner, value: string) => {
    setPartners(partners.map(p => p.id === id ? { ...p, [field]: value } : p));
  };
  const addPartner = () => {
    if (!newPartner.name || !partnerImgPreview) return alert('Name and logo required');
    setPartners([...partners, { ...newPartner as Partner, id: Date.now().toString(), logo: partnerImgPreview }]);
    setNewPartner({ name: '', type: 'Sister Company' });
    setPartnerImgPreview('');
  };
  const deletePartner = (id: string) => {
    setPartners(partners.filter(p => p.id !== id));
  };

  // Product Handlers
  const updateProductField = (id: string, field: keyof Product, value: string) => {
    setProducts(products.map(p => p.id === id ? { ...p, [field]: value } : p));
  };
  const addProduct = () => {
    if (!newProduct.name || !imgPreview) return alert('Name and image required');
    setProducts([...products, { ...newProduct as Product, id: Date.now().toString(), imageUrl: imgPreview, specs: {} }]);
    setNewProduct({ name: '', category: 'Heavy Machinery', description: '' });
    setImgPreview('');
  };
  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Project Handlers
  const updateProjectField = (id: string, field: keyof Project, value: string) => {
    setProjects(projects.map(p => p.id === id ? { ...p, [field]: value } : p));
  };
  const addProject = () => {
    if (!newProject.title || !projImgPreview) return alert('Title and image required');
    setProjects([...projects, { ...newProject as Project, id: Date.now().toString(), imageUrl: projImgPreview }]);
    setNewProject({ title: '', category: '', description: '' });
    setProjImgPreview('');
  };
  const deleteProject = (id: string) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  // Export Handlers
  const updateExportField = (id: string, field: keyof ExportCategory, value: string) => {
    setExportCategories(exportCategories.map(e => e.id === id ? { ...e, [field]: value } : e));
  };
  const addExport = () => {
    if (!newExport.title || !expImgPreview) return alert('Title and image required');
    setExportCategories([...exportCategories, { ...newExport as ExportCategory, id: Date.now().toString(), imageUrl: expImgPreview }]);
    setNewExport({ title: '', description: '' });
    setExpImgPreview('');
  };
  const deleteExport = (id: string) => {
    setExportCategories(exportCategories.filter(e => e.id !== id));
  };

  const addKeyword = () => {
    if (!newKeyword.trim() || seoKeywords.includes(newKeyword.trim())) return setNewKeyword('');
    setSeoKeywords([...seoKeywords, newKeyword.trim()]);
    setNewKeyword('');
  };

  const CATEGORIES = ['Heavy Machinery', 'Electric Vehicles', 'Raw Materials', 'Medical Equipment', 'Edible Products', 'Export Commodity', 'General'];

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex justify-end">
      <div className="bg-slate-50 w-full max-w-xl h-full shadow-2xl overflow-y-auto flex flex-col text-slate-900">
        <div className="p-8 pb-4 bg-white border-b sticky top-0 z-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2"><i className="fa-solid fa-gears text-primary-blue"></i> Admin Console</h2>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-900"><i className="fa-solid fa-xmark text-2xl"></i></button>
          </div>
          <div className="flex gap-1 bg-slate-100 p-1 rounded-xl">
            {(['content', 'inbox', 'seo'] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`flex-1 py-2 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-white shadow-sm text-primary-blue' : 'text-slate-400 hover:text-slate-600'}`}>
                {tab === 'inbox' && inquiries.length > 0 && <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-2"></span>}
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-8 flex-grow space-y-12">
          {activeTab === 'inbox' && (
            <div className="space-y-4">
              {inquiries.length === 0 ? (
                <div className="text-center py-20 text-slate-400">No new inquiries</div>
              ) : (
                inquiries.map(inq => (
                  <div key={inq.id} className="bg-white p-4 rounded-xl border relative group">
                    <button onClick={() => deleteInquiry(inq.id)} className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"><i className="fa-solid fa-trash"></i></button>
                    <div className="font-bold text-sm">{inq.name} <span className="text-[10px] text-primary-blue ml-2 uppercase">[{inq.type}]</span></div>
                    <div className="text-[10px] text-slate-400 mb-2">{inq.timestamp}</div>
                    <div className="text-xs text-slate-600 italic">"{inq.message}"</div>
                    <div className="mt-2 text-[10px] text-slate-400 border-t pt-2">{inq.email}</div>
                  </div>
                ))
              )}
            </div>
          )}

          {activeTab === 'content' && (
            <>
              {/* PARTNERS MANAGEMENT */}
              <section className="bg-white p-6 rounded-2xl border shadow-sm space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-amber-600 flex items-center gap-2">
                  <i className="fa-solid fa-handshake"></i> Partnerships & Sister Companies
                </h3>
                <div className="space-y-4">
                  {partners.map(partner => (
                    <div key={partner.id} className="p-4 bg-slate-50 rounded-xl border flex gap-4 relative group/item">
                      <button onClick={() => deletePartner(partner.id)} className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity"><i className="fa-solid fa-circle-xmark"></i></button>
                      <label className="w-16 h-16 rounded-lg overflow-hidden border bg-white cursor-pointer relative group">
                        <img src={partner.logo} className="w-full h-full object-contain p-2" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><i className="fa-solid fa-camera text-white text-xs"></i></div>
                        <input type="file" className="hidden" onChange={handleFileUpload((b) => updatePartnerField(partner.id, 'logo', b))} />
                      </label>
                      <div className="flex-1 space-y-2">
                        <input className="w-full font-bold text-sm bg-transparent border-b border-transparent hover:border-slate-300 focus:border-amber-500 outline-none" value={partner.name} onChange={e => updatePartnerField(partner.id, 'name', e.target.value)} />
                        <input className="w-full text-[10px] font-black uppercase text-amber-600 tracking-wider outline-none bg-transparent" value={partner.type} onChange={e => updatePartnerField(partner.id, 'type', e.target.value)} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Add New Partner</p>
                  <input placeholder="Partner Name" className="w-full p-2 border rounded text-xs" value={newPartner.name} onChange={e => setNewPartner({...newPartner, name: e.target.value})} />
                  <input placeholder="Type (e.g. Sister Company)" className="w-full p-2 border rounded text-xs" value={newPartner.type} onChange={e => setNewPartner({...newPartner, type: e.target.value})} />
                  <div className="flex items-center gap-4">
                    <input type="file" onChange={handleFileUpload(setPartnerImgPreview)} className="text-[10px] flex-1" />
                    {partnerImgPreview && <img src={partnerImgPreview} className="w-8 h-8 object-contain bg-white border p-1 rounded" />}
                  </div>
                  <button onClick={addPartner} className="w-full py-2 bg-amber-600 text-white rounded font-bold text-xs uppercase hover:bg-amber-700 transition">Add Partner</button>
                </div>
              </section>

              {/* EXPORT CATEGORIES */}
              <section className="bg-white p-6 rounded-2xl border shadow-sm space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-600 flex items-center gap-2">
                  <i className="fa-solid fa-leaf"></i> Export Hub Portfolio
                </h3>
                <div className="space-y-4">
                  {exportCategories.map(exp => (
                    <div key={exp.id} className="p-4 bg-slate-50 rounded-xl border flex gap-4 relative group/item">
                      <button onClick={() => deleteExport(exp.id)} className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity"><i className="fa-solid fa-circle-xmark"></i></button>
                      <label className="w-20 h-20 rounded-lg overflow-hidden border bg-white cursor-pointer relative group">
                        <img src={exp.imageUrl} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><i className="fa-solid fa-camera text-white"></i></div>
                        <input type="file" className="hidden" onChange={handleFileUpload((b) => updateExportField(exp.id, 'imageUrl', b))} />
                      </label>
                      <div className="flex-1 space-y-2">
                        <input className="w-full font-bold text-sm bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 outline-none" value={exp.title} onChange={e => updateExportField(exp.id, 'title', e.target.value)} />
                        <textarea className="w-full text-[11px] text-slate-500 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-emerald-500 outline-none resize-none" rows={2} value={exp.description} onChange={e => updateExportField(exp.id, 'description', e.target.value)} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Add New Export Category</p>
                  <input placeholder="Export Title" className="w-full p-2 border rounded text-xs" value={newExport.title} onChange={e => setNewExport({...newExport, title: e.target.value})} />
                  <textarea placeholder="Category Description" className="w-full p-2 border rounded text-xs" rows={2} value={newExport.description} onChange={e => setNewExport({...newExport, description: e.target.value})} />
                  <div className="flex items-center gap-4">
                    <input type="file" onChange={handleFileUpload(setExpImgPreview)} className="text-[10px] flex-1" />
                    {expImgPreview && <img src={expImgPreview} className="w-8 h-8 object-cover border rounded" />}
                  </div>
                  <button onClick={addExport} className="w-full py-2 bg-emerald-600 text-white rounded font-bold text-xs uppercase hover:bg-emerald-700">Add Category</button>
                </div>
              </section>

              {/* CONTRACTING PROJECTS */}
              <section className="bg-white p-6 rounded-2xl border shadow-sm space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                  <i className="fa-solid fa-helmet-safety"></i> Infrastructure Projects
                </h3>
                <div className="space-y-4">
                  {projects.map(proj => (
                    <div key={proj.id} className="p-4 bg-slate-50 rounded-xl border flex gap-4 relative group/item">
                      <button onClick={() => deleteProject(proj.id)} className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity"><i className="fa-solid fa-circle-xmark"></i></button>
                      <label className="w-20 h-20 rounded-lg overflow-hidden border bg-white cursor-pointer relative group">
                        <img src={proj.imageUrl} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><i className="fa-solid fa-camera text-white"></i></div>
                        <input type="file" className="hidden" onChange={handleFileUpload((b) => updateProjectField(proj.id, 'imageUrl', b))} />
                      </label>
                      <div className="flex-1 space-y-2">
                        <input className="w-full font-bold text-sm bg-transparent border-b border-transparent hover:border-slate-300 focus:border-primary-blue outline-none" value={proj.title} onChange={e => updateProjectField(proj.id, 'title', e.target.value)} />
                        <input className="w-full text-[10px] font-black uppercase text-blue-600 tracking-wider outline-none bg-transparent" value={proj.category} onChange={e => updateProjectField(proj.id, 'category', e.target.value)} />
                        <textarea className="w-full text-[11px] text-slate-500 bg-transparent border-b border-transparent hover:border-slate-300 focus:border-primary-blue outline-none resize-none" rows={2} value={proj.description} onChange={e => updateProjectField(proj.id, 'description', e.target.value)} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Add New Project</p>
                  <input placeholder="Project Title" className="w-full p-2 border rounded text-xs" value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})} />
                  <input placeholder="Category (e.g. Civil Works)" className="w-full p-2 border rounded text-xs" value={newProject.category} onChange={e => setNewProject({...newProject, category: e.target.value})} />
                  <textarea placeholder="Short description" className="w-full p-2 border rounded text-xs" rows={2} value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})} />
                  <div className="flex items-center gap-4">
                    <input type="file" onChange={handleFileUpload(setProjImgPreview)} className="text-[10px] flex-1" />
                    {projImgPreview && <img src={projImgPreview} className="w-8 h-8 object-cover border rounded" />}
                  </div>
                  <button onClick={addProject} className="w-full py-2 bg-slate-800 text-white rounded font-bold text-xs uppercase hover:bg-slate-900">Publish Project</button>
                </div>
              </section>

              {/* PRODUCTS CATALOG */}
              <section className="bg-white p-6 rounded-2xl border shadow-sm space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-primary-blue flex items-center gap-2">
                  <i className="fa-solid fa-boxes-stacked"></i> Imports Catalog
                </h3>
                <div className="space-y-4">
                  {products.map(p => (
                    <div key={p.id} className="p-4 bg-slate-50 rounded-xl border flex gap-4 relative group/item">
                      <button onClick={() => deleteProduct(p.id)} className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover/item:opacity-100 transition-opacity"><i className="fa-solid fa-circle-xmark"></i></button>
                      <label className="w-20 h-20 rounded-lg overflow-hidden border bg-white cursor-pointer relative group">
                        <img src={p.imageUrl} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><i className="fa-solid fa-camera text-white"></i></div>
                        <input type="file" className="hidden" onChange={handleFileUpload((b) => updateProductField(p.id, 'imageUrl', b))} />
                      </label>
                      <div className="flex-1 space-y-2">
                        <input className="w-full font-bold text-sm bg-transparent outline-none" value={p.name} onChange={e => updateProductField(p.id, 'name', e.target.value)} />
                        <select className="w-full text-[10px] font-bold bg-blue-100 text-primary-blue px-2 py-1 rounded" value={p.category} onChange={e => updateProductField(p.id, 'category', e.target.value)}>
                          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t space-y-2">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">Add New Product</p>
                  <input placeholder="Product Name" className="w-full p-2 border rounded text-xs" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} />
                  <select className="w-full p-2 border rounded text-xs" value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})}>
                    {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <div className="flex items-center gap-4">
                    <input type="file" onChange={handleFileUpload(setImgPreview)} className="text-[10px] flex-1" />
                    {imgPreview && <img src={imgPreview} className="w-8 h-8 object-cover border rounded" />}
                  </div>
                  <button onClick={addProduct} className="w-full py-2 bg-blue-600 text-white rounded font-bold text-xs uppercase hover:bg-blue-700">Add Product</button>
                </div>
              </section>
            </>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-8">
              <section className="p-6 bg-white border rounded-2xl">
                <h4 className="text-xs font-bold uppercase mb-4 text-slate-400">SEO Keywords</h4>
                <div className="flex gap-2 mb-4">
                  <input placeholder="Keyword" className="flex-1 p-2 border rounded text-xs" value={newKeyword} onChange={e => setNewKeyword(e.target.value)} />
                  <button onClick={addKeyword} className="px-4 py-2 bg-primary-blue text-white rounded text-xs font-bold">Add</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {seoKeywords.map(kw => <span key={kw} className="px-2 py-1 bg-slate-100 border rounded-full text-[10px] text-slate-600">{kw}</span>)}
                </div>
              </section>
              <section className="p-6 bg-white border rounded-2xl space-y-4">
                <h4 className="text-xs font-bold uppercase text-slate-400">Theme Colors</h4>
                <div className="grid grid-cols-2 gap-4">
                  <input type="color" className="w-full h-10" value={theme.primary} onChange={e => setTheme({...theme, primary: e.target.value})} />
                  <input type="color" className="w-full h-10" value={theme.green} onChange={e => setTheme({...theme, green: e.target.value})} />
                </div>
              </section>
              <section className="p-6 bg-white border rounded-2xl space-y-4">
                <h4 className="text-xs font-bold uppercase text-slate-400">Global Overrides</h4>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Logo</label>
                  <input type="file" onChange={handleFileUpload((b) => setSiteImages({...siteImages, logo: b}))} className="text-xs block w-full" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase">Hero Background</label>
                  <input type="file" onChange={handleFileUpload((b) => setSiteImages({...siteImages, hero: b}))} className="text-xs block w-full" />
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
