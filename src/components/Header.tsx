'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navigation = [
    { name: 'ВИТРИНА', href: '/catalog', description: 'Каталог продукции' },
    { name: 'ЦЕХ', href: '/production', description: 'О производстве' },
    { name: 'БИБЛИОТЕКА', href: '/blog', description: 'Статьи и рецепты' },
    { name: 'КЛУБ', href: '/club', description: 'Сообщество' },
  ];

  const isActive = (href: string) => {
    return pathname.startsWith(href);
  };

  return (
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

          {/* Навигация */}
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
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-charcoal text-stone text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-body">
                  {item.description}
                </div>
              </Link>
            ))}
          </nav>

          {/* Мобильное меню кнопка */}
          <button className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1 group">
            <div className="w-6 h-0.5 bg-stone group-hover:bg-kraft transition-colors duration-300"></div>
            <div className="w-6 h-0.5 bg-stone group-hover:bg-kraft transition-colors duration-300"></div>
            <div className="w-6 h-0.5 bg-stone group-hover:bg-kraft transition-colors duration-300"></div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 