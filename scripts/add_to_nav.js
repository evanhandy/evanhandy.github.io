function add_to_nav() {

    $.getJSON("/scripts/data.json", function (data) {
        //console.log(data);
        var nav_add = "";

        $.each(data, function (key, val) {
            nav_add += '<li>';
            nav_add += '<a href="/views/' + key + '.html">' + this.title + '</a>';
            nav_add += '</li>';
            //console.log(key);
            //console.log(val);
        });

        //console.log(nav_add);

        var nav = $("#nav");

        //console.log(nav);

        nav.append(nav_add);
    });
}
