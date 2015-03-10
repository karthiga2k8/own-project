var angularApp = angular.module('angularApp',['ui.bootstrap']);

angularApp.controller('mainCtrl', function ($scope) {
  $scope.myInterval = 300;
  var slides = $scope.slides = [];
  var images = ['images/web technology.png','images/onetouch.jpg','images/responsiveUI.png'];
  $scope.addSlide = function(slideNo) {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: images[slideNo],
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<3; i++) {
    $scope.addSlide(i);
  }
  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
  $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  

});