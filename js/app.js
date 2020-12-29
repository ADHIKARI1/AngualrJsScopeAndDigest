var app = angular.module('learndigest', []);
app.controller('playgroundCtrl', function($scope){
    var vm =  this;

    vm.userProperties = {
        favoriteColor : 'white',
        nickName : 'mick',
        force: 30
    };


    //$scope.playground = vm;
    vm.enableForceEdit = true;
    vm.userProperties.force = 30;
    vm.resetForce = function(){
        vm.userProperties.force = 0;
    }//resetForce
    $scope.$watch('vm.userProperties', function(){
        console.log('changed ', vm.userProperties);
    }, true);
});//playground
app.controller('internalCtrl', function($scope){
    var vm = this;
    vm.playground = $scope.$parent.vm;
    vm.secret = "shhhhh";
});//internal