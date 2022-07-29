const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");
const assert = require('assert');
const expect = require('chai').expect;



describe('Verify whether chaijs.com links on ' +
    'home page works correctly', () => {

    it('User should be able to launch home page ' +
        'of chaijs.com', async () => {
            var searchString = "Learn-Automation";
 
       //To wait for browser to build and launch properly
       let driver = await new Builder().forBrowser("chrome").build();
 
        //To fetch http://google.com from the browser with our code.
        await driver.get("http://google.com");
            
        //To send a search query by passing the value in searchString.
        await driver.findElement(By.name("q")).sendKeys(searchString,Key.RETURN);
 
        //Verify the page title and print it
        var title = await driver.getTitle();
        console.log('Title is:',title);
        expect(title).to.be.a('string').
        and.equal('-Automation - Google Search');
    
        //It is always a safe practice to quit the browser after execution
        await driver.quit();
        
    });
});