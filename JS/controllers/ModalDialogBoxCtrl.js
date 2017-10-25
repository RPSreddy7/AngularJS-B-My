  (function() {
      appModule.controller('ModalDialogBoxCtrl', ['$scope', '$uibModalInstance',ModalInstanceCtrlFunc]);

      function ModalInstanceCtrlFunc($scope, $uibModalInstance) {

          $scope.modeltitle = " Modal Title Name Created"
          $scope.confirm = confirmFunc;
          $scope.cancel = cancelFunc;

          function confirmFunc() {
              console.log(' modal box confirm button function called ')
              $uibModalInstance.dismiss('cancel');
          }

          function cancelFunc() {
              console.log(' modal box cancel button function called ')
              $uibModalInstance.dismiss('cancel');
          }

      }
  })()










  // appModule.controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {

  //       $scope.modeltitle = " Modal Title Name Created"

  //       $scope.confirm = function() {
  //           console.log(' model box confirm button called ')
  //           $uibModalInstance.dismiss('cancel');
  //       };

  //       $scope.cancel = function() {
  //           console.log(' model box cancel button called ')
  //           $uibModalInstance.dismiss('cancel');
  //       };
  //   });