Package.describe({
  name: 'nspangler:autoreconnect',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Simple Meteor client auto-reconnect package.',
  // URL to the Git repository containing the source code for this package.
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use("tracker", "client");
  api.addFiles('autoreconnect.js');
  api.export('reconnectToServer', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('nspangler:autoreconnect');
  api.addFiles('autoreconnect-tests.js');
});
