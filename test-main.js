var allTestFiles = [];
var TEST_REGEXP = /(spec|index)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    allTestFiles.push(file);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base/src',

  paths: {
    'text': '/base/node_modules/text/text',
    'angular': '/base/node_modules/angular/angular',
    'angular-mocks': '/base/node_modules/angular-mocks/angular-mocks'
  },
  shim: {
    'angular': { exports: 'angular' },
    'angular-mocks': { deps: ['angular'] }
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
