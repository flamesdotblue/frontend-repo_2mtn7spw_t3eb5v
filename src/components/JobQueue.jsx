import React from 'react';
import { Clock, Loader2, CheckCircle, AlertCircle, Trash2 } from 'lucide-react';

export default function JobQueue({ jobs, onRemove }) {
  if (!jobs.length) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center text-gray-500">
        Your queue is empty. Add a plot code to get started.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="px-5 py-3 border-b border-gray-200 flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Queue</h3>
        <span className="text-xs text-gray-500">{jobs.length} item{jobs.length > 1 ? 's' : ''}</span>
      </div>
      <ul className="divide-y divide-gray-100">
        {jobs.map((job) => (
          <li key={job.id} className="px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              {job.status === 'pending' && <Clock className="h-4 w-4 text-gray-400" />}
              {job.status === 'processing' && <Loader2 className="h-4 w-4 text-indigo-500 animate-spin" />}
              {job.status === 'done' && <CheckCircle className="h-4 w-4 text-emerald-600" />}
              {job.status === 'error' && <AlertCircle className="h-4 w-4 text-rose-600" />}
              <div className="truncate">
                <p className="text-sm font-medium text-gray-900 truncate">{job.code}</p>
                <p className="text-xs text-gray-500">{formatStatus(job.status)}</p>
              </div>
            </div>
            <button
              onClick={() => onRemove(job.id)}
              className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              <Trash2 className="h-3.5 w-3.5" />
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function formatStatus(status) {
  switch (status) {
    case 'pending':
      return 'Waiting to start';
    case 'processing':
      return 'Working… this may take a bit';
    case 'done':
      return 'Completed';
    case 'error':
      return 'No matching plot found or site error';
    default:
      return status;
  }
}
