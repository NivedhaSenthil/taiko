#! /usr/bin/env node
const {openBrowser,client,closeBrowser} = require('./lib/taiko');
(async () => {
    try {
        await openBrowser();
       console.log( (await client().Browser.getVersion()).product.split('/')[1]); 
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();