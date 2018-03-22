/**
 * Created by k.danovsky on 13.05.2016.
 */

(function () {
  'use strict';

  var basic = {
    default: '#ffffff',
    defaultText: '#666666',
    border: '#dddddd',
    borderDark: '#aaaaaa',
  };

  // main functional color scheme
  var colorScheme = {
    primary: '#2dacd1',
    info: '#209e91',
    success: '#90b900',
    warning: '#dfb81c',
    danger: '#e85656',
  };

  // dashboard colors for charts
  var dashboardColors = {
    blueStone: '#2dacd1',
    surfieGreen: '#209e91',
    silverTree: '#6eba8c',
    gossip: '#b9f2a1',
    white: '#10c4b5',
  };

  angular.module('BlurAdmin.theme')
    .provider('baConfig', configProvider);

  /** @ngInject */
  function configProvider(colorHelper) {
    var conf = {
      theme: {
        blur: false,
      },
      colors: {
        default: basic.default,
        defaultText: basic.defaultText,
        border: basic.border,
        borderDark: basic.borderDark,

        primary: colorScheme.primary,
        info: colorScheme.info,
        success: colorScheme.success,
        warning: colorScheme.warning,
        danger: colorScheme.danger,

        primaryLight: colorHelper.tint(colorScheme.primary, 100),
        infoLight: colorHelper.tint(colorScheme.info, 100),
        successLight: colorHelper.tint(colorScheme.success, 100),
        warningLight: colorHelper.tint(colorScheme.warning, 100),
        dangerLight: colorHelper.tint(colorScheme.danger, 100),

        primaryDark: colorHelper.shade(colorScheme.primary, 0),
        infoDark: colorHelper.shade(colorScheme.info, 0),
        successDark: colorHelper.shade(colorScheme.success, 0),
        warningDark: colorHelper.shade(colorScheme.warning, 0),
        dangerDark: colorHelper.shade(colorScheme.danger, 0),

        dashboard: {
          blueStone: dashboardColors.blueStone,
          surfieGreen: dashboardColors.surfieGreen,
          silverTree: dashboardColors.silverTree,
          gossip: dashboardColors.gossip,
          white: dashboardColors.white,
        },
      }
    };

    conf.changeTheme = function(theme) {
      angular.merge(conf.theme, theme)
    };

    conf.changeColors = function(colors) {
      angular.merge(conf.colors, colors)
    };

    conf.$get = function () {
      delete conf.$get;
      return conf;
    };
    return conf;
  }
})();
