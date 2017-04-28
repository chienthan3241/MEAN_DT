(function(angular) {
    'use strict';
    var app = angular.module('app', []);

    app.controller('navBar', ['$scope', function ($scope) {
        $scope.slidertoggle = true;
        $scope.change = function() {
            let sliderToggleTimeline = anime.timeline({
                autoplay: false
            });
            if ($scope.slidertoggle === false) {
                sliderToggleTimeline
                .add({
                    targets: '#sliderWindow',
                    height: 0,
                    duration: 1000,
                    easing: 'easeInQuad',
                    offset: 0
                })
                .add({
                    targets: '#sliderBar',
                    height: 0,
                    duration: 1000,
                    easing: 'easeInQuad',
                    offset: 0
                });
                sliderToggleTimeline.play();
            } else {
                sliderToggleTimeline
                    .add({
                        targets: '#sliderWindow',
                        height: '30vw',
                        duration: 1000,
                        easing: 'easeInQuad',
                        offset: 0
                    })
                    .add({
                        targets: '#sliderBar',
                        height: 15,
                        duration: 1000,
                        easing: 'easeInQuad',
                        offset: 0
                    });
                sliderToggleTimeline.play();
            }
        }
    }]);

    app.directive('bootstrapSwitch', [
        function() {
            return {
                restrict: 'A',
                require: '?ngModel',
                link: function(scope, element, attrs, ngModel) {
                    element.bootstrapSwitch();

                    element.on('switchChange.bootstrapSwitch', function(event, state) {
                        if (ngModel) {
                            scope.$apply(function() {
                                ngModel.$setViewValue(state);
                            });
                        }
                    });

                    scope.$watch(attrs.ngModel, function(newValue, oldValue) {
                        if (newValue) {
                            element.bootstrapSwitch('state', true, true);
                        } else {
                            element.bootstrapSwitch('state', false, true);
                        }
                    });
                }
            };
        }
    ]);
})(window.angular);