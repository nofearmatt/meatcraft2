import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-stone">
      {/* Hero секция */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-charcoal/90 to-charcoal/70">
        {/* Фоновое изображение (placeholder) */}
        <div className="absolute inset-0 bg-charcoal">
          <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Логотип-печать */}
          <div className="mb-8 inline-flex items-center justify-center w-32 h-32 border-2 border-kraft rounded-full bg-charcoal/80 backdrop-blur-sm">
            <div className="text-center">
              <div className="font-heading text-stone text-2xl font-bold mb-1">МР</div>
              <div className="font-body text-kraft text-xs">РЕМЕСЛО</div>
            </div>
          </div>

          {/* Главный заголовок */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-stone mb-6 tracking-wide">
            МЯСО И СПЕЦИИ.
            <br />
            <span className="text-kraft">НИЧЕГО ЛИШНЕГО.</span>
          </h1>

          {/* Подзаголовок */}
          <p className="font-body text-xl md:text-2xl text-kraft mb-8 max-w-2xl mx-auto leading-relaxed">
            В мире, где состав прячут за мелким шрифтом, а вкус создают в лаборатории, 
            мы выбрали другой путь. <span className="text-stone font-semibold">Путь Ремесла.</span>
          </p>

          {/* CTA кнопка */}
          <Link 
            href="/catalog"
            className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-12 py-4 rounded-none transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
          >
            Перейти в каталог
          </Link>

          {/* Девиз */}
          <div className="mt-12 border-t border-kraft/30 pt-8">
            <p className="font-heading text-sm text-kraft uppercase tracking-widest">
              Только мясо и специи
            </p>
          </div>
        </div>
      </section>

      {/* Три столпа */}
      <section className="py-20 bg-stone">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              ТРИ СТОЛПА НАШЕГО РЕМЕСЛА
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Столп 1 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-wine/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                БЕСКОМПРОМИССНОЕ СЫРЬЕ
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Мы используем только охлажденное, цельное мясо от поставщиков, в которых уверены как в себе. 
                Никакой заморозки, никаких обрезков или соевых наполнителей.
              </p>
            </div>

            {/* Столп 2 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-wine/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                ЧЕСТНАЯ ТЕХНОЛОГИЯ
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Время — наш главный союзник. Бережная, низкотемпературная сушка, которая может длиться много часов. 
                Мы не ускоряем процесс химией.
              </p>
            </div>

            {/* Столп 3 */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-wine/20 transition-colors duration-300">
                <svg className="w-10 h-10 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                НИЧЕГО ЛИШНЕГО
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Наш девиз — это и есть наш состав. Никаких усилителей вкуса, красителей, ароматизаторов. 
                Только качественное мясо и авторская смесь натуральных специй.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Цитата основателя */}
      <section className="py-20 bg-kraft/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-charcoal rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="font-heading text-2xl font-bold text-stone">К</span>
            </div>
            <h3 className="font-heading text-lg font-semibold text-charcoal mb-2">
              КОНСТАНТИН
            </h3>
            <p className="font-body text-sm text-charcoal/70">
              Основатель "Мясного ремесла"
            </p>
          </div>
          
          <blockquote className="font-body text-xl md:text-2xl text-charcoal italic leading-relaxed mb-8">
            "Я основал "Мясное ремесло" с одной целью: создать продукт, который не стыдно дать собственным детям. 
            Продукт, в котором я уверен на 100%. Мое имя на этой странице — это личная гарантия того, 
            что в каждой пачке лежит именно то, что написано на упаковке. Без компромиссов."
          </blockquote>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 bg-charcoal text-stone">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            КАЖДЫЙ РАЗ, ПОКУПАЯ "МЯСНОЕ РЕМЕСЛО",
            <br />
            <span className="text-kraft">ВЫ ГОЛОСУЕТЕ ЗА ЧЕСТНЫЙ ПОДХОД</span>
          </h2>
          
          <p className="font-body text-lg text-kraft mb-8 leading-relaxed">
            За уважение к продукту и к себе. За мир, в котором мастерство ценится выше хитрости.
          </p>

          <Link 
            href="/catalog"
            className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-12 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
          >
            Посмотреть продукты, сделанные с уважением
          </Link>
        </div>
      </section>
    </div>
  );
}
