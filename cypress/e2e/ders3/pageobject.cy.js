import Login from "../../pages/Login";

describe ('Page Object Model',function() {

    it("tc02_page object pattern", function(){

        //cy.fixture('Login').then(exptected) => {} fixture a json formatlarını girebiliriz. login datanın adı
        //cy.visit(exptected.url) 
       Login.navigateUrl();
       Login.checkTitle("Login");
       Login.checkEmailField();
       Login.checkPasswordField();
       Login.checkLoginButton();
       Login.forgetPassword("I can't remember the password");

    });
});