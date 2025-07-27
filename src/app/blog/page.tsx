'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все статьи', count: 12 },
    { id: 'pairings', name: 'Идеальные пары', count: 4 },
    { id: 'recipes', name: 'Рецепты от Мастера', count: 5 },
    { id: 'education', name: 'Образование', count: 3 }
  ];

  const recentArticles = [
    {
      id: 1,
      title: 'Вяленое мясо и Вино',
      category: 'pairings',
      excerpt: 'Правильно подобранное вяленое мясо способно раскрыть букет хорошего вина не хуже элитного сыра.',
      date: '15 ноября 2024',
      readTime: '8 мин',
      href: '/blog/wine-pairing',
      featured: true
    },
    {
      id: 2,
      title: 'Как отличить хорошее вяленое мясо от плохого за 60 секунд',
      category: 'education',
      excerpt: 'Простые признаки качественного продукта, которые видны невооруженным глазом.',
      date: '10 ноября 2024',
      readTime: '5 мин',
      href: '/blog/quality-guide'
    },
    {
      id: 3,
      title: 'История вяленого мяса: от индейцев до крафтовых ремесленников',
      category: 'education',
      excerpt: 'Путешествие традиции через века и континенты.',
      date: '5 ноября 2024',
      readTime: '12 мин',
      href: '/blog/history'
    },
    {
      id: 4,
      title: 'Вяленое мясо и Пиво',
      category: 'pairings',
      excerpt: 'Подробный разбор, какие сорта пива к какому мясу подходят.',
      date: '1 ноября 2024',
      readTime: '7 мин',
      href: '/blog/beer-pairing'
    },
    {
      id: 5,
      title: 'Салат "Новый Цезарь" с хрустящей вяленой курицей',
      category: 'recipes',
      excerpt: 'Классический рецепт в неожиданной интерпретации от нашего мастера.',
      date: '28 октября 2024',
      readTime: '6 мин',
      href: '/blog/caesar-recipe'
    },
    {
      id: 6,
      title: 'Белок против углеводов: почему мясо — лучший перекус для мозга',
      category: 'education',
      excerpt: 'Научный взгляд на питание и когнитивные функции.',
      date: '25 октября 2024',
      readTime: '10 мин',
      href: '/blog/protein-brain'
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? recentArticles 
    : recentArticles.filter(article => article.category === activeCategory);

  return (
    <div className="bg-stone">
      {/* Hero секция */}
      <section className="py-20 bg-gradient-to-b from-charcoal/90 to-charcoal/70">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-stone mb-6">
            БИБЛИОТЕКА
          </h1>
          <p className="font-body text-xl text-kraft leading-relaxed max-w-2xl mx-auto">
            Место, где знания о мясе превращаются в искусство наслаждения. 
            Изучайте, экспериментируйте, открывайте новые грани вкуса.
          </p>
        </div>
      </section>

      {/* Навигация по категориям */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 font-heading font-medium transition-all duration-300 ${
                  activeCategory === category.id
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

      {/* Рекомендуемая статья */}
      {activeCategory === 'all' && recentArticles[0] && (
        <section className="py-16 bg-kraft/20">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-8">
              <span className="inline-block bg-wine text-stone px-4 py-2 text-sm font-heading font-semibold uppercase tracking-wide mb-4">
                Рекомендуем к прочтению
              </span>
            </div>
            
            <div className="bg-white shadow-xl overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-charcoal/5 flex items-center justify-center p-8">
                  <div className="text-center text-charcoal/40">
                    <svg className="w-20 h-20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="font-body text-sm">Гастрономическая фотография</p>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-wine text-stone px-3 py-1 text-xs font-heading font-semibold uppercase tracking-wide">
                      Искусство сочетаний
                    </span>
                    <span className="ml-4 text-sm text-charcoal/60">
                      {recentArticles[0].readTime} чтения
                    </span>
                  </div>
                  <h2 className="font-body text-3xl font-light text-charcoal mb-4 leading-tight">
                    {recentArticles[0].title}
                  </h2>
                  <p className="font-body text-charcoal/80 leading-relaxed mb-6">
                    {recentArticles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-charcoal/60">
                      {recentArticles[0].date}
                    </span>
                    <Link 
                      href={recentArticles[0].href}
                      className="bg-wine hover:bg-wine/90 text-stone px-6 py-3 font-heading font-medium transition-all duration-300 uppercase tracking-wide"
                    >
                      Читать статью
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Список статей */}
      <section className="py-16 bg-stone">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.slice(activeCategory === 'all' ? 1 : 0).map((article) => (
              <Link 
                key={article.id}
                href={article.href}
                className="group bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="h-48 bg-charcoal/5 flex items-center justify-center">
                  <div className="text-center text-charcoal/40">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-wine font-heading font-semibold uppercase tracking-wide">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                    <span className="text-xs text-charcoal/60">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-body text-lg font-medium text-charcoal mb-3 group-hover:text-wine transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                  <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-charcoal/60">
                      {article.date}
                    </span>
                    <span className="text-wine text-sm font-heading font-semibold group-hover:underline">
                      Читать →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Подписка на новости */}
      <section className="py-20 bg-charcoal text-stone">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            НЕ ПРОПУСТИТЕ НОВЫЕ СТАТЬИ
          </h2>
          <p className="font-body text-kraft mb-8 leading-relaxed">
            Подпишитесь на нашу рассылку и первыми узнавайте о новых рецептах, 
            гидах по сочетаниям и секретах мясного ремесла.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-3 bg-white text-charcoal font-body focus:outline-none focus:ring-2 focus:ring-wine"
            />
            <button className="bg-wine hover:bg-wine/90 text-stone px-6 py-3 font-heading font-medium transition-all duration-300 uppercase tracking-wide">
              Подписаться
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 