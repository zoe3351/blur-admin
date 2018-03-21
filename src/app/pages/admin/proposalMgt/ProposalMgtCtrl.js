/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.admin')
        .controller('ProposalMgtCtrl', ProposalMgtCtrl);

    /** @ngInject */
    function ProposalMgtCtrl($scope, $filter) {

        $scope.proposals = [
            {
                "id": 1,
                "name": "Esther Vang",
                "status": 4,
                "group": 3
            },
            {
                "id": 2,
                "name": "Leah Freeman",
                "status": 3,
                "group": 1
            },
            {
                "id": 3,
                "name": "Mathews Simpson",
                "status": 3,
                "group": 2
            },
            {
                "id": 4,
                "name": "Buckley Hopkins",
                "group": 4
            },
            {
                "id": 5,
                "name": "Buckley Schwartz",
                "status": 1,
                "group": 1
            },
            {
                "id": 6,
                "name": "Mathews Hopkins",
                "status": 4,
                "group": 2
            },
            {
                "id": 7,
                "name": "Leah Vang",
                "status": 4,
                "group": 1
            },
            {
                "id": 8,
                "name": "Vang Schwartz",
                "status": 4,
                "group": 2
            },
            {
                "id": 9,
                "name": "Hopkin Esther",
                "status": 1,
                "group": 2
            },
            {
                "id": 10,
                "name": "Mathews Schwartz",
                "status": 1,
                "group": 3
            }
        ];


        $scope.statuses = [
            { value: 1, text: 'Good' },
            { value: 2, text: 'Awesome' },
            { value: 3, text: 'Excellent' },
        ];

        $scope.groups = [
            { id: 1, text: 'user' },
            { id: 2, text: 'customer' },
            { id: 3, text: 'vip' },
            { id: 4, text: 'admin' }
        ];

        $scope.showGroup = function (proposal) {
            if (proposal.group && $scope.groups.length) {
                var selected = $filter('filter')($scope.groups, { id: proposal.group });
                return selected.length ? selected[0].text : 'Not set';
            } else return 'Not set'
        };

        $scope.showStatus = function (proposal) {
            var selected = [];
            if (proposal.status) {
                selected = $filter('filter')($scope.statuses, { value: proposal.status });
            }
            return selected.length ? selected[0].text : 'Not set';
        };


        $scope.removeProposal = function (index) {
            $scope.proposals.splice(index, 1);
        };

        $scope.addProposal = function () {
            $scope.inserted = {
                id: $scope.proposals.length + 1,
                name: '',
                status: null,
                group: null
            };
            $scope.proposals.push($scope.inserted);
        };

        
    }
})();