describe ('API testing - assertion', ()=>{
    // get istediğinde body gönderilmez !! post olması lazım
it("tc01_POST isteği assertion", ()=> {
    const req ={
        method: 'POST',
        url: "https://httpbin.org/post",
    
        body:{
            name:"Mr.",
            role:"QA",
            age:30

        },

        failOnStatusCode: false


    }
        cy.request(req).then((response)=> {

        assert.equal(response.status, 200);     // 1. yöntem
        expect(response.status).to.equal(200);  // 2. yöntem
        cy.log("response body",JSON.stringify(response.body))

        assert.equal(response.body.json.name, "Mr.");
        expect(response.body.json.name).to.equal("Mr.");

        assert.equal(response.body.url,"https://httpbin.org/post");

        expect(response.body.json).to.deep.equal({
            name:"Mr.",
            role:"QA",
            age:30 }); 
            
       //expect(response.headers['Content-Type']).to.include("application/json");
       expect(response.duration).to.be.lessThan(2000);
        
    
        })
     
    


    });
  


 
})