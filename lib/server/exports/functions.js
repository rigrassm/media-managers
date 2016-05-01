
// CouchPotato Exports

function Server() {
  this.url = "http://127.0.0.1";
  this.port = 5050;
  this.api = "abcdef012345";
  this.directory = "";
}

CouchPotato = new Server();

CouchPotato.appAvailable = function() {
  return Meteor.call("appAvailable", {});
}

CouchPotato.mediaGet = function(media) {
  return Meteor.call("mediaGet", media, {});
}

CouchPotato.movieAdd = function(media) {
  return Meteor.call("movieAdd", media, {});
}

CouchPotato.movieDelete = function(media) {
  return Meteor.call("movieDelete", media, {});
}
function Server() {
  this.url = "http://127.0.0.1";
  this.port = 8989;
  this.api = "abcdef012345";
  this.directory = "";
}

// Sonarr Exports

Sonarr = new Server();

Sonarr.systemStatus = function() {
  return Meteor.call("systemStatus", {});
}

Sonarr.profilesGet = function() {
  return Meteor.call("profilesGet", {});
}

Sonarr.seriesStats = function(tvdb) {
  return Meteor.call("seriesStats", tvdb, {});
}

Sonarr.seriesGet = function(tvdb) {
  return Meteor.call("seriesGet", tvdb, {});
}

Sonarr.seriesDelete = function(tvdb) {
  return Meteor.call("seriesDelete", tvdb, {});
}

Sonarr.seriesPost = function(tvdb, title, qualityProfileId, seasonFolder, rootFolderPath, episodes) {
  return Meteor.call("seriesPost", tvdb, title, qualityProfileId, seasonFolder, rootFolderPath, episodes, {});
}

// Sickrage exports

function Server() {
  this.url = "http://127.0.0.1";
  this.port = 8081;
  this.api = "abcdef012345";
  this.directory = "";
}

SickRage = new Server();

SickRage.available = function() {
  return Meteor.call("available", {});
}

SickRage.checkShow = function(tvdbid) {
  return Meteor.call("checkShow", tvdbid, {});
}

SickRage.addShow = function(tvdbid, episodes) {
  return Meteor.call("addShow", tvdbid, episodes, {});
}

SickRage.deleteShow = function(tvdbid) {
  return Meteor.call("deleteShow", tvdbid, {});
}

SickRage.statsShow = function(tvdbid) {
  return Meteor.call("statsShow", tvdbid, {});
}
