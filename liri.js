let api_handler = require("./api-handler.js");
let fs = require("fs");
let colors = require("colors");
const commandFile = "./random.txt";
let args = process.argv.slice(2);

if (args[0] == 'default') {
  let commands = fs.readFileSync(commandFile, 'utf8');
  commands = commands.split(',');
  args = commands;
}

switch (args[0]) {
  case 'myTweets':
    if (args[1])
      api_handler.getTweets(undefined, args[1], args[2]);
    else
      api_handler.getTweets();
    break;
  case 'theirTweets':
    if (args[1])
      api_handler.getTweets(args[1], args[2]);
    else
      console.log("Get help: node liri.js help");
    break;
  case 'spotifySong':
    if (args[1])
      api_handler.lookupSong(args[1], args[2]);
    else
      api_handler.lookupSong(undefined, 1);
    break;
  case 'movie':
    if (args[1])
      api_handler.lookupMovie(args[1]);
    else
      api_handler.lookupMovie();
    break;
  case 'help':
    printLiriOptions();
    break;
  default:
    console.log("Need help.. node liri.js help");
    break;
}

function printLiriOptions() {
  console.log('\n');
  console.log(colors.rainbow("~ LiriBot ~"));
  console.log(colors.rainbow("-----------------------"));
  console.log(colors.yellow.bold("type: node liri.js") + " and then one of the following commands, follow format including spaces and [brackets]");
  console.log(colors.rainbow("-----------------------"));
  console.log(colors.blue.bold("myTweets") + " most recent tweets");
  console.log(colors.green.bold("theirTweets FirstNameLastName 5") + " recent tweets from the specified username or business, optional limit on number of results");
  console.log(colors.yellow.bold("spotifySong [name-of-song] 3") + " searches spotify by song name, optional limit on number of results");
  console.log(colors.red.bold("movie [name-of-movie]") + " searches IMDB by movie name");  
  console.log(colors.blue.bold("default") + "runs a random command from random.txt");
  console.log('\n');
}
