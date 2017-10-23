(function() {
    'use strict';
    appModule.factory('prasadFactory', ['$q','$http',prasadFactoryFunc]);


    function prasadFactoryFunc($q,$http) {

        var objfactory = {};
        objfactory.enterpasswordfact = "";

        var methodsfuncs = {};

        methodsfuncs['getRequestApiLink'] = getRequestApiLinkFunc;
        methodsfuncs['postRequestApiLink'] = getRequestApiLinkFunc;

        function getRequestApiLinkFunc(url,data){
        	var deferred = $q.defer();
        	$http.get(url,data)
        		 .success(function(s,d){
        			deferred.resolve(d);

        	}).error(function(s,d){

        		deferred.reject(d);
        	});
            return deferred.promise

        }


return methodsfuncs;
      
    }


})()