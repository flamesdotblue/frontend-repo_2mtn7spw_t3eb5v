import React from 'react';
import { Camera, MapPin, Info } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-sm">
            <Camera className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Plot Capture Assistant</h1>
            <p className="text-xs text-gray-500">Queue plot codes and review captures</p>
          </div>
        </div>
        <a
          href="https://gis.apcrda.org/lps/index.html"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700"
        >
          <MapPin className="h-4 w-4" />
          Open LPS Map
        </a>
      </div>
      <div className="bg-indigo-50/60 border-t border-indigo-100">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-start gap-2 text-sm text-indigo-900">
          <Info className="h-4 w-4 mt-0.5 shrink-0" />
          <p>
            Tip: The LPS site can be slow. After opening it, wait for the map to fully load before searching your code. If a plot doesn’t appear, verify the code and try again.
          </p>
        </div>
      </div>
    </header>
  );
}
