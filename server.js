var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleone={
    
     title:'Article one|Aakriti',
     heading:'Article one',
     date:'sep 5 2016',
     content:`
          <p> 
            this is article one 
            </p>`
    };
var articletwo={
         title:'Article two|Aakriti',
     heading:'Article two',
     date:'sep 5 2016',
     content:`
          <p> 
            this is article two 
            </p>`
    };
var articlethree={
         title:'Article three|Aakriti',
     heading:'Article three',
     date:'sep 5 2016',
     content:`
          <p> 
            this is article three
            </p>`
    };


function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    var htmlTemplate=`
    
    <html>
    <head>
        <title>
         ${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
             ${date}
        </div>
        <div>
            <p>
                ${content}
            </p>
           
        </div>
        </div>
        
    </body>
    
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});

app.get('/article-one',function (req,res) {
  res.send(createTemplate(articleone));
});

app.get('/article-two',function (req,res) {
  res.send(createTemplate(articletwo));
});

app.get('/article-three',function (req,res) {
  res.send(createTemplate(articlethree));
});

app.get('/ui/main.js',function (req,res) {
   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var names=[];
app.get('/submit-name',function(req,res){ //url:/submit-name?name=xxxx
    //get the name from request object
    var name=req.query.name;
    names.push(name);
    //JSON javascript object notation 
    res.send(JSON.stringify(names));
    
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
