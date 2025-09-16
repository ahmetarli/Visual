describe ('API testing', ()=>{

    it("tc01_GET isteği", ()=> {
        cy.request("https://httpbin.org/get").then((response)=>{
        assert.equal(response.status, 200);     // 1. yöntem get çevirdiğimizi ok(200)
        expect(response.status).to.equal(200);  // 2. yöntem 
        })


    });


 it("tc02_GET isteği", ()=> {
    const req ={
        method: 'GET',
        url: "https://httpbin.org/get",

        failOnStatusCode: false


    }
        cy.request(req).then((response)=>{
        assert.equal(response.status, 200);     // 1. yöntem
        expect(response.status).to.equal(200);  // 2. yöntem
        console.log("response ::::::", response)
        cy.log("response::::::",JSON.stringify(response)) 
        cy.log("response body",JSON.stringify(response.body))
        cy.log("response headers",JSON.stringify(response.headers))
        cy.log("response status",JSON.stringify(response.status))
        cy.log("response statusText",JSON.stringify(response.statusText))
        cy.log("response duration",JSON.stringify(response.duration)) 
        /// eğer spesifik olarak bir yeri almak istiyorsak response.body 
        })
     
    


    });
    it("tc03_GET isteği QS", ()=> {
    const req ={
        method: 'GET',
        url: "https://httpbin.org/get",
        qs:{
            id:"1",
            name:"Mr"  /// göndermek için postmana girip bunları body kısmına yazman lazım.
        },
        
        failOnStatusCode: false


    }
        cy.request(req).then((response)=>{
        assert.equal(response.status, 200);     // 1. yöntem
        expect(response.status).to.equal(200);  // 2. yöntem
        cy.log("response body",JSON.stringify(response.body))
        })
    });
    // POST İsteği body gönderme:::::::1
      it("tc04_POST isteği body", ()=> {
    const req ={
        method: 'POST',
        url: "https://httpbin.org/post",
        body: {
            name:"Mr.",
            role:"QA",
            age:30
        },
        
        failOnStatusCode: false


    }
        cy.request(req).then((response)=>{
        assert.equal(response.status, 200);     // 1. yöntem
        expect(response.status).to.equal(200);  // 2. yöntem
        cy.log("response body",JSON.stringify(response.body))
        })
    });

    // post with body::::::::::2
    it("tc05_POST isteği body_2", ()=> {

    const body = {
        name:"Mr.",
        role:"QA",
        age:30
    }
    const req ={
        method: 'POST',
        url: "https://httpbin.org/post",
        body: body,
        
        failOnStatusCode: false


    }
        cy.request(req).then((response)=>{
        assert.equal(response.status, 200);     // 1. yöntem
        expect(response.status).to.equal(200);  // 2. yöntem
        cy.log("response body",JSON.stringify(response.body))
        })
    });
    /// post with body with headers :::::::
    it("tc06_POST isteği body_header", ()=> {

    const body = {
        name:"Mr.",
        role:"QA",
        age:30
    }
    const req ={
        method: 'POST',
        url: "https://httpbin.org/post",
        body: body,
        headers:{
           'Content-Type':"application/json",
           'Connection':"keep-alive",
           'user-agent':"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36"
        },
        
        failOnStatusCode: false


    }
        cy.request(req).then((response)=>{
        assert.equal(response.status, 200);     // 1. yöntem
        expect(response.status).to.equal(200);  // 2. yöntem
        cy.log("response body",JSON.stringify(response.body))
        cy.log("response body",JSON.stringify(response.headers))
        })
    });
})