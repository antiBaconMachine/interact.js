var packageName = "abm:interact";
var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: ' /* Fill me in! */ ',
  version: ",//packageJson.version,
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.export("interact");
  api.addFiles([
    'interact.js',
    'meteor/export.js'
  ]);
});
