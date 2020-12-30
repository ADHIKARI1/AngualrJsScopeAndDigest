var app = angular.module('learndigest', []);
app.controller('playgroundCtrl', function($scope){
    var vm =  this;   
    //$scope.playground = vm;
    vm.enableForceEdit = true;
    vm.force = 30;
    vm.resetForce = function(){
        vm.force = 0;
    }//resetForce  
});//playground
app.controller('internalCtrl', function($scope){
    var vm = this;
    vm.playground = $scope.$parent.vm;
   // vm.secret = "shhhhh";
   var watchesRemain = 3;
    var watchDestroyer = $scope.$watch('vm.playground.force', function(){
        console.log('the force ', vm.playground.force);
        watchesRemain--;
        if(watchesRemain == 0)
        {
            watchDestroyer();
        }
    });

});//internal