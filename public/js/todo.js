var runuApp = angular.module('website',['ngSanitize']);

    runuApp.config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/styledetection', {templateUrl:'Partial/styledetection.html', controller: 'StyleDetectionController'}).
            when('/imagedetection', {templateUrl:'Partial/imagedetection.html', controller: 'ImageDetectionController'}).
            when('/facedetection', {templateUrl:'Partial/facedetection.html', controller: 'FaceDetectionController'}).
            when('/locationdetection', {templateUrl:'Partial/locationdetection.html', controller: 'LocationDetectionController'}).
            otherwise({redirectTo:'/imagedetection', template:'Partial/imagedetection.html'});
    }]);


runuApp.controller('StyleDetectionController', function($scope) {
    
    $scope.message = 'This is new Style';

});


runuApp.controller('ImageDetectionController', function($scope, $http){
    $scope.analyzeResponse = "Hi";
    $scope.analyzePicture = function(url){
        $http.get('/getlabels?url=' + url)
            .then(function successCallback(response) {
                console.log("Response my:"+ response);
                $scope.analyzeResponse  = response;
            }, function errorCallback(response) {
                console.log("Exception Observed:"+ response);
            });
    }

});

runuApp.controller('FaceDetectionController', function($scope) {

    $scope.message = 'This is face detection';
});

runuApp.controller('LocationDetectionController', function($scope) {
    $scope.message = 'This is new Location';

});

function MainCtrl($scope, $location){
    $scope.setRoute = function(route){
        $location.path(route);
    }
}