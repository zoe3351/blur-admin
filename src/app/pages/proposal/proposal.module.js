/**
 * Created by jindong on 2/20/18.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.proposal', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('proposal', {
                url: '/proposal',
                templateUrl: 'app/pages/proposal/proposal.html',
                controller: 'mapPageCtrl',
                title: 'Proposal',
                sidebarMeta: {
                    icon: 'ion-document',
                    order: 80,

                },
            });
    }
})();