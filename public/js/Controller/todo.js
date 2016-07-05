var runuApp = angular.module('website',['flow']);

    runuApp.config(['$routeProvider', function($routeProvider){
        $routeProvider.
            when('/styledetection', {templateUrl:'Partial/styledetection.html', controller: 'StyleDetectionController'}).
            when('/imagedetection', {templateUrl:'Partial/imagedetection.html', controller: 'ImageDetectionController'}).
            when('/facedetection', {templateUrl:'Partial/facedetection.html', controller: 'FaceDetectionController'}).
            when('/locationdetection', {templateUrl:'Partial/locationdetection.html', controller: 'LocationDetectionController'}).
            otherwise({redirectTo:'/imagedetection', template:'Partial/imagedetection.html'});
    }]);

    runuApp.config(['flowFactoryProvider', function (flowFactoryProvider) {
        flowFactoryProvider.defaults = {
            target: 'upload.php',
            permanentErrors: [404, 500, 501],
            maxChunkRetries: 1,
            chunkRetryInterval: 5000,
            simultaneousUploads: 1
        }
    }]);

runuApp.controller('StyleDetectionController', function($scope) {
    
    $scope.message = 'This is new Style';

});


runuApp.controller('ImageDetectionController', function($scope, $http){

    $scope.analyzePicture = function(){
        $http.get("/detecttext")
            .then(function(response) {
                $scope.textdetected = response.data;
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