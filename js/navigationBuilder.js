$(function () {
    $("#layoutSidenav_nav").load("navigation.html");

    $.getJSON("data.json", function (json) {
        // Set new default font family and font color to mimic Bootstrap's default styling
        Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
        Chart.defaults.global.defaultFontColor = '#292b2c';

        BindSiteData(json);

        json.Players.sort(compareByName);
        json.Players.forEach(function (player) {
            $('#PlayersNavigation').append('<a class="nav-link" href="players.html?playerId=' + player.Id + '">' + player.Name + '</a>')
        });
    });
});

function compareByName(a, b) {
    if (a.Name < b.Name)
        return -1;
    if (a.Name > b.Name)
        return 1;
    return 0;
}
