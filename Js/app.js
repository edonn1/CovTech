var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-data.p.rapidapi.com/totals?format=json",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "150ed57e18msh125d333751fee33p1daa27jsnf578cfc47211"
	}
}

$.ajax(settings).done(function (response) {
    const confirmed = response[0].confirmed
    const deaths = response[0].deaths
    const cured = response[0].recovered

    console.log("confirmed: "+confirmed)
    console.log("deaths: "+deaths)
	console.log("cured: "+cured)
	
	let recovered = document.getElementById("recovered")
	recovered.innerHTML = cured
	let deathsCases = document.getElementById("deaths")
	deathsCases.innerHTML = deaths
	let cases = document.getElementById("cases")
	cases.innerHTML = confirmed
	console.log(response)
  
});

