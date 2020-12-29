var app = angular.module('learndigest', []);
app.controller('playground', function($scope){
    $scope.force = 30;
    $scope.resetForce = function(){
        $scope.force= 0;
    }//resetForce
});//playground
app.controller('internal', function($scope){
    $scope.secret = "shhhhh";
});//internal