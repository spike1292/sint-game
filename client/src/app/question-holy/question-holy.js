(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.question-holy', {
        url: '/question-holy',
        views: {
          '@': {
            templateUrl: 'src/app/question-holy/question-holy.tpl.html',
            controller: 'HolyQuestionCtrl as question'
          }
        }
      });
  }

  /**
   * @name  HomeCtrl
   * @description Controller
   */
  function HolyQuestionCtrl($state) {
    this.answers = [
      'is de tegenpool van de \'schijnheiligman\' (Santa Claus)',
      'komt van goede huwelijksman (\'goed-hylik man\')',
      'is een pauselijke titel',
      'komt van vrome weldoender (\'goede heilige man\')'
    ];
    this.next = function () {
      if (this.myAnswer === this.answers[1]) {
        $state.go('root.question-pieten');
      } else {
        this.error = true;
      }
    }.bind(this);
  }

  angular.module('question-holy', [])
    .config(config)
    .controller('HolyQuestionCtrl', HolyQuestionCtrl);
})();
