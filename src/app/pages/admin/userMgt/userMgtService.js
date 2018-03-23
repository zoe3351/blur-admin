(function () {
    'use strict';

    angular.module('BlurAdmin.pages.admin')
        .service('userMgtService', userMgtService);

    function userMgtService($http){
        var self = this;

        this.loadPromise = $http({
            method: 'GET',
            url: 'http://127.0.0.1:8000/users.json'
        }).then(function successCallback(response) {
            console.log(response.data);
            self.users = response.data;
        }, function errorCallback(response) {
            console.log("failed!");
        });
    }

})();