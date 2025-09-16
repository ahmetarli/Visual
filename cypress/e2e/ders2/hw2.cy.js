describe ('Modul2 e2e TEST',function(){
    it('TC01 Homework Test1',function(){
       
     cy.visit("https://www.edu.goit.global/account/login"); // gerekli url'e gidilmesi

     cy.get('#user_email').type("user888@gmail.com"); // login bilgilerinin girilmesi

     cy.get("#user_password").type("1234567890");     // login bilgilerinin girilmesi

     cy.get("[type='submit']").click();               // login tıklatma
     cy.wait(2000)
     cy.get('#open-navigation-menu-mobile').click();  //navigator menü

     cy.get(':nth-child(12) > .next-bve2vl').click(); //logout
     cy.wait(3000);
  })
    it('TC02 Homework Test2',function(){
        cy.login('testowyqa@qa.team','QA!automation-1')    //login
        cy.wait(2000)
        cy.get('#open-navigation-menu-mobile').click();    //navigator menü
        
        cy.get(':nth-child(9) > .next-bve2vl').click();   // logout

    })
})