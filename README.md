# Couch Potato API Wrapper

A package that allows you to interface with [CouchPotato](https://couchpota.to/), specifically built for [Plex Requests](https://github.com/lokenx/plexrequests-meteor/). Not all API calls are available, and those available aren't complete.

## Features
- Check availability of server
- Retrieve movie status information
- Add movies
- Remove movies

## Installation

`meteor add lokenx:couchpotatowrapper`

## Usage

Define your CouchPotato server details somewhere in your server-side code.

    if (Meteor.isServer) {
      CouchPotato.url = "http://192.168.0.1";
      CouchPotato.port = 5050;
      CouchPotato.api = "abcdef012345";
      CouchPotato.directory = ""
    }

## Functions

**appAvailable:** "Check if app available"

    CouchPotato.appAvailable();

**mediaGet:** "Get media by id"

    CouchPotato.mediaGet(imdb_id);
    imdb_id should be a IMDB ID or a Couch Potato ID

**movieAdd:** "Add new movie to the wanted list"

    CouchPotato.movieAdd(imdb_id);
    imdb_id should be a IMDB ID

**movieDelete:** "Delete a media from the wanted list"

    CouchPotato.movieDelete(cp_id);
    cp_id should be a Couch Potato ID, can be retrieved using appAvailable


## License

This application is licensed under The MIT License. The Movie Database name and related details are copyright of Fanhattan Inc.
