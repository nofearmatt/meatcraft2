import Link from 'next/link';

export default function Standards() {
  return (
    <div className="bg-stone min-h-screen">
      {/* Hero секция */}
      <section className="py-20 bg-stone">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-charcoal mb-8">
            МАНИФЕСТ КАЧЕСТВА<br />
            <span className="text-wine">"МЯСНОГО РЕМЕСЛА"</span>
          </h1>
          <div className="w-32 h-1 bg-wine mx-auto mb-8"></div>
          <p className="font-body text-xl text-charcoal/80 leading-relaxed max-w-3xl mx-auto mb-4">
            Доверие строится не на обещаниях, а на правилах, которые никогда не нарушаются.
          </p>
          <p className="font-body text-lg text-charcoal/60 leading-relaxed max-w-2xl mx-auto">
            Это наш свод законов. Это то, на что Вы можете рассчитывать всегда.<br />
            <span className="text-wine font-semibold underline">Это то, чего мы НИКОГДА не сделаем.</span>
          </p>
        </div>
      </section>

      {/* Раздел 1: Сырье */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
              РАЗДЕЛ 1: СЫРЬЕ
            </h2>
            <div className="w-16 h-1 bg-wine mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Стандарт 1.1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-wine/5 p-8 border-l-4 border-wine">
                <h3 className="font-heading text-xl font-bold text-wine mb-4 uppercase">
                  МЫ НИКОГДА НЕ БУДЕМ...
                </h3>
                <p className="font-body text-lg text-charcoal leading-relaxed">
                  ...использовать замороженное мясо, обрезки или мясо второго сорта.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4 uppercase">
                  ...ПОТОМУ ЧТО МЫ УВАЖАЕМ ВАС И НАШ ПРОДУКТ.
                </h3>
                <p className="font-body text-charcoal/80 leading-relaxed">
                  Мы верим, что великий вкус начинается с великого сырья. Только охлажденное, 
                  цельное мясо от проверенных поставщиков способно дать правильную текстуру и 
                  насыщенный, чистый вкус. Экономия на этом этапе — это обман, на который мы не пойдем.
                </p>
              </div>
            </div>

            {/* Стандарт 1.2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-wine/5 p-8 border-l-4 border-wine">
                <h3 className="font-heading text-xl font-bold text-wine mb-4 uppercase">
                  МЫ НИКОГДА НЕ БУДЕМ...
                </h3>
                <p className="font-body text-lg text-charcoal leading-relaxed">
                  ...добавлять соевый белок, крахмал или любые другие наполнители для увеличения веса.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4 uppercase">
                  ...ПОТОМУ ЧТО МЫ УВАЖАЕМ ВАС И НАШ ПРОДУКТ.
                </h3>
                <p className="font-body text-charcoal/80 leading-relaxed">
                  Когда вы покупаете мясо, вы должны получать именно мясо. Каждый грамм нашего 
                  продукта — это 100% мясо, потерявшее влагу в процессе сушки. Мы продаем 
                  концентрированный вкус, а не замаскированный объем.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Раздел 2: Вкус */}
      <section className="py-16 bg-kraft/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
              РАЗДЕЛ 2: ВКУС
            </h2>
            <div className="w-16 h-1 bg-wine mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Стандарт 2.1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-wine/5 p-8 border-l-4 border-wine">
                <h3 className="font-heading text-xl font-bold text-wine mb-4 uppercase">
                  МЫ НИКОГДА НЕ БУДЕМ...
                </h3>
                <p className="font-body text-lg text-charcoal leading-relaxed">
                  ...использовать глутамат натрия, усилители вкуса или искусственные ароматизаторы.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4 uppercase">
                  ...ПОТОМУ ЧТО МЫ УВАЖАЕМ ВАС И НАШ ПРОДУКТ.
                </h3>
                <p className="font-body text-charcoal/80 leading-relaxed">
                  Мы считаем, что настоящий вкус мяса не нуждается в "улучшении". Наша задача — 
                  не создать новый вкус в лаборатории, а раскрыть и подчеркнуть тот, что уже 
                  заложен природой. Эту работу выполняют только натуральные специи.
                </p>
              </div>
            </div>

            {/* Стандарт 2.2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-wine/5 p-8 border-l-4 border-wine">
                <h3 className="font-heading text-xl font-bold text-wine mb-4 uppercase">
                  МЫ НИКОГДА НЕ БУДЕМ...
                </h3>
                <p className="font-body text-lg text-charcoal leading-relaxed">
                  ...применять "жидкий дым" для придания аромата копчения.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4 uppercase">
                  ...ПОТОМУ ЧТО МЫ УВАЖАЕМ ВАС И НАШ ПРОДУКТ.
                </h3>
                <p className="font-body text-charcoal/80 leading-relaxed">
                  Это дешевый трюк, имитирующий настоящий процесс. Если в рецепте нужен дымный аромат, 
                  мы добиваемся его честными методами — используя натуральную копченую паприку или 
                  другие копченые специи. Мы за подлинность, а не за иллюзию.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Раздел 3: Технология и Безопасность */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-charcoal mb-4">
              РАЗДЕЛ 3: ТЕХНОЛОГИЯ И БЕЗОПАСНОСТЬ
            </h2>
            <div className="w-16 h-1 bg-wine mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* Стандарт 3.1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-wine/5 p-8 border-l-4 border-wine">
                <h3 className="font-heading text-xl font-bold text-wine mb-4 uppercase">
                  МЫ НИКОГДА НЕ БУДЕМ...
                </h3>
                <p className="font-body text-lg text-charcoal leading-relaxed">
                  ...использовать химические консерванты (сорбаты, бензоаты, нитриты) 
                  для увеличения срока годности.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4 uppercase">
                  ...ПОТОМУ ЧТО МЫ УВАЖАЕМ ВАС И НАШ ПРОДУКТ.
                </h3>
                <p className="font-body text-charcoal/80 leading-relaxed">
                  Наша технология — это физика, а не химия. Мы добиваемся срока годности в 180 суток 
                  тремя честными способами: удалением влаги (бережная сушка), удалением воздуха (вакуум) 
                  и поглощением его остатков (абсорбент кислорода). Это сложнее и дороже, но это 
                  единственно правильный путь.
                </p>
              </div>
            </div>

            {/* Стандарт 3.2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-wine/5 p-8 border-l-4 border-wine">
                <h3 className="font-heading text-xl font-bold text-wine mb-4 uppercase">
                  МЫ НИКОГДА НЕ БУДЕМ...
                </h3>
                <p className="font-body text-lg text-charcoal leading-relaxed">
                  ...использовать искусственные красители для придания мясу "правильного" цвета.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-charcoal mb-4 uppercase">
                  ...ПОТОМУ ЧТО МЫ УВАЖАЕМ ВАС И НАШ ПРОДУКТ.
                </h3>
                <p className="font-body text-charcoal/80 leading-relaxed">
                  Цвет нашего мяса — это его настоящий цвет, который оно приобретает в процессе сушки. 
                  Он может незначительно отличаться от партии к партии, потому что мы работаем с живым, 
                  натуральным продуктом. Мы считаем эту честную разницу достоинством, а не недостатком.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Главное правило */}
      <section className="py-20 bg-charcoal text-stone">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-stone mb-8">
              НАШЕ ГЛАВНОЕ ПРАВИЛО
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto mb-12"></div>
          </div>

          <div className="bg-wine/10 border-2 border-wine p-12 text-center">
            <blockquote className="font-body text-2xl md:text-3xl text-stone leading-relaxed mb-8">
              "Если мы не можем объяснить пользу и происхождение ингредиента простыми словами — 
              ему не место в нашем продукте."
            </blockquote>
            <div className="space-y-4">
              <p className="font-heading text-xl font-bold text-wine uppercase">
                Это наш стандарт.
              </p>
              <p className="font-heading text-xl font-bold text-wine uppercase">
                Это Ваша гарантия.
              </p>
            </div>
          </div>

          {/* Подпись */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-stone">К</span>
              </div>
              <div className="text-left">
                <p className="font-heading text-lg font-semibold text-stone">
                  КОНСТАНТИН
                </p>
                <p className="font-body text-kraft text-sm">
                  Основатель "Мясного ремесла"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-20 bg-stone">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal mb-8">
            ГОТОВЫ УБЕДИТЬСЯ В НАШИХ СТАНДАРТАХ?
          </h2>
          <p className="font-body text-lg text-charcoal/80 mb-12 leading-relaxed max-w-2xl mx-auto">
            Каждая пачка "Мясного ремесла" — это воплощение всех наших принципов. 
            Попробуйте и убедитесь сами.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/catalog"
              className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
            >
              Посмотреть продукцию
            </Link>
            
            <Link 
              href="/production/certificates"
              className="inline-block border-2 border-wine text-wine hover:bg-wine hover:text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 uppercase tracking-wide"
            >
              Посмотреть наши сертификаты
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 