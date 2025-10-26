import React, { useState } from 'react';
import { Play, ClipboardCopy, Link as LinkIcon } from 'lucide-react';

export default function PlotJobForm({ onAdd }) {
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = code.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setCode('');
  };

  const copyToClipboard = async () => {
    const trimmed = code.trim();
    if (!trimmed) return;
    try {
      await navigator.clipboard.writeText(trimmed);
    } catch {}
  };

  const openLpsSite = () => {
    window.open('https://gis.apcrda.org/lps/index.html', '_blank', 'noopener');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter plot code (e.g., 4-308-3123-15-G1)"
          className="flex-1 rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 px-4 py-2.5"
          aria-label="Plot code"
        />
        <div className="flex gap-2">
          <button
            type="button"
            onClick={openLpsSite}
            className="inline-flex items-center gap-2 px-3 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <LinkIcon className="h-4 w-4" />
            Open Site
          </button>
          <button
            type="button"
            onClick={copyToClipboard}
            className="inline-flex items-center gap-2 px-3 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50"
          >
            <ClipboardCopy className="h-4 w-4" />
            Copy Code
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
          >
            <Play className="h-4 w-4" />
            Queue
          </button>
        </div>
      </form>
      <p className="text-xs text-gray-500 mt-3">
        Add codes to your queue. The automation service will process them and return four zoomed screenshots per plot.
      </p>
    </div>
  );
}
