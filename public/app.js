const app = angular.module('feedMeClarity', ['ngRoute', 'angularTrix']);


app.run(['$rootScope', function($rootScope) {
  $rootScope.$on('$routeChangeSuccess', function () {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  })
}]);


app.value('postURL', 'http://localhost:3000/posts/');


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
      url: postURL + 'mind'
    })
  }

  this.getBody = () => {
    return $http({
      method: 'GET',
      url: postURL + 'body'
    })
  }

  this.getSoul = () => {
    return $http({
      method: 'GET',
      url: postURL + 'soul'
    })
  }

  this.getBlog = (postId) => {
    return $http({
      method: 'GET',
      url: postURL + postId
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


app.controller('MindController', ['$http', 'postService', function($http, postService) {

  postService.getMind().then(response => {
    this.mind = response.data;
    console.log(this.mind);
  }).catch(error => {
    console.log('error:', error);
  });

}]);


app.controller('BodyController', ['$http', 'postService', function($http, postService) {

  postService.getBody().then(response => {
    this.body = response.data;
    console.log(this.body);
  }).catch(error => {
    console.log('error:', error);
  });

}]);


app.controller('SoulController', ['$http', 'postService', function($http, postService) {

  postService.getSoul().then(response => {
    this.soul = response.data;
    console.log(this.soul);
  }).catch(error => {
    console.log('error:', error);
  });

}]);


app.controller('BlogController', ['$http', '$routeParams', 'postService', function($http, $routeParams, postService) {

  this.id = $routeParams.id;
  this.imageRepeatsArray = [];
  this.sectionRepeatsArray = [];
  this.blog = {};

  postService.getBlog(this.id).then(response => {
      this.blog = response.data;
      console.log(this.blog);
      this.setRepeats();
    }).catch(error => {
      console.log('error:', error);
    });

  this.setRepeats = () => {

    this.paragraphRepeats = this.blog.paragraphs.length - 1;
    console.log('paragraphRepeats:', this.paragraphRepeats);

    if ((this.blog.images.length - 1) % 2 === 0) {
      this.imageRepeats = (this.blog.images.length - 1) / 2
    }
    else {
      this.imageRepeats = this.blog.images.length / 2
    }
    console.log('imageRepeats:', this.imageRepeats);

    if (this.imageRepeats > this.paragraphRepeats) {
      this.sectionRepeats = this.paragraphRepeats + (this.imageRepeats - this.paragraphRepeats)
    }
    else {
      this.sectionRepeats = this.imageRepeats + (this.paragraphRepeats - this.imageRepeats)
    }

    console.log('sectionRepeats:', this.sectionRepeats);
    for (let i = 0; i < this.sectionRepeats; i++) {
      this.sectionRepeatsArray.push(i);
    }
    console.log(this.sectionRepeatsArray);

  }

}]);


app.controller('BlogFormController', ['$http', function($http) {

  this.blogData = {};

  this.processBlogForm = () => {

  }

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

  $routeProvider.when('/blog/:id', {
    templateUrl: 'blog.html',
    controller: 'BlogController',
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
