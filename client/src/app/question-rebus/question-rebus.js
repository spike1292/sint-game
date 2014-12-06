(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.question-rebus', {
        url: '/question-rebus',
        views: {
          '@': {
            templateUrl: 'src/app/question-rebus/question-rebus.tpl.html',
            controller: 'RebusQuestionCtrl as question'
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function RebusQuestionCtrl($state) {

    this.next = function () {
      if (('' + this.myAnswer).toLowerCase() === 'sinterklaasje kom maar binnen met je knecht'.toLowerCase()) {
        $state.go('root.question-holy');
      }
      else {
        this.error = true;
      }

    }.bind(this);
  }

  angular.module('question-rebus', [])
    .config(config)
    .controller('RebusQuestionCtrl', RebusQuestionCtrl);
})();
