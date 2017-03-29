$.getJSON("/scripts/data.json", function(data) {
    console.log(data);
    var page = $("body").attr("id");
    console.log(page);
    var title = data[page].title;
    var site_url = data[page].site_url;
    var summary = data[page].summary;
    var comments = data[page].comments;
    var screenshot_url_sml = "/images/" + data[page].screenshot_url[0];
    var screenshot_url_med = "/images/" + data[page].screenshot_url[1];
    var screenshot_url_big = "/images/" + data[page].screenshot_url[2];
    var screenshot_alt = data[page].screenshot_alt;
    var screenshot_title = data[page].screenshot_title;

    console.log(title);

    var titleH = $("title");
    var headingH = $("#page_heading");
    var summaryH = $("#summary");
    var commentsH = $("#comments");
    var screenshotH = $("#screenshot");

    titleH.prepend(title);
    headingH.html('<a href="' + site_url + '" title="Visit ' + title + '">' + title + '</a>');
    summaryH.text(summary);
    commentsH.text(comments);
    screenshotH.html("<img src='" + screenshot_url_sml + "' srcset='" + screenshot_url_sml + " 500w, " + screenshot_url_med + " 750w, " + screenshot_url_big + " 1200w' alt='" + screenshot_alt + "' title='" + screenshot_title + "'>");
});
