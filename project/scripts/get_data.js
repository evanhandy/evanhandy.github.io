$.getJSON("/project/scripts/data.json", function(data) {
    console.log(data);
    var page = $("body").attr("id");
    console.log(page);
    var title = data[page].title;
    var summary = data[page].summary;
    var comments = data[page].comments;
    var screenshot_url_sml = "/project/images/" + data[page].screenshot_url[0];
    var screenshot_url_med = "/project/images/" + data[page].screenshot_url[1];
    var screenshot_url_big = "/project/images/" + data[page].screenshot_url[2];
    var screenshot_alt = data[page].screenshot_alt;

    console.log(title);

    var titleH = $("title");
    var header = $("#page_header");
    var summaryH = $("#summary");
    var commentsH = $("#comments");
    var screenshotH = $("#screenshot");

    titleH.prepend(title);
    header.text(title);
    summaryH.html(summary);
    commentsH.html(comments);
    screenshotH.html("<img src='" + screenshot_url_sml + "' srcset='" + screenshot_url_sml + " 500w, " + screenshot_url_med + " 750w, " + screenshot_url_big + " 1200w' alt='" + screenshot_alt + "'>");
});
