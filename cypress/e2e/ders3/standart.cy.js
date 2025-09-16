describe ('standart test yazma',function() {

    it("tc01_standart test", function(){
        // 1. olarak url'e git
        cy.visit("https://www.edu.goit.global/account/login");
        // 2. Title'ın görünür olup olmadığını kontrol et ve textin Login olup olmadığını kontrol et.
        cy.get('.next-10stgr7 > .next-c1vj7d').should('be.visible').and('have.text','Login')
        // 3. Email alanının görünür olup olmadığını ve var olup olmadığını kontrol et.
        cy.get('#user_email').should('be.visible').and('exist')
        // 4. Password alanının görünür olup olmadığını ve var olup olmadığını kontrol et.
        cy.get('#user_password').should('be.visible').and('exist')
        // 5. Login alanının görünür olup olmadığını ve var olup olmadığını kontrol et.
        cy.get('.next-1jphuq5').should('be.visible').and('exist')
        // 6. Forget password görünür olup olmadığını ve ve yazının bu şekilde olduğunu kontrol et.
        cy.get('.next-1f1fv1i > .next-1qrvie4').should('be.visible').and('have.text',"I can't remember the password")

    })
});