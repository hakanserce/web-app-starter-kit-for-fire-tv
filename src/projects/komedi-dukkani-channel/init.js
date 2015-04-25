(function(exports) {
    'use strict';

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: true,
        user: "gforce8081",
        devKey: "AIzaSyBhMVWEovM1M94u00PihbNPFBHyzYnF8M0",
        createCategoriesFromSections: false
    };

    exports.app = new App(settings);
}(window));
