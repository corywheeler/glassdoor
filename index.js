var Glance = require('glance-webdriver').default;

var glance = new Glance({
    driverConfig: { desiredCapabilities: {browserName: 'chrome'} }
});

// As best I can tell, GlassDoor is finding where I am and setting location automatically
// For now I'm going to rely on this as if I try to set the location, I get "Alpharetta, GAAlpharetta, GA"
// and I'm not sure why. So for now, rely on the behavior I'm seeing.


glance.url('http://glassdoor.com/')
    .click('Company Reviews#1')
    .click('Search company reviews and ratings > button');
