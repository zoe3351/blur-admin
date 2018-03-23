/**
 * Created by jindong on 2/20/18.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.admin', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('admin', {
                url: '/admin',
                template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: 'Admin',
                sidebarMeta: {
                    icon: 'ion-gear-a',
                    order: 10,

                },
            })
            .state('admin.userMgt', {
                url: '/userMgt',
                templateUrl: 'app/pages/admin/userMgt/userMgt.html',
                controller: 'UserMgtCtrl',
                resolve:{
                  '': function(userMgtService){return userMgtService.loadPromise;}
                },
                title: 'User Manage',
                sidebarMeta: {
                  order: 0,
                },
              })
              .state('admin.proposalMgt', {
                url: '/proposalMgt',
                templateUrl: 'app/pages/admin/proposalMgt/proposalMgt.html',
                controller: 'ProposalMgtCtrl',
                title: 'Proposal Manage',
                sidebarMeta: {
                  order: 10,
                },
              })
              .state('admin.phaseMgt', {
                url: '/phaseMgt',
                templateUrl: 'app/pages/admin/phaseMgt/phaseMgt.html',
                controller: 'PhaseMgtCtrl',
                title: 'Phase Manage',
                sidebarMeta: {
                  order: 20,
                },
              })
              ;
    }
})();