Package.describe({
  name: 'rigrassm:media-managers',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Wrapper for media managing applications used by Plexrequests',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rigrassm/media-managers',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');

  //Couchpotato

  api.addFiles('lib/server/methods/couchpotato/appAvailable.js', ['server']);
  api.addFiles('lib/server/methods/couchpotato/mediaGet.js', ['server']);
  api.addFiles('lib/server/methods/couchpotato/movieAdd.js', ['server']);
  api.addFiles('lib/server/methods/couchpotato/movieDelete.js', ['server']);

  // Sickrage

  api.addFiles('lib/server/methods/sickrage/available.js', ['server']);
  api.addFiles('lib/server/methods/sickrage/checkShow.js', ['server']);
  api.addFiles('lib/server/methods/sickrage/addShow.js', ['server']);
  api.addFiles('lib/server/methods/sickrage/deleteShow.js', ['server']);
  api.addFiles('lib/server/methods/sickrage/statsShow.js', ['server']);

  // Sonarr
  
  api.addFiles('lib/server/methods/sonarr/systemStatus.js', ['server']);
  api.addFiles('lib/server/methods/sonarr/profilesGet.js', ['server']);
  api.addFiles('lib/server/methods/sonarr/seriesStats.js', ['server']);
  api.addFiles('lib/server/methods/sonarr/seriesPost.js', ['server']);
  api.addFiles('lib/server/methods/sonarr/seriesGet.js', ['server']);
  api.addFiles('lib/server/methods/sonarr/seriesDelete.js', ['server']);
  
 // Export Functions

  api.addFiles('lib/server/export/functions.js', ['server']);
  
  api.use('meteor-base@1.0.1')
  api.use('templating');
  api.use('underscore');
  api.use('check');
  api.use('http');
  api.use('reactive-var');
  api.use('fortawesome:fontawesome@4.4.0')

  api.export("CouchPotato");
  api.export("Sonarr");
  api.export("SickRage");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rigrassm:media-managers');
});


