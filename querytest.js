/*const puppeteer = require('puppeteer');
const express = require('express')
const app = express()
const port = 3000
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}*/
/*(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=fun+facts&oq=fun+facts&aqs=chrome..69i57j0i67j0i512l8.3086j0j7&sourceid=chrome&ie=UTF-8');
  await sleep(2000)
  //await page.screenshot({ path: 'example.png' }); //for debugging remove the slashes
  const element = await page.waitForSelector('.sW6dbe'); // select the element
  const value = await element.evaluate(el => el.textContent); // grab the textContent from the element, by evaluating this function in the browser context
  
  const element2 = await page.waitForSelector('.DRBylb'); // select the element
  const value2 = await element2.evaluate(el => el.textContent); // grab the textContent from the element, by evaluating this function in the browser context
  return { value, value2 }
  await browser.close();
})();*//*
async function test() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=fun+facts&oq=fun+facts&aqs=chrome..69i57j0i67j0i512l8.3086j0j7&sourceid=chrome&ie=UTF-8');
  await sleep(2000)
  //await page.screenshot({ path: 'example.png' }); //for debugging remove the slashes
  const element = await page.waitForSelector('.sW6dbe'); // select the element
  const value = await element.evaluate(el => el.textContent); // grab the textContent from the element, by evaluating this function in the browser context
  
  const element2 = await page.waitForSelector('.DRBylb'); // select the element
  const value2 = await element2.evaluate(el => el.textContent); // grab the textContent from the element, by evaluating this function in the browser context
  return { value, value2 }
  await browser.close();
  }
  result=test()
  value=result.value
  value2=result.value2
/*  app.get('/', (req, res) => {
  res.send(value+"\n"+value2)
})
//test()
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/
    const express = require('express'); // Adding Express
    const app = express(); // Initializing Express
    const puppeteer = require('puppeteer'); // Adding Puppeteer

    // Launching the Puppeteer controlled headless browser and navigate to the Digimon website
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
app.get('/', function(req, res) {
    puppeteer.launch().then(async function(browser) {
        const page = await browser.newPage();
        await page.goto('https://www.google.com/search?q=fun+facts&oq=fun+facts&aqs=chrome..69i57j0i67j0i512l8.3086j0j7&sourceid=chrome&ie=UTF-8');

        //await sleep(0)
        //await page.screenshot({ path: 'example.png' }); //for debugging remove the slashes
        const element = await page.waitForSelector('.sW6dbe'); // select the element
        const value = await element.evaluate(el => el.textContent); // grab the textContent from the element, by evaluating this function in the browser context
  
        const element2 = await page.waitForSelector('.DRBylb'); // select the element
        const value2 = await element2.evaluate(el => el.textContent); // grab the textContent from the element, by evaluating this function in the browser context
        //return { value, value2 }
        // Closing the Puppeteer controlled headless browser
        await browser.close();
	res.send(value+'<br />'+'<b>'+value2+'</b>')
    });
});
    // Making Express listen on port 7000
    app.listen(3000, function() {
      console.log('Running on port 3000.');
    });