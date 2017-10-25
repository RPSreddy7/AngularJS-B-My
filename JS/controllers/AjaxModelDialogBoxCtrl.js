(function() {
    'use strict';
    appModule.controller('AjaxModelDialogBoxCtrl', ['$scope', '$rootScope', '$state', 'prasadConstantStates', 'prasadFactoryAjaxModel', '$uibModal', AjaxModelDialogBoxFunc]);

    function AjaxModelDialogBoxFunc($scope, $rootScope, $state, prasadConstantStates, prasadFactoryAjaxModel, $uibModal) {

        $scope.createButtonName = "CREATE";
        $scope.editButtonName = "EDIT";
        $scope.deleteButtonName = "DELETE";
        $scope.resetButtonName = "RESET";
        $scope.saveButtonName = "SAVE";


        $scope.createButton = createButtonFunc;
        $scope.editButton = editButtonFunc;
        $scope.deleteButton = deleteButtonFunc;
        $scope.resetButton = resetButtonFunc;
        $scope.saveButton = saveButtonFunc;


        $scope.getApiData = getApiDataFunc;
        $scope.postApiData = postApiDataFunc;
        $scope.putApiData = putApiDataFunc;
        $scope.deleteApiData = deleteApiDataFunc;

        $scope.postsApiLinkAllData = [];
        $scope.demolist=[];
        var flag;
        var z=[]

        function getApiDataFunc() {
            let rootUrl = prasadConstantStates.prasadRestApiURL;

            var obj = prasadFactoryAjaxModel.getRequestRef(rootUrl + '/posts', {});

            obj.then(function(data) {
                $scope.postsApiLinkAllData = data;
            });
            obj.catch(function(dt) {
                console.error(dt);
            });
            obj.finally(function(d) {
                console.log('getApiDataFunc executed finally block', d);
            });

        }

        $scope.getApiData();


        function postApiDataFunc() {
            let rootUrl = prasadConstantStates.prasadRestApiURL;

            var obj = prasadFactoryAjaxModel.postRequestRef(rootUrl + '/posts', {});

            obj.then(function(data) {
                $scope.postsApiLinkAllData = data;
            });
            obj.catch(function(dt) {
                console.error(dt);
            });
            obj.finally(function(d) {
                console.log('postApiDataFunc executed finally block', d);
            });
        }
        //  $scope.postApiData();


        function putApiDataFunc() {
            let rootUrl = prasadConstantStates.prasadRestApiURL;

            var obj = prasadFactoryAjaxModel.putRequestRef(rootUrl + '/posts/1', {});

            obj.then(function(data) {
                $scope.postsApiLinkAllData = data;
            });
            obj.catch(function(dt) {
                console.error(dt);
            });
            obj.finally(function(d) {
                console.log('putApiDataFunc executed finally block', d);
            });

        }

        //  $scope.putApiData();


        function deleteApiDataFunc() {
            let rootUrl = prasadConstantStates.prasadRestApiURL;
            var obj = prasadFactoryAjaxModel.deleteRequestRef(rootUrl + '/posts/1', {});

            obj.then(function(data) {
                $scope.postsApiLinkAllData = data;
            });
            obj.catch(function(dt) {
                console.error(dt);
            });
            obj.finally(function(d) {
                console.log('deleteApiDataFunc executed finally block', d);
            });

        }

        //   $scope.deleteApiData();


        // Below functions are buttons operations for Modal-dialog box in application.

        function createButtonFunc() {

            var modalVar = $uibModal.open({
                animation: true,
                templateUrl: 'ModelDialogBox.html',
                controller: 'ModalDialogBoxCtrl'
            });
            console.log('createbutton function executed');
        }

        function editButtonFunc() {
            var modalVar = $uibModal.open({
                animation: true,
                templateUrl: 'ModelDialogBox.html',
                controller: 'ModalDialogBoxCtrl'
            });
            console.log("editbutton function executed");
        }

        function deleteButtonFunc() {
            var modalVar = $uibModal.open({
                animation: true,
                templateUrl: 'ModelDialogBox.html',
                controller: 'ModalDialogBoxCtrl'
            });
            console.log("deletebutton function executed");
        }

        function resetButtonFunc() {
            var modalVar = $uibModal.open({
                animation: true,
                templateUrl: 'ModelDialogBox.html',
                controller: 'ModalDialogBoxCtrl'
            });
            console.log("resetbutton function executed");
        }

        function saveButtonFunc() {
            var modalVar = $uibModal.open({
                animation: true,
                templateUrl: 'ModelDialogBox.html',
                controller: 'ModalDialogBoxCtrl'
            });
            console.log("savebutton function executed");
        }

    }

    appModule.controller('ModalDialogBoxCtrl', function($scope, $uibModalInstance) {

        $scope.modeltitle = " Modal Title Name Created";

        $scope.confirm = function() {
            console.log(' modal box confirm button called ')
            $uibModalInstance.dismiss('cancel');
        };

        $scope.cancel = function() {
            console.log(' modal box cancel button called ')
            $uibModalInstance.dismiss('cancel');
        };
    });


})()