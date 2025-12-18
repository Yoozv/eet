
import React from 'react';
import { Language } from '../types';

interface AboutProps {
  lang: Language;
  aboutImage: string;
}

const About: React.FC<AboutProps> = ({ lang, aboutImage }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="blue-gradient py-24 px-4 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">About Us</h1>
        <p className="text-xl opacity-90 max-w-3xl mx-auto">
          {lang === Language.EN 
            ? "Your Trusted Partner in Global Trade and Infrastructure Development." 
            : "በዓለም አቀፍ ንግድ እና በመሠረተ ልማት ዝርጋታ የታመነ አጋርዎ።"}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 space-y-24">
        {/* Who We Are */}
        <section className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-primary-blue border-b-4 border-primary-blue pb-2 inline-block">Who We Are</h2>
            <div className="text-slate-600 leading-relaxed space-y-4">
              <p>
                Ethio Trade Venture PLC is a privately owned Ethiopian import export company providing professional general trading, import, export, and general contracting services in Ethiopia. Established to support Ethiopia’s fast-growing economy, we deliver reliable trade and contracting solutions that meet international standards while connecting local and global markets.
              </p>
              <p>
                As a trusted trading company in Ethiopia, Ethio Trade Venture PLC works with local producers, international suppliers, and business partners to facilitate efficient and transparent trade operations.
              </p>
            </div>
          </div>
          <div className="flex-1">
            <img 
              src={aboutImage} 
              className="rounded-2xl shadow-xl border border-slate-100 w-full h-auto object-cover max-h-[500px]" 
              alt="Professional team"
            />
          </div>
        </section>

        {/* What We Do */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">What We Do</h2>
            <p className="text-slate-500 mt-2">Comprehensive solutions across multiple sectors</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 text-primary-blue rounded-lg flex items-center justify-center mb-6">
                <i className="fa-solid fa-truck-loading text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Import Services</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                We supply products that support major economic sectors, including:
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex gap-2"><i className="fa-solid fa-check text-blue-600"></i> Construction machinery</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-blue-600"></i> Raw materials</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-blue-600"></i> Building materials</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-blue-600"></i> Electric Vehicles (EVs)</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-900 rounded-lg flex items-center justify-center mb-6">
                <i className="fa-solid fa-seedling text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Export Services</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Helping Ethiopian products reach international markets through:
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Sourcing high-quality goods</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Global buyer connections</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Managing logistics & customs</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-emerald-600"></i> Trade documentation</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-slate-200 text-slate-900 rounded-lg flex items-center justify-center mb-6">
                <i className="fa-solid fa-building text-xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">General Contracting</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Delivering construction and related projects with a focus on:
              </p>
              <ul className="text-sm text-slate-600 space-y-2">
                <li className="flex gap-2"><i className="fa-solid fa-check text-slate-900"></i> Quality & Safety</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-slate-900"></i> Timely completion</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-slate-900"></i> Experienced coordination</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-slate-900"></i> Industry standards</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-primary-blue text-white p-12 rounded-3xl space-y-6 shadow-xl">
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="text-blue-100 text-lg leading-relaxed">
              To become a leading import export and general trading company in Ethiopia, recognized for reliability, professionalism, and sustainable growth in regional and international markets.
            </p>
          </div>
          <div className="bg-slate-100 p-12 rounded-3xl space-y-6 border border-slate-200 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-900">Our Mission</h2>
            <ul className="space-y-4 text-slate-700">
              <li className="flex gap-3 items-start">
                <i className="fa-solid fa-circle-chevron-right mt-1 text-primary-blue"></i>
                <span>Provide high-quality import and export services in Ethiopia</span>
              </li>
              <li className="flex gap-3 items-start">
                <i className="fa-solid fa-circle-chevron-right mt-1 text-primary-blue"></i>
                <span>Build long-term partnerships based on trust and performance</span>
              </li>
              <li className="flex gap-3 items-start">
                <i className="fa-solid fa-circle-chevron-right mt-1 text-primary-blue"></i>
                <span>Promote Ethiopian products in global markets</span>
              </li>
              <li className="flex gap-3 items-start">
                <i className="fa-solid fa-circle-chevron-right mt-1 text-primary-blue"></i>
                <span>Operate with integrity, efficiency, and professionalism</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Values */}
        <section className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900">Our Values</h2>
            <p className="text-slate-500 mt-2">The core principles that drive our every move</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: 'Integrity', icon: 'fa-scale-balanced', desc: 'Transparent and ethical' },
              { title: 'Quality', icon: 'fa-award', desc: 'International standards' },
              { title: 'Reliability', icon: 'fa-clock-rotate-left', desc: 'Consistent delivery' },
              { title: 'Partnership', icon: 'fa-handshake', desc: 'Long-term relations' },
              { title: 'Growth', icon: 'fa-chart-line', desc: 'Continuous expansion' }
            ].map((v, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-white border border-slate-100 shadow-sm hover:border-primary-blue transition duration-300">
                <i className={`fa-solid ${v.icon} text-2xl text-primary-blue mb-4`}></i>
                <h4 className="font-bold text-slate-900">{v.title}</h4>
                <p className="text-[10px] text-slate-400 uppercase mt-1">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-slate-50 p-12 rounded-3xl border border-slate-200">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Why Choose Ethio Trade Venture PLC</h2>
              <div className="w-20 h-1 bg-primary-blue mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-700">
              <div className="flex gap-4">
                <i className="fa-solid fa-user-tie text-primary-blue text-xl mt-1"></i>
                <p>Experienced import export company in Ethiopia with deep local knowledge.</p>
              </div>
              <div className="flex gap-4">
                <i className="fa-solid fa-network-wired text-primary-blue text-xl mt-1"></i>
                <p>Strong understanding of local and international trade markets.</p>
              </div>
              <div className="flex gap-4">
                <i className="fa-solid fa-truck-fast text-primary-blue text-xl mt-1"></i>
                <p>Reliable supplier and logistics network ensuring timely delivery.</p>
              </div>
              <div className="flex gap-4">
                <i className="fa-solid fa-file-contract text-primary-blue text-xl mt-1"></i>
                <p>Professional trade, customs, and documentation management.</p>
              </div>
              <div className="flex gap-4 md:col-span-2 justify-center">
                <i className="fa-solid fa-bullseye text-primary-blue text-xl mt-1"></i>
                <p>Customer-focused and results-driven approach to every partnership.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
