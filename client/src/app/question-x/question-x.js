(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.question-x', {
        url: '/question-x',
        views: {
          '@': {
            templateUrl: 'src/app/question-x/question-x.tpl.html',
            controller: 'XQuestionCtrl as question'
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function XQuestionCtrl($state) {
    this.x = function () {
      $state.go('root.question-puzzle');
    };

    this.next = function () {
      this.error = true;
    }.bind(this);
  }

  angular.module('question-x', [])
    .config(config)
    .controller('XQuestionCtrl', XQuestionCtrl);
})();
