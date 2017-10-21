(function() {

    'use strict';
    appModule.controller('prasadSignUpCtrl', ['$scope', prasadSignUpCtrlFunc]);

    function prasadSignUpCtrlFunc($scope) {

        $scope.formObjData = {};

        $scope.pagetitle = "SignUp Page CTRL";

        $scope.submit = function() {


        }

        $scope.firstname = "";
        $scope.lastname = "";
        $scope.imgUrl = "https://starsunfolded-1ygkv60km.netdna-ssl.com/wp-content/uploads/2015/12/Pawan-Kalyan.jpg";


        $scope.$watchGroup(['firstname', 'lastname'], function(f, l) {
            console.log(f, l);
            if (f != l) {
                if ($scope.imgUrl.indexOf('Pawan-Kalyan.jpg') > 0) {
                    $scope.imgUrl = "https://cdn.worldvectorlogo.com/logos/angular-3.svg";
                } else {
                    $scope.imgUrl = "https://starsunfolded-1ygkv60km.netdna-ssl.com/wp-content/uploads/2015/12/Pawan-Kalyan.jpg";
                }
            }
        });

    }





})();