let express = require('express');
const exphbs  = require('express-handlebars');
let app = express();


// app.get("/", function(req, res){
//   res.send("Bill Settings WebApp");
// });

app.get('/', function (req, res) {
res.render('home');
});

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

let PORT = process.env.PORT || 3007;

app.listen(PORT, function(){
  console.log('App starting on port', PORT);
});