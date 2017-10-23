(function() {
    'use strict';
    appModule.factory('prasadFactoryAjaxModel', ['$q', '$http', prasadFactoryAjaxModelFunc]);


    function prasadFactoryAjaxModelFunc($q, $http) {

        var objAjax = {};

        objAjax['getRequestRef'] = getRequestRefFunc;
        objAjax['postRequestRef'] = postRequestRefFunc;
        objAjax['putRequestRef'] = putRequestRefFunc;
        objAjax['deleteRequestRef'] = deleteRequestRefFunc;

        return objAjax;

        function getRequestRefFunc(url, data) {
            var deferedvar = $q.defer();

            $http.get(url, data).success(function(data, status, headers, config) {
                    deferedvar.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deferedvar.reject(data);

                });

            return deferedvar.promise;
        }


        function postRequestRefFunc(url, data) {
            var deferedvar = $q.defer();

            $http.post(url, data).success(function(data, status, headers, config) {
                    deferedvar.resolve(data);

                })
                .error(function(data, status, headers, config) {
                    deferedvar.reject(data);

                });

            return deferedvar.promise;
        }

        function putRequestRefFunc(url, data) {
            var deferedvar = $q.defer();

            $http.put(url, data).success(function(data, status, headers, config) {
                    deferedvar.resolve(data);

                })
                .error(function(data, status, headers, config) {
                    deferedvar.reject(data);

                });

            return deferedvar.promise;
        }

        function deleteRequestRefFunc(url, data) {
            var deferedvar = $q.defer();

            $http.delete(url, data).success(function(data, status, headers, config) {
                    deferedvar.resolve(data);

                })
                .error(function(data, status, headers, config) {
                    deferedvar.reject(data);

                });

            return deferedvar.promise;

        }

    }
})()