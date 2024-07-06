describe('Проверка на практике)', function () {

    it('Выбор города и магазина по локации', function () {
         cy.visit('https://magnit.ru/');
        

         cy.get('.popup-unit-cookie-policy > .pl-button-base').should('be.visible'); // поп ап окно с куками при заходе на сайт видно пользователю
         cy.get('.popup-unit-cookie-policy > .pl-button-base > .pl-button-base__content').click(); // нажать на поп ап окне хорошо

         cy.get('.app-location__inner').click();// нажать на выбор города

         cy.get('.shop-select > .pl-button-base').should('be.visible'); // кнопка крестик видна пользователю 
         cy.get('.shop-select__toolbar > :nth-child(1)').should('be.visible'); // кнопка + видна пользователю
         cy.get('.shop-select__toolbar > :nth-child(2)').should('be.visible'); // кнопка - видна пользователю
         cy.get('.shop-select__toolbar > :nth-child(3)').should('be.visible'); // кнопка локации видна пользователю

         cy.get('.shop-select__search__outer > .pl-search > .pl-search-input > .pl-input-wrapper > .pl-input').type('Москва'); // ввести в инпут город Москва
         cy.get('.shop-select__city').contains('Москва'); // после ввода нужного города он отобразился в списке
         cy.get('.shop-select__city--region').contains('Московская область');// Отобразилась область нужного города

         cy.get('.shop-select__cities--list__inner').click(); // нажал по кнопке нужного города
         cy.get('.shop-select__list--detailed__slice > :nth-child(1)').click(); // выбор первого магазина из списка
         cy.get('.shop-select__map__balloon__submit').click(); // нажать кнопку выбор на карте у магазина
        
         cy.get('.special-offers__title-wrapper > .pl-text').contains('Спецпредложения'); // переход на главный экран и подтверждение по поиску фразы Спецпредложения
     })
 }) 