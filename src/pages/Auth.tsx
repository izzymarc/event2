import React from 'react';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

const Auth = () => {
  const [isLogin, setIsLogin] = React.useState(true);

  const handleTabChange = (tab: string) => {
    setIsLogin(tab === 'login');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md flex">
        {/* Auth Form */}
        <div className="w-96">
          <div className="flex justify-between mb-6">
            <button
              className={`px-4 py-2 rounded-t-md ${isLogin ? 'bg-gray-200' : 'bg-gray-100'}`}
              onClick={() => handleTabChange('login')}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 rounded-t-md ${!isLogin ? 'bg-gray-200' : 'bg-gray-100'}`}
              onClick={() => handleTabChange('register')}
            >
              Register
            </button>
          </div>

          {!isLogin && (
            <>
              <div className="mb-4">
                <p className="text-gray-700 mb-2">I am a...</p>
                <div className="flex space-x-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-blue-500"
                      name="userType"
                      value="client"
                      defaultChecked
                    />
                    <span className="ml-2 text-gray-700">Client</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio h-5 w-5 text-blue-500"
                      name="userType"
                      value="vendor"
                    />
                    <span className="ml-2 text-gray-700">Vendor</span>
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <Input type="text" placeholder="Full Name" />
              </div>
            </>
          )}
          <div className="mb-4">
            <Input type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <Input type="password" placeholder="Password" />
          </div>

          <Button variant="primary" className="w-full">
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </div>

        {/* Right Side Text */}
        <div className="ml-12 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-4">
            Find the perfect event professional for your next celebration
          </h2>
          <p className="text-gray-600">
            EventWork connects event planners, photographers, caterers, and other
            event professionals with clients looking to make their events
            spectacular.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
