/**
 * @author Jin Dong
 * created on 3/21/2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.admin')
        .controller('UserMgtCtrl', UserMgtCtrl);

    /** @ngInject */
    function UserMgtCtrl($scope, $filter, $http) {

        $scope.showAddedUser = false;
        $scope.inserted = {
            id: 0,
            name: '',
            type: null,
            dist: null
        };

        $scope.smartTablePageSize = 10;

        $scope.users = [
            {
                "id": 1,
                "name": "Esther Vang",
                "type": 2,
                "dist": 3
            },
            {
                "id": 2,
                "name": "Leah Freeman",
                "type": 2,
                "dist": 1
            },
            {
                "id": 3,
                "name": "Mathews Simpson",
                "type": 1,
                "dist": 2
            },
            {
                "id": 4,
                "name": "Buckley Hopkins",
                "type": 1,
                "dist": 4
            },
            {
                "id": 5,
                "name": "Buckley Schwartz",
                "type": 1,
                "dist": 1
            },
            {
                "id": 6,
                "name": "Mathews Hopkins",
                "type": 1,
                "dist": 2
            },
            {
                "id": 7,
                "name": "Leah Vang",
                "type": 2,
                "dist": 1
            },
            {
                "id": 8,
                "name": "Vang Schwartz",
                "type": 1,
                "dist": 2
            },
            {
                "id": 9,
                "name": "Hopkin Esther",
                "type": 1,
                "dist": 2
            },
            {
                "id": 10,
                "name": "Mathews Schwartz",
                "type": 1,
                "dist": 3
            }
        ];


        $scope.types = [
            { value: 1, text: 'Normal' },
            { value: 2, text: 'Volunteer' },
        ];

        $scope.dists = [
            { value: 1, text: 'District 1' },
            { value: 2, text: 'District 2' },
            { value: 3, text: 'District 3' },
            { value: 4, text: 'District 4' }
        ];

        $scope.showDist = function (user) {
            if (user.dist && $scope.dists.length) {
                var selected = $filter('filter')($scope.dists, { value: user.dist });
                return selected.length ? selected[0].text : 'Not set';
            } else return 'Not set'
        };

        $scope.showType = function (user) {
            var selected = [];
            if (user.type) {
                selected = $filter('filter')($scope.types, { value: user.type });
            }
            return selected.length ? selected[0].text : 'Not set';
        };


        $scope.removeUser = function (index) {
            $scope.users.splice(index, 1);
        };
        

        $scope.addUser = function () {
            $scope.inserted = {
                id: $scope.users.length + 1,
                name: '',
                type: null,
                dist: null
            };
            $scope.showAddedUser = true;
            $scope.users.push($scope.inserted);
        };

        $scope.saveUser = function () {
            console.log($scope.inserted);
            $scope.showAddedUser = false;
            $scope.inserted = null;
        };
        
    }
})();