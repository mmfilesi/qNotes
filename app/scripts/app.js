'use strict';

/**
 * @ngdoc overview
 * @name qNotes
 * @description
 * # qNotes
 *
 * Main module of the application.
 */
angular
    .module('qNotes', [
        'ui.bootstrap',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'pascalprecht.translate'
    ])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    }).config(['$translateProvider', function ($translateProvider, config) {
        $translateProvider.translations('es', {
            'ACCEPT': 'Aceptar',
            'CANCEL': 'Cancelar',
            'TITLE' : 'Título',
            'NOTE': 'Nota',
            'ADD_NOTE': 'Añadir nota'
        });
        $translateProvider.translations('en', {
            'ACCEPT': 'accept',
            'CANCEL': 'cancel',
            'TITLE' : 'Title',
            'NOTE': 'Note',
            'ADD_NOTE': 'Add note'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('sanitize');
        $translateProvider.use('es'); // todo: sacar dinámicamente ///////// NO LO PILLAN LOS HIJOS, OJO
    }]);


    /* if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
} */
