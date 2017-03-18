// Current Location Scripts
$(function () {

    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    })();

    // Get the data from the wunderground API
    function getData(lat, long){
        $.ajax({
            url : "//api.wunderground.com/api/a7f7b6e0920546a5/geolookup/conditions/q/" + lat + "," + long + ".json",
            dataType : "jsonp",
            success : function(data) {
                console.log(data);
                var city = data.location.city;
                var state = data.location.state;
                var location = city + ", " + state;
                console.log(location);
                var currentTemp = data.current_observation.temp_f;
                var summary = data.current_observation.weather;
                summary = toTitleCase(summary);
                var windS = data.current_observation.wind_mph;
                var windD = data.current_observation.wind_dir;
                var humidity = data.current_observation.relative_humidity;
                // var icon_url = data.current_observation.icon_url;
                // var icon_alt = data.current_observation.icon;

                var cityH = $("#location");
                var cur_temp = $("#current_temp");
                var title = $("title");
                var summaryH = $("#summary");
                var windH = $("#wind");
                var humidityH = $("#humidity");
                // var icon = $("#add3");


                cur_temp.text(currentTemp + "°");
                cityH.text(location);
                title.prepend(location);
                summaryH.text(summary);
                windH.text("Wind: " + windD + " " + windS + "mph");
                humidityH.text("Humidity: " + humidity);




                $("#cover").fadeOut(250);
            }
        });

    }

    // A function for changing a string to TitleCase
    function toTitleCase(str){
        return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }
});
