(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.question-pieten', {
        url: '/question-pieten',
        views: {
          '@': {
            templateUrl: 'src/app/question-pieten/question-pieten.tpl.html',
            controller: 'PietenQuestionCtrl as question'
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function PietenQuestionCtrl($state) {

    this.next = function () {
      if (('' + this.myAnswer).toLowerCase() === '13'.toLowerCase()) {
        $state.go('root.question-puzzle');
      }
      else {
        this.error = true;
      }

    }.bind(this);
  }

  angular.module('question-pieten', [])
    .config(config)
    .controller('PietenQuestionCtrl', PietenQuestionCtrl);
})();
