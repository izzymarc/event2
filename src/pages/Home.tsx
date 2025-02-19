import React from 'react';
import { Button } from '../components/Button';
import { CalendarIcon, ListChecks, Wallet, Users, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-10 px-4">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div className="text-2xl font-bold">EventWork</div>
          <nav className="space-x-4">
            <Link to="/jobs" className="text-gray-700 hover:text-blue-500">
              Browse Jobs
            </Link>
            <Link to="/post-job">
              <Button variant="primary" size="sm">
                + Post Job
              </Button>
            </Link>
          </nav>
        </header>

        {/* Welcome Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-2">
            Welcome back, Jonathan Akumobi!
          </h2>
          <p className="text-gray-600">
            Here's what's happening with your events
          </p>
        </section>

        {/* Dashboard Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white shadow-sm rounded-md p-6 flex items-center space-x-4">
            <div className="p-3 bg-blue-100 text-blue-500 rounded-full">
              <ListChecks className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-700 font-medium">Active Jobs</p>
              <p className="text-2xl font-bold">1</p>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-md p-6 flex items-center space-x-4">
            <div className="p-3 bg-green-100 text-green-500 rounded-full">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-700 font-medium">Total Proposals</p>
              <p className="text-2xl font-bold">1</p>
            </div>
          </div>

          <div className="bg-white shadow-sm rounded-md p-6 flex items-center space-x-4">
            <div className="p-3 bg-purple-100 text-purple-500 rounded-full">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <p className="text-gray-700 font-medium">Total Budget</p>
              <p className="text-2xl font-bold">$1000</p>
            </div>
          </div>
        </section>

        {/* Quick Actions and Recent Activity */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Quick Actions */}
          <div className="bg-white shadow-sm rounded-md p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Link to="/post-job">
                <Button variant="secondary" className="w-full justify-start">
                  <span className="ml-2">Post a New Job</span>
                </Button>
              </Link>
              <Link to="/jobs">
                <Button variant="outline" className="w-full justify-start">
                  <span className="ml-2">View All Jobs</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white shadow-sm rounded-md p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <div>
                  <p className="font-medium">wedding photographer</p>
                  <p className="text-gray-500 text-sm">Corporate Events</p>
                </div>
                <Link to="/jobs">
                  <Button variant="link">View</Button>
                </Link>
              </li>
              {/* Add more recent activity items here */}
            </ul>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-sm rounded-md p-6 text-center">
            <CalendarIcon className="h-10 w-10 mx-auto text-blue-500 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Post Event Jobs</h4>
            <p className="text-gray-600">
              Create detailed job postings for your upcoming events and
              connect with skilled professionals.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-md p-6 text-center">
            <Users className="h-10 w-10 mx-auto text-green-500 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Find Professionals</h4>
            <p className="text-gray-600">
              Browse through profiles of experienced event vendors and
              find the perfect match for your needs.
            </p>
          </div>

          <div className="bg-white shadow-sm rounded-md p-6 text-center">
            <Search className="h-10 w-10 mx-auto text-purple-500 mb-4" />
            <h4 className="font-semibold text-lg mb-2">Browse Opportunities</h4>
            <p className="text-gray-600">
              Discover event opportunities and submit proposals to
              showcase your expertise.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
