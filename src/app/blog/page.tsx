import Link from 'next/link';

const articles = [
  {
    id: 1,
    title: 'Как отличить хорошее вяленое мясо от плохого за 60 секунд',
    excerpt: 'Экспертные советы по выбору качественного вяленого мяса. Научитесь определять настоящее ремесло с первого взгляда.',
    category: 'Экспертиза',
    readTime: '5 мин',
    image: '/blog/quality-guide.jpg'
  },
  {
    id: 2,
    title: 'История вяленого мяса: от индейцев до крафтовых ремесленников',
    excerpt: 'Увлекательное путешествие через века. Как древние традиции консервации мяса привели к современному ремеслу.',
    category: 'История',
    readTime: '8 мин',
    image: '/blog/history.jpg'
  },
  {
    id: 3,
    title: 'Вяленое мясо и Вино: неочевидные, но идеальные сочетания',
    excerpt: 'Гид по сочетанию вяленого мяса с вином. Откройте для себя новые грани вкуса.',
    category: 'Идеальные пары',
    readTime: '6 мин',
    image: '/blog/wine-pairing.jpg'
  },
  {
    id: 4,
    title: 'Салат "Новый Цезарь" с хрустящей вяленой курицей',
    excerpt: 'Классический салат в новом прочтении. Вяленая курица добавляет неожиданную глубину вкуса.',
    category: 'Рецепты',
    readTime: '4 мин',
    image: '/blog/caesar-recipe.jpg'
  },
  {
    id: 5,
    title: 'Белок против углеводов: почему мясо — лучший перекус для мозга',
    excerpt: 'Научное обоснование пользы белковых перекусов. Как вяленое мясо влияет на работу мозга и концентрацию.',
    category: 'Здоровье',
    readTime: '7 мин',
    image: '/blog/protein-research.jpg'
  },
  {
    id: 6,
    title: 'Брутальный омлет с острой свининой',
    excerpt: 'Завтрак чемпионов. Простой рецепт, который превратит утренний омлет в настоящее событие.',
    category: 'Рецепты',
    readTime: '3 мин',
    image: '/blog/omelet-recipe.jpg'
  }
];

const categories = [
  { id: 'all', name: 'Все статьи' },
  { id: 'recipes', name: 'Рецепты от Мастера' },
  { id: 'pairing', name: 'Идеальные пары' },
  { id: 'expertise', name: 'Экспертиза' },
  { id: 'health', name: 'Здоровье' }
];

export default function Blog() {
  return (
    <div className="bg-stone">
      {/* Hero секция */}
      <section className="relative py-20 bg-gradient-to-b from-charcoal/90 to-charcoal/70">
        <div className="absolute inset-0 bg-charcoal">
          <div className="absolute inset-0 bg-[url('/blog-bg.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-stone mb-6">
            БИБЛИОТЕКА
          </h1>
          <p className="font-body text-xl text-kraft leading-relaxed max-w-2xl mx-auto">
            Наш вклад в развитие культуры потребления. Обучаем, развлекаем и формируем новые традиции.
          </p>
        </div>
      </section>

      {/* Навигация по разделам */}
      <section className="py-12 bg-kraft/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              href="/blog/recipes"
              className="group bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-wine/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4 group-hover:text-wine transition-colors duration-300">
                РЕЦЕПТЫ ОТ МАСТЕРА
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Авторские рецепты, которые превратят вяленое мясо из перекуса в основу полноценных блюд.
              </p>
            </Link>

            <Link 
              href="/blog/pairing"
              className="group bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-wine/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4 group-hover:text-wine transition-colors duration-300">
                ИДЕАЛЬНЫЕ ПАРЫ
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Гиды по сочетанию с вином, пивом и крепкими напитками. Откройте новые грани вкуса.
              </p>
            </Link>

            <Link 
              href="/blog/expertise"
              className="group bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="w-16 h-16 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-wine/20 transition-colors duration-300">
                <svg className="w-8 h-8 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4 group-hover:text-wine transition-colors duration-300">
                ЭКСПЕРТИЗА
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Профессиональные советы и исследования. Учитесь разбираться в мясе как настоящий эксперт.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Последние статьи */}
      <section className="py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              ПОСЛЕДНИЕ СТАТЬИ
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article 
                key={article.id}
                className="group bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                {/* Изображение статьи */}
                <div className="relative h-48 bg-kraft/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Placeholder для изображения */}
                  <div className="w-full h-full flex items-center justify-center text-charcoal/40">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  {/* Категория */}
                  <div className="absolute top-4 left-4 bg-wine text-stone px-3 py-1 text-xs font-heading font-semibold uppercase">
                    {article.category}
                  </div>
                </div>

                {/* Контент статьи */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-3 group-hover:text-wine transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                  
                  <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-4">
                    {article.excerpt}
                  </p>

                  {/* Метаинформация */}
                  <div className="flex items-center justify-between text-xs font-body text-charcoal/60">
                    <span>Время чтения: {article.readTime}</span>
                    <Link 
                      href={`/blog/${article.id}`}
                      className="text-wine hover:text-wine/80 font-medium uppercase tracking-wide"
                    >
                      Читать →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Рекомендуемая статья */}
      <section className="py-20 bg-kraft/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-12 shadow-xl">
            <div className="mb-4">
              <span className="inline-block bg-wine text-stone px-4 py-2 text-sm font-heading font-semibold uppercase tracking-wide">
                Рекомендуем
              </span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-6">
              ВЯЛЕНОЕ МЯСО И ВИНО: НЕОЧЕВИДНЫЕ СОЧЕТАНИЯ
            </h2>
            <p className="font-body text-lg text-charcoal/80 mb-8 leading-relaxed">
              Забудьте о стереотипах. Правильно подобранное вяленое мясо способно раскрыть букет 
              хорошего вина не хуже, чем элитный сыр или хамон. Это гид для тех, кто готов к смелым открытиям.
            </p>
            <Link 
              href="/blog/wine-pairing"
              className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
            >
              Читать гид
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 