
import React from 'react';
import { Book, Terminal, Settings, Database } from 'lucide-react';

export const DocsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="flex flex-col lg:flex-row gap-20">
        <aside className="lg:w-64 space-y-10 shrink-0">
          <div>
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] mb-6">Introduction</h3>
            <nav className="space-y-2">
              {['Quickstart', 'Data Sources', 'Components', 'Best Practices', 'FAQ'].map((link) => (
                <button key={link} className="block w-full text-left px-4 py-2.5 rounded-xl text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 transition-all text-sm font-semibold">
                  {link}
                </button>
              ))}
            </nav>
          </div>
          
          <div className="p-6 rounded-[24px] bg-emerald-50 border border-emerald-100">
            <h4 className="text-xs font-bold text-emerald-800 mb-3 uppercase tracking-wider">Project Status</h4>
            <p className="text-[11px] text-emerald-600 font-medium leading-relaxed">MetaMAP is free and open-source. New features are added monthly based on user feedback.</p>
          </div>
        </aside>

        <div className="flex-grow max-w-3xl">
          <header className="mb-16">
            <h1 className="text-5xl font-black text-neutral-900 mb-6 tracking-tight">Documentation</h1>
            <p className="text-xl text-neutral-500 font-medium">Official guide for the MetaMAP Rhino/Grasshopper ecosystem.</p>
          </header>

          <section className="space-y-20">
            <article>
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-neutral-900 rounded-2xl text-white shadow-lg">
                  <Terminal size={22} />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900">Rhino Integration</h2>
              </div>
              <p className="text-neutral-500 mb-8 text-lg">The easiest way to install and keep MetaMAP updated is through the Rhino Package Manager.</p>
              <div className="bg-neutral-900 p-8 rounded-[32px] font-mono text-sm text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Terminal size={80} />
                </div>
                <div className="relative space-y-3">
                  <p className="text-neutral-500 italic">// Type this into the Rhino Command Line</p>
                  <p className="flex items-center space-x-3">
                    <span className="text-emerald-400">$</span>
                    <span>_PackageManager</span>
                  </p>
                  <p className="text-neutral-500 pt-4 italic">// Search "MetaMAP" and click Download</p>
                </div>
              </div>
            </article>

            <article>
              <div className="flex items-center space-x-4 mb-8">
                <div className="p-3 bg-neutral-50 rounded-2xl text-emerald-600 border border-neutral-100 shadow-sm">
                  <Database size={22} />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900">The Data Stack</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-neutral-50 rounded-[24px] border border-neutral-100">
                  <h3 className="font-bold text-neutral-900 mb-3 text-xl">OpenStreetMap</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-medium">The gold standard for urban density. Includes detailed footprints, materials, and building usage.</p>
                </div>
                <div className="p-8 bg-neutral-50 rounded-[24px] border border-neutral-100">
                  <h3 className="font-bold text-neutral-900 mb-3 text-xl">Building Atlas</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-medium">Unrivaled global coverage for suburban and rural areas where crowdsourced data may be thin.</p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};
