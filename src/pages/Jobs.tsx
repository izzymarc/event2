import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '../components/Button';

export function Jobs() {
  const jobs = [
    {
      id: 1,
      title: 'Wedding Photographer Needed',
      budget: '$2,000 - $3,000',
      location: 'Los Angeles, CA',
      type: 'Wedding',
      description: 'Looking for an experienced wedding photographer for a 100-guest wedding...',
      postedAt: '2 hours ago',
    },
    {
      id: 2,
      title: 'Corporate Event Planner',
      budget: '$5,000 - $8,000',
      location: 'New York, NY',
      type: 'Corporate',
      description: 'Seeking a professional event planner for annual company conference...',
      postedAt: '5 hours ago',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Find Work</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <Button variant="outline">Filter</Button>
        </div>
      </div>

      <div className="grid gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p className="text-gray-600">{job.location}</p>
              </div>
              <span className="text-blue-600 font-medium">{job.budget}</span>
            </div>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                  {job.type}
                </span>
                <span className="text-sm text-gray-500">{job.postedAt}</span>
              </div>
              <Button>Submit Proposal</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
