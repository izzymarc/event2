import React from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

const ProfileSettings = () => {
  return (
    <div className="container mx-auto mt-10 p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="font-bold text-2xl">EventWork</div>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">
            Browse Jobs
          </a>
          <Button variant="default" size="sm">
            + Post Job
          </Button>
        </nav>
      </header>

      {/* Profile Settings Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
        <p className="text-gray-500">
          Manage your profile information and view your activity
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side - Profile Summary */}
        <div className="bg-white shadow-md rounded-md p-6">
          <div className="flex flex-col items-center mb-4">
            <div className="rounded-full bg-gray-200 w-20 h-20 flex items-center justify-center mb-2">
              {/* Placeholder for Avatar */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.995 8.995 0 0112 21a8.995 8.995 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="text-center">
              <div className="font-semibold">Jonathan Akumobi</div>
              <div className="text-sm text-gray-500">jakumobi</div>
            </div>
          </div>
          <div className="mb-4">
            <div className="font-semibold text-sm mb-1">Account Type</div>
            <div className="text-sm">Client</div>
          </div>
          <div>
            <div className="font-semibold text-sm mb-1">Quick Stats</div>
            <div className="text-sm">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 mr-1 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227m1.591 1.882c.975.345 1.022 1.962.037 2.912l-1.573 1.573a1.138 1.138 0 01-2.42 0 1.138 1.138 0 010-2.42l1.573-1.573c.95-.95 2.567-.893 2.912-.037m1.591-1.882c1.6-1.6 2.994-2.723 3.227-2.707m1.882-1.591c.345-.975 1.962-1.022 2.912-.037l1.573 1.573a1.138 1.138 0 010 2.42 1.138 1.138 0 01-2.42 0l-1.573-1.573c-.95.95-.893 2.567-.037 2.912m-1.882 1.591c-1.6 1.6-2.723 2.994-2.707 3.227m-1.591 1.882c-.975.345-1.022 1.962-.037 2.912l1.573 1.573a1.138 1.138 0 012.42 0 1.138 1.138 0 010-2.42l-1.573-1.573c-.95-.95-2.567-.893-2.912-.037m-1.591-1.882c-1.6-1.6-2.994-2.723-3.227-2.707m-1.882-1.591c-.345-.975-1.962-1.022-2.912-.037l-1.573 1.573a1.138 1.138 0 010 2.42 1.138 1.138 0 012.42 0l1.573-1.573c.95-.95.893-2.567.037-2.912z"
                  />
                </svg>
                1 Posted Jobs
              </span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 mr-1 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75H7.5m9 0v-3m-9 3v3m3-9h3.75c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125H7.5c-.621 0-1.125-.504-1.125-1.125V11.625c0-.621.504-1.125 1.125-1.125H10.5"
                  />
                </svg>

                0 Received Proposals
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - Profile Information */}
        <div className="md:col-span-2">
          <div className="bg-white shadow-md rounded-md p-6">
            {/* Tabs */}
            <div className="border-b border-gray-200 mb-4">
              <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <a
                  href="#"
                  className="border-b-2 border-blue-500 text-blue-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                  aria-current="page"
                >
                  Edit Profile
                </a>
                <a
                  href="#"
                  className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 font-medium text-sm"
                >
                  Activity
                </a>
              </nav>
            </div>

            {/* Profile Information Form */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Profile Information
              </h3>
              <p className="text-gray-500 mb-6">
                Update your profile information and expertise
              </p>

              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <Input
                  type="text"
                  id="fullName"
                  placeholder="Jonathan Akumobi"
                  className="mt-1"
                  defaultValue="Jonathan Akumobi"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  rows={4}
                  className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  placeholder="Tell us about yourself"
                ></textarea>
              </div>

              <Button variant="primary">Save Changes</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
