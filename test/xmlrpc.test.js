/**
 * Module dependencies.
 */

var Client = require('../lib/xmlrpc').Client;

var client = new Client('http://www.cnblogs.com/fengmk2/services/metaweblog.aspx');

var username = 'fengmk2', password = 'xxx';
client.request('blogger.getUsersBlogs', 'fawave', username, password, function(err, data) {
	console.log(data);
});