var Request = require("request-promise");
var Moment = require("moment");
var time = require('./timeStamp');
var data = require('dataAccess');

function logResponse(resp){
  console.log(resp, new Moment().format("h:mm:ss a"));
}

setInterval(function(){
  Request('http://jsonplaceholder.typicode.com/posts/1')
    .then(logResponse)
},3000)
