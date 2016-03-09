var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

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

  fs.readFile(request.url.substring(1,request.url.length),function(error,contents) {
      console.log('ERROR? ' + error);
      if (contents != undefined)
          console.log('CONTENTS ' + contents.toString());
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.end(contents);
  });


}

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
