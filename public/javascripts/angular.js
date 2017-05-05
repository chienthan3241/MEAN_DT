(function(angular) {
    'use strict';
    var app = angular.module('app', ['LocalStorageModule']);
    app.config(function (localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('dt')
            .setStorageType('localStorage')
            .setNotify(true, true)
    });

    //main Data
    app.constant('dataObjects', [
        {
            id: "22330",
            name: "Blumenstrauß Weil du es bist",
            describe_compact: "Für Dich! Ein herzförmiger Strauß aus rosafarbenem...",
            describe_detail: "Ein herzförmiger Strauß aus rosafarbenem Limonium sowie Spraynelken bringt die Beschenkte zum Strahlen. Als Highlight strahlt eine zweifarbige Chrysantheme in einer schillernden Kombination aus Violett und Weiß in der Mitte.",
            content: "1 lila-weiße Chrysantheme (mehrblütig), 1 violette Spraynelke (mehrblütig), 1 weiße Spraynelke (mehrblütig), rosafarbenes Limonium - arrangiert mit frischem Grün auf einer herzförmigen Manschette (Durchmesser ca. 20 cm)",
            price: {
                euro: 20,
                cent: 99
            },
            tags: "ctg1;ctg2;ctg7",
            status: {
                sales: false,
                sale_price: ""
            }
        },
        {
            id: "9911",
            name: "Blumenstrauß Sweet Kiss",
            describe_compact: "Ein Strauß so schön wie ein lieblicher Kuss!...",
            describe_detail: "Gelbe Germini und Sprayrosen sind wunderschön kombiniert mit lilafarbenen Santini und Lisianthus in schimmerndem Rosa. Leuchtend blaue Statize und frisches Grün runden diesen heiteren Strauß perfekt ab.",
            content: "2 gelbe Germini, 1 rosafarbener Lisianthus, 2 lilafarbene Santini, 2 gelbe Sprayrosen - arrangiert mit blauer Statize, Beargras, Aralie und frischem Grün (Durchmesser ca. 25cm)",
            price: {
                euro: 19,
                cent: 99
            },
            tags: "ctg1;ctg2",
            status: {
                sales: false,
                sale_price: ""
            }
        },
        {
            id: "19372",
            name: "Rosenbouquet gelb-orange",
            describe_compact: "Ein Arm voll leuchtend gelb-orangefarbener Rosen direkt vom Anbauer zu Ihnen nach Hause - so frisch wie selbstgepflückt.",
            describe_detail: "Diese 23 langstieligen Edel-Rosen (ca. 40-50cm) bestechen durch ihre samtig-weichen, Blütenblätter in leuchtendem Gelb-Orange. In einer hohen Bodenvase entfalten diese Rosen ihre Schönheit am besten. Dekorieren Sie Ihr Zuhause ganz nach Ihren Wünschen!",
            content: "23 langstielige gelb-orangefarbene Rosen (ca. 40-50cm)",
            price: {
                euro: 25,
                cent: 99
            },
            tags: "ctg1;ctg2",
            status: {
                sales: false,
                sale_price: ""
            }
        }
    ]);

    //slider show/hide will be persistent in localstorage
    app.controller('main', function($scope, localStorageService, dataObjects) {
        $scope.slHeight = (localStorageService.get('sliderState') == true) ? '30' : '0';
        $scope.slBar = (localStorageService.get('sliderState') == true) ? '15' : '0';
        $scope.dataObjects = dataObjects;

        //filter function for each catalog
        $scope.filterByTags = function (catalog) {
            return function (item) {
                return _.indexOf(_.split(item.tags,';'), catalog) > -1;
            }
        };

        //count function for each catalog
        $scope.countByTags = function (catalog) {
            var result = 0;
            _.forEach(dataObjects, function(object){
                if (_.indexOf(_.split(object.tags,';'), catalog) > -1) {
                    result = result + 1;
                }
            });
            return _.toString(result);
        };

    });

    app.controller('navBar', function ($scope, localStorageService, dataObjects) {
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

    //footer adresse
    app.controller('footerController', function ($scope, dataObjects) {
        $scope.liAdressElements = [
            {class: 'location', txt: 'Regensburger Str. 175A 90478 Nürnberg'},
            {class: 'telephoneNumber', txt: '+49 176 88 1111 66'},
            {class: 'emailContact', txt: 'tmchut@yahoo.com'}
        ];

        //count function for each catalog
        $scope.countByTags = function (catalog) {
            var result = 0;
            _.forEach(dataObjects, function(object){
                if (_.indexOf(_.split(object.tags,';'), catalog) > -1) {
                    result = result + 1;
                }
            });
            return _.toString(result);
        };
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