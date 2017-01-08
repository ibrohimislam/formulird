angular.module('SharedServices', [])
  .config(function ($httpProvider) {
        $httpProvider.interceptors.push('myHttpInterceptor');
    })
  .factory('HTTPStateListenner', function(){
    return {
      onRequest : function(){},
      onResponse : function(){},
      onError : function(){},
    };
  })
  .factory('myHttpInterceptor', function($q, HTTPStateListenner) {
    return {
      // optional method
      'request': function(config) {
        HTTPStateListenner.onRequest();
        return config;
      },

      // optional method
     'requestError': function(rejection) {
        // do something on error
        HTTPStateListenner.onError();
        return $q.reject(rejection);
      },

      // optional method
      'response': function(response) {
        HTTPStateListenner.onResponse();
        return response;
      },

      // optional method
     'responseError': function(rejection) {
        HTTPStateListenner.onError();
        return $q.reject(rejection);
      }
    };
  });