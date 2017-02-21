var express = require('express');
 
var app = express();
 
app.set('views', './views');
app.set('view engine', 'pug');
 
// app.use(stormpath.init(app, {
//   expand: {
//     customData: true
//   }
// }));
 
app.get('/', function(req, res) {
  res.render('home', {
    title: 'Welcome'
  });
});
 

app.listen(3000);