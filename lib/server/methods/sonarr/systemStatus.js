Meteor.methods({
  systemStatus: function(){
    try {
      check(Sonarr.url, String);
      check(Sonarr.port, Number);
      check(Sonarr.api, String);
    } catch (e) {
      console.log("Sonarr Status -> " + e.message);
      return false;
    }

    //Workaround to allow self-signed SSL certs, however can be dangerous and should not be used in production, looking into better way
    //But it's possible there's nothing much I can do
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    try {
      var response = HTTP.call("GET", Sonarr.url + ":" + Sonarr.port + Sonarr.directory + "/api/system/status", {headers: {"X-Api-Key":Sonarr.api}, timeout: 15000} );
    } catch (e) {
      console.log("Sonarr Status -> " + e.message);
      return false;
    }

    var status = (response.data) ? true : false;
    return status;
  }
});
