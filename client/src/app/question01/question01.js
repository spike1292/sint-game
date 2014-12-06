(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.question01', {
        url: '/question01',
        views: {
          '@': {
            templateUrl: 'src/app/question01/question01.tpl.html',
            controller: 'FirstQuestionCtrl as question'
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function FirstQuestionCtrl($state) {
    this.answers = [
      'met je knecht',
      'met je slaaf',
      'Er komt hier helemaal niemand binnen!',
      'Ze zijn al geweest van het Liliane Fonds'
    ];
    this.next = function () {
      if (this.myAnswer === this.answers[0]) {
        $state.go('root.question-x');
      } else {
        this.error = true;
      }
    }.bind(this);
  }

  angular.module('question01', [])
    .config(config)
    .controller('FirstQuestionCtrl', FirstQuestionCtrl);
})();
