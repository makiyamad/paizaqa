'use strict';

angular.module('paizaqaApp')
  .controller('QuestionsCreateCtrl', function ($scope, $http, $location) {
    $scope.tags = [];
    $scope.submit = function() {
      $http.post('/api/questions', $scope.question).success(function(){
        $location.path('/questions');
      });
      $scope.question = {};
    };
  });