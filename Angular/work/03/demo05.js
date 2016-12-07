/**
 * Created by bjwsl-001 on 2016/10/9.
 */
var app = angular.module('myApp',[]);

//创建服务1 $show
app.factory('$show', function () {
    return{
        show: function () {
            alert('Hello Show Service');
        }
    }
});

//创建服务2 $print
app.factory('$print', function () {
    return{
        print: function () {
            console.log('Hello PrintService');
        }
    }
});

//依赖的标记
var ctrFunc = function ($scope,$print,$show) {
    $scope.callShow = function () {
        $show.show();
    }

    $scope.callPrint = function () {
        $print.print();
    }
};
ctrFunc.$inject = ["$scope","$print","$show"];

app.controller('myCtrl',ctrFunc);

