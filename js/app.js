//Add your JS here please
var app = angular.module('plunker',[]);

//Start controller MainCtrl of app plunker
app.controller('MainCtrl', function($scope) {
    $scope.name = "FruitPriceCalculator";
}); // End MainCtrl of app plunker

//Start controller InputCtrl of app plunker
app.controller('InputCtrl', function($rootScope, $scope) {
    $scope.fruits = [ {name:'apple',unitcost: 3},
                      {name:'orange', unitcost:4},
                      {name:'banana', unitcost:5}];
    $scope.selfruit = $scope.fruits[0];
    $scope.qty = 1;
    
    $scope.calcprice = function() {
    $rootScope.$emit('inputchanged', {qty: $scope.qty,
                                      name: $scope.selfruit.name, 
                                      unitcost: $scope.selfruit.unitcost});
    }
    
    $scope.$watch('qty', function(newvalue) {
        $rootScope.$emit('inputchanged', {qty: $scope.qty, 
                                          name: $scope.selfruit.name, 
                                          unitcost: $scope.selfruit.name});
    });
    $scope.$watch('selfruit', function(newvalue) {
        $rootScope.$emit('inputchanged', {qty: $scope.qty, 
                                          name: $scope.selfruit.name, 
                                          unitcost: $scope.selfruit.name});
    });
}); // End InputCtrl of app plunker

//Start controller OutputCtrl of app plunker 
app.controller('OutputCtrl', function($rootScope, $scope) {
    $rootScope.$on('inputchanged', function(evt, params) {
        $scope.price = params.qty * params.unitcost;
    });

}); // End OutputCtrl of app plunker