# LIRINodeApp (remember to hide my api-keys)

This software uses the command line but can be easily inserted into almost any website. Using Application Program Interface (API) allows for your website to use the utilities gathered from other websites. This simple program uses multiple API keys and gathers information from 3 different sources to make it simple for the user to compile infomation at one location. I used Twiter, Spotify, and IMDB as examples, but your site can be gathering, and listing information or returning your users requested information in any format you want.


# Prerequisites

* node
* npm


# Dependencies

* ajax-request
* fs
* colors
* twitter
* twit
* node-spotify-api
* request


# Languages Used

1. javascript

2. node.js

3. API syntax


# Command line Directions

1. npm install

2. node "liri.js" help (important step)
  	on some OS's : node liri.js --help

3. node "liri.js" [type one of the choices found in help]
	3.a) myTweets (my most recent tweets)
	3.b) theirTweets (other people or businesses, most recent tweets)[list a name here, without spaces. OPTION: list a number to limit on the results returned. (example: node "liri.js" firstNameLastName 5) or (example: node "liri.js" businessname)]
	3.c) spotifySong (name a song, information returned from Spotify) [list a song title here, in [brackets], with dashes between the words. OPTION: list a number to limit on the results returned. (example: node "liri.js" [song-name] 2)]
	3.d) movie (name a movie, information returned from IMDB) [list a movie title here, in [brackets], with a dashes between the words. (example: node "liri.js" [movie-name])]
