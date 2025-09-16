describe ('API testing', ()=>{

    it("tc01_GET isteği ile body sorgulama", function() {
    const req ={
        method: 'GET',
        url: "https://jsonplaceholder.typicode.com/posts",
          body:{
          title: 'qui est esse',
          id: 2,
  },
        

        failOnStatusCode: false
    }

        cy.request(req).then((response)=>{
        console.log("response ::::::", response)
        cy.log("response::::::",JSON.stringify(response)) 
        cy.log("response body",JSON.stringify(response.body))
        assert.equal(response.status, 200);     
        assert.isTrue(response.duration <=2000); 
        assert.equal("application/json; charset=utf-8",response.headers['content-type'])
        assert.equal("keep-alive",response.headers['connection'])
        
        })
    })
      it("tc02_post isteği ile headers sorgulama", ()=> {
      const req ={
        method: 'POST',
        url: "https://jsonplaceholder.typicode.com/posts",
        headers:{
          'Content-Type':"application/json; charset=utf-8",
          'connection' : "keep-alive",
           'via':"2.0 heroku-router"
       
    },
    failOnStatusCode: false 
     }
       cy.request(req).then((response)=>{

       assert.equal(response.status, 201);     
       cy.log("response headers",JSON.stringify(response.headers))
      })
    }); 

     it("tc03_POST isteği QS", ()=> {
    const req ={
        method: 'POST',
        url: "https://jsonplaceholder.typicode.com/posts",
        qs:{
            id:"101",
            name2:"Ahmet Arli",
            randomText:"2 die 4"
    

        },
        
        failOnStatusCode: false


    }
         cy.request(req).then((response)=>{    
         cy.log("response body",JSON.stringify(response.body))
         assert.equal(response.status, 201);    // Siteden kaynaklı 201 çeviriyor... 
         assert.isTrue(response.duration <=2000); 
        })
    });

   // assert.equal(response.body.json.title, "qui est esse");

})