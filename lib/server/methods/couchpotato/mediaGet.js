Meteor.methods({
  mediaGet: function(media){
    try {
      check(CouchPotato.url, String);
      check(CouchPotato.port, Number);
      check(CouchPotato.api, String);
      check(media, String);
    } catch (e) {
      console.log(e.message);
      return false;
    }

    var result = {};

    //Workaround to allow self-signed SSL certs, however can be dangerous and should not be used in production, looking into better way
    //But it's possible there's nothing much I can do
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
    
    try {
      var response = HTTP.call("GET", CouchPotato.url + ":" + CouchPotato.port + CouchPotato.directory + "/api/" + CouchPotato.api + "/media.get?id=" + media, {timeout: 2000} );
    } catch (e) {
      console.log(e);
      return false;
    }
    // console.log(response.data.media.info);

    if (response.data.success) {
      result.status = response.data.media.status;
      result.title = response.data.media.info.original_title;
      result.year = response.data.media.info.year || "";
      result.id = response.data.media._id;
      result.imdb = response.data.media.info.imdb || "";
      result.tmdb_id = response.data.media.info.tmdb_id || "";
    } else {
      result.status = "false";
    }

    return result;
  }
});
