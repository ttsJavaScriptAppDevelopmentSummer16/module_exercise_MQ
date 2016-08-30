var Request = require("request-promise");

var dataAccess = {

  getPost: function(postId){
    Request(postId).then(function(resp){
      console.log(resp);
    });
  }
}

module.exports = dataAccess;
