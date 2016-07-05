
var http = require('http');
var url = require('url');
var serveStatic = require('serve-static');
var port = Number(process.env.PORT || 5000);
/* https://github.com/expressjs/serve-static#serve-files-with-vanilla-nodejs-http-server
 * Serve up public/ folder */
var servePublic = serveStatic('public', {'index': ['index.html', 'index.htm']});

http.createServer(function handler(req, res) {
	console.log(req.method, req.url, 'HTTP'+req.httpVersion, req.headers); // , req is too long

	//res.setHeader('Access-Control-Allow-Origin', '127.0.0.1');
    
    servePublic(req, res, function nextHandler(req, res){
    });

    if (req.method === 'GET' ) {

        var queryData = url.parse(req.url, true);

        //Get the text from the image
        if(queryData.pathname === '/gettext') {
            getTextFromImage(queryData.query['url'], res);

        }

        //Get the topic from the image
        if(queryData.pathname === '/getlabels') {
            getTopicFromImage(queryData.query['url'], res);

        }

        //Get the face from the image
        if(queryData.pathname === '/getface') {
            getFaceFromImage(queryData.query['url'], res);

        }

        //Get the logo from the image
        if(queryData.pathname === '/getlogo') {
            getLogoFromImage(queryData.query['url'], res);

        }

        //Get the landmark from the image
        if(queryData.pathname === '/getlandmark') {
            getLandmarkFromImage(queryData.query['url'], res);

        }
    }

}).listen(process.env.PORT || 5000);

console.log('Server running at http://127.0.0.1:'+port+'/');

/*
Get the text from the image
 */
function getTextFromImage(url, res){
    console.log(url);

    var gcloud = require('gcloud');
    var vision = gcloud.vision({
        projectId: 'visionapisfdc',
        keyFilename: 'keyfile.json'
    });

    // Read the text from an image.
    vision.detectText(url, function (err, text) {
        var json = JSON.stringify(text);
        console.log(json);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(json);
    });
}

/*
 Get the topics from the image
 */
function getTopicFromImage(url, res){
    console.log(url);

    var gcloud = require('gcloud');
    var vision = gcloud.vision({
        projectId: 'visionapisfdc',
        keyFilename: 'keyfile.json'
    });

    // Read the topics from an image.
    vision.detectLabels(url, function (err, text) {
        var json = JSON.stringify(text);
        console.log(json);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(json);
    });
}

/*
 Get the face from the image
 */
function getFaceFromImage(url, res){
    console.log(url);

    var gcloud = require('gcloud');
    var vision = gcloud.vision({
        projectId: 'visionapisfdc',
        keyFilename: 'keyfile.json'
    });

    // Read the topics from an image.
    vision.detectFaces(url, function (err, text) {
        var json = JSON.stringify(text);
        console.log(json);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(json);
    });
}

/*
 Get the face from the image
 */
function getLogoFromImage(url, res){
    console.log(url);

    var gcloud = require('gcloud');
    var vision = gcloud.vision({
        projectId: 'visionapisfdc',
        keyFilename: 'keyfile.json'
    });

    // Read the topics from an image.
    vision.detectLogos(url, function (err, text) {
        var json = JSON.stringify(text);
        console.log(json);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(json);
    });
}


/*
 Get the face from the image
 */
function getLandmarkFromImage(url, res){
    console.log(url);

    var gcloud = require('gcloud');
    var vision = gcloud.vision({
        projectId: 'visionapisfdc',
        keyFilename: 'keyfile.json'
    });

    // Read the topics from an image.
    vision.detectLandmarks(url, function (err, text) {
        var json = JSON.stringify(text);
        console.log(json);
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(json);
    });
}