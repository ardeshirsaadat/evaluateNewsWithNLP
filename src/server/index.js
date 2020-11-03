const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()
// require fetch module to send request directly in node
const fetch = require('node-fetch');
// set base url
const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key="
const bodyParser = require("body-parser");
app.use(bodyParser.text());

const cors = require("cors");
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)
// console.log(`Your API key is ${process.env.API_KEY}`);
const textApi = {application_key:process.env.API_KEY};
// api end point data
let api_end_data = {};
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})
// add post request to recieve url and fetch data from third party api
app.post('/post',async function (req,res){
    let response = fetch(`${baseUrl}${textApi.application_key}&lang=eng&url=${req.body}`);
    try{
        let apiData = response.json();
        res.send(apiData);
    }
    catch(err){
        console.log("error",err);
    }

})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
// test fetch
