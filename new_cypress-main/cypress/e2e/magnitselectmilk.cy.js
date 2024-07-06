describe('Просмотр карточки товара', function () {

    it('Выбор болока и проспорт его артикула', function () {
         cy.visit('https://magnit.ru/');
         cy.get('.pl-input').click();
         cy.get('.header-search-catalog-items > :nth-child(4) > .pl-list-item-content').contains('Молоко, яйцо, сыр');
         cy.get('.header-search-catalog-items > :nth-child(4) > .pl-list-item-content').click();
         cy.get('.header-search-catalog-items > :nth-child(1) > .pl-list-item-content').contains('Молоко, сливки');
         cy.get('.header-search-catalog-items > :nth-child(1) > .pl-list-item-content').click();
         cy.get('.header-search-catalog-items > :nth-child(1) > .pl-list-item-content').contains('Молоко пастеризованное');
         cy.get('.header-search-catalog-items > :nth-child(1) > .pl-list-item-content').click();
         cy.get('h1.pl-text').contains('Молоко пастеризованное');
         cy.get(':nth-child(1) > .unit-catalog-product-preview > a > .unit-catalog-product-preview-description > .unit-catalog-product-preview-text').click();
         cy.get('.product-details-nutrition-facts__title').contains('Пищевая ценность в 100 граммах');
         cy.get('.product-details-parameters__tab--active').click();
         cy.get('[itemprop="sku"]').contains('1000035016');

     })
 }) 