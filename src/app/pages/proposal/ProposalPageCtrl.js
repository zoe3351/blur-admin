(function () {
    'use strict';

    angular.module('BlurAdmin.pages.proposal')
        .controller('ProposalPageCtrl', ProposalPageCtrl);

    /** @ngInject */
    function ProposalPageCtrl($scope, $timeout, $filter, $uibModal, ProposalPageService) {

        function initialize() {
            var mapCanvas = document.getElementById('google-maps');
            var mapOptions = {
                center: new google.maps.LatLng(44.5403, -78.5463),
                zoom: 8,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(mapCanvas, mapOptions);
            $scope.proposals = ProposalPageService.proposals;
        }

        $timeout(function () {
            initialize();
        }, 100);

        $scope.submitForm = function(isValid) {
            // check to make sure the form is completely valid
            if (isValid) { 
                $scope.open('app/pages/proposal/thankyou.html', 'sm');
            }
        };

        $scope.open = function (page, size) {
            $uibModal.open({
                animation: true,
                templateUrl: page,
                size: size,
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
        };

        $scope.smartTablePageSize = 10;

        $scope.newProposal = {
            id: 0,
            title: "",
            idea: "",
            location: ""
        }
    }

})();
