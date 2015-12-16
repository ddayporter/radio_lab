"use strict";

(function() {
  angular
    .module("songs", [
      "ui-router"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

    function RouterFunction($stateProvider){
      $stateProvider
      .state("songsHome", {
        url: "/welcome",
        templateUrl: "js/songs/home.html",
        controller: "SongsHomeController",
        controllerAs: "SongsHomeViewModel"
      })
      .state("songsIndex", {
        url: "/songs",
        templateUrl: "js/songs/index.html",
        controller: "SongsIndexController",
        controllerAs: "SongsIndexViewModel"
      })
    }

})();
