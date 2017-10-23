(function() {
    'use strict';
    appModule.controller('AjaxModelDialogBoxCtrl', ['$scope', '$rootScope', 'prasadConstantStates', 'prasadFactoryAjaxModel', AjaxModelDialogBoxFunc]);

    function AjaxModelDialogBoxFunc($scope, $rootScope, prasadConstantStates, prasadFactoryAjaxModel) {

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



        function createButtonFunc() {
            console.log('createbutton function executed');

        }

        function editButtonFunc() {
            console.log("editbutton function executed");

        }

        function deleteButtonFunc() {
            console.log("deletebutton function executed");

        }

        function resetButtonFunc() {
            console.log("resetbutton function executed");

        }

        function saveButtonFunc() {
            console.log("savebutton function executed");

        }


        // The below statements are, Automatically the above functions inside data are executed.


        // $scope.createButton();
        // $scope.editButton();
        // $scope.deleteButton();
        // $scope.resetButton();
        // $scope.saveButton();
    }


})()