describe('Проверка на практике)', function () {
     
    it('Проверка поиска на крепкий алкоголь', function () {
        cy.visit('https://magnit.ru');
        cy.get('.pl-input').click();
        cy.get('.header-search-catalog-items > :nth-child(2) > .pl-list-item-content > .pl-list-item-content-left > .pl-list-item__title > .pl-text').contains('Алкоголь');
        cy.get('.header-search-catalog-items > :nth-child(2)').click();
        cy.get('.header-search-catalog-caption > :nth-child(3)').contains('Все товары этой категории');
        cy.get('.header-search-catalog-caption > :nth-child(3)').click();
        cy.get('.filters-category > .pl-text').contains('Каталог товаров');
        cy.get('[href="/catalog/41181-krepky-alkogol?shopCode=992301&shopType=6"] > .filters-category__item__text').click();
        cy.get(':nth-child(1) > .unit-catalog-product-preview > a > .unit-catalog-product-preview-gallery > .unit-catalog-product-preview-image > .unit-catalog-adult-image > .unit-catalog-adult-image__label').contains('товар 18+');
        cy.get(':nth-child(1) > .unit-catalog-product-preview > a > .unit-catalog-product-preview-gallery > .unit-catalog-product-preview-image > .unit-catalog-adult-image > .unit-catalog-adult-image__label > .pl-text').click();
        cy.get('.unit-modal-adult__buttons > .pl-button_primary > .pl-button-base__content').contains('Да, есть');
        cy.get('.unit-modal-adult__buttons > .pl-button_primary > .pl-button-base__content').click();
        cy.get(':nth-child(1) > .unit-catalog-product-preview > a > .unit-catalog-product-preview-gallery > .unit-catalog-product-preview-image').should('be.visible');
    })
 }) 