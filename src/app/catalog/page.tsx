'use client';

import { useState } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'ВЯЛЕНАЯ ГОВЯДИНА: КЛАССИЧЕСКАЯ',
    description: 'Насыщенный, умеренно соленый вкус настоящего мяса с нотами черного перца.',
    price: '195',
    oldPrice: null,
    category: 'beef',
    image: '/products/beef-classic.jpg',
    type: 'single'
  },
  {
    id: 2,
    name: 'НАБОР "ПРОБА МАСТЕРА"',
    description: 'Говядина, Свинина, Курица. Лучший способ познакомиться с нашим ремеслом.',
    price: '490',
    oldPrice: '585',
    category: 'sets',
    image: '/products/set-3.jpg',
    type: 'set'
  },
  {
    id: 3,
    name: 'ВЯЛЕНАЯ УТКА: ПРЯНАЯ',
    description: 'Сложный, богатый вкус с ароматом диких трав и легкой сладостью.',
    price: '230',
    oldPrice: null,
    category: 'gourmet',
    image: '/products/duck-spicy.jpg',
    type: 'single'
  },
  {
    id: 4,
    name: 'ВЯЛЕНАЯ СВИНИНА: ОСТРАЯ',
    description: 'Пикантная острота сочетается с глубоким вкусом отборной свинины.',
    price: '185',
    oldPrice: null,
    category: 'pork',
    image: '/products/pork-spicy.jpg',
    type: 'single'
  },
  {
    id: 5,
    name: 'НАБОР "ЗАПАС РЕМЕСЛЕННИКА"',
    description: '6 упаковок. Для тех, кто определился с выбором и ценит основательный подход.',
    price: '920',
    oldPrice: '1160',
    category: 'sets',
    image: '/products/set-6.jpg',
    type: 'set'
  },
  {
    id: 6,
    name: 'ВЯЛЕНАЯ КУРИЦА: ТРАВЫ',
    description: 'Нежное белое мясо с ароматом средиземноморских трав.',
    price: '175',
    oldPrice: null,
    category: 'poultry',
    image: '/products/chicken-herbs.jpg',
    type: 'single'
  },
  {
    id: 7,
    name: 'ВЯЛЕНАЯ КОНИНА: ТРАДИЦИОННАЯ',
    description: 'Уникальный, насыщенный вкус с древними традициями кочевников.',
    price: '250',
    oldPrice: null,
    category: 'gourmet',
    image: '/products/horse-traditional.jpg',
    type: 'single'
  },
  {
    id: 8,
    name: 'НАБОР "ЯЩИК МАСТЕРА"',
    description: '9 упаковок. Максимум вкуса. Максимум выгоды. Наш бескомпромиссный выбор.',
    price: '1290',
    oldPrice: '1740',
    category: 'sets',
    image: '/products/set-9.jpg',
    type: 'set'
  }
];

const filters = [
  { id: 'all', name: 'Все товары' },
  { id: 'sets', name: 'Наборы' },
  { id: 'beef', name: 'Говядина' },
  { id: 'pork', name: 'Свинина' },
  { id: 'poultry', name: 'Птица' },
  { id: 'gourmet', name: 'Гурмэ (утка, конина)' }
];

export default function Catalog() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div className="bg-stone min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Заголовок и фильтры */}
        <div className="mb-8">
          <h1 className="font-heading text-4xl font-bold text-charcoal mb-8">
            КАТАЛОГ
          </h1>
          
          {/* Фильтры */}
          <div className="flex flex-wrap gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 font-heading text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-wine text-stone'
                    : 'bg-transparent text-charcoal border border-charcoal/30 hover:border-wine hover:text-wine'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group bg-white rounded-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
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
                
                {/* Скидка */}
                {product.oldPrice && (
                  <div className="absolute top-4 right-4 bg-wine text-stone px-2 py-1 text-xs font-heading font-semibold">
                    СКИДКА
                  </div>
                )}
              </div>

              {/* Информация о товаре */}
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold text-charcoal mb-3 group-hover:text-wine transition-colors duration-300">
                  {product.name}
                </h3>
                
                <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Цена */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="font-heading text-xl font-bold text-charcoal">
                      {product.price} ₽
                    </span>
                    {product.oldPrice && (
                      <span className="font-body text-sm text-charcoal/50 line-through">
                        {product.oldPrice} ₽
                      </span>
                    )}
                  </div>
                </div>

                {/* Кнопка */}
                <button className="w-full bg-wine hover:bg-wine/90 text-stone font-heading text-sm font-medium py-3 px-4 transition-all duration-300 transform hover:scale-105 shadow-md uppercase tracking-wide">
                  {product.type === 'set' ? 'Подробнее' : 'Купить'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Блок помощи в выборе */}
        <div className="mt-16 bg-kraft/20 p-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
            НЕ МОЖЕТЕ ОПРЕДЕЛИТЬСЯ С ВЫБОРОМ?
          </h2>
          <p className="font-body text-charcoal/80 mb-6 max-w-2xl mx-auto leading-relaxed">
            Начните с нашего бестселлера — Набора "Проба Мастера".
            В нем мы собрали три наших самых популярных вкуса, которые дают полное представление 
            о качестве "Мясного ремесла". Это проверенный выбор сотен наших клиентов.
          </p>
          <Link 
            href="/catalog/sets/proba-mastera"
            className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
          >
            Узнать больше о Наборе "Проба Мастера"
          </Link>
        </div>
      </div>
    </div>
  );
} 