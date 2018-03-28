(function () {
    'use strict';

    angular.module('BlurAdmin.pages.admin')
        .service('ProposalMgtService', ProposalMgtService);

    function ProposalMgtService($http){
        var self = this;

        this.loadPromise = $http.get('data/proposals.json').then(function(response){
            self.proposals = response.data;
        });
    }

})();