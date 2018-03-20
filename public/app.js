const app = angular.module('feedMeClarity', ['ngRoute']);


app.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
}])


app.controller('MenuController', ['$http', function($http) {
  this.mobileMenu = false;
}]);

app.controller('HomeController', ['$http', function($http) {
}]);

app.controller('MindController', ['$http', function($http) {
}]);

app.controller('BodyController', ['$http', function($http) {
}]);

app.controller('SoulController', ['$http', function($http) {
}]);

app.controller('BlogController', ['$http', function($http) {
}]);

app.controller('RecipeController', ['$http', function($http) {
}]);


app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({ enabled: true });

  $routeProvider.when('/mind', {
    templateUrl: 'mind.html',
    controller: 'MindController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/body', {
    templateUrl: 'body.html',
    controller: 'BodyController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/soul', {
    templateUrl: 'soul.html',
    controller: 'SoulController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/blog', {
    templateUrl: 'blog.html',
    controller: 'BlogController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/recipe', {
    templateUrl: 'recipe.html',
    controller: 'RecipeController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/', {
    templateUrl: 'home.html',
    controller: 'HomeController',
    controllerAs: 'ctrl'
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  })

}])
