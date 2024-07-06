import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json";
import * as recovery_password_page from "../locators/recovery_password_page.json"
import * as result_page from "../locators/result_page.json"

describe('Проверка авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get(main_page.fogot_pass_btn).should('have.css', 'color', 'rgb(0, 85, 152)'); // у кнопки забыли пароль цвет синий
          });
    
   afterEach('Конец теста', function () {
    cy.get(result_page.close).should('be.visible'); // есть крестик и виден пользователю
    cy.get(result_page.title).should('be.visible'); // текст виден пользователю
   });
    
    it('Верный пароль и верный логин', function () {
         cy.get(main_page.email).type(data.login); // ввели верный логин
         cy.get(main_page.password).type(data.password); // ввели верный пароль
         cy.get(main_page.login_button).click(); // нажали войти

         cy.get(result_page.title).contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
     })

     it('Проверка на приведение к строчным буквам в логине', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru'); // ввели верный логин
        cy.get(main_page.password).type(data.password); // ввели верный пароль
        cy.get(main_page.login_button).click(); // нажали войти

        cy.get(result_page.title).contains('Авторизация прошла успешно'); // проверяю что после авторизации вижу текст
    })

     it('Верный логин и неверный пароль', function () {
        cy.get(main_page.email).type(data.login); // ввели верный логин
        cy.get(main_page.password).type('iLoveqastudio2'); // ввели неверный пароль
        cy.get(main_page.login_button).click(); // нажали войти
        
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
    })

    it('Неверный логин и верный пароль', function () {
        cy.get(main_page.email).type('german@dolniko.ru'); // ввели неверный логин
        cy.get(main_page.password).type(data.password); // ввели верный пароль
        cy.get(main_page.login_button).click(); // нажали войти
        
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // проверяю что после авторизации вижу текст
    })    
    
    it('Проверка вализации в логине', function () {
        cy.get(main_page.email).type('germandolnikov.ru'); // ввели невалидный логин без @
        cy.get(main_page.password).type(data.password); // ввели верный пароль
        cy.get(main_page.login_button).click(); // нажали войти
        
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // проверяю что после авторизации вижу текст
    })

    it('Востановление пароля', function () {
        cy.get(main_page.fogot_pass_btn).click(); // нажали восстановить пароль
        cy.get(recovery_password_page.email).type(data.login); // ввожу валидный логин
        cy.get(recovery_password_page.send_button).click();// нажимаю на кнопку отправить код

        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail'); // проверяю что после нажатия вижу текст
    })

    it('Востановление пароля не валидный email', function () {
        cy.get(main_page.fogot_pass_btn).click(); // нажали нажали восстановить пароль
        cy.get(recovery_password_page.email).type('germandolnikov.ru'); // ввел не валидный логин
        cy.get(recovery_password_page.send_button).click();// нажимаю на кнопку отправить код
        
        cy.get(result_page.title).contains('Нужно исправить проблему валидации');
    })
 })