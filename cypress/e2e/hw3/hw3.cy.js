import HomePage from "../../pageForHomework/HomePage";
import Login from "../../pageForHomework/Login";

describe ('Modul_3 Page Object Pattern Homework',function(){
    it('TC_01 Birinci User ile login-logout testi',function(){
        cy.fixture('login.json').then((data) => {
        Login.navigateUrl();                          // İlgili url'e gider
        Login.writeEmail(data.user1Email);            // Email kısmının doldurulması
        Login.writePassword(data.user1Password);      // Password kısmının doldurulması
        Login.clickLoginButton();                     // Login butonuna tıklanması
        HomePage.clickNavigatorMenu();                // Navigator menünün açılması
        HomePage.clickLogoutButton();                 // logout
       })
    })

    it('TC_02 ikinci User ile login-logout testi',function(){
        cy.fixture('login.json').then((data) => {
        Login.navigateUrl();                        
        Login.writeEmail(data.user2Email);
        Login.writePassword(data.user2Password);
        Login.clickLoginButton();
        HomePage.clickNavigatorMenu();
        HomePage.clickLogoutButton2();



        })
    })


})