var appModule = angular.module('mymodule', ['ui.router', 'ui.bootstrap']);


(function() {
    'use strict';
    appModule.config(['$stateProvider', '$urlRouterProvider', '$compileProvider', '$httpProvider', 'prasadConstantStates', prasadConfigFunc]);

    function prasadConfigFunc($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider, prasadConstantStates) {

        $urlRouterProvider.when('', prasadConstantStates.signInUrl);
        $urlRouterProvider.otherwise(prasadConstantStates.signInUrl);

        $stateProvider.state(prasadConstantStates.signInState, {
                url: prasadConstantStates.signInUrl,
                templateUrl: prasadConstantStates.templatePath + 'signIn.html',
                controller: 'prasadSignInCtrl'
            })
            .state(prasadConstantStates.signUpState, {
                url: prasadConstantStates.signUpUrl,
                templateUrl: prasadConstantStates.templatePath + 'signUp.html',
                controller: 'prasadSignUpCtrl'
            })
            .state(prasadConstantStates.ajaxModelDialogState, {
                url: prasadConstantStates.ajaxModelDialogUrl,
                templateUrl: prasadConstantStates.templatePath + 'AjaxModelDialogBox.html',
                controller: 'AjaxModelDialogBoxCtrl'
            })
            .state(prasadConstantStates.exModelDialogState, {
                url: prasadConstantStates.exModelDialogUrl,
                templateUrl: prasadConstantStates.templatePath + 'ModelDialogBox.html',
                controller: 'ModalInstanceCtrl'
            });

    }

})();