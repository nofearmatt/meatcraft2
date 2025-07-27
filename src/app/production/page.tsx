import Link from 'next/link';

export default function Production() {
  return (
    <div className="bg-stone">
      {/* Hero секция */}
      <section className="relative py-20 bg-gradient-to-b from-charcoal/90 to-charcoal/70">
        <div className="absolute inset-0 bg-charcoal">
          <div className="absolute inset-0 bg-[url('/production-bg.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-stone mb-6">
            ЦЕХ
          </h1>
          <p className="font-body text-xl text-kraft leading-relaxed max-w-2xl mx-auto">
            Загляните в сердце нашей Мастерской. Здесь рождается качество, 
            в котором мы уверены на 100%.
          </p>
        </div>
      </section>

      {/* Наша философия */}
      <section className="py-20 bg-stone">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-6">
              МЫ НЕ ДЕЛАЕМ СНЕКИ.<br />
              МЫ ВОЗВРАЩАЕМ ДОВЕРИЕ К МЯСУ.
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto mb-8"></div>
            <p className="font-body text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto">
              В мире, где состав прячут за мелким шрифтом, а вкус создают в лаборатории, 
              мы выбрали другой путь. Путь Ремесла. Где честность — главный ингредиент, 
              а терпение — основной инструмент.
            </p>
          </div>

          {/* Три столпа нашего ремесла */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                Бескомпромиссное сырье
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Мы верим, что шедевр нельзя создать из плохого материала. Поэтому мы используем 
                только охлажденное, цельное мясо от поставщиков, в которых уверены как в себе.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                Честная технология
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Время — наш главный союзник. Мы не "запекаем" мясо за пару часов и не используем 
                химию для ускорения процесса. Наша технология — это бережная, низкотемпературная сушка.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                Ничего лишнего
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Наш девиз — это и есть наш состав. Мы не признаем усилителей вкуса, красителей, 
                ароматизаторов и жидкого дыма. Весь букет вкуса создается только двумя вещами.
              </p>
            </div>
          </div>

          {/* Призыв к действию */}
          <div className="text-center">
            <Link 
              href="/production/philosophy"
              className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
            >
              Узнать подробнее о нашей философии
            </Link>
          </div>
        </div>
      </section>

      {/* Процесс производства */}
      <section className="py-20 bg-kraft/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              ПРОЦЕСС ПРОИЗВОДСТВА
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto mb-8"></div>
            <p className="font-body text-lg text-charcoal/80 max-w-2xl mx-auto">
              Каждый этап нашего процесса — это выбор в пользу качества над скоростью, 
              честности над выгодой.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Шаг 1 */}
            <div className="bg-white p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-wine text-stone rounded-full flex items-center justify-center font-heading font-bold text-lg mr-4">
                  1
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal">
                  Выбор мяса
                </h3>
              </div>
              <p className="font-body text-charcoal/80 leading-relaxed mb-4">
                Мы работаем только с проверенными поставщиками, которые разделяют наши принципы. 
                Каждая партия мяса проходит строгий контроль качества.
              </p>
              <div className="text-sm font-body text-wine">
                <div>✓ Только охлажденное мясо</div>
                <div>✓ Никакой заморозки</div>
                <div>✓ Цельные куски премиум качества</div>
              </div>
            </div>

            {/* Шаг 2 */}
            <div className="bg-white p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-wine text-stone rounded-full flex items-center justify-center font-heading font-bold text-lg mr-4">
                  2
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal">
                  Магия специй
                </h3>
              </div>
              <p className="font-body text-charcoal/80 leading-relaxed mb-4">
                Каждая смесь специй создается вручную по авторским рецептам. 
                Мы используем только натуральные специи без искусственных добавок.
              </p>
              <div className="text-sm font-body text-wine">
                <div>✓ Только натуральные специи</div>
                <div>✓ Авторские рецепты</div>
                <div>✓ Идеальный баланс вкуса</div>
              </div>
            </div>

            {/* Шаг 3 */}
            <div className="bg-white p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-wine text-stone rounded-full flex items-center justify-center font-heading font-bold text-lg mr-4">
                  3
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal">
                  Искусство сушки
                </h3>
              </div>
              <p className="font-body text-charcoal/80 leading-relaxed mb-4">
                Многочасовая бережная сушка при низкой температуре. Этот процесс нельзя ускорить — 
                он требует времени и терпения.
              </p>
              <div className="text-sm font-body text-wine">
                <div>✓ Низкотемпературная сушка</div>
                <div>✓ Много часов бережного процесса</div>
                <div>✓ Концентрация естественного вкуса</div>
              </div>
            </div>

            {/* Шаг 4 */}
            <div className="bg-white p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-wine text-stone rounded-full flex items-center justify-center font-heading font-bold text-lg mr-4">
                  4
                </div>
                <h3 className="font-heading text-xl font-semibold text-charcoal">
                  Гарантия свежести
                </h3>
              </div>
              <p className="font-body text-charcoal/80 leading-relaxed mb-4">
                Каждая упаковка упаковывается в вакуум с поглотителем кислорода. 
                Это обеспечивает длительное хранение без консервантов.
              </p>
              <div className="text-sm font-body text-wine">
                <div>✓ Вакуумная упаковка</div>
                <div>✓ Поглотитель кислорода</div>
                <div>✓ 180 дней без консервантов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Мастер */}
      <section className="py-20 bg-charcoal text-stone">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="w-48 h-48 bg-kraft/20 rounded-full mx-auto flex items-center justify-center">
                <span className="font-heading text-6xl font-bold text-stone">К</span>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="font-heading text-3xl font-bold text-stone mb-4">
                КОНСТАНТИН
              </h2>
              <p className="font-body text-kraft mb-6">
                Основатель "Мясного ремесла"
              </p>
              <blockquote className="font-body text-lg text-kraft italic leading-relaxed mb-6">
                "Я основал "Мясное ремесло" с одной целью: создать продукт, который не стыдно дать 
                собственным детям. Продукт, в котором я уверен на 100%. Мое имя на этой странице — 
                это личная гарантия того, что в каждой пачке лежит именно то, что написано на упаковке."
              </blockquote>
              <p className="font-body text-sm text-kraft/80">
                Без компромиссов. С уважением к традициям и к вам.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Стандарты качества */}
      <section className="py-20 bg-stone">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">
            НАШИ СТАНДАРТЫ КАЧЕСТВА
          </h2>
          <p className="font-body text-lg text-charcoal/80 mb-12 leading-relaxed">
            Это не просто слова. Это наш свод законов, который мы никогда не нарушаем.
          </p>
          
          <Link 
            href="/production/standards"
            className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
          >
            Читать манифест качества
          </Link>
        </div>
      </section>
    </div>
  );
} 