(function () {
  "use strict";
  angular
    .module('basicApp', [
      'ngAnimate',
      'ngRoute'
    ])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'scripts/home/home.template.html',
            controller: 'HomeCtrl',
            controllerAs: 'vm'
          })
          .otherwise({
            redirectTo: '/'
          });
      }]);
})();