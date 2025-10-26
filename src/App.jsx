import React, { useMemo, useState } from 'react';
import Header from './components/Header';
import PlotJobForm from './components/PlotJobForm';
import JobQueue from './components/JobQueue';
import ResultsGallery from './components/ResultsGallery';

function App() {
  const [jobs, setJobs] = useState([]);
  const [results, setResults] = useState([]);

  const addJob = (code) => {
    setJobs((prev) => [
      { id: crypto.randomUUID(), code, status: 'pending' },
      ...prev,
    ]);
  };

  const removeJob = (id) => {
    setJobs((prev) => prev.filter((j) => j.id !== id));
  };

  // Example placeholder results array for UI preview (empty by default)
  const sampleResults = useMemo(
    () => results,
    [results]
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Add a plot code</h2>
          <PlotJobForm onAdd={addJob} />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <JobQueue jobs={jobs} onRemove={removeJob} />
          <ResultsGallery results={sampleResults} />
        </section>

        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
          <h3 className="text-sm font-medium text-gray-900 mb-2">How this will work</h3>
          <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-600">
            <li>Open the LPS website and wait until the map and search bar are fully loaded.</li>
            <li>Search the exact plot code. If no plot appears, verify the code and try again.</li>
            <li>Once the plot is visible, the automation captures four PNG screenshots with gradual zoom-out.</li>
            <li>Completed screenshots will appear in the results area, ready to download.</li>
          </ol>
          <p className="text-xs text-gray-500 mt-3">
            Note: This interface is set up to work with an automation service. Connect a backend endpoint to trigger captures and stream results back here.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
