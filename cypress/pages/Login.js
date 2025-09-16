class Login{
     //url="https://www.edu.goit.global/account/login"
     //title=".next-10stgr7 > .next-c1vj7d"
     //email="#user_email"
     //password="#user_password" eğer böyle yaparsak cy.get(this.email- this.password gibi)
     //Login button=".next-1jphuq5"
     //forget password=".next-1f1fv1i > .next-1qrvie4"




    navigateUrl(){
        cy.visit("https://www.edu.goit.global/account/login");
    }
    //navigateUrl(url){
    //    cy.visit(url); }
    // 
    checkTitle(title){
        cy.get('.next-10stgr7 > .next-c1vj7d').should('be.visible').and('have.text',title);
    }
    checkEmailField(){
        cy.get('#user_email').should('be.visible').and('exist');
    }
    checkPasswordField(){
        cy.get('#user_password').should('be.visible').and('exist')
    }
    checkLoginButton(){
        cy.get('.next-1jphuq5').should('be.visible').and('exist')
    }
    forgetPassword(text){
        cy.get('.next-1f1fv1i > .next-1qrvie4').should('be.visible').and('have.text',text)
    }

}

export default new Login(); //veya bunu yapabiliriz. en başa exportta yapabilirsin ama bende çalışmıyor.

