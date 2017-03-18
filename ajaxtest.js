$(document).ready(function ($) {

    function ajaxFromLocalJson(locationToGrab){
        $.ajax({
            url: "homework/weather.json",
            dataType: "json",
            success: function (data) {
                console.log(data);
                var location = data[locationToGrab]['City'];
                var state = data[locationToGrab]['State'];
                var temp_f = data[locationToGrab]['High'];

                console.log("Current temperature in " + location + " is: " + temp_f);

                var cur_location = $('#location');
                var state = data[locationToGrab]['State'];
                var temp = $('#temp');
                var message = $('#message');

                cur_location.text(location + ', ' + state);
                temp.text(temp_f);
                message.text("Current temperature in " + location + " is: " + temp_f);

            }
        })
    }

    function ajaxFromApi() {
        $.ajax({
            url : "http://api.wunderground.com/api/a7f7b6e0920546a5/geolookup/conditions/q/ID/Rexburg.json",
            dataType : "jsonp",
            success : function(parsed_json) {
                console.log(parsed_json);
                var location = parsed_json.location.city;
                var state = parsed_json.location.state;
                var temp_f = parsed_json.current_observation.temp_f;

                console.log("Current temperature in " + location + " is: " + temp_f);

                var cur_location = $('#location');
                var state = parsed_json.location.state;
                var temp = $('#temp');
                var message = $('#message');

                cur_location.text(location + ', ' + state);
                temp.text(temp_f);
                message.text("Current temperature in " + location + " is: " + temp_f);
            }
        });
    }

    ajaxFromLocalJson("Franklin");
    ajaxFromApi();
})
// Underground Weather key: a7f7b6e0920546a5
