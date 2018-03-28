(function () {
    'use strict';

    angular.module('BlurAdmin.pages.admin')
        .service('UserMgtService', UserMgtService);

    function UserMgtService($http){
        var self = this;

        this.loadPromise = $http.get('data/users.json').then(function(response){
            self.users = response.data;
        });
    }

})();