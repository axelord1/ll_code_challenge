exports.config = {
    framework: 'jasmine',
    directConnect: true,
    specs: ['./specs/*.js'],
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        // If true, display spec names.
        isVerbose: true,
        // If true, print colors to the terminal.
        showColors: true,
        // If true, include stack traces in failures.
        includeStackTrace: true,
        // Default time to wait in ms before a test fails.
        defaultTimeoutInterval: 15000
    },
    params : {
        tc1:{
            firstName: 'Roberto',
            lastName: 'Munoz',
            userName: 'Axelord',
            passWord: 'test123!',
            customer: 'BBB',
            role: 'Admin',
            email: 'axelord1@gmail.com',
            cellPhone: '3331849104'
        }
    }
};