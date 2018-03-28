(function () {
    'use strict';

    angular.module('BlurAdmin.pages.proposal')
        .service('ProposalPageService', ProposalPageService);

    function ProposalPageService($http){
        var self = this;

        this.loadPromise = $http.get('data/proposals.json').then(function(response){
            self.proposals = response.data;
        });

    }

})();