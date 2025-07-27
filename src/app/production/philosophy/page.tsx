import Link from 'next/link';

export default function Philosophy() {
  return (
    <div className="bg-stone">
      {/* Hero секция с атмосферным фоном */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-charcoal/95 to-charcoal/80">
        <div className="absolute inset-0 bg-charcoal">
          <div className="absolute inset-0 bg-[url('/images/philosophy-bg.jpg')] bg-cover bg-center opacity-30"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          {/* Главный заголовок */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-stone mb-8 tracking-wide">
            МЫ НЕ ДЕЛАЕМ СНЕКИ.<br />
            <span className="text-kraft">МЫ ВОЗВРАЩАЕМ ДОВЕРИЕ К МЯСУ.</span>
          </h1>

          {/* Манифест */}
          <p className="font-body text-xl md:text-2xl text-kraft mb-12 max-w-3xl mx-auto leading-relaxed">
            В мире, где состав прячут за мелким шрифтом, а вкус создают в лаборатории, 
            мы выбрали другой путь. <span className="text-stone font-semibold">Путь Ремесла.</span><br />
            Где честность — главный ингредиент, а терпение — основной инструмент.
          </p>
        </div>
      </section>

      {/* Три столпа нашего ремесла */}
      <section className="py-20 bg-stone">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-8">
              ТРИ СТОЛПА НАШЕГО РЕМЕСЛА
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Столп 1 */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-wine/20 transition-colors duration-300">
                <svg className="w-12 h-12 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">
                БЕСКОМПРОМИССНОЕ СЫРЬЕ
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed text-lg">
                Мы верим, что шедевр нельзя создать из плохого материала. Поэтому мы используем 
                только охлажденное, цельное мясо от поставщиков, в которых уверены как в себе. 
                Никакой заморозки, никаких обрезков или соевых наполнителей. Только то, что мы бы 
                без сомнений выбрали для собственного стола.
              </p>
            </div>

            {/* Столп 2 */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-wine/20 transition-colors duration-300">
                <svg className="w-12 h-12 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">
                ЧЕСТНАЯ ТЕХНОЛОГИЯ
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed text-lg">
                Время — наш главный союзник. Мы не "запекаем" мясо за пару часов и не используем 
                химию для ускорения процесса. Наша технология — это бережная, низкотемпературная сушка, 
                которая может длиться много часов. Она медленно удаляет влагу, концентрируя подлинный 
                вкус мяса и аромат специй.
              </p>
            </div>

            {/* Столп 3 */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-wine/20 transition-colors duration-300">
                <svg className="w-12 h-12 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-charcoal mb-6">
                НИЧЕГО ЛИШНЕГО
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed text-lg">
                Наш девиз — это и есть наш состав. Мы не признаем усилителей вкуса, красителей, 
                ароматизаторов и жидкого дыма. Весь букет вкуса создается только двумя вещами: 
                качеством самого мяса и нашей авторской, идеально сбалансированной смесью натуральных специй.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Фотография и цитата Константина */}
      <section className="py-20 bg-kraft/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Фотография */}
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="w-80 h-80 bg-charcoal rounded-none mx-auto flex items-center justify-center shadow-2xl">
                  {/* Placeholder для профессионального черно-белого портрета */}
                  <span className="font-heading text-6xl font-bold text-stone">К</span>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-wine/10 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Цитата */}
            <div className="lg:w-1/2">
              <blockquote className="font-body text-2xl md:text-3xl text-charcoal italic leading-relaxed mb-8">
                "Я основал "Мясное ремесло" с одной целью: создать продукт, который не стыдно дать 
                собственным детям. Продукт, в котором я уверен на 100%. Мое имя на этой странице — 
                это личная гарантия того, что в каждой пачке лежит именно то, что написано на упаковке."
              </blockquote>
              <div className="border-l-4 border-wine pl-6">
                <p className="font-heading text-lg font-semibold text-charcoal">
                  КОНСТАНТИН
                </p>
                <p className="font-body text-charcoal/70">
                  Основатель "Мясного ремесла"
                </p>
                <p className="font-body text-sm text-wine mt-2 font-semibold">
                  БЕЗ КОМПРОМИССОВ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Цена — это отражение ценности */}
      <section className="py-20 bg-charcoal text-stone">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-stone mb-6">
              ЦЕНА — ЭТО ОТРАЖЕНИЕ ЦЕННОСТИ
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto mb-8"></div>
            <p className="font-body text-xl text-kraft max-w-3xl mx-auto leading-relaxed">
              Наш продукт стоит дороже, чем аналоги с полки супермаркета. И мы считаем это правильным.<br />
              <span className="text-stone font-semibold">Это не плата за бренд или красивую упаковку. 
              Это честная цена за качество, от которого мы никогда не откажемся.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-wine rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-stone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-stone mb-4">
                ОТБОРНОЕ ЦЕЛЬНОЕ МЯСО
              </h3>
              <p className="font-body text-kraft leading-relaxed">
                Оно по определению дороже фарша, обрезков и соевых заменителей, 
                которые используют в массовом производстве.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-wine rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-stone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-stone mb-4">
                НАТУРАЛЬНЫЕ СПЕЦИИ
              </h3>
              <p className="font-body text-kraft leading-relaxed">
                Настоящая копченая паприка или черный перец горошком всегда будут дороже 
                искусственных ароматизаторов "со вкусом паприки".
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-wine rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-stone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-stone mb-4">
                ЧАСЫ РАБОТЫ ОБОРУДОВАНИЯ
              </h3>
              <p className="font-body text-kraft leading-relaxed">
                Наша многочасовая бережная сушка требует значительно больше электроэнергии и времени, 
                чем быстрая высокотемпературная обработка.
              </p>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="font-body text-lg text-kraft mb-8">
              Мы не экономим на качестве. Поэтому просим и Вас не экономить на себе.
            </p>
          </div>
        </div>
      </section>

      {/* Наш главный конкурент */}
      <section className="py-20 bg-stone">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-8">
            НАШ ГЛАВНЫЙ КОНКУРЕНТ — НЕ ДРУГИЕ БРЕНДЫ.<br />
            <span className="text-wine">НАШ ГЛАВНЫЙ КОНКУРЕНТ — БЕЗРАЗЛИЧИЕ.</span>
          </h2>
          <p className="font-body text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto mb-12">
            Мы не соревнуемся за самую низкую цену. Мы боремся за осознанный выбор. 
            За то, чтобы люди снова начали читать состав, интересоваться происхождением продуктов 
            и ценить настоящий, честный труд. За то, чтобы безразличие к тому, что мы едим, 
            уступило место уважению.
          </p>
        </div>
      </section>

      {/* Заключительный призыв */}
      <section className="py-20 bg-kraft/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-8 leading-tight">
            КАЖДЫЙ РАЗ, ПОКУПАЯ "МЯСНОЕ РЕМЕСЛО",<br />
            ВЫ ГОЛОСУЕТЕ НЕ ПРОСТО ЗА ВКУСНЫЙ ПЕРЕКУС.
          </h2>
          <p className="font-body text-xl text-charcoal/80 leading-relaxed mb-12">
            Вы голосуете за честный подход. За уважение к продукту и к себе.<br />
            <span className="font-semibold text-charcoal">За мир, в котором мастерство ценится выше хитрости.</span>
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