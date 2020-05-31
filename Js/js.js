const table = document.getElementById("table")
$.getJSON("https://api.covid19api.com/summary", function (data) {
    var all = 186
    console.log(data)
    for (var i = 0; i < all; i++) {
        var name = data.Countries[i].Country
        var cases = data.Countries[i].TotalConfirmed
        var deaths = data.Countries[i].TotalDeaths
        var cured = data.Countries[i].TotalRecovered
        var row = document.createElement("tr")
        table.appendChild(row)
        var number = document.createElement("td")
        number.innerHTML = i+1
        row.appendChild(number)
        var nameTable = document.createElement("td")
        nameTable.innerHTML = name
        row.appendChild(nameTable)
        var casessTable = document.createElement("td")
        casessTable.innerHTML = cases
        casessTable.setAttribute("class","blueCasesTable")
        row.appendChild(casessTable)

        var deathsTable = document.createElement("td")
        deathsTable.innerHTML = deaths
        row.appendChild(deathsTable)

        var curedTable = document.createElement("td")
        curedTable.innerHTML = cured
        curedTable.setAttribute("class","greenCasesTable")
        row.appendChild(curedTable)
    }
})













