import React from 'react';
import { navLinks } from '@/app/constant/Constant';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

export const MobileNav = ({ closeNav, showNav }: Props) => {
    return (
      <div>
        {/* overlay */}
        <div
          className={`fixed inset-0 transition-opacity duration-500 z-[10000] bg-black ${
            showNav ? 'opacity-70' : 'opacity-0 pointer-events-none'
          }`}
        ></div>
  
        {/* sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-[80%] sm:w-[60%] bg-indigo-900 z-[10006] text-white 
          transform transition-transform duration-500 ease-in-out ${showNav ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {navLinks.map((link) => (
            <Link href={link.url} key={link.id}>
              <p className="nav_Link text-white text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          ))}
  
          {/* close icon */}
          <CgClose
            onClick={closeNav}
            className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6"
          />
        </div>
      </div>
    );
  };
  