import Link from 'next/link';

const testimonials = [
  {
    id: 1,
    name: 'Алексей М.',
    location: 'Москва',
    text: 'Наконец-то нашел мясо, в котором уверен на 100%. Никаких лишних добавок, только честный вкус.',
    rating: 5,
    product: 'Говядина классическая'
  },
  {
    id: 2,
    name: 'Мария С.',
    location: 'Санкт-Петербург',
    text: 'Заказываю уже третий набор. Качество стабильно высокое, а утка просто изумительная!',
    rating: 5,
    product: 'Набор "Запас ремесленника"'
  },
  {
    id: 3,
    name: 'Дмитрий К.',
    location: 'Екатеринбург',
    text: 'Попробовал по совету друга. Теперь это мой постоянный перекус на работе. Сытно и полезно.',
    rating: 5,
    product: 'Свинина острая'
  }
];

export default function Club() {
  return (
    <div className="bg-stone">
      {/* Hero секция */}
      <section className="relative py-20 bg-gradient-to-b from-charcoal/90 to-charcoal/70">
        <div className="absolute inset-0 bg-charcoal">
          <div className="absolute inset-0 bg-[url('/club-bg.jpg')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-stone mb-6">
            КЛУБ РЕМЕСЛЕННИКОВ
          </h1>
          <p className="font-body text-xl text-kraft leading-relaxed max-w-2xl mx-auto">
            Для тех, кто ценит постоянство. Для тех, кто сделал осознанный выбор.
          </p>
        </div>
      </section>

      {/* Программа лояльности */}
      <section className="py-20 bg-stone">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              ПРОГРАММА ЛОЯЛЬНОСТИ
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto mb-8"></div>
            <p className="font-body text-lg text-charcoal/80 max-w-3xl mx-auto leading-relaxed">
              Мы создали "Клуб Ремесленников" не для того, чтобы продать больше, 
              а для того, чтобы поблагодарить тех, кто разделяет наши ценности.
            </p>
          </div>

          {/* Уровни лояльности */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Бронзовый */}
            <div className="bg-white p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                БРОНЗОВЫЙ МАСТЕР
              </h3>
              <p className="font-body text-sm text-charcoal/60 mb-4">
                От 3 000 ₽
              </p>
              <div className="text-3xl font-heading font-bold text-wine mb-4">5%</div>
              <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-6">
                Постоянная скидка на весь ассортимент. 
                Вы наш проверенный ценитель.
              </p>
              <ul className="text-left font-body text-sm text-charcoal/70 space-y-2">
                <li>✓ Скидка 5% на все товары</li>
                <li>✓ Приоритетная поддержка</li>
                <li>✓ Персональные рекомендации</li>
              </ul>
            </div>

            {/* Серебряный */}
            <div className="bg-white p-8 shadow-lg text-center border-2 border-wine">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                СЕРЕБРЯНЫЙ МАСТЕР
              </h3>
              <p className="font-body text-sm text-charcoal/60 mb-4">
                От 7 000 ₽
              </p>
              <div className="text-3xl font-heading font-bold text-wine mb-4">10%</div>
              <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-6">
                Настоящий адепт нашего ремесла. 
                Регулярно выбирает наш продукт.
              </p>
              <ul className="text-left font-body text-sm text-charcoal/70 space-y-2">
                <li>✓ Скидка 10% на все товары</li>
                <li>✓ Бесплатная доставка</li>
                <li>✓ Эксклюзивные предложения</li>
                <li>✓ Доступ к закрытым рецептам</li>
              </ul>
            </div>

            {/* Золотой */}
            <div className="bg-white p-8 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                ЗОЛОТОЙ МАСТЕР
              </h3>
              <p className="font-body text-sm text-charcoal/60 mb-4">
                От 15 000 ₽
              </p>
              <div className="text-3xl font-heading font-bold text-wine mb-4">15%</div>
              <p className="font-body text-sm text-charcoal/80 leading-relaxed mb-6">
                Элита "Клуба Ремесленников". 
                Наш партнер и амбассадор.
              </p>
              <ul className="text-left font-body text-sm text-charcoal/70 space-y-2">
                <li>✓ Скидка 15% на все товары</li>
                <li>✓ Ранний доступ к новинкам</li>
                <li>✓ Закрытые распродажи</li>
                <li>✓ Персональный менеджер</li>
                <li>✓ Эксклюзивные мероприятия</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/auth/register"
              className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide mr-4"
            >
              Стать участником
            </Link>
            <Link 
              href="/auth/login"
              className="inline-block border-2 border-wine text-wine hover:bg-wine hover:text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 uppercase tracking-wide"
            >
              Войти в клуб
            </Link>
          </div>
        </div>
      </section>

      {/* Стена славы (отзывы) */}
      <section className="py-20 bg-kraft/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              СТЕНА СЛАВЫ
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto mb-8"></div>
            <p className="font-body text-lg text-charcoal/80 max-w-2xl mx-auto">
              Отзывы наших клиентов — это наша главная награда и мотивация продолжать работу.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-8 shadow-lg"
              >
                {/* Рейтинг */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-wine fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Отзыв */}
                <blockquote className="font-body text-charcoal/80 italic leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>

                {/* Информация о клиенте */}
                <div className="border-t border-kraft/20 pt-4">
                  <div className="font-heading text-sm font-semibold text-charcoal">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-xs text-charcoal/60 mb-2">
                    {testimonial.location}
                  </div>
                  <div className="font-body text-xs text-wine">
                    Купил: {testimonial.product}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/club/reviews"
              className="inline-block border-2 border-wine text-wine hover:bg-wine hover:text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 uppercase tracking-wide"
            >
              Все отзывы
            </Link>
          </div>
        </div>
      </section>

      {/* Конкурс */}
      <section className="py-20 bg-charcoal text-stone">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-stone mb-6">
            КОНКУРС #МОЕМЯСНОЕИСКУССТВО
          </h2>
          <p className="font-body text-lg text-kraft mb-8 leading-relaxed">
            Поделитесь фотографией вашего блюда с нашим мясом в Instagram с хештегом 
            #моемясноеискусство и получите шанс выиграть годовой запас любимых вкусов!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-2xl font-bold text-stone">1</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-stone mb-2">
                Приготовьте
              </h3>
              <p className="font-body text-sm text-kraft">
                Создайте блюдо с нашим вяленым мясом
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-2xl font-bold text-stone">2</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-stone mb-2">
                Сфотографируйте
              </h3>
              <p className="font-body text-sm text-kraft">
                Сделайте красивое фото результата
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-heading text-2xl font-bold text-stone">3</span>
              </div>
              <h3 className="font-heading text-lg font-semibold text-stone mb-2">
                Опубликуйте
              </h3>
              <p className="font-body text-sm text-kraft">
                Поделитесь в Instagram с хештегом
              </p>
            </div>
          </div>

          <Link 
            href="/club/contest"
            className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
          >
            Правила конкурса
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-stone">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-charcoal mb-4">
              ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 shadow-lg">
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">
                Как долго хранится вяленое мясо?
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                В невскрытой упаковке наше мясо хранится 180 дней при комнатной температуре. 
                После вскрытия рекомендуем употребить в течение 7 дней.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg">
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">
                Можно ли заказать доставку в регионы?
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Да, мы доставляем по всей России. Стоимость доставки рассчитывается автоматически 
                при оформлении заказа в зависимости от региона.
              </p>
            </div>

            <div className="bg-white p-6 shadow-lg">
              <h3 className="font-heading text-lg font-semibold text-charcoal mb-3">
                Есть ли у вас продукция для детей?
              </h3>
              <p className="font-body text-charcoal/80 leading-relaxed">
                Наша продукция полностью натуральна и не содержит вредных добавок, поэтому подходит 
                для детей старше 3 лет. Рекомендуем начать с курицы или говядины классической.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/club/faq"
              className="inline-block border-2 border-wine text-wine hover:bg-wine hover:text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 uppercase tracking-wide"
            >
              Все вопросы и ответы
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 