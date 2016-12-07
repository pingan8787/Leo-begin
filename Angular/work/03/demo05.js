/**
 * Created by bjwsl-001 on 2016/10/9.
 */
var app = angular.module('myApp',[]);

//��������1 $show
app.factory('$show', function () {
    return{
        show: function () {
            alert('Hello Show Service');
        }
    }
});

//��������2 $print
app.factory('$print', function () {
    return{
        print: function () {
            console.log('Hello PrintService');
        }
    }
});

//�����ı��
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

