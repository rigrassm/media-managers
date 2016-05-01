Meteor.methods({
  seriesStats: function(tvdb){
    try {
      check(Sonarr.url, String);
      check(Sonarr.port, Number);
      check(Sonarr.api, String);
      check(tvdb, Number);
    } catch (e) {
      console.log("Sonarr Series Stats -> " + e.message);
      return false;
    }

    //Workaround to allow self-signed SSL certs, however can be dangerous and should not be used in production, looking into better way
    //But it's possible there's nothing much I can do
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    try {
      var allShows = HTTP.call("GET", Sonarr.url + ":" + Sonarr.port + Sonarr.directory + "/api/series/", {headers: {"X-Api-Key":Sonarr.api}, timeout: 15000} );
    } catch (e) {
      console.log("Sonarr Series Stats -> " + e.message);
      return false;
    }

    var sonarrId ;

    _.each(allShows.data, function (show) {
      if (show.tvdbId === tvdb) {
        sonarrId = show.id;
      }
    });

    try {
      var response = HTTP.call("GET", Sonarr.url + ":" + Sonarr.port + Sonarr.directory + "/api/series/" + sonarrId, {headers: {"X-Api-Key":Sonarr.api}, timeout: 15000} );
    } catch (e) {
      if (e.message.indexOf("NotFound") > -1) {
        return {"downloaded" : 0, "total" : 0};
      } else {
        console.log("Sonarr Series Stats Individual Show Info -> " + e.message);
        console.log("Show TVDB: " + tvdb);
        return false;
      }
    }

    return {"downloaded" : response.data.episodeFileCount, "total" : response.data.episodeCount};
  }
});
