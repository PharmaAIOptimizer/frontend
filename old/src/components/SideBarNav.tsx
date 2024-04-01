import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
// Types for the menu items
type MenuItem = {
  name: string;
  href: string;
  color: string; // We'll use this for the background color of the square
};

const menuItems: MenuItem[] = [
  { name: 'Modern', href: '/', color: 'bg-blue-500' },
  { name: 'eCommerce', href: '/home', color: 'bg-green-500' },
  { name: 'Blog', href: '/', color: 'bg-red-500' },
  { name: 'Chats', href: '/', color: 'bg-yellow-500' },
  { name: 'Users', href: '/', color: 'bg-purple-500' },
  // ... add other menu items here
];

const SideBarNav = () => {
  return (
    <div>
      <aside className="fixed w-[17rem]" aria-label="Sidebar">
        <div className="overflow-hidden py-4 px-3 border h-screen">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} legacyBehavior>
                  <a className="flex items-center p-3 text-base text-gray-900 rounded-lg dark:text-gray hover:bg-gray-100 light:hover:bg-gray-700">
                    <span className={`inline-block w-4 h-4 ${item.color} mr-3 rounded-full`} />
                    <span>{item.name}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBarNav;
