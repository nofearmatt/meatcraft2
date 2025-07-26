import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-stone">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* О бренде */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-wine rounded-full flex items-center justify-center text-stone font-heading font-bold text-lg">
                МР
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-stone">
                  МЯСНОЕ РЕМЕСЛО
                </h3>
                <p className="text-xs text-kraft font-body">
                  ТОЛЬКО МЯСО И СПЕЦИИ
                </p>
              </div>
            </div>
            <p className="font-body text-sm text-kraft leading-relaxed mb-4">
              Мы не делаем снеки. Мы возвращаем доверие к мясу. 
              В мире, где состав прячут за мелким шрифтом, а вкус создают в лаборатории, 
              мы выбрали другой путь. Путь Ремесла.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-kraft hover:text-wine transition-colors duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-kraft hover:text-wine transition-colors duration-300">
                <span className="sr-only">Telegram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-stone mb-4 uppercase">
              Разделы
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog" className="font-body text-sm text-kraft hover:text-wine transition-colors duration-300">
                  Витрина
                </Link>
              </li>
              <li>
                <Link href="/production" className="font-body text-sm text-kraft hover:text-wine transition-colors duration-300">
                  Цех
                </Link>
              </li>
              <li>
                <Link href="/blog" className="font-body text-sm text-kraft hover:text-wine transition-colors duration-300">
                  Библиотека
                </Link>
              </li>
              <li>
                <Link href="/club" className="font-body text-sm text-kraft hover:text-wine transition-colors duration-300">
                  Клуб
                </Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h4 className="font-heading text-sm font-semibold text-stone mb-4 uppercase">
              Контакты
            </h4>
            <div className="space-y-2">
              <p className="font-body text-sm text-kraft">
                <span className="block">+7 (999) 123-45-67</span>
                <span className="block">info@meatcraft.ru</span>
              </p>
              <div className="pt-2">
                <p className="font-body text-xs text-kraft">
                  Работаем ежедневно<br />
                  с 9:00 до 21:00
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-kraft border-opacity-20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-xs text-kraft text-center md:text-left">
              © 2024 Мясное ремесло. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="font-body text-xs text-kraft hover:text-wine transition-colors duration-300">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="font-body text-xs text-kraft hover:text-wine transition-colors duration-300">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 