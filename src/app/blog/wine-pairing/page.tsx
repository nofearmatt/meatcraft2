import Link from 'next/link';

export default function WinePairing() {
  return (
    <div className="bg-stone min-h-screen">
      {/* Hero секция */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6">
            <span className="inline-block bg-wine text-stone px-4 py-2 text-sm font-heading font-semibold uppercase tracking-wide">
              Искусство сочетаний
            </span>
          </div>
          <h1 className="font-body text-5xl md:text-6xl font-light text-charcoal mb-8 leading-tight">
            Вяленое мясо и Вино
          </h1>
          <div className="w-32 h-px bg-wine mx-auto mb-8"></div>
          <p className="font-body text-xl text-charcoal/70 italic leading-relaxed max-w-2xl mx-auto">
            Забудьте о стереотипах. Правильно подобранное вяленое мясо способно раскрыть букет 
            хорошего вина не хуже, чем элитный сыр или хамон. Это гид для тех, кто готов к 
            смелым и изысканным открытиям.
          </p>
        </div>
      </section>

      {/* Введение */}
      <section className="py-16 bg-kraft/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-6">
              Мы привыкли считать вяленое мясо простой и понятной закуской. Но что, если посмотреть 
              на него под другим углом? Увидеть в нем не просто снек, а концентрат вкуса — соленого, 
              пряного, с глубокими мясными нотами. Такому мощному вкусу нужна достойная пара.
            </p>
            <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-6">
              Главное правило сочетания вяленого мяса и вина — <span className="text-wine font-semibold">подобное к подобному, 
              или полное противопоставление</span>. Насыщенное, танинное вино — к мощному вкусу говядины. 
              Легкое, кислотное — к нежной птице.
            </p>
            <p className="font-body text-lg text-charcoal/80 leading-relaxed">
              Вот несколько проверенных пар от "Мясного ремесла", которые изменят ваше представление о гастрономии.
            </p>
          </div>
        </div>
      </section>

      {/* Пара №1: Говядина и Красное */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="bg-charcoal/5 h-80 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder для фото с бокалом красного вина и говядиной */}
                <div className="text-center text-charcoal/40">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-body text-sm">Каберне Совиньон + Говядина</p>
                </div>
                <div className="absolute top-4 left-4 bg-wine text-stone px-3 py-1 text-xs font-heading font-semibold">
                  ПАРА №1
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="font-body text-3xl font-light text-charcoal mb-6">
                Классическая Говядина и Мощное Красное
              </h2>
              <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-6">
                Насыщенный, чуть солоноватый вкус нашей классической вяленой говядины требует 
                такого же уверенного партнера. Идеальным выбором станет полнотелое красное вино 
                с выраженными танинами.
              </p>
              
              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-wine mb-3 uppercase">
                  Идеальный выбор:
                </h3>
                <p className="font-body text-charcoal/80">
                  Каберне Совиньон, Мальбек, Шираз
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-wine mb-3 uppercase">
                  Почему это работает:
                </h3>
                <p className="font-body text-charcoal/80 leading-relaxed">
                  Танины в вине "связывают" белки и жиры мяса, очищая рецепторы и делая каждый 
                  следующий кусочек и глоток такими же яркими, как первые. Соленость мяса, в свою 
                  очередь, сглаживает резкость танинов и выводит на первый план фруктовые ноты в вине.
                </p>
              </div>

              <div className="bg-kraft/20 p-4 border-l-4 border-wine">
                <h4 className="font-heading text-sm font-semibold text-charcoal mb-2 uppercase">
                  Ощущение:
                </h4>
                <p className="font-body text-charcoal/80 italic">
                  Основательность, уверенность, классика в лучшем ее проявлении.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Пара №2: Птица и Белое */}
      <section className="py-20 bg-kraft/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-charcoal/5 h-80 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder для фото с бокалом белого вина и курицей */}
                <div className="text-center text-charcoal/40">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-body text-sm">Совиньон Блан + Курица</p>
                </div>
                <div className="absolute top-4 left-4 bg-wine text-stone px-3 py-1 text-xs font-heading font-semibold">
                  ПАРА №2
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-body text-3xl font-light text-charcoal mb-6">
                Нежная Птица и Хрустящее Белое
              </h2>
              <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-6">
                Деликатная текстура и более мягкий вкус вяленой курицы или индейки потеряются 
                на фоне мощных красных вин. Здесь нужен партнер с высокой кислотностью, который 
                подчеркнет, а не заглушит нежный вкус.
              </p>
              
              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-wine mb-3 uppercase">
                  Идеальный выбор:
                </h3>
                <p className="font-body text-charcoal/80">
                  Совиньон Блан, Пино Гриджио, сухое Рислинг
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-wine mb-3 uppercase">
                  Почему это работает:
                </h3>
                <p className="font-body text-charcoal/80 leading-relaxed">
                  Высокая кислотность белого вина работает как капля лимонного сока на белой рыбе — 
                  она освежает вкус, делает его ярче и чище. Легкая солоноватость мяса прекрасно 
                  балансирует с минеральными и цитрусовыми нотами вина.
                </p>
              </div>

              <div className="bg-kraft/20 p-4 border-l-4 border-wine">
                <h4 className="font-heading text-sm font-semibold text-charcoal mb-2 uppercase">
                  Ощущение:
                </h4>
                <p className="font-body text-charcoal/80 italic">
                  Свежесть, легкость, элегантный летний вечер.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Пара №3: Свинина и Розе */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-2">
              <div className="bg-charcoal/5 h-80 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder для фото с бокалом розе и свининой */}
                <div className="text-center text-charcoal/40">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-body text-sm">Розе + Свинина</p>
                </div>
                <div className="absolute top-4 left-4 bg-wine text-stone px-3 py-1 text-xs font-heading font-semibold">
                  ПАРА №3
                </div>
              </div>
            </div>
            <div className="lg:order-1">
              <h2 className="font-body text-3xl font-light text-charcoal mb-6">
                Пряная Свинина и Фруктовое Розе
              </h2>
              <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-6">
                Наша вяленая свинина часто имеет сладковато-пряный профиль благодаря паприке и 
                другим специям. К такой игре вкусов идеально подойдет не слишком сухое, ягодное 
                розовое вино.
              </p>
              
              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-wine mb-3 uppercase">
                  Идеальный выбор:
                </h3>
                <p className="font-body text-charcoal/80">
                  Розовое из Прованса, сухой Зинфандель Розе
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-wine mb-3 uppercase">
                  Почему это работает:
                </h3>
                <p className="font-body text-charcoal/80 leading-relaxed">
                  Ягодная сладость в розе не спорит, а дополняет пряность мяса, создавая невероятно 
                  гармоничный баланс "сладкого и соленого". Это смелое, но очень эффектное сочетание.
                </p>
              </div>

              <div className="bg-kraft/20 p-4 border-l-4 border-wine">
                <h4 className="font-heading text-sm font-semibold text-charcoal mb-2 uppercase">
                  Ощущение:
                </h4>
                <p className="font-body text-charcoal/80 italic">
                  Яркость, пикник в саду, гастрономическое хулиганство.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Пара №4: Утка и Пино Нуар */}
      <section className="py-20 bg-kraft/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-charcoal/5 h-80 flex items-center justify-center relative overflow-hidden">
                {/* Placeholder для фото с бокалом Пино Нуар и уткой */}
                <div className="text-center text-charcoal/40">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="font-body text-sm">Пино Нуар + Утка</p>
                </div>
                <div className="absolute top-4 left-4 bg-wine text-stone px-3 py-1 text-xs font-heading font-semibold">
                  ДЛЯ ГУРМАНОВ
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-body text-3xl font-light text-charcoal mb-6">
                Дикая Утка и Землистый Пино Нуар
              </h2>
              <p className="font-body text-lg text-charcoal/80 leading-relaxed mb-6">
                Утка — мясо со сложным, богатым и слегка "диким" вкусом. Ей нужен такой же сложный, 
                многогранный партнер. Элегантный Пино Нуар с его ароматами подлеска, грибов и 
                красных ягод — идеальный кандидат.
              </p>
              
              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-wine mb-3 uppercase">
                  Идеальный выбор:
                </h3>
                <p className="font-body text-charcoal/80">
                  Пино Нуар (Бургундия или Новая Зеландия)
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-heading text-lg font-semibold text-wine mb-3 uppercase">
                  Почему это работает:
                </h3>
                <p className="font-body text-charcoal/80 leading-relaxed">
                  Землистые ноты в вине резонируют с характерным вкусом утки, создавая глубокое, 
                  осеннее, почти медитативное сочетание. Это самая интеллектуальная пара в нашей коллекции.
                </p>
              </div>

              <div className="bg-kraft/20 p-4 border-l-4 border-wine">
                <h4 className="font-heading text-sm font-semibold text-charcoal mb-2 uppercase">
                  Ощущение:
                </h4>
                <p className="font-body text-charcoal/80 italic">
                  Роскошь, сложность, вечер у камина.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Заключение */}
      <section className="py-20 bg-charcoal text-stone">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-body text-4xl font-light text-stone mb-8">
            Ваше следующее открытие
          </h2>
          <div className="w-24 h-px bg-wine mx-auto mb-8"></div>
          <p className="font-body text-lg text-kraft leading-relaxed max-w-2xl mx-auto mb-12">
            Не бойтесь экспериментировать. Гастрономия — это не свод строгих правил, а поле для 
            исследований. Возьмите бутылку любимого вина, откройте пачку "Мясного ремесла" и 
            найдите свою идеальную пару.
          </p>

          <Link 
            href="/catalog"
            className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
          >
            Выбрать деликатес для дегустации
          </Link>
        </div>
      </section>

      {/* Навигация к другим статьям */}
      <section className="py-16 bg-stone">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl font-bold text-charcoal mb-4">
              ЧИТАЙТЕ ТАКЖЕ
            </h3>
            <div className="w-16 h-1 bg-wine mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Link 
              href="/blog/beer-pairing"
              className="group bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="font-heading text-lg font-semibold text-charcoal mb-3 group-hover:text-wine transition-colors duration-300">
                ВЯЛЕНОЕ МЯСО И ПИВО
              </h4>
              <p className="font-body text-charcoal/80 text-sm leading-relaxed">
                Подробный разбор, какие сорта пива к какому мясу подходят. Классические и неожиданные сочетания.
              </p>
            </Link>

            <Link 
              href="/blog/spirits-pairing"
              className="group bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h4 className="font-heading text-lg font-semibold text-charcoal mb-3 group-hover:text-wine transition-colors duration-300">
                ВЯЛЕНОЕ МЯСО И КРЕПКИЙ АЛКОГОЛЬ
              </h4>
              <p className="font-body text-charcoal/80 text-sm leading-relaxed">
                Рекомендации по сочетанию с виски, бурбоном и другими крепкими напитками для настоящих ценителей.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 