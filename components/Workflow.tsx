
import React, { useState } from 'react';
import { MapPin, DownloadCloud, Cuboid, BarChart3, ChevronRight } from 'lucide-react';

const steps = [
  {
    title: 'Pinpoint Location',
    description: 'Use the interactive map component to pick any coordinate or define an area of interest.',
    icon: MapPin,
    color: 'emerald'
  },
  {
    title: 'Fetch Data',
    description: 'Connect instantly to OpenStreetMap or Global Building Atlas. No API keys or complex setups.',
    icon: DownloadCloud,
    color: 'blue'
  },
  {
    title: 'Generate B-Reps',
    description: 'MetaMAP converts raw JSON/GeoJSON into clean, closed Breps and meshes optimized for Rhino.',
    icon: Cuboid,
    color: 'indigo'
  },
  {
    title: 'Run Analysis',
    description: 'Plug your clean geometry into Ladybug, Honeybee, or Eddy3D for instant environmental feedback.',
    icon: BarChart3,
    color: 'emerald'
  }
];

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-neutral-900 mb-4 tracking-tight">Seamless Integration</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-lg">Automate the boring stuff. Focus on your design exploration.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 rounded-3xl border transition-all cursor-pointer group ${activeStep === idx ? 'bg-neutral-50 border-neutral-200 shadow-sm scale-[1.02]' : 'bg-transparent border-transparent opacity-50 hover:opacity-80'}`}
              >
                <div className="flex items-start space-x-5">
                  <div className={`p-4 rounded-2xl bg-white shadow-sm text-emerald-600 transition-colors`}>
                    <step.icon size={24} />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl text-neutral-900 mb-1 flex items-center">
                      {step.title}
                      {activeStep === idx && <ChevronRight className="ml-2 text-emerald-600" size={18} />}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative aspect-square bg-neutral-50 rounded-[48px] overflow-hidden border border-neutral-100 flex items-center justify-center p-12 shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.03] to-transparent" />
            
            <div className="relative w-full h-full flex flex-col items-center justify-center space-y-8">
              {activeStep === 0 && (
                <div className="text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-40 h-40 rounded-full border-4 border-dashed border-emerald-200 flex items-center justify-center mb-8 bg-white shadow-xl">
                    <MapPin className="text-emerald-600 w-16 h-16" />
                  </div>
                  <div className="bg-white px-6 py-3 rounded-2xl shadow-sm border border-neutral-100 font-mono text-sm text-neutral-600">
                    40.7128° N, 74.0060° W
                  </div>
                </div>
              )}
              {activeStep === 1 && (
                <div className="w-full max-w-xs space-y-6 animate-in slide-in-from-bottom-8 duration-500">
                  <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[85%] animate-pulse" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="h-16 bg-white rounded-2xl shadow-sm border border-neutral-100 flex items-center justify-center">
                        <div className="w-8 h-1 bg-neutral-100 rounded-full" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {activeStep === 2 && (
                <div className="grid grid-cols-3 gap-6 animate-in zoom-in duration-500">
                  {[1,2,3,4,5,6,7,8,9].map(i => (
                    <div key={i} className="w-20 h-20 bg-white shadow-lg border border-neutral-100 rounded-2xl rotate-3 flex items-center justify-center">
                      <Cuboid className="text-emerald-500/30 w-10 h-10" />
                    </div>
                  ))}
                </div>
              )}
              {activeStep === 3 && (
                <div className="w-full flex items-end justify-center space-x-3 animate-in slide-in-from-right-8 duration-500">
                  {[45, 80, 55, 110, 70, 95].map((h, i) => (
                    <div key={i} style={{ height: `${h}px` }} className="w-10 bg-emerald-600 rounded-t-2xl shadow-lg" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
