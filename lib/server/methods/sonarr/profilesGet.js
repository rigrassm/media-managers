Meteor.methods({
  profilesGet: function(){
    try {
      check(Sonarr.url, String);
      check(Sonarr.port, Number);
      check(Sonarr.api, String);
    } catch (e) {
      console.log("Sonarr Profiles Get -> " + e.message);
      return [];
    }

    //Workaround to allow self-signed SSL certs, however can be dangerous and should not be used in production, looking into better way
    //But it's possible there's nothing much I can do
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    var allProfiles;
    try {
      allProfiles = HTTP.call("GET", Sonarr.url + ":" + Sonarr.port + Sonarr.directory + "/api/profile", {headers: {"X-Api-Key":Sonarr.api}, timeout: 15000} );
    } catch (e) {
      console.log("Sonarr Profiles Get -> " + e.message);
      return [];
    }

    return _.map(allProfiles.data, function (profile) {
      return {
        id: profile.id,
        name: profile.name,
      };
    });
  }
});
