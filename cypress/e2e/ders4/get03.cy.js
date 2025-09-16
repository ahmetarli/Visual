describe ('API testing', ()=>{
it("tc01_GET isteği", ()=> {
    const req ={
        method: 'GET',
        url: "https://httpbin.org/get",

        failOnStatusCode: false }

        cy.request(req).then((response)=>{
            debugger;   //hangi satırdaki değerleri kontrol etmek istiyorsan
            assert.equal(200,response.status);
            debugger;
            expect(response.status).to.equal(200);
            debugger;
            assert.equal("https://httpbin.org/get",response.body['url']);
            debugger;
            assert.equal("application/json",response.headers['content-type'])
            assert.isTrue(response.duration <=2000);
           // except(response.duration).to.be.at.most(20000); /// kütüphaneden kaynaklı calısmıyor

        })
   
  });
});
