$(function () {
    $("#page-header").load("/modules/header.html", function() {
        add_to_nav();
    });
    $("#footer-content").load("/modules/footer.html");
});
