Meteor.methods({
  movieDelete: function(media){
    try {
      check(CouchPotato.url, String);
      check(CouchPotato.port, Number);
      check(CouchPotato.api, String);
      check(media, String);
    } catch (e) {
      console.log(e.message);
      return false;
    }

    //Workaround to allow self-signed SSL certs, however can be dangerous and should not be used in production, looking into better way
    //But it's possible there's nothing much I can do
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    
    try {
      var response = HTTP.call("GET", CouchPotato.url + ":" + CouchPotato.port + CouchPotato.directory + "/api/" + CouchPotato.api + "/movie.delete?id=" + media + "&delete_from=wanted", {timeout: 2000} );
    } catch (e) {
      console.log(e);
      return false;
    }
    console.log(response);
    return response.data.success;
  }
});
