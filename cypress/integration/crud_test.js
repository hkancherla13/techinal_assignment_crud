
    describe("Open the browser", () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/')
            cy.title().should('eq','Productotron 3000')
        });
       
      it("Add a record", () => {
        cy.xpath('//*[@id="root"]/section/section/aside/div/ul/li/span[2]').click()
        
        cy.xpath('/html/body/div[2]/div/div[2]/div')
       
        
        cy.get('#name').type('Test_Product')
        
        cy.get('#description').type('xyz')
        cy.get('#price').type('100')
        cy.get('#inventory').type('5')
        cy.xpath('//button[@class="ant-btn ant-btn-primary"]/span[text()="Create"]').click()
        cy.xpath('/html/body/div[3]/div/div/div/div/div[@class="ant-message-custom-content ant-message-success"]').should('exist')
      });

      it("Update a record", () => {
      
        cy.xpath('//*[@id="root"]/section/section/main/div/div[7]/div/ul/li[1]/span/span').click()
        cy.get('#name').clear().type('Updated Test Product ')
        cy.get('body > div:nth-child(2) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.ant-btn-primary').click()
 
       });

      it("Delete a record", () => {
      
        cy.get('#root > section > section > main > div > div:nth-child(7) > div > ul > li:nth-child(2) > span > span').click()
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/div/div[2]/button[2]').click()
        cy.xpath('/html/body/div[2]/div/div/div/div/div').should('exist') 
           
 
       }); 
  
    });  
