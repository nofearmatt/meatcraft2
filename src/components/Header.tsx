'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'ВИТРИНА', href: '/catalog', description: 'Каталог продукции' },
    { name: 'ЦЕХ', href: '/production', description: 'О производстве' },
    { name: 'БИБЛИОТЕКА', href: '/blog', description: 'Статьи и рецепты' },
    { name: 'КЛУБ', href: '/club', description: 'Сообщество' },
  ];

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  // Закрываем меню при изменении роута
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Блокируем скролл при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup при размонтировании
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="bg-charcoal text-stone sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Логотип */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-wine rounded-full flex items-center justify-center text-stone font-heading font-bold text-xl group-hover:bg-opacity-80 transition-all duration-300">
                МР
              </div>
              <div className="hidden sm:block">
                <h1 className="font-heading text-xl font-semibold text-stone group-hover:text-kraft transition-colors duration-300">
                  МЯСНОЕ РЕМЕСЛО
                </h1>
                <p className="text-xs text-kraft font-body">
                  ТОЛЬКО МЯСО И СПЕЦИИ
                </p>
              </div>
            </Link>

            {/* Десктопная навигация */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative group px-3 py-2 transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-wine'
                      : 'text-stone hover:text-kraft'
                  }`}
                >
                  <span className="font-heading text-sm font-medium">
                    {item.name}
                  </span>
                  {isActive(item.href) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-wine"></div>
                  )}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-charcoal text-stone text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-body z-10">
                    {item.description}
                  </div>
                </Link>
              ))}
            </nav>

            {/* Кнопка мобильного меню */}
            <button 
              onClick={toggleMenu}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center space-y-1 group relative z-50"
              aria-label="Открыть меню"
              aria-expanded={isMenuOpen}
            >
              <div className={`w-6 h-0.5 bg-stone group-hover:bg-kraft transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-stone group-hover:bg-kraft transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-stone group-hover:bg-kraft transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></div>
            </button>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-charcoal/95 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={toggleMenu}
        ></div>
        
        {/* Меню */}
        <div className={`absolute top-20 left-0 right-0 bg-charcoal border-t border-wine/20 transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="px-4 py-6">
            <nav className="space-y-4">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block group transition-all duration-300 ${
                    isActive(item.href) ? 'text-wine' : 'text-stone'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                  }}
                >
                  <div className="flex items-center justify-between py-4 px-4 rounded-lg border border-transparent hover:border-wine/20 hover:bg-wine/5 transition-all duration-300">
                    <div>
                      <div className="font-heading text-xl font-medium mb-1">
                        {item.name}
                      </div>
                      <div className="font-body text-sm text-kraft">
                        {item.description}
                      </div>
                    </div>
                    <div className="text-wine">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  {isActive(item.href) && (
                    <div className="ml-4 mt-2 h-0.5 bg-wine rounded-full"></div>
                  )}
                </Link>
              ))}
            </nav>

            {/* Дополнительные ссылки */}
            <div className="mt-8 pt-8 border-t border-wine/20">
              <div className="text-center">
                <Link
                  href="/"
                  className="inline-flex items-center space-x-2 text-kraft hover:text-stone transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-wine rounded-full flex items-center justify-center text-stone font-heading font-bold text-sm">
                    МР
                  </div>
                  <div>
                    <div className="font-heading text-sm font-semibold">МЯСНОЕ РЕМЕСЛО</div>
                    <div className="font-body text-xs">ТОЛЬКО МЯСО И СПЕЦИИ</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS анимации */}
      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default Header; 