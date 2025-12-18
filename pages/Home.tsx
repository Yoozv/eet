
import React from 'react';
import { Link } from 'react-router-dom';
import { Language, Partner } from '../types';

interface HomeProps {
  lang: Language;
  heroImage: string;
  whyChooseUsImage: string;
  partners: Partner[];
}

const Home: React.FC<HomeProps> = ({ lang, heroImage, whyChooseUsImage, partners }) => {
  const content = {
    hero: {
      en: { 
        title: 'Ethio Trade Venture PLC', 
        subtitle: 'Connecting Ethiopia to the world market' 
      },
      am: { 
        title: 'ኢትዮ ትሬድ ቬንቸር ኃ/የተ/የግ/ማ', 
        subtitle: 'ኢትዮጵያን ከዓለም ገበያ ጋር እናገናኛለን' 
      }
    },
    pillars: [
      {
        title: { en: 'Global Imports', am: 'ዓለም አቀፍ ኢምፖርት' },
        desc: { en: 'Heavy machinery, electric vehicles, and industrial materials.', am: 'ከባድ ማሽነሪዎች፣ የኤሌክትሪክ ተሽከርካሪዎች እና የኢንዱስትሪ ግብዓቶች።' },
        icon: 'fa-ship',
        link: '/imports',
        color: 'blue'
      },
      {
        title: { en: 'Ethiopian Exports', am: 'የኢትዮጵያ ኤክስፖርት' },
        desc: { en: 'Sourcing premium coffee, oilseeds, and pulses for the global market.', am: 'ምርጥ የኢትዮጵያ ቡና፣ የቅባት እህሎች እና ጥራጥሬዎችን ለዓለም ገበያ ማቅረብ።' },
        icon: 'fa-globe',
        link: '/exports',
        color: 'green'
      },
      {
        title: { en: 'Medical Equipment', am: 'የሕክምና መሣሪያዎች' },
        desc: { en: 'High-tech diagnostic and laboratory equipment for clinics and hospitals.', am: 'ለክሊኒኮች እና ሆስፒታሎች ከፍተኛ የቴክኖሎጂ ምርመራ እና የላብራቶሪ መሣሪያዎች።' },
        icon: 'fa-microscope',
        link: '/medical',
        color: 'cyan'
      },
      {
        title: { en: 'Edible Products', am: 'የምግብ ምርቶች' },
        desc: { en: 'Premium quality cooking oils, grains, and processed food imports.', am: 'ጥራት ያላቸው የምግብ ዘይቶች፣ ጥራጥሬዎች እና የተቀነባበሩ የምግብ ምርቶች።' },
        icon: 'fa-leaf',
        link: '/edibles',
        color: 'amber'
      },
      {
        title: { en: 'General Contracting', am: 'ጠቅላላ ኮንትራክቲንግ' },
        desc: { en: 'Full-cycle construction management and infrastructure development.', am: 'ሙሉ የግንባታ አስተዳደር እና የመሰረተ ልማት ዝርጋታ።' },
        icon: 'fa-helmet-safety',
        link: '/contracting',
        color: 'slate'
      }
    ]
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden blue-gradient">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] animate-fadeIn">
            Established & Trusted
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            {content.hero[lang].title}
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            {content.hero[lang].subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="w-full sm:w-auto px-10 py-4 bg-white text-primary-blue font-bold rounded-xl hover:bg-slate-100 transition-all shadow-xl hover:-translate-y-1">
              {lang === Language.EN ? 'Get Started' : 'ይጀምሩ'}
            </Link>
            <Link to="/about" className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-xl hover:bg-white/20 transition-all">
              {lang === Language.EN ? 'Explore Services' : 'አገልግሎቶችን ይመልከቱ'}
            </Link>
          </div>
        </div>
      </section>

      {/* The Pillars */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">{lang === Language.EN ? 'Our Core Business Divisions' : 'ዋና የሥራ ዘርፎቻችን'}</h2>
            <div className="w-20 h-1.5 bg-primary-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.pillars.map((p, idx) => (
              <Link 
                to={p.link} 
                key={idx}
                className="group p-8 rounded-3xl border border-slate-100 hover:border-primary-blue/20 hover:shadow-2xl transition-all duration-500 bg-slate-50 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-blue group-hover:text-white transition-all duration-500 text-primary-blue">
                  <i className={`fa-solid ${p.icon} text-3xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{p.title[lang]}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed text-sm">
                  {p.desc[lang]}
                </p>
                <span className="text-primary-blue font-bold text-sm flex items-center gap-2 group-hover:gap-4 transition-all mt-auto">
                  {lang === Language.EN ? 'Learn More' : 'ተጨማሪ ያንብቡ'} <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="py-16 blue-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-extrabold mb-2 tracking-tighter">15+</div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold opacity-70">Years Experience</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold mb-2 tracking-tighter">200+</div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold opacity-70">Projects Completed</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold mb-2 tracking-tighter">12</div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold opacity-70">Global Partners</div>
          </div>
          <div>
            <div className="text-5xl font-extrabold mb-2 tracking-tighter">500+</div>
            <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold opacity-70">SKUs Managed</div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-blue/10 rounded-3xl blur-2xl"></div>
              <img src={whyChooseUsImage} className="relative rounded-3xl shadow-2xl w-full h-auto object-cover max-h-[500px]" alt="Construction worker" />
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{lang === Language.EN ? 'Why Partner with Ethio Trade Venture?' : 'ለምን ከኢትዮ ትሬድ ቬንቸር ጋር አጋር ይሆናሉ?'}</h2>
            <p className="text-slate-600 leading-relaxed">
              We leverage local expertise with global standards to provide end-to-end solutions in trade and construction. Our commitment to integrity ensures your success in the Ethiopian market.
            </p>
            <div className="space-y-6">
              {[
                { title: 'Integrity', desc: 'Transparent dealings in every contract and trade.', icon: 'fa-shield-halved', color: 'bg-blue-100 text-blue-900' },
                { title: 'Quality', desc: 'Only sourcing the highest grade machinery and materials.', icon: 'fa-award', color: 'bg-amber-100 text-amber-900' },
                { title: 'Reliability', desc: 'Meeting tight deadlines in both logistics and building.', icon: 'fa-clock', color: 'bg-emerald-100 text-emerald-900' }
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <i className={`fa-solid ${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Sister Companies Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
              {lang === Language.EN ? 'Strategic Partnerships & Sister Companies' : 'ስልታዊ አጋሮች እና እህት ኩባንያዎች'}
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Our network of partners and specialized sister companies allows us to deliver integrated solutions across the entire value chain.
            </p>
            <div className="w-20 h-1.5 bg-primary-blue mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="group flex flex-col items-center justify-center p-6 bg-slate-50 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-xl transition-all duration-300 w-48"
              >
                <div className="relative w-full aspect-square mb-4 overflow-hidden rounded-xl bg-white flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 p-2"
                  />
                </div>
                <h4 className="font-bold text-slate-800 text-center text-sm mb-1">{partner.name}</h4>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary-blue opacity-0 group-hover:opacity-100 transition-opacity">
                  {partner.type}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-400 text-sm italic">
              "Building the future of Ethiopian trade through collective excellence."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
