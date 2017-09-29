// core node package for reading and writng files
var twitterKeys = require("twitterKeys"); 
var spotifyKeys = require("spotifyKeys");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

// command to take arguements
var argOne = process.argv[2];
// command line calls
var t = my-tweets;
var s = spotify-this-song;
var m = movie-this;
var d = do-what-it-says;

// make node responsive
if (argOne === t) {
	twi();
} else if(argOne === s) {
	spo();
} else if(argOne === m) {
	mov();
} else {
	doWhat();
};

console.log(typeof(argOne));

function twi() {
	var params = {screen_name: 'https://twitter.com/RussellB81'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	    console.log(tweets);
	  }
	});

	var content;
	fs.readFile('./keys.js', function read(err, tweets, response) {
	    if (err) {
	        throw err;
	    }
	    content = response;
	// calling a function to print this
	    processFile();          
	});

	function processFile() {
	    console.log(content);
	}
}
 
function spo() {
	spotify.search({ type: 'track', query: 'I Want it That Way' }, function(err, data) {
	  	if (err) {
	    	return console.log('Error occurred: ' + err);
		}
	 
		console.log(data); 
	});
};

