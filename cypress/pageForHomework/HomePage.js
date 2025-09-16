  class HomePage{
    clickNavigatorMenu(){
        cy.get('#open-navigation-menu-mobile').click();
    }
    clickLogoutButton(){
        cy.get(':nth-child(12) > .next-bve2vl').click();
    }
    clickLogoutButton2(){
        cy.get(':nth-child(9) > .next-bve2vl').click();   // 2. bir logout butonu atamamın sebebi 2.userda ki 
                                                          // logout butonu farklı bir aileye tanımlı geçiyor. 
                                                          // O yüzden 1. ile çıkış yapmıyor hocam
    }

} 
export default new HomePage;