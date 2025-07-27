import Link from 'next/link';

export default function Sets() {
  return (
    <div className="bg-stone">
      {/* Hero секция */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-8">
            НАБОРЫ<br />
            <span className="text-wine">"МЯСНОГО РЕМЕСЛА"</span>
          </h1>
          <div className="w-32 h-1 bg-wine mx-auto mb-8"></div>
          <p className="font-body text-xl text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
            Больше вкуса. Больше выгоды. Идеальное решение, чтобы создать запас настоящего мяса 
            или познакомиться со всей нашей палитрой.
          </p>
        </div>
      </section>

      {/* Набор "Проба Мастера" */}
      <section className="py-20 bg-kraft/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="relative bg-white p-8 shadow-xl">
                {/* Placeholder для фото набора */}
                <div className="bg-charcoal/5 h-80 flex items-center justify-center mb-6">
                  <div className="text-center text-charcoal/40">
                    <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                    <p className="font-body text-sm">3 упаковки по 35г</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-wine text-stone px-4 py-2 text-sm font-heading font-semibold uppercase">
                  Хит продаж
                </div>
              </div>
            </div>
            
            <div className="lg:order-1">
              <h2 className="font-heading text-4xl font-bold text-charcoal mb-6">
                Набор "Проба Мастера"
              </h2>
              <div className="bg-wine/10 border-l-4 border-wine p-4 mb-6">
                <p className="font-heading text-sm font-semibold text-wine uppercase">
                  3 упаковки
                </p>
              </div>
              
              <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-8">
                Идеальный старт для знакомства с миром "Мясного ремесла". Наш самый популярный набор, 
                созданный для того, чтобы вы могли оценить разнообразие наших вкусов. Мы подобрали три 
                классических вида мяса, которые лучше всего демонстрируют наше качество и подход. 
                Отличный выбор для дегустации или небольшого подарка.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-3 uppercase">
                    Что внутри:
                  </h3>
                  <p className="font-body text-charcoal/80">3 упаковки по 35 г.</p>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-3 uppercase">
                    Состав набора:
                  </h3>
                  <ul className="font-body text-charcoal/80 space-y-2">
                    <li>• Вяленая Говядина (классическая)</li>
                    <li>• Вяленая Свинина (с паприкой)</li>
                    <li>• Вяленая Курица (с травами)</li>
                  </ul>
                </div>

                <div className="bg-kraft/30 p-6 border border-wine/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-lg font-semibold text-charcoal">
                      ВАША ВЫГОДА:
                    </span>
                    <span className="bg-wine text-stone px-3 py-1 text-sm font-heading font-bold">
                      -15%
                    </span>
                  </div>
                  <p className="font-body text-charcoal/80 mb-4">
                    Покупая набором, вы экономите 15% по сравнению с покупкой трех пачек по отдельности.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="font-heading text-2xl font-bold text-wine">490 ₽</span>
                    <span className="font-body text-lg text-charcoal/60 line-through">580 ₽</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide">
                  Добавить в корзину
                </button>
                <Link 
                  href="/catalog/sets/custom-3"
                  className="flex-1 border-2 border-wine text-wine hover:bg-wine hover:text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 uppercase tracking-wide text-center"
                >
                  Выбрать другой состав
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Набор "Запас Ремесленника" */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative bg-kraft/10 p-8 shadow-xl">
                {/* Placeholder для фото набора */}
                <div className="bg-charcoal/5 h-80 flex items-center justify-center mb-6">
                  <div className="text-center text-charcoal/40">
                    <div className="grid grid-cols-3 gap-2">
                      {Array.from({length: 6}).map((_, i) => (
                        <div key={i} className="w-8 h-12 bg-wine/20 rounded-sm flex items-center justify-center">
                          <span className="text-xs font-bold">{i + 1}</span>
                        </div>
                      ))}
                    </div>
                    <p className="font-body text-sm mt-4">6 упаковок по 35г</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-wine text-stone px-4 py-2 text-sm font-heading font-semibold uppercase">
                  Основательный выбор
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="font-heading text-4xl font-bold text-charcoal mb-6">
                Набор "Запас Ремесленника"
              </h2>
              <div className="bg-wine/10 border-l-4 border-wine p-4 mb-6">
                <p className="font-heading text-sm font-semibold text-wine uppercase">
                  6 упаковок
                </p>
              </div>
              
              <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-8">
                Для тех, кто уже определился с выбором и ценит основательный подход. Этот набор — 
                ваш стратегический запас энергии и вкуса на несколько недель. Идеально подходит для семьи, 
                для компании друзей или просто для тех, кто не хочет беспокоиться о том, что любимый 
                перекус закончится в самый неподходящий момент.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-3 uppercase">
                    Что внутри:
                  </h3>
                  <p className="font-body text-charcoal/80">6 упаковок по 35 г.</p>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold text-charcoal mb-3 uppercase">
                    Состав набора:
                  </h3>
                  <ul className="font-body text-charcoal/80 space-y-2">
                    <li>• 2x Вяленая Говядина (классическая)</li>
                    <li>• 2x Вяленая Свинина (с паприкой)</li>
                    <li>• 2x Вяленая Утка (пряная)</li>
                  </ul>
                </div>

                <div className="bg-kraft/30 p-6 border border-wine/20">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-lg font-semibold text-charcoal">
                      ВАША ВЫГОДА:
                    </span>
                    <span className="bg-wine text-stone px-3 py-1 text-sm font-heading font-bold">
                      -20%
                    </span>
                  </div>
                  <p className="font-body text-charcoal/80 mb-4">
                    Ваша экономия при покупке этого набора — 20%. Наш выбор для самых расчетливых ценителей.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="font-heading text-2xl font-bold text-wine">920 ₽</span>
                    <span className="font-body text-lg text-charcoal/60 line-through">1160 ₽</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide">
                  Добавить в корзину
                </button>
                <Link 
                  href="/catalog/sets/custom-6"
                  className="flex-1 border-2 border-wine text-wine hover:bg-wine hover:text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 uppercase tracking-wide text-center"
                >
                  Выбрать другой состав
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Набор "Ящик Мастера" */}
      <section className="py-20 bg-charcoal text-stone">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="relative bg-wine/10 p-8 shadow-2xl border border-wine/20">
                {/* Placeholder для фото набора */}
                <div className="bg-charcoal/20 h-80 flex items-center justify-center mb-6">
                  <div className="text-center text-stone/60">
                    <div className="grid grid-cols-3 gap-1">
                      {Array.from({length: 9}).map((_, i) => (
                        <div key={i} className="w-6 h-10 bg-wine/40 rounded-sm flex items-center justify-center">
                          <span className="text-xs font-bold text-stone">{i + 1}</span>
                        </div>
                      ))}
                    </div>
                    <p className="font-body text-sm mt-4">9 упаковок в крафтовой коробке</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-wine text-stone px-4 py-2 text-sm font-heading font-semibold uppercase">
                  Максимум выгоды
                </div>
              </div>
            </div>
            
            <div className="lg:order-1">
              <h2 className="font-heading text-4xl font-bold text-stone mb-6">
                Набор "Ящик Мастера"
              </h2>
              <div className="bg-wine/20 border-l-4 border-wine p-4 mb-6">
                <p className="font-heading text-sm font-semibold text-wine uppercase">
                  9 упаковок
                </p>
              </div>
              
              <p className="font-body text-lg text-kraft leading-relaxed mb-8">
                Максимум вкуса. Максимум выгоды. Наш бескомпромиссный выбор. Это не просто набор, 
                это заявление. Идеальное решение для большой компании, в качестве солидного подарка 
                или для тех, кто сделал "Мясное ремесло" частью своего образа жизни. Закажите один раз — 
                и наслаждайтесь результатом нашего труда целый месяц.
              </p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-stone mb-3 uppercase">
                    Что внутри:
                  </h3>
                  <p className="font-body text-kraft">9 упаковок по 35 г в стильной крафтовой коробке.</p>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-semibold text-stone mb-3 uppercase">
                    Состав набора:
                  </h3>
                  <ul className="font-body text-kraft space-y-2">
                    <li>• 3x Вяленая Говядина (классическая)</li>
                    <li>• 3x Вяленая Курица (с травами)</li>
                    <li>• 3x Вяленая Конина (для гурманов)</li>
                  </ul>
                </div>

                <div className="bg-wine/10 p-6 border border-wine/30">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-lg font-semibold text-stone">
                      ВАША ВЫГОДА:
                    </span>
                    <span className="bg-wine text-stone px-3 py-1 text-sm font-heading font-bold">
                      -25%
                    </span>
                  </div>
                  <p className="font-body text-kraft mb-4">
                    Наше лучшее предложение. Вы экономите 25% и получаете наш самый полный набор вкусов.
                  </p>
                  <div className="flex items-center space-x-4">
                    <span className="font-heading text-2xl font-bold text-wine">1290 ₽</span>
                    <span className="font-body text-lg text-kraft/60 line-through">1740 ₽</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide">
                  Это мой выбор
                </button>
                <Link 
                  href="/catalog/sets/custom-9"
                  className="flex-1 border-2 border-wine text-wine hover:bg-wine hover:text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 uppercase tracking-wide text-center"
                >
                  Выбрать другой состав
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Помощь в выборе */}
      <section className="py-20 bg-kraft/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">
            НЕ ЗНАЕТЕ, С ЧЕГО НАЧАТЬ?
          </h2>
          <div className="w-24 h-1 bg-wine mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 shadow-lg">
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-4">
                ДЛЯ ПЕРВОГО ЗНАКОМСТВА
              </h3>
              <p className="font-body text-charcoal/80 mb-4 leading-relaxed">
                Выбирайте Набор "Проба Мастера". Три классических вкуса дадут полное представление о нашем качестве.
              </p>
              <Link 
                href="#probe-master"
                className="text-wine font-heading font-semibold hover:underline"
              >
                Подробнее →
              </Link>
            </div>

            <div className="bg-white p-6 shadow-lg">
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-4">
                ДЛЯ РЕГУЛЯРНОГО ПОТРЕБЛЕНИЯ
              </h3>
              <p className="font-body text-charcoal/80 mb-4 leading-relaxed">
                Ваш идеальный вариант — Набор "Запас Ремесленника". Оптимальное сочетание количества и выгоды.
              </p>
              <Link 
                href="#craftsman-stock"
                className="text-wine font-heading font-semibold hover:underline"
              >
                Подробнее →
              </Link>
            </div>

            <div className="bg-white p-6 shadow-lg">
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-4">
                ДЛЯ ОСОБОГО СЛУЧАЯ
              </h3>
              <p className="font-body text-charcoal/80 mb-4 leading-relaxed">
                Удивите всех "Ящиком Мастера". Премиальная упаковка и максимальная экономия.
              </p>
              <Link 
                href="#master-box"
                className="text-wine font-heading font-semibold hover:underline"
              >
                Подробнее →
              </Link>
            </div>
          </div>

          <Link 
            href="/catalog"
            className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
          >
            Смотреть все продукты
          </Link>
        </div>
      </section>

      {/* Почему наборы выгоднее */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-8">
              ПОЧЕМУ НАБОРЫ ВЫГОДНЕЕ?
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto mb-8"></div>
            <p className="font-body text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Мы создали систему наборов не для увеличения продаж, а для вашего удобства и экономии. 
              Каждый набор — это продуманное решение для конкретной задачи.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                ЭКОНОМИЯ ДО 25%
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Чем больше набор, тем больше ваша экономия. Мы делимся с вами выгодой от оптимизации логистики.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                ПРОДУМАННЫЙ СОСТАВ
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Каждый набор составлен экспертами для максимального разнообразия вкусов и оптимального знакомства с продукцией.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-wine/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-wine" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-4">
                ГОТОВЫЕ РЕШЕНИЯ
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Не нужно думать, что выбрать. Наборы решают задачи: дегустация, запас, подарок. Просто и эффективно.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 