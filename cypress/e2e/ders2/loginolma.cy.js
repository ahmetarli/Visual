describe ('özel komutlar',function(){


it("admin login", function()  {
    cy.signIn('user888@gmail.com','1234567890')

    //cy.visit("https://www.edu.goit.global/account/login")

    //cy.get('#user_email').type("user888@gmail.com")

    //cy.get("#user_password").type("1234567890");

    //cy.get("[type='submit']").click();
  });

    it("user login", function() {
        cy.signIn('nadia.tsomko.98@gmail.com','Nadia_Tsomko78')
    //cy.visit("https://www.edu.goit.global/account/login")

    //cy.get('#user_email').type("nadia.tsomko.98@gmail.com")

    //cy.get("#user_password").type("Nadia_Tsomko78");

    //cy.get("[type='submit']").click();
  });

    it("manager login",function()  {
        cy.signIn('mrdusty@duniakeliling.com','mrdusty@duniakeliling.com')
    //cy.visit("https://www.edu.goit.global/account/login")

    //cy.get('#user_email').type("mrdusty@duniakeliling.com")

    //cy.get("#user_password").type("mrdusty@duniakeliling.com");

    //cy.get("[type='submit']").click();
  });
  }) 