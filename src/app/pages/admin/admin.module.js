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
                templateUrl: 'app/pages/admin/admin.html',
                controller: 'AdminPageCtrl',
                title: 'Admin',
                sidebarMeta: {
                    icon: 'ion-document',
                    order: 0,

                },
            });
    }
})();