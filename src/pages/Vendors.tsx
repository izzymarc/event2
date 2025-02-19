import React from 'react';
import { Star, MapPin, Calendar } from 'lucide-react';
import { Button } from '../components/Button';

export function Vendors() {
  const vendors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'Wedding Photographer',
      rating: 4.9,
      reviews: 127,
      location: 'Los Angeles, CA',
      specialties: ['Weddings', 'Engagements', 'Events'],
      hourlyRate: '$150',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'Event Planner',
      rating: 4.8,
      reviews: 93,
      location: 'San Francisco, CA',
      specialties: ['Corporate Events', 'Conferences', 'Galas'],
      hourlyRate: '$200',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Find Vendors</h1>
        <div className="flex items-center space-x-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>All Categories</option>
            <option>Photographers</option>
            <option>Event Planners</option>
            <option>Caterers</option>
            <option>Musicians</option>
          </select>
          <Button variant="outline">Filter</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {vendors.map((vendor) => (
          <div key={vendor.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex space-x-4">
              <img
                src={vendor.image}
                alt={vendor.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold">{vendor.name}</h2>
                    <p className="text-gray-600">{vendor.title}</p>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 mr-1" />
                    <span className="font-medium">{vendor.rating}</span>
                    <span className="text-gray-500 ml-1">({vendor.reviews})</span>
                  </div>
                </div>
                <div className="mt-2 flex items-center text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  {vendor.location}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex flex-wrap gap-2 mb-4">
                {vendor.specialties.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Available Now</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-medium">{vendor.hourlyRate}/hr</span>
                  <Button>Contact</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
