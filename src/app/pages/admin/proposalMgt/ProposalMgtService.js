(function () {
    'use strict';

    angular.module('BlurAdmin.pages.admin')
        .service('ProposalMgtService', ProposalMgtService);

    function ProposalMgtService($http){
        var self = this;

        this.loadPromise = $http({
            method: 'GET',
            // should be replaced later
            url: 'http://127.0.0.1:8080/proposals.json'
        }).then(function successCallback(response) {
            console.log(response.data);
            self.proposals = response.data;
        }, function errorCallback(response) {
            console.log("failed!");
        });
    }

})();