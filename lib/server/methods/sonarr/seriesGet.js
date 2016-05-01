Meteor.methods({
  seriesGet: function(tvdb){
    try {
      check(Sonarr.url, String);
      check(Sonarr.port, Number);
      check(Sonarr.api, String);
      check(tvdb, Number);
    } catch (e) {
      console.log("Sonarr Series Get -> " + e.message);
      return false;
    }

    //Workaround to allow self-signed SSL certs, however can be dangerous and should not be used in production, looking into better way
    //But it's possible there's nothing much I can do
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    try {
      var allShows = HTTP.call("GET", Sonarr.url + ":" + Sonarr.port + Sonarr.directory + "/api/series/", {headers: {"X-Api-Key":Sonarr.api}, timeout: 15000} );
    } catch (e) {
      console.log("Sonarr Series Get -> " + e.message);
      return false;
    }

    var status = false;

    _.each(allShows.data, function (show) {
      if (show.tvdbId === tvdb) {
        status = true;
      }
    });

    return status
  }
});
