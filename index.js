var Glance = require('glance-webdriver').default;

var glance = new Glance({
    driverConfig: { desiredCapabilities: {browserName: 'chrome'} }
});

// As best I can tell, GlassDoor is finding where I am and setting location automatically on it's Company Reviews page.
// For now I'm going to rely on this as if I try to set the location, I get "Alpharetta, GAAlpharetta, GA"
// and I'm not sure why. So for now, rely on the behavior I'm seeing.

let companySectionCssSelector = '.eiHdrModule.module.snug';

let companies = glance.url('http://glassdoor.com/')
    .click('Company Reviews#1')
    .click('Search company reviews and ratings > button')
    .click('LocationFilter')
    .click('Alpharetta, GA#1')
    .get(companySectionCssSelector)
    .end();

console.log(companies)
