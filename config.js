exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //specs: ['./tests/VIISP_loginTest.js'], //for login
    //specs: ['./tests/WorkplaceSelectTest.js'],
    //specs: ['./113aVisitCompleteTest.js'],
    specs: ['./tests/EspbiSearchTest.js', './tests/LogoutTest.js'],
    //specs: ['./tests/EspbiSearchTest.js', './113aVisitCompleteTest.js', './tests/LogoutTest.js'],
    onPrepare: './tests/WorkplaceSelectTest.js',
    multiCapabilities: [{browserName: 'chrome'} ],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 30000
    },
    params: {
      url: 'http://81.7.118.186/ngnis-demo',
      defaultVIISPLoginUserName: '[label="rutakazl1005"]',
      defaultVIISPUserNamePassword: 'Admin1234567*'
    }
  };
