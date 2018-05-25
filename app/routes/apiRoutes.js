// LOAD DATA
// We are linking our route to a "data" source.
// The data source holds arrays of information on friend-data

var friendsData = require("../data/friends");

// ROUTING

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data of friends)

  app.get("/api/friends", function(req, res) {
    res.json(tableData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out survey  questions... this data is then sent to the server...
  // Then the server saves the data to the FriendsaArray)

  app.post("/api/friends", function(req, res) {
   
    if (friendsData.length < 5) {
      friendsData.push(req.body);
      res.json(true);
    }
    // else {
    //   waitListData.push(req.body);
    //   res.json(false);
    // }
  });

  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function() {
  //   // Empty out the arrays of data
  //   tableData = [];
  //   waitListData = [];

  //   console.log(tableData);
  // });
};
