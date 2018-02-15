//create request with its porperties
var request = new httpRequest ();
request.method = 'GET';
request.url = 'https://api.github.com/orgs/HackYourFuture/repos';

//create callback for success containing the response
request.success = function (response) {
  console.log (response);
};

//and a fail callback containing the error
request.fail = function (error) {
  console.log (error);
};

//and finally send it away
request.send ();
