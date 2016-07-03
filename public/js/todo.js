var runuApp = angular.module('website',[]);

runuApp.config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/styledetection', {templateUrl:'Partial/styledetection.html', controller: 'StyleDetectionController'}).
            when('/imagedetection', {templateUrl:'Partial/imagedetection.html', controller: 'ImageDetectionController'}).
            when('/home', {templateUrl:'Partial/home.html', controller: 'HomeController'}).
            otherwise({redirectTo:'/home', template:'Partial/home.html'});
    }]);

runuApp.controller('StyleDetectionController', function($scope) {

    $scope.message = 'This is new Style';

});


runuApp.controller('ImageDetectionController', function($scope) {

    $scope.message = 'This is new Image';

});

runuApp.controller('HomeController', function($scope) {

    $scope.message = 'This is Home';

});

function MainCtrl($scope, $location){
    $scope.setRoute = function(route){
        $location.path(route);
    }
}