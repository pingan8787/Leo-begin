/**
 * Created by bjwsl-001 on 2016/10/9.
 */
var app = angular.module('myApp',[]);

app.factory('$show', function () {
    return{
        show: function () {
            alert('Hello 行内式依赖注入');
        }
    }
});

//行内式依赖注入
app.controller('myCtrl',
    ["$scope","$show", function ($scope,$show) {
        $scope.callShow = function () {
            $show.show();
        }
    }]);