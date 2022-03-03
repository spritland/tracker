$.getJSON("https://spritland.github.io/tracker/data.json", function (json) {
    json.Players.sort(compareByName);
    json.Players.forEach(function (player) {
        $('#PlayersNavigation').append('<a class="nav-link" href="players.html?playerId=' + player.Id + '">' + player.Name + '</a>')
    });
});

function compareByName(a, b) {
    if (a.Name < b.Name)
        return -1;
    if (a.Name > b.Name)
        return 1;
    return 0;
}
