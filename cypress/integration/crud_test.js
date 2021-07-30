
    describe("Open the browser", () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/')
            cy.title().should('eq','Productotron 3000')
        });
       //Creating a record
      it("Add a record", () => {
        cy.xpath('//*[@id="root"]/section/section/aside/div/ul/li/span[2]').click() //Clicking on Create Product
       cy.get('#name').type(productname(5)) //Entering the Name
        cy.get('#description').type('xyz') //Entering the product description
        cy.get('#price').type('100') //Entering the Price
        cy.get('#inventory').type('5') //Entering the Inventory
        cy.xpath('//button[@class="ant-btn ant-btn-primary"]/span[text()="Create"]').click() // Clicking on Create button
        cy.xpath('/html/body/div[3]/div/div/div/div/div[@class="ant-message-custom-content ant-message-success"]').should('exist') //verifying if the toast message content is visible
      });

      //Displaying all the records
      it("Display a record", () => {
        cy.get('#root > section > section > main > div').children().should('exist')
      });

     //Updating a record
      it("Update a record", () => {
        cy.xpath('//*[@id="root"]/section/section/main/div/div[7]/div/ul/li[1]/span/span').click() //Clicking on Edit 
        cy.get('#name').clear().type('Updated Test Product ') // Updating the Product Name
        cy.get('body > div:nth-child(2) > div > div.ant-modal-wrap > div > div.ant-modal-content > div.ant-modal-footer > button.ant-btn.ant-btn-primary').click() //Saving the edited changes
       });

       //Deleting a record
      it("Delete a record", () => {
        cy.get('#root > section > section > main > div > div:nth-child(7) > div > ul > li:nth-child(2) > span > span').click() //Clicking on Delete
        cy.xpath('/html/body/div[2]/div/div/div/div[2]/div/div[2]/button[2]').click() // Clicking on Yes 
        cy.xpath('/html/body/div[2]/div/div/div/div/div').should('exist') //verifying if the toast message content is visible
       });  
  
    });  


    function productname(length) {
      var name           = '';
      var characters       = 'abcdefghijklmnopqrstuvwxyz';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        name += characters.charAt(Math.floor(Math.random() * 
   charactersLength));
     }
     return name;
  }
    

   
