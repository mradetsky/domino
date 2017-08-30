
var app = angular.module('DominoApp', ['ngRoute']); 

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider.when("/", {
        controller: "rotatorController",
            templateUrl: "/app/views/dashboard.html",
            allowAnonymous: true
        });

        $routeProvider.when("/rotator", {
            controller: "rotatorController",
            templateUrl: "/app/views/rotator.html",
            allowAnonymous: true
        });


        $routeProvider.otherwise({ redirectTo: "/" });

        //$locationProvider.html5Mode(true);
    }]
);




//app.config( function ($stateProvider, $urlServiceProvider) {
//    $urlServiceProvider.rules.otherwise({ state: '' });

//    $stateProvider.state('', {
//        url: '/',
//        templateUrl: './app/views/dashboard.html',
//        controller: 'dashboardController',
        
//    });

//    $stateProvider.state('rotator', {
//        url: '/rotator',
//        templateUrl: './app/views/rotator.html',
//        controller: 'rotatorController',
        
//    });

//});





//app.value('$routerRootComponent', 'DominoApp');
//app.component('DominoApp', {
//    templateUrl: '/views/dashboard.html',
//    $routeConfig: [
//        { path: '/', component: '', name: '', useAsDefault: true },
//        { path: '/apps/:name/:location*', component: 'app', name: 'Apps' },
//    ],
//});





