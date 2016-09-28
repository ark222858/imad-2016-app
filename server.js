var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
     title:'Article one|Aakriti',
     heading:'Article one',
     date:'sep 5 2016',
     content:'<p> this is article one </p>'
    },
    'article-two':{
     title:'Article two|Aakriti',
     heading:'Article two',
     date:'sep 5 2016',
     content:'<p> this is article two</p>'
    },
    
    'article-three':{
     title:'Article three|Aakriti',
     heading:'Article three',
     date:'sep 5 2016',
     content:'<p> this is article three </p>'
    },
    
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=reg.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
