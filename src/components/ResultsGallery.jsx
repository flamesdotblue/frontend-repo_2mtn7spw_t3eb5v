import React from 'react';
import { Image as ImageIcon } from 'lucide-react';

export default function ResultsGallery({ results }) {
  const hasResults = results && results.length > 0;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Results</h3>
        <span className="text-xs text-gray-500">PNG screenshots</span>
      </div>
      <div className="p-5">
        {!hasResults ? (
          <div className="text-center text-gray-500">
            <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
              <ImageIcon className="h-6 w-6" />
            </div>
            No screenshots yet. Process a plot code to see captures here.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.map((img, idx) => (
              <figure key={idx} className="group relative overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                <img
                  src={img.url}
                  alt={img.alt || `Screenshot ${idx + 1}`}
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-0 inset-x-0 bg-black/50 text-white text-xs px-2 py-1 flex items-center justify-between">
                  <span>{img.label || `Zoom ${idx + 1}`}</span>
                  <a
                    href={img.url}
                    download
                    className="underline opacity-90 hover:opacity-100"
                  >
                    Download
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
