'use strict';
app.controller('rotatorController', ['$scope', function ($scope) {

    $scope.domino = [0,0];
    $scope.size = 2;
    $scope.speed = 1;
    $scope.rotation = 0;
    $scope.rotationDirection = 0;
    $scope.rotationsAfterStart = 0;
    $scope.selectPart = function (value)
    {
        if (!$scope.domino[0])
        {
            $scope.domino[0] = value;
        }

        else
        {
            $scope.domino[1] = value;
        }

        
    }

    $scope.new = function () {
        $scope.rotationDirection = 0;
        $scope.rotation = 0;
        $scope.domino = [0, 0];
        $scope.size = 2;
        $scope.speed = 1;
    }

    $scope.rotate = function () {
        $scope.rotationsAfterStart++;
        if ($scope.rotationDirection) {
            var oldValue = $scope.rotation
            $scope.rotation += $scope.rotationDirection * $scope.speed;
            if ($scope.rotation < 0) {
                $scope.rotation = $scope.rotation + 360;
            }
            else if ($scope.rotation >= 360) {
                $scope.rotation = $scope.rotation - 360;
            }
            if (Math.trunc($scope.rotation / 90) != Math.trunc(oldValue / 90) && $scope.rotationsAfterStart > 2) {
                $scope.rotationDirection = 0;
                $scope.rotation = Math.round($scope.rotation / 90) * 90;
            }
            
            $scope.$apply();
        }

    }

    $scope.rotateRight = function () {
        $scope.rotationDirection = 1;
        $scope.rotationsAfterStart = 0;
    }

    $scope.rotateLeft = function () {
        $scope.rotationDirection = -1;
        $scope.rotationsAfterStart = 0;
    }

    setInterval($scope.rotate, 100);
}]);