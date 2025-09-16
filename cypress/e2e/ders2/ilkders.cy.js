describe ('İlk dersimiz',function(){

    it("TC01 İlk test senaryomuz",function(){

     // 1.cy cypress test kütüphanesinin temel komutudur.
     // 2. visit() -->url gider.
     cy.visit("https://www.edu.goit.global/account/login");

     // 3. get () --> elementleri locate ederken kullanıyoruz.
     // 4. type() --> metin göndermek için kullanılır.
     cy.get ("#user_email").type("Deneme")

     // 5. clear() --> metin silmeye yarar.
     // 6. as() --> takma isim  allias bir elemente isim verebiliriz.
     //cy.get ("#user_email").as('email')
     //cy.get ("@email").clear()
     
     //locate- selectors
     /* 1. id #
        2. class .
        3. atr= value [name='email'] */

     cy.get('#user_password').type("1234567890")
     // 7. click() --> sol click yapar.
     cy.get('.eckniwg2').click()

     // 8. contains() --> locate almak için kullanılır, text içermesine göre locate alabiliriz.
     // contains("Email")

     // 9. url() --> sayfanın url bize verecektir. 
     cy.url().should('include','www.edu.goit.global') 

     // 10. title() --> sayfanın başlığını alır.
     cy.title().should('include','Log in')

     // 11. wait(2000) --> ms kadar bekler 2000 ms =2sn
     /*cy.wait(3000); */

     // 12. dblclick() --> çift click
     cy.get('.eckniwg2').dblclick();

     // 13. rightclick() --> sağ click
     cy.get('.eckniwg2').rightclick();

     // 14. should() --> not,exist,equal,have,has,notEqual,exists,notExists,class,text,value,selected,focused,checked
     // and()
     // should('have.text', 'expected')
     // be visible --> görünür mü
     cy.get('.eckniwg2').should('have.text','Log in').and('be.visible').and('exist')
     // cy.get('cy.get(':nth-child(1) > .next-kg6b5i > .next-bdn3jy')').should('Equal','Email') //
     
     // 15. check() --> ilgili elementi click
     // cy.get().check().should(be.checked)

     // 16. hover () --> bir elementin üstüne fareyi götürür. cy.get().hover()



     


    })

    it("TC02 2.test senaryomuz",function(){
         cy.visit("https://www.edu.goit.global/account/login");
         cy.get('.eckniwg2').should('have.text','Log in').and('have.css','background-color','rgb(255, 107, 10)')
        

    })
    it("scrollIntoView test", function() {
		cy.visit("https://www.edu.goit.global/account/login");

    cy.get('#user_email').type("user888@gmail.com");

    cy.get("#user_password").type("1234567890");

    cy.get("[type='submit']").click();

    cy.get('[id="go-to-the-course-homepage-widget"]').scrollIntoView().should("be.visible");
 });
    // scrollIntoView() --> bir elemenent görünür olana kadar sayfası kaydırır.
    // scroolTo('bottom veya center  veya 0,1000 pixele')
    // cy.screenshot();

});


