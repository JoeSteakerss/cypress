describe('Покупка нового аватара для своего тренера', function () {

    it('Покупка', function () {
         cy.visit('https://pokemonbattle.ru/login');
         cy.get(':nth-child(1) > .auth__input').type('mish.iw19990@yandex.ru');
         cy.get('#password').type('nTv-v97-Uhm-dE2');
         cy.get('.auth__button').click();
         cy.wait(1500);
         cy.get('.header__btns > :nth-child(4)').click();
         cy.get(':nth-child(1) > .shop__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('5555555544444442');
         cy.get(':nth-child(1) > .pay_base-input-v2').type(1025);
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type(125);
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('german dolnikov');
         cy.get('.pay-btn').click();
         cy.wait(1500);
         cy.get('#cardnumber').type(56456);
         cy.get('.payment__submit-button').click();
         cy.get('.payment__adv').click();
     })
 }) 