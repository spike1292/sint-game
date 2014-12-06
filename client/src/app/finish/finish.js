(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.finish', {
        url: '/finish',
        views: {
          '@': {
            templateUrl: 'src/app/finish/finish.tpl.html',
            controller: 'FinishCtrl as finish'
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function FinishCtrl($state) {
    this.restart = function () {
      $state.go('root.home');
    };
  }

  angular.module('finish', [])
    .config(config)
    .controller('FinishCtrl', FinishCtrl);
})();
