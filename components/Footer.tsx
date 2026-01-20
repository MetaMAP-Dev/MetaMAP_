
import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <img src={import.meta.env.BASE_URL + "metamap.png"} alt="MetaMAP Logo" className="w-10 h-10 rounded-xl" />
              <span className="text-2xl font-black tracking-tight text-neutral-900">MetaMAP</span>
            </div>
            <p className="text-neutral-500 max-w-sm mb-10 leading-relaxed font-medium">
              Free, open-source, and dedicated to modernizing the urban designer's spatial toolset.
            </p>
            <div className="flex space-x-5">
              <a href="https://github.com/karadagi/MetaMAP" target="_blank" rel="noopener noreferrer" className="p-3.5 bg-white border border-neutral-100 rounded-2xl text-neutral-400 hover:text-emerald-600 hover:shadow-md transition-all">
                <Github size={22} />
              </a>
              <a href="#" className="p-3.5 bg-white border border-neutral-100 rounded-2xl text-neutral-400 hover:text-emerald-600 hover:shadow-md transition-all">
                <Twitter size={22} />
              </a>
              <a href="#" className="p-3.5 bg-white border border-neutral-100 rounded-2xl text-neutral-400 hover:text-emerald-600 hover:shadow-md transition-all">
                <Mail size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-neutral-900 mb-8 uppercase text-xs tracking-[0.2em]">Community</h4>
            <ul className="space-y-4 text-neutral-500 font-medium text-sm">
              <li><a href="https://www.food4rhino.com/en/app/metamap" className="hover:text-emerald-600 transition-colors">Food4Rhino</a></li>
              <li><a href="https://github.com/karadagi/MetaMAP" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-600 transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Bug Reports</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-neutral-900 mb-8 uppercase text-xs tracking-[0.2em]">Help</h4>
            <ul className="space-y-4 text-neutral-500 font-medium text-sm">
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Video Guide</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">Sample Files</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">License</a></li>
              <li><a href="#" className="hover:text-emerald-600 transition-colors">McNeel Forums</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-100 pt-10 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 font-semibold tracking-wide">
          <p>© {new Date().getFullYear()} METAMAP ECOSYSTEM. GPL-3.0 OPEN SOURCE.</p>
          <div className="flex space-x-8 mt-6 md:mt-0 uppercase">
            <span>Rhino 7 & 8 Ready</span>
            <span>Grasshopper 1.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
