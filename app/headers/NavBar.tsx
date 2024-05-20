import Image from 'next/image';
import { NavLink } from '@/headers/NavLink';
import { useState } from 'react';

export const NavBar: any = () => {
  const [currentLink, setCurrentLink] = useState('#1');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 py-2.5">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <a href="#" className="flex items-center">
          <Image
            src="https://www.svgrepo.com/show/508272/bar.svg"
            className="h-6 mr-3 sm:h-9"
            width={50}
            height={50}
            alt="Landwind Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            サンプル商品 Hoge
          </span>
        </a>
        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>

          <a
            href="login"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none"
          >
            ログイン
          </a>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu-2"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">メニューを開く</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            {/*
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                */}
          </button>
        </div>
        <div
          className={`items-center justify-between w-full ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:flex lg:w-auto lg:order-1`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <NavLink
                href="#top"
                current={currentLink === '#top'}
                onClick={() => setCurrentLink('#top')}
              >
                製品説明
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#solution"
                current={currentLink === '#solution'}
                onClick={() => setCurrentLink('#solution')}
              >
                解決する課題
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#howto"
                current={currentLink === '#howto'}
                onClick={() => setCurrentLink('#howto')}
              >
                ご利用の流れ
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#pricing"
                current={currentLink === '#pricing'}
                onClick={() => setCurrentLink('#pricing')}
              >
                料金体系
              </NavLink>
            </li>
            <li>
              <NavLink
                href="#contact"
                current={currentLink === '#contact'}
                onClick={() => setCurrentLink('#contact')}
              >
                お問い合わせ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
