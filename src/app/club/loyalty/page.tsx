import Link from 'next/link';

export default function Loyalty() {
  return (
    <div className="bg-charcoal text-stone">
      {/* Hero секция */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-wine rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="font-heading text-3xl font-bold text-stone">МР</span>
            </div>
          </div>
          
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-stone mb-8">
            КЛУБ РЕМЕСЛЕННИКОВ
          </h1>
          <div className="w-32 h-1 bg-wine mx-auto mb-8"></div>
          <p className="font-body text-xl text-kraft leading-relaxed max-w-2xl mx-auto mb-4">
            Для тех, кто ценит постоянство. Для тех, кто сделал осознанный выбор.
          </p>
          <p className="font-body text-lg text-kraft/80 leading-relaxed max-w-3xl mx-auto">
            Мы создали "Клуб Ремесленников" не для того, чтобы продать больше, а для того, 
            чтобы поблагодарить тех, кто разделяет наши ценности.
          </p>
        </div>
      </section>

      {/* Философия клуба */}
      <section className="py-20 bg-wine/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-stone mb-8">
              ФИЛОСОФИЯ КЛУБА
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto mb-8"></div>
          </div>

          <div className="prose prose-lg max-w-none text-center">
            <p className="font-body text-lg text-kraft leading-relaxed mb-6">
              Настоящее ремесло — это не разовая работа. Это путь, который проходишь годами. 
              Мы ценим не только первую покупку, но и ваше доверие, которое вы оказываете нам, 
              возвращаясь снова и снова.
            </p>
            <p className="font-body text-lg text-kraft leading-relaxed mb-6">
              Программа лояльности "Клуб Ремесленников" — это наш способ сказать "спасибо".
            </p>
            <p className="font-body text-lg text-kraft leading-relaxed">
              Это простая, честная и прозрачная система, без сложных баллов, скрытых условий и сгорающих бонусов.
              <br /><span className="text-stone font-semibold">Все как мы любим: чем дольше вы с нами, тем выгоднее для вас.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Уровни лояльности */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-stone mb-8">
              ВАШ СТАТУС В КЛУБЕ
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto mb-8"></div>
            <p className="font-body text-lg text-kraft leading-relaxed max-w-3xl mx-auto">
              Ваша скидка растет вместе с общей суммой всех ваших заказов. 
              Она присваивается вам навсегда и действует на все наши продукты.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Бронзовый Мастер */}
            <div className="bg-wine/10 p-8 border border-wine/30 text-center group hover:bg-wine/20 transition-colors duration-300">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h3 className="font-heading text-xl font-bold text-stone mb-4 uppercase">
                БРОНЗОВЫЙ МАСТЕР
              </h3>
              
              <div className="mb-6">
                <div className="bg-charcoal/50 p-4 mb-4">
                  <p className="font-heading text-sm font-semibold text-wine uppercase mb-2">
                    Условие:
                  </p>
                  <p className="font-body text-kraft">
                    Общая сумма ваших заказов превысила <span className="text-stone font-semibold">3 000 ₽</span>
                  </p>
                </div>
                
                <div className="bg-wine/20 p-4 mb-4">
                  <p className="font-heading text-sm font-semibold text-wine uppercase mb-2">
                    Ваша привилегия:
                  </p>
                  <p className="font-body text-stone font-semibold text-lg">
                    Постоянная скидка <span className="text-2xl">5%</span> на весь ассортимент
                  </p>
                </div>
              </div>
              
              <div className="border-t border-wine/30 pt-4">
                <p className="font-heading text-sm font-semibold text-wine uppercase mb-2">
                  Статус:
                </p>
                <p className="font-body text-kraft text-sm leading-relaxed">
                  Вы наш проверенный ценитель. Вы попробовали продукт, оценили его и вернулись. 
                  Мы это очень ценим.
                </p>
              </div>
            </div>

            {/* Серебряный Мастер */}
            <div className="bg-wine/20 p-8 border-2 border-wine text-center group hover:bg-wine/30 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-wine text-stone px-3 py-1 text-xs font-heading font-bold uppercase">
                Популярный
              </div>
              
              <div className="w-24 h-24 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              
              <h3 className="font-heading text-xl font-bold text-stone mb-4 uppercase">
                СЕРЕБРЯНЫЙ МАСТЕР
              </h3>
              
              <div className="mb-6">
                <div className="bg-charcoal/50 p-4 mb-4">
                  <p className="font-heading text-sm font-semibold text-wine uppercase mb-2">
                    Условие:
                  </p>
                  <p className="font-body text-kraft">
                    Общая сумма ваших заказов превысила <span className="text-stone font-semibold">7 000 ₽</span>
                  </p>
                </div>
                
                <div className="bg-wine/30 p-4 mb-4">
                  <p className="font-heading text-sm font-semibold text-wine uppercase mb-2">
                    Ваша привилегия:
                  </p>
                  <p className="font-body text-stone font-semibold text-lg">
                    Постоянная скидка <span className="text-2xl">10%</span> на весь ассортимент
                  </p>
                </div>
              </div>
              
              <div className="border-t border-wine/30 pt-4">
                <p className="font-heading text-sm font-semibold text-wine uppercase mb-2">
                  Статус:
                </p>
                <p className="font-body text-kraft text-sm leading-relaxed">
                  Вы — настоящий адепт нашего ремесла. Вы регулярно выбираете наш продукт и, 
                  скорее всего, уже успели порекомендовать его друзьям.
                </p>
              </div>
            </div>

            {/* Золотой Мастер */}
            <div className="bg-gradient-to-br from-wine/20 to-wine/30 p-8 border-2 border-wine text-center group hover:from-wine/30 hover:to-wine/40 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-wine text-stone px-3 py-1 text-xs font-heading font-bold uppercase">
                Элита
              </div>
              
              <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              
              <h3 className="font-heading text-xl font-bold text-stone mb-4 uppercase">
                ЗОЛОТОЙ МАСТЕР
              </h3>
              
              <div className="mb-6">
                <div className="bg-charcoal/50 p-4 mb-4">
                  <p className="font-heading text-sm font-semibold text-wine uppercase mb-2">
                    Условие:
                  </p>
                  <p className="font-body text-kraft">
                    Общая сумма ваших заказов превысила <span className="text-stone font-semibold">15 000 ₽</span>
                  </p>
                </div>
                
                <div className="bg-wine/40 p-4 mb-4">
                  <p className="font-heading text-sm font-semibold text-wine uppercase mb-2">
                    Ваша привилегия:
                  </p>
                  <p className="font-body text-stone font-semibold text-lg mb-3">
                    Постоянная скидка <span className="text-2xl">15%</span> на весь ассортимент
                  </p>
                  <div className="bg-wine/20 p-3 rounded">
                    <p className="font-heading text-xs font-semibold text-wine uppercase mb-1">
                      Дополнительная привилегия:
                    </p>
                    <p className="font-body text-kraft text-sm">
                      Ранний доступ ко всем новинкам и закрытым распродажам за 24 часа до официального старта
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-wine/30 pt-4">
                <p className="font-heading text-sm font-semibold text-wine uppercase mb-2">
                  Статус:
                </p>
                <p className="font-body text-kraft text-sm leading-relaxed">
                  Вы — не просто клиент. Вы — наш партнер и амбассадор. Вы входите в элиту "Клуба Ремесленников".
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-wine/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-stone mb-8">
              КАК ЭТО РАБОТАЕТ?
            </h2>
            <div className="w-24 h-1 bg-wine mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-charcoal/30 p-6 border-l-4 border-wine">
              <h3 className="font-heading text-lg font-semibold text-wine mb-3 uppercase">
                Как вступить в клуб?
              </h3>
              <p className="font-body text-kraft leading-relaxed">
                Просто зарегистрируйтесь на нашем сайте и совершите первую покупку. 
                Вы автоматически становитесь участником.
              </p>
            </div>

            <div className="bg-charcoal/30 p-6 border-l-4 border-wine">
              <h3 className="font-heading text-lg font-semibold text-wine mb-3 uppercase">
                Как отслеживать свой статус?
              </h3>
              <p className="font-body text-kraft leading-relaxed">
                Вся информация о сумме ваших заказов и текущей скидке будет доступна в вашем Личном кабинете.
              </p>
            </div>

            <div className="bg-charcoal/30 p-6 border-l-4 border-wine">
              <h3 className="font-heading text-lg font-semibold text-wine mb-3 uppercase">
                Скидка суммируется с акциями?
              </h3>
              <p className="font-body text-kraft leading-relaxed">
                Да, ваша постоянная скидка суммируется со скидками на наборы и другими акционными предложениями. 
                Мы ценим вашу лояльность.
              </p>
            </div>

            <div className="bg-charcoal/30 p-6 border-l-4 border-wine">
              <h3 className="font-heading text-lg font-semibold text-wine mb-3 uppercase">
                Скидка может "сгореть"?
              </h3>
              <p className="font-body text-kraft leading-relaxed">
                <span className="text-stone font-semibold">Никогда.</span> Ваш статус и скидка закрепляются за вами навсегда.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-stone mb-8">
            НАЧНИТЕ СВОЙ ПУТЬ В КЛУБЕ РЕМЕСЛЕННИКОВ
          </h2>
          <p className="font-body text-kraft mb-12 leading-relaxed max-w-2xl mx-auto">
            Зарегистрируйтесь на сайте, сделайте первый заказ и автоматически станьте участником 
            самой честной программы лояльности в мире вяленого мяса.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/auth/register"
              className="inline-block bg-wine hover:bg-wine/90 text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg uppercase tracking-wide"
            >
              Создать аккаунт
            </Link>
            
            <Link 
              href="/auth/login"
              className="inline-block border-2 border-wine text-wine hover:bg-wine hover:text-stone font-heading text-lg font-medium px-8 py-4 transition-all duration-300 uppercase tracking-wide"
            >
              Войти в личный кабинет
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-wine/30">
            <p className="font-body text-kraft/60 text-sm">
              Уже есть аккаунт? Проверьте свой текущий статус в личном кабинете
            </p>
          </div>
        </div>
      </section>

      {/* Финальная цитата */}
      <section className="py-16 bg-wine/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="font-body text-2xl md:text-3xl text-stone italic leading-relaxed mb-8">
            "Мы создали Клуб не для продаж, а для благодарности. Каждый ваш возврат к нам — 
            это подтверждение того, что мы двигаемся в правильном направлении."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-16 bg-wine rounded-full flex items-center justify-center">
              <span className="font-heading text-lg font-bold text-stone">К</span>
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
      </section>
    </div>
  );
} 