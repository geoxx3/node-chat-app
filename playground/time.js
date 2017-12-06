var moment = require('moment');


// Jan 1st 1970 00:00:10 am



var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));
