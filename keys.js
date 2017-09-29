console.log('this is loaded');

var twitterKeys = new Twitter({
  consumer_key: '<P0RFcmvREqs4nItBHW3SEMLiB>',
  consumer_secret: '<RdUPCOpZ8GuGJLNiOH67Vu55qtXOXFaEP7Ky6c2sTl6v6Dpp6e>',
  access_token_key: '<913555796562079744-rlKZLvudgYLErrTKUlTLgMeViMMbb8s>',
  access_token_secret: '<dp8gGzu4nUo0FfjJBz9DXVNRbG002Ngu6HpJUPSrDDn3A>',
});

var spotifyKeys = new Spotify({
  id: '<enter key>',
  secret: '<enter secret>'
});

module.exports = twitterKeys;
module.exports = spotifyKeys;
