var profiles = [
  {
    name: 'Preston McNeil',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/ashleyford/128.jpg',
    status: 'Everything is bigger in Texas'
  },
  {
    name: 'Ryan Rasmussen',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/jadlimcaco/128.jpg',
    status: 'RR Rules'
  },
  {
    name: 'Terri Ruff',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
    status: 'Wow, I typed out hunter2 and all you saw was ******?!?!??'
  },
  {
    name: 'Lindsey Mayer',
    pic: 'https://s3.amazonaws.com/uifaces/faces/twitter/nzcode/128.jpg',
    status: 'OMG MITTENS DID THE CUTEST THING TODAY'
  }
];
module.exports = {
  getFriendsProfiles: function (req, res, next){
    var friends = req.session.currentUser.friends;
    var friendsArr = [];
    for (var i = 0; i < friends.length; i++){
      for (var j = 0; j < profiles.length; j++){
        if (profiles[j].name === friends[i]){
          friendsArr.push(profiles[j]);
        }
      }
    }
    res.send({
      currentUser: req.session.currentUser,
      friends: friendsArr
    });
  }

};
