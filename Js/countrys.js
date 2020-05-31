var settings = {
	"async": true,
	"crossDomain": true,
	"url": "'https://api.covid19api.com/summary",
	"method": "GET",
	
}

$.ajax(settings).done(function (response) {
	console.log(response);
});