'use client';

import { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Вяленая Говядина',
    description: 'Классический вкус с нотами черного перца',
    price: 195,
    category: 'beef',
    image: '/products/beef-classic.jpg'
  },
  {
    id: 2,
    name: 'Вяленая Свинина',
    description: 'С паприкой и натуральными специями',
    price: 185,
    category: 'pork',
    image: '/products/pork-paprika.jpg'
  },
  {
    id: 3,
    name: 'Вяленая Курица',
    description: 'Нежный вкус с травами',
    price: 175,
    category: 'poultry',
    image: '/products/chicken-herbs.jpg'
  },
  {
    id: 4,
    name: 'Вяленая Индейка',
    description: 'Диетическое мясо с розмарином',
    price: 205,
    category: 'poultry',
    image: '/products/turkey-rosemary.jpg'
  },
  {
    id: 5,
    name: 'Вяленая Утка',
    description: 'Сложный вкус для гурманов',
    price: 245,
    category: 'gourmet',
    image: '/products/duck-gourmet.jpg'
  },
  {
    id: 6,
    name: 'Вяленая Конина',
    description: 'Эксклюзивный деликатес',
    price: 295,
    category: 'gourmet',
    image: '/products/horse-exclusive.jpg'
  },
  {
    id: 7,
    name: 'Набор "Проба Мастера"',
    description: 'Говядина, Свинина, Курица',
    price: 490,
    originalPrice: 585,
    category: 'sets',
    image: '/products/set-starter.jpg'
  },
  {
    id: 8,
    name: 'Набор "Запас Ремесленника"',
    description: '6 упаковок разных вкусов',
    price: 920,
    originalPrice: 1160,
    category: 'sets',
    image: '/products/set-stock.jpg'
  }
];

const categories = [
  { id: 'all', name: 'Все товары', count: products.length },
  { id: 'sets', name: 'Наборы', count: products.filter(p => p.category === 'sets').length },
  { id: 'beef', name: 'Говядина', count: products.filter(p => p.category === 'beef').length },
  { id: 'pork', name: 'Свинина', count: products.filter(p => p.category === 'pork').length },
  { id: 'poultry', name: 'Птица', count: products.filter(p => p.category === 'poultry').length },
  { id: 'gourmet', name: 'Гурмэ', count: products.filter(p => p.category === 'gourmet').length }
];

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="bg-stone">
      {/* Hero секция */}
      <section className="py-16 bg-gradient-to-b from-charcoal/90 to-charcoal/70">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-stone mb-6">
            КАТАЛОГ
          </h1>
          <p className="font-body text-xl text-kraft leading-relaxed max-w-2xl mx-auto">
            Настоящее мясо. Честные ингредиенты. Никаких компромиссов с качеством.
          </p>
        </div>
      </section>

      {/* Фильтр категорий */}
      <section className="py-8 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 font-heading font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-wine text-stone'
                    : 'bg-stone text-charcoal hover:bg-kraft hover:text-charcoal'
                }`}
              >
                {category.name}
                <span className="ml-2 text-sm opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Сетка товаров */}
      <section className="py-16 bg-stone">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              >
                {/* Изображение товара */}
                <div className="relative h-64 bg-kraft/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Placeholder для изображения */}
                  <div className="w-full h-full flex items-center justify-center text-charcoal/40">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 bg-wine text-stone px-3 py-1 text-xs font-heading font-semibold uppercase">
                      Скидка
                    </div>
                  )}
                </div>

                {/* Информация о товаре */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-2 group-hover:text-wine transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <p className="font-body text-sm text-charcoal/80 mb-4 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Цена */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="font-heading text-xl font-bold text-wine">
                        {product.price} ₽
                      </span>
                      {product.originalPrice && (
                        <span className="font-body text-sm text-charcoal/60 line-through">
                          {product.originalPrice} ₽
                        </span>
                      )}
                    </div>
                    <span className="font-body text-xs text-charcoal/60">
                      за 35г
                    </span>
                  </div>

                  {/* Кнопка покупки */}
                  <button className="w-full bg-wine hover:bg-wine/90 text-stone font-heading font-medium py-3 transition-all duration-300 transform hover:scale-105 uppercase tracking-wide">
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Рекомендация наборов */}
      <section className="py-20 bg-kraft/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">
            НЕ МОЖЕТЕ ОПРЕДЕЛИТЬСЯ С ВЫБОРОМ?
          </h2>
          <p className="font-body text-lg text-charcoal/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Начните с нашего бестселлера — Набора "Проба Мастера". В нем мы собрали три наших 
            самых популярных вкуса, которые дают полное представление о качестве "Мясного ремесла". 
            Это проверенный выбор сотен наших клиентов.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/catalog/sets"
              className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
            >
              Посмотреть все наборы
            </Link>
            
            <button className="inline-block border-2 border-wine text-wine hover:bg-wine hover:text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 uppercase tracking-wide">
              Набор "Проба Мастера" → 490₽
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 