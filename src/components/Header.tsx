import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Search, User } from 'lucide-react';
import { Button } from './Button';

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">EventWork</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/jobs" className="text-gray-600 hover:text-gray-900">
              Find Work
            </Link>
            <Link to="/vendors" className="text-gray-600 hover:text-gray-900">
              Find Vendors
            </Link>
            <Link to="/post-job" className="text-gray-600 hover:text-gray-900">
              Post a Job
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Link to="/auth">
              <Button variant="primary" size="sm">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
