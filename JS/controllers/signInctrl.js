(function() {

    'use strict';
    appModule.controller('prasadSignInCtrl', ['$scope', 'prasadService', 'prasadFactory', '$state', 'prasadConstantStates', prasadSignInCtrlFunc]);

    function prasadSignInCtrlFunc($scope, prasadService, prasadFactory, $state, prasadConstantStates) {

        $scope.formObjData = {};

        $scope.pagetitle = "SignIn Page CTRL";

        $scope.login = function(isValid) {

            if (isValid) {
                prasadService.enterusernameserv = $scope.formObjData.userDataCtrl;
                prasadFactory.enterpasswordfact = $scope.formObjData.passDataCtrl;
                $state.go(prasadConstantStates.signUpState);

            }


        }

    }


})()