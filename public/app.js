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

  this.url = 'http://localhost:3000/posts';

  this.getPosts = () => {
    $http({
      method: 'GET',
      url: this.url
    }).then(response => {
      this.posts = response.data;
    }).catch(error => {
      console.log('error:', error);
    })
  }

  this.getPosts();


  this.getMindPosts = () => {
    $http({
      method: 'GET',
      url: this.url + '/mind'
    }).then(response => {
      this.mind = response.data;
      console.log(this.mind);
    }).catch(error => {
      console.log('error:', error);
    })
  }

  this.getMindPosts();


  this.getBodyPosts = () => {
    $http({
      method: 'GET',
      url: this.url + '/body'
    }).then(response => {
      this.body = response.data;
    }).catch(error => {
      console.log('error:', error);
    })
  }

  this.getBodyPosts();


  this.getSoulPosts = () => {
    $http({
      method: 'GET',
      url: this.url + '/soul'
    }).then(response => {
      this.soul = response.data;
    }).catch(error => {
      console.log('error:', error);
    })
  }

  this.getSoulPosts();


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

app.controller('BlogFormController', ['$http', function($http) {
}]);

app.controller('RecipeFormController', ['$http', function($http) {
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

  $routeProvider.when('/create', {
    templateUrl: 'create.html',
  });

  $routeProvider.when('/blogForm', {
    templateUrl: 'blogForm.html',
    controller: 'BlogFormController',
    controllerAs: 'ctrl'
  });

  $routeProvider.when('/recipeForm', {
    templateUrl: 'recipeForm.html',
    controller: 'RecipeFormController',
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
