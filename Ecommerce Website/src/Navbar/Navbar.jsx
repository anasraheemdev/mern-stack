import React, { useState, useEffect } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ShoppingCartIcon, 
  UserIcon, 
  HeartIcon, 
  SearchIcon 
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [cart, setCart] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = [
    { name: 'Bags', href: '#bags', icon: '👜' },
    { name: 'Mobile', href: '#mobile', icon: '📱' },
    { name: 'Camera Gear', href: '#camera', icon: '📸' },
    { name: 'Gift Guide', href: '#gifts', icon: '🎁' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'} transition-all`}>
      {({ open }) => (
        <>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Mobile Menu Button */}
              <div className="sm:hidden">
                <Disclosure.Button className="p-2 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white focus:outline-none">
                  {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </Disclosure.Button>
              </div>

              {/* Logo */}
              <a href="/" className="text-white text-xl font-bold">
                BrandLogo
              </a>

              {/* Navigation */}
              <div className="hidden sm:flex space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-all"
                  >
                    {item.icon} {item.name}
                  </a>
                ))}
              </div>

              {/* Right Actions */}
              <div className="flex items-center space-x-4">
                {/* Search */}
                <form onSubmit={handleSearch} className="hidden sm:flex">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-gray-700 text-white rounded-full px-4 py-1 focus:outline-none"
                  />
                  <button type="submit" className="ml-2 text-gray-300 hover:text-white">
                    <SearchIcon className="h-5 w-5" />
                  </button>
                </form>

                {/* Wishlist */}
                <button className="hidden sm:block text-gray-300 hover:text-white">
                  <HeartIcon className="h-6 w-6" />
                </button>

                {/* Cart */}
                <button className="relative text-gray-300 hover:text-white">
                  <ShoppingCartIcon className="h-6 w-6" />
                  {cart.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs h-4 w-4 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </button>

                {/* User Menu */}
                <Menu as="div" className="relative">
                  <Menu.Button className="text-gray-300 hover:text-white">
                    <UserIcon className="h-6 w-6" />
                  </Menu.Button>
                  <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#profile"
                            className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#settings"
                            className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#signout"
                            className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100' : ''}`}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <Disclosure.Panel className="sm:hidden bg-gray-800">
            <div className="px-4 py-3 space-y-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
