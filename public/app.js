const app = angular.module('feedMeClarity', ['ngRoute']);


app.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
}]);


app.value('postURL', 'http://localhost:3000/posts');


app.service('postService', ['$http', 'postURL', function ($http, postURL) {

  this.getPosts = () => {
    return $http({
      method: 'GET',
      url: postURL
    })
  }

  this.getMind = () => {
    return $http({
      method: 'GET',
      url: postURL + '/mind'
    })
  }

  this.getBody = () => {
    return $http({
      method: 'GET',
      url: postURL + '/body'
    })
  }

  this.getSoul = () => {
    return $http({
      method: 'GET',
      url: postURL + '/soul'
    })
  }
  
}]);


app.controller('MenuController', ['$http', function($http) {
  this.mobileMenu = false;
}]);


app.controller('HomeController', ['$http', 'postService', function($http, postService) {

  postService.getPosts().then(response => {
    this.posts = response.data;
    console.log(this.posts);
  }).catch(error => {
    console.log('error:', error);
  });

  postService.getMind().then(response => {
    this.mind = response.data;
    console.log(this.mind);
  }).catch(error => {
    console.log('error:', error);
  });

  postService.getBody().then(response => {
    this.body = response.data;
    console.log(this.body);
  }).catch(error => {
    console.log('error:', error);
  });

  postService.getSoul().then(response => {
    this.soul = response.data;
    console.log(this.soul);
  }).catch(error => {
    console.log('error:', error);
  });

}]);

app.controller('MindController', ['$http', function($http) {

  // this.getMindPosts = () => {
  //   $http({
  //     method: 'GET',
  //     url: this.url + '/mind'
  //   }).then(response => {
  //     this.mind = response.data;
  //     console.log(this.mind);
  //   }).catch(error => {
  //     console.log('error:', error);
  //   })
  // }
  //
  // this.getMindPosts();
  //
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
