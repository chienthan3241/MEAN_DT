(function(angular) {
    'use strict';
    var app = angular.module('app', ['LocalStorageModule']);
    app.config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('dt')
            .setStorageType('localStorage')
            .setNotify(true, true)
    });

    //slider show/hide will be persistent in localstorage
    app.controller('main', function($scope, localStorageService) {
        $scope.slHeight = (localStorageService.get('sliderState') == true) ? '30' : '0';
        $scope.slBar = (localStorageService.get('sliderState') == true) ? '15' : '0';
    });

    app.controller('navBar', function ($scope, localStorageService) {
        $scope.slidertoggle =  localStorageService.get('sliderState');
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
                localStorageService.set('sliderState', false);
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
                localStorageService.set('sliderState', true);
            }
        }
    });

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