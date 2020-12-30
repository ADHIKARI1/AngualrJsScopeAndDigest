var app = angular.module('learndigest', []);
app.controller('playgroundCtrl', function($scope){
    var vm =  this;   
    //$scope.playground = vm;
    vm.dream = 'sweat dream';
    vm.enableForceEdit = true;
    vm.force = 30;
    //vm.forceInUSD = vm.force * 10;
    vm.resetForce = function(){
        vm.force = 0;
    }//resetForce  

    var times = 0;
    $scope.$watch(function(){
        console.log('watcher was called ',times);
        times++;
        return 0;
    }, function(){});//watch

    //btn click not work untill digest loop apply
    $('#theBtn').on('click', function(){
        
        $scope.$apply(function(){
            vm.anytime.deal;
            vm.dream = 'nightmare';
        });
    });

});//playground
