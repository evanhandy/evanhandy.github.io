$('#query').keyup(function () {
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    $.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
        console.log(data);
        var output = "<ul>";
        $.each(data.RESULTS, function (key, val) {
            if (val.name.search(rExp) != -1) {
                output += '<li>';
                output += '<a href="https://api.wunderground.com/api/a7f7b6e0920546a5/geolookup/forecast/conditions/q/' + val.lat + ',' + val.lon + '.json" title="See results for ' + val.name + '">' + val.name + '</a>';
                output += '</li>';
            }
        });
        output += '</ul>';
        $("#search_results").fadeIn();
        $("#search_results").html(output);
    });
});


$(function () {
    $("#search_results").on("click", "a", function (evt) {
        evt.preventDefault();
        var jsonCity = $(this).text();
        console.log(jsonCity);
        var my_url = $(this).attr("href");
        console.log(my_url);
        $.ajax({
            url: my_url,
            dataType: "jsonp",
            success: function (data) {
                console.log(data);
                var city = data.location.city;
                var state = data.location.state;
                var location = city + ", " + state;
                console.log(location);
                var currentTemp = data.current_observation.temp_f;
                var summary = data.current_observation.weather;
                //summary = toTitleCase(summary);
                var high = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
                var low = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
                // var icon_url = data.current_observation.icon_url;
                // var icon_alt = data.current_observation.icon;

                var cityH = $("#location");
                var cur_temp = $("#current_temp");
                var title = $("title");
                var summaryH = $("#summary");
                var highH = $("#wind");
                var lowH = $("#humidity");
                // var icon = $("#add3");


                cur_temp.html(currentTemp + "&deg;");
                cityH.text(location);
                title.html(location + " | Instant Weather");
                summaryH.text(summary);
                highH.html("High: " + high + "&deg;");
                lowH.html("Low: " + low + "&deg;");

                $("#search_results").fadeOut();
            }
        });
    });
});
