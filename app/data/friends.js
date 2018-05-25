// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray= [
    {
      friendName: "Rosa Meleño",
      friendPic:"https://pbs.twimg.com/profile_images/1421642581/image_400x400.jpg",
      question1: 5,
      question2: 3,
      question3: 4,
      question4: 2,
      question5: 5,
      question6: 1,
      question7: 5,
      question8: 4,
      question9: 3,
      question10: 1,
    },
    {
      friendName: "Micho Lizo",
      friendPic:"https://avatars2.githubusercontent.com/u/264832?s=400&v=4",
      question1: 5,
      question2: 3,
      question3: 5,
      question4: 4,
      question5: 4,
      question6: 3,
      question7: 5,
      question8: 5,
      question9: 3,
      question10: 4,
    }
  ];

  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  