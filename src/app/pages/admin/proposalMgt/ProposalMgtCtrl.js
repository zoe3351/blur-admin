/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.admin')
        .controller('ProposalMgtCtrl', ProposalMgtCtrl);

    /** @ngInject */
    function ProposalMgtCtrl($scope, $filter, ProposalMgtService) {

        $scope.smartTablePageSize = 10;

        $scope.removeProposal = function (index) {
            $scope.proposals.splice(index, 1);
        };

        $scope.addProposal = function () {
            $scope.inserted = {
                id: $scope.proposals.length + 1,
                title: '',
                idea: null,
                location: null,
                dist: 0
            };
            $scope.proposals.push($scope.inserted);
        };

        var init = function() {
            $scope.proposals = ProposalMgtService.proposals;
            console.log('???');
        }

        init();

        
    }
})();