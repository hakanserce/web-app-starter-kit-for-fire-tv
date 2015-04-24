(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        user: "Bkmmutfaktv",
        devKey: "AIzaSyBhMVWEovM1M94u00PihbNPFBHyzYnF8M0",
        createCategoriesFromSections: false
    };

    exports.app = new App(settings);
}(window));
