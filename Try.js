var Nbrite = require('nbrite');
 
var token = 'TH7YBHKCSVXFCHI74NOV';
 
var Nbrite = require('nbrite');
var nbrite = new Nbrite(token);

nbrite.users('44499922255').info().then(function (data) {
  console.log(data);
}, function (err) {
  console.log(err);
});