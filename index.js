var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});
/**
 * Created by Shivani on 3/7/2016.
 */
/**
 * Created by Shivani on 3/5/2016.
 */


app.get('/getUniversityList' , function(req, res){

  // fs.readFile(request.url.substring(1,request.url.length),function(error,contents) {
  //     console.log('ERROR? ' + error);
  //     if (contents != undefined)
  //         console.log('CONTENTS ' + contents.toString());


  var universitylist = [
          {
            "Name": "Columbia University",
            "City": "New York",
            "State":"NY",
            "lat": 40.8075395,
            "lng": -73.9647614
          },


          {
            "Name": "Stanford University",
            "City": "Stanford,",
            "State":"CA",
            "lat": 37.4274787,
            "lng": -122.1719077

          },

  	{
            "Name": "Duke University",
            "City": "Durham",
             "State":"NC",
           "lat": 36.0014301,
        "lng":-78.9404173

          },

  	{
        "Name": "University of Pennsylvania",
        "City": "Philadelphia",
        "State":"PA",
        "lat": 39.9522229,
        "lng": -75.1954024

          },

  	{
        "Name": "Binghamton University--SUNY",
        "City": "Binghamton,",
        "State":"NY",
        "lat": 42.0885434,
        "lng": -75.9730848

          },

          {
            "Name": "Johns Hopkins University",
            "City": "Baltimore",
            "State":"MD",
            "lat": 39.3299054,
            "lng":-76.6227064
          },
  	{
        "Name": "Yale University",
        "City": "New Haven",
        "State":"CT",
        "lat": 41.3163284,
        "lng":-72.9245318

          },

  	{
        "Name": "Rice University",
        "City": "Houston",
        "State":"TX",
        "lat":29.7173987,
        "lng": -95.4040199
          },

  	{
        "Name": "University of Southern California",
        "City": "Los Angeles",
        "State":"CA",
        "lat": 34.0223563,
        "lng":-118.2873057

          },

  	{
        "Name": "Georgia Institute of Technology",
        "City": "Atlanta",
        "State":"GA",
            "lat": 33.7756222,
            "lng": -84.3984737

          }
        ];




      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(universitylist);
  });


});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
