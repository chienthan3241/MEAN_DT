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
            tags: "bs;ctg2;ctg3;ctg4;ctg5;ctg7;ctg9",
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
            tags: "bs;ctg1;ctg2;ctg3;ctg5;ctg7;ctg8;ctg10",
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
            tags: "ctg1;ctg3;ctg4;ctg7;ctg8",
            status: {
                sales: false,
                sale_price: ""
            }
        },
        {
            id: "12902",
            name: "Blumenstrauß Colorato",
            describe_compact: "Ein Strauß der zum Feiern einlädt!",
            describe_detail: "Ein wunderschönes Farbenspiel aus Lilien und Germini in verschiedenen Orangetönen, gelben Sprayrosen, Lisianthus und Santini in kräftigem Pink sowie leuchtend blauer Statize lässt diesen Strauß strahlen. Dekorativ ausschweifendes Beargras, Alchemilla und frisches Grün runden das Arrangement ab.",
            content: "5 gelbe Sprayrosen, 4 orangefarbene Germini, 3 orangefarbene Lilien (mehrblütig), 3 rosafarbene Lisianthus (mehrblütig), 3 lilafarbene Santini, 3 blaue Statize - arrangiert mit Alchemilla, Beargras, Aralie und frischem Grün (Durchmesser ca. 40cm)",
            price: {
                euro: 45,
                cent: 99
            },
            tags: "bs;ctg1;ctg2;ctg3;ctg5;ctg7;ctg10",
            status: {
                sales: false,
                sale_price: ""
            }
        },
        {
            id: "17923",
            name: "Blumenstrauß Wunderbare Mama!",
            describe_compact: "Wunderbare Mama!Eine liebliche Kreation aus Rosen,...",
            describe_detail: "Eine liebliche Kreation aus Rosen, Germini, Spraynelken und grünen Nelken in einem wunderbar eleganten Altrosa, kombiniert mit kräftigem Pink und frischem Grün lässt die Augen Ihrer Mama garantiert strahlen. Eine dekorative Sisal-Schleife ist liebevoll in den Strauß gebunden.",
            content: "2 rosafarbene Rosen, 3 pinkfarbene Germini, 2 rosafarbene Spraynelken, 2 grüne Nelken, 1 rosa Sisal-Bündel - arrangiert mit Alchemilla und frischem Grün (Durchmesser ca. 26cm)",
            price: {
                euro: 30,
                cent: 99
            },
            tags: "bs;ctg1;ctg2;ctg3;ctg8;ctg9;ctg10",
            status: {
                sales: false,
                sale_price: ""
            }
        },
        {
            id: "17067",
            name: "Blumenstrauß Für meinen Star",
            describe_compact: "Für Ihren Star! Eine wunderschöne Aufmerksamkeit,...",
            describe_detail: "Eine wunderschöne Aufmerksamkeit, ob zum Valentinstag oder einfach nur so. Ihr Star hat einen Blumengruß verdient. Die ursprünglich aus Peru stammende Alstromerie, auch Inkalie genannt, ist eine wahre Schönheit. 12 Alstromerien (Länge 60cm) ergeben ein wahres Blütenmeer in zarten Tönen von Rosa, Gelb und Weiß.",
            content: "12 rosé-gelbe Alstromieren (ca. 60 cm)",
            price: {
                euro: 18,
                cent: 99
            },
            tags: "bs;ctg1;ctg2;ctg8;ctg10",
            status: {
                sales: false,
                sale_price: ""
            }
        },
        {
            id: "14018",
            name: "Blumenstrauß Modena",
            describe_compact: "Ein eleganter Strauß für die besonderen Momente!",
            describe_detail: "Diese elegante Kreation aus Rosen, Germini, Lilien, Santini und Lisianthus in zarten Weißtönen begeistert mit ihrer natürlich schönen Ausstrahlung. Bupleurum, Aralie und frisches Grün unterstreichen die natürliche Anmutung.",
            content: "3 weiße Rosen, 2 weiße Lilien, 2 weiß-grüne Santini, 2 weiße Germini, 1 weißer Lisianthus - arrangiert mit Bupleurum, Aralie, Beargras und frischem Grün (Durchmesser ca. 32cm)",
            price: {
                euro: 25,
                cent: 99
            },
            tags: "bs;ctg1;ctg2;ctg4;ctg6",
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