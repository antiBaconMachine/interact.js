Package.describe({
  name: 'abm:interact',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles(['interact.js', 'exports.js'], 'client');
  api.export('interact');
});
