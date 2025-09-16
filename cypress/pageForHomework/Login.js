class Login{
    
    
    navigateUrl(){
        cy.visit("https://www.edu.goit.global/account/login");
    }
    writeEmail(eMail){
        cy.get('#user_email').type(eMail);
    }
    writePassword(password){
        cy.get('#user_password').type(password);
       
    }
    clickLoginButton(){
        cy.get("[type='submit']").click();
    }

}
export default new Login(); 

