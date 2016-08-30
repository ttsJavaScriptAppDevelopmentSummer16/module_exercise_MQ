var Moment = require("moment");

var timeStamp = {
  getTime: function(time) {
console.log(time, new Moment().format("h:mm:ss a"));
  }
}

module.exports = timeStamp;
